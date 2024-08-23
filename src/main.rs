use axum::{
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        State,
    },
    response::{Html, Response},
    routing::{get, post},
    Json, Router,
};
use serde::Deserialize;
use serde_json::{json, Value};
use sysinfo::System;
use tokio::{fs, sync::broadcast};
use tower_http::services::ServeDir;

#[derive(Clone)]
struct AppState {
    tx: broadcast::Sender<Snapshot>,
}

type Snapshot = Vec<f32>;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let (tx, _) = broadcast::channel::<Snapshot>(1);

    let state = AppState { tx: tx.clone() };

    let app = Router::new()
        .route("/", get(root))
        .route("/ws", get(websocket))
        .route("/api/stats", get(stats))
        .route("/api/bench", get(bench))
        .route("/api/bombardier", post(bombardier))
        .nest_service("/pub", ServeDir::new("pub"))
        .with_state(state.clone());

    tokio::task::spawn_blocking(move || {
        let mut sys = System::new();
        loop {
            sys.refresh_cpu_usage();
            let cpus = sys.cpus().iter().map(|cpu| cpu.cpu_usage()).collect();
            let _ = tx.send(cpus);
            std::thread::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL);
        }
    });

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8000").await.unwrap();

    println!("Listening at {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> Html<String> {
    let markup = fs::read_to_string("web/index.html").await.unwrap();
    Html(markup)
}

async fn stats() -> Json<Value> {
    Json(json!({
        "hostname": System::host_name(),
        "kernel": System::kernel_version(),
        "os": System::os_version(),
    }))
}

async fn websocket(
    ws: WebSocketUpgrade,
    State(state): State<AppState>,
) -> Response {
    ws.on_upgrade(|socket| stream_stats(socket, state))
}

async fn stream_stats(mut ws: WebSocket, state: AppState) {
    let mut rx = state.tx.subscribe();

    while let Ok(msg) = rx.recv().await {
        let payload = serde_json::to_string(&msg).unwrap();
        ws.send(Message::Text(payload)).await.unwrap();
    }
}

async fn bench() {}

async fn bombardier(Json(payload): Json<Credentials>) -> String {
    if std::env::var("BOMBARDIER_PASSWORD").unwrap() != payload.password {
        return "Unauthorized".into();
    }

    let command = tokio::process::Command::new("bombardier")
        .arg("localhost:8000/api/bench")
        .output()
        .await
        .unwrap();

    String::from_utf8(command.stdout).unwrap()
}

#[derive(Deserialize)]
struct Credentials {
    password: String,
}

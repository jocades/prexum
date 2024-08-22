use axum::{
    extract::{
        ws::{Message, WebSocket, WebSocketUpgrade},
        State,
    },
    response::{Html, Response},
    routing::get,
    Router,
};
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
        // .route("/stats", get(stats))
        .route("/bench", get(bench))
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
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> Html<String> {
    let markup = fs::read_to_string("index.html").await.unwrap();
    Html(markup)
}

/* async fn stats(State(state): State<AppState>) -> Json<Vec<f32>> {
    Json(state.cpus.lock().unwrap().clone())
} */

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

/* async fn stream_stats(mut ws: WebSocket, state: AppState) {
    let mut sys = state.sys.lock().unwrap();

    loop {
        sys.refresh_cpu_usage();
        let v: Vec<_> = sys.cpus().iter().map(|cpu| cpu.cpu_usage()).collect();
        let payload = serde_json::to_string(&v).unwrap();
        std::thread::sleep(std::time::Duration::from_secs(1));
        ws.send(Message::Text(payload)).await.unwrap()
        // std::thread::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL);
    }
}

async fn stats(State(state): State<AppState>) -> impl IntoResponse {
    let mut sys = state.sys.lock().unwrap();

    // First we update all information of our `System` struct.
    sys.refresh_all();

    println!("=> system:");
    // RAM and swap information:
    println!("total memory: {} bytes", sys.total_memory());
    println!("used memory : {} bytes", sys.used_memory());

    let memory_percentage =
        sys.used_memory() as f32 / sys.total_memory() as f32 * 100.0;
    println!("used memory : {:.2}%", memory_percentage);

    // Display system information:
    println!("System name:             {:?}", System::name());
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());

    // Number of CPUs:
    println!("NB CPUs: {}", sys.cpus().len());

    sys.refresh_cpu_usage();
    let v: Vec<_> = sys.cpus().iter().map(|cpu| cpu.cpu_usage()).collect();

    Json(v)

    // get the cpu usage percentage in total
    /* loop {
        sys.refresh_cpu_usage();
        for cpu in sys.cpus() {
            println!("CPU {} : {:.2}%", cpu.name(), cpu.cpu_usage());
        }
        std::thread::sleep(std::time::Duration::from_secs(1));
        // std::thread::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL);
    } */
}
 */

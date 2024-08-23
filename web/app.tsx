import { render } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

const ws = new WebSocket("/ws");

interface Stats {
  hostname: string;
  kernel: string;
  os: string;
}

function App() {
  const [stats, setStats] = useState<Stats>();
  const [cpus, setCpus] = useState<number[]>([]);
  const [isBombing, setIsBombing] = useState(false);
  const [result, setResult] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  const fetchStats = async () => {
    const res = await fetch("/api/stats");
    setStats(await res.json());
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected");
    };

    ws.onmessage = (e) => {
      setCpus(JSON.parse(e.data));
    };

    fetchStats();
  }, []);

  async function bomb() {
    if (!ref.current?.value?.trim()) {
      return;
    }

    if (isBombing) {
      setResult("Already bombing, wait...");
      return;
    }

    setIsBombing(true);
    setResult("Bombing...");
    const res = await fetch("/api/bombardier", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password: ref.current.value }),
    });
    setResult(await res.text());
    setIsBombing(false);
  }

  return (
    <main class="flex flex-col container mx-auto max-w-xl py-24">
      <h1 class="text-6xl font-bold tracking-tight mb-12 self-center">
        Raspi @ Sapla
      </h1>
      <Card>
        <div class="flex flex-col space-y-8 p-6">
          <section class="flex flex-col gap-y-1">
            <CardTitle>System</CardTitle>
            {stats &&
              Object.entries(stats).map(([key, value]) => (
                <div class="flex justify-between">
                  <span class="text-muted-foreground">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
          </section>
          <section class="flex flex-col gap-y-2">
            <CardTitle>Usage</CardTitle>
            {cpus.map((usage, i) => (
              <div class="flex flex-col">
                <div class="flex text-muted-foreground text-sm mb-1 justify-between">
                  Core {i}
                  <span>{usage.toFixed(2)}%</span>
                </div>
                <div class="relative flex h-4 items-center justify-center bg-primary/20 rounded-full overflow-hidden">
                  <div
                    class="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - (usage || 0)}%)` }}
                  />
                </div>
              </div>
            ))}
          </section>
          <section>
            <form
              class="flex items-center space-x-2"
              onSubmit={async (e) => {
                e.preventDefault();
                await bomb();
              }}
            >
              <button className="flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80">
                Bombardier
              </button>
              <input
                ref={ref}
                class="flex rounded-md px-4 py-2 border"
                type="password"
                placeholder="Password"
              />
            </form>
            <pre class="text-sm mt-2 overflow-auto">{result}</pre>
          </section>
        </div>
      </Card>
    </main>
  );
}

function cn(...classes: unknown[]) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight mb-4",
        className,
      )}
      {...props}
    />
  );
}

render(<App />, document.body);

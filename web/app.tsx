import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

const ws = new WebSocket("/ws");

export default function App() {
  const [cpus, setCpus] = useState<number[]>([]);

  async function getStats() {
    const res = await fetch("/stats");
    setCpus(await res.json());
  }

  useEffect(() => {
    document.documentElement.classList.add("dark");
    ws.onopen = () => {
      console.log("Connected");
    };

    ws.onmessage = (e) => {
      setCpus(JSON.parse(e.data));
    };
  }, []);

  return (
    <main class="flex flex-col container mx-auto max-w-xl py-24">
      <h1 class="text-6xl font-bold tracking-tight mb-12 self-center">
        Raspi @ Sapla
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>CPU Usage</CardTitle>
        </CardHeader>
        <div class="flex flex-col space-y-4 p-6 pt-0">
          {cpus.map((usage) => (
            <div class="flex flex-col">
              <label class="text-muted-foreground text-sm mb-1">
                {usage.toFixed(2)}%
              </label>
              <div class="relative flex h-4 items-center justify-center bg-primary/20 rounded-full overflow-hidden">
                <div
                  class="h-full w-full flex-1 bg-primary transition-all"
                  style={{ transform: `translateX(-${100 - (usage || 0)}%)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, ...props }: any) {
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

function CardHeader({ className, ...props }: any) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: any) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

render(<App />, document.body);

import { useEffect, useState } from "preact/hooks";

const ws = new WebSocket("/ws");

export default function App() {
  const [cpus, setCpus] = useState<number[]>([]);

  async function getStats() {
    const res = await fetch("/stats");
    setCpus(await res.json());
  }

  // useEffect(() => {
  //   getStats();
  // }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected");
    };

    ws.onmessage = (e) => {
      setCpus(JSON.parse(e.data));
    };
  }, []);

  return (
    <main class="flex flex-col h-screen">
      {cpus.map((usage) => (
        <div class="flex p-2 border">{usage}</div>
      ))}
    </main>
  );
}

import { render } from "preact-render-to-string";

if (import.meta.main) {
  const mod = await import("./index.tsx");
  const markup = render(mod.default);
  await Bun.write("../index.html", markup);
}

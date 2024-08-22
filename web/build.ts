import { h } from "preact";
import { render } from "preact-render-to-string";

if (import.meta.main) {
  const mod = await import("./app.tsx");
  const markup = render(h(mod.default, null));
  await Bun.write("../index.html", markup);
}

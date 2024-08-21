import "./islands/counter";

import { islands } from "./island";
import { h, hydrate, type FunctionComponent as FC } from "preact";

declare global {
  interface Window {
    App: {
      islands: Map<number, FC>;
      hydrate(): void;
    };
  }
}

window.App = {
  islands,
  hydrate() {
    const start = performance.now();
    for (const [id, Component] of islands) {
      document
        .querySelectorAll(`[data-island="${id}"]:not([data-hydrated])`)
        .forEach(($island) => {
          console.log("Hydrating", id, $island);
          $island.setAttribute("data-hydrated", "");

          const $script = $island.querySelector('[type="application/json"]');
          const props = JSON.parse($script?.textContent || "{}");
          $script?.remove();

          hydrate(h(Component, props), $island);
        });
    }
    console.log("Hydrate time:", (performance.now() - start).toFixed(3), "ms");
  },
};

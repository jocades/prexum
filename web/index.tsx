import { Counter } from "./islands/counter";

export default function App() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Raspi</title>
        <meta
          name="description"
          content="A simple example of using Lite with Preact."
        />
        <meta name="author" content="Jordi Calafat" />
        <link rel="icon" type="image/png" href="/pub/img/icon.png" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script defer type="module" src="/pub/index.js"></script>
        {/* <Script /> */}
      </head>
      <body class="flex flex-col bg-blue-200 ">
        <header class="sticky top-0 z-10 p-4 shadow bg-green-200">
          <div class="flex space-x-2 items-center">
            <img
              src="/pub/palm-tree.png"
              class="size-8 rotate-[20deg] cursor-pointer hover:rotate-0 transition-transform duration-200 ease"
            />
            {/* {links.map((link, i) => (
              <>
                <Link
                  href={link.href}
                  class={cn(
                    "font-semibold tracking-tight hover:underline",
                    link.href === path && "text-blue-400 underline",
                  )}
                >
                  {link.text}
                </Link>
                {i < links.length - 1 && <span> | </span>}
              </>
            ))} */}
          </div>
        </header>
        <main class="flex flex-col container max-w-4xl self-center py-4 gap-y-4 bg-red-200">
          <Counter />
        </main>
      </body>
    </html>
  );
}

// const Counter: FC<{ count: number }> = (props) => {
//   const [count, setCount] = useState(props.count ?? 0);
//
//   return (
//     <button
//       class="border rounded px-4 py-1 hover:bg-zinc-300 transition-colors duration-150"
//       onClick={() => setCount(count + 1)}
//     >
//       {count}
//     </button>
//   );
// };
//
// // if (typeof window !== undefined) {
// //   render(h(App, { title: "Raspi" }, h(Counter, { count: 10 })), document.body);
// // }
//
// // console.log("sup yoo");
//
// export default h(App, { title: "Raspi" }, h(Counter, { count: 10 }));

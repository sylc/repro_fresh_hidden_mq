/** @jsx h */
import { h, tw } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw("hidden sm:block")}>
      hide me on small screen
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}

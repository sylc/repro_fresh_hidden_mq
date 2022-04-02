/** @jsx h */
import { h, tw } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden sm:block")}>
        hide me on small screen. Should appear on large screen
      </div>
      <Counter start={3} />
      <a class={tw("text-underline")} href="./no-island">see behavior when no island is used</a>
    </div>
  );
}

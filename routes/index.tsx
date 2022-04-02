/** @jsx h */
import { h, tw } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden sm:block")}>
        Should appear on screen larger than 640 px, but doesn't...
      </div>
      <Counter start={3} />
      <a class={tw("text-underline")} href="./no-island">see behavior when no island is used</a>
    </div>
  );
}

/** @jsx h */
import { h, tw } from "../client_deps.ts";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden sm:block")}>
        hide me on small screen. Should appear on large screen
      </div>
    </div>
  );
}

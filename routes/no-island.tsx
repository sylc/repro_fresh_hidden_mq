/** @jsx h */
import { h, tw } from "../client_deps.ts";

export default function Home() {
  return (
    <div class={tw("hidden sm:block")}>
      hide me on small screen
    </div>
  );
}

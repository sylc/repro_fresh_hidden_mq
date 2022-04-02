/** @jsx h */
import { h, tw } from "../client_deps.ts";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden sm:block")}>
        Should appear on screen larger than 640 px
      </div>
    </div>
  );
}

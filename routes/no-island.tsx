/** @jsx h */
import { h, tw } from "../client_deps.ts";
import BasicComp from "../component/BasicComp.tsx";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden sm:block")}>
        this text should appear on screen larger than 640 px, other wise be hidden
      </div>
      <br/>
      <br/>
      <br/>
      <BasicComp />
    </div>
  );
}

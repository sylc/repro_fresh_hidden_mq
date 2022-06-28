/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
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

/** @jsx h */
import { h } from "preact";
import { tw } from "../utils/twind.ts";

export default function BasicComp() {
  return (
    <div>
      <div>With A basic component, instead of an island, it is working</div>
      <div class={tw`hidden md:block`}>class used here is 'hidden md:block'</div>
    </div>
  );
}

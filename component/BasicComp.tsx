/** @jsx h */
import { h, tw } from "../client_deps.ts";

export default function BasicComp() {
  return (
    <div>
      <div>With A basic component, instead of an island, it is working</div>
      <div class={tw`hidden md:block`}>class used here is 'hidden md:block'</div>
    </div>
  );
}

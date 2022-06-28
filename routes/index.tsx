/** @jsx h */
import { h } from "preact";
import { tw } from "../utils/twind.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <div class={tw("hidden lg:block")}>
        this text should appear on screen larger than 640 px, but doesn't...
      </div>
      <br/>
      <div>With Island in the page, (there should be a text above on large screen)</div>
      <Counter start={3} />
      <br/>
      <a class={tw("sm:text-underline")} href="./no-island">see behavior when no island is used</a>
    </div>
  );
}

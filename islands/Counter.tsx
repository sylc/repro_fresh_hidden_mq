/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

import { tw } from "../utils/twind.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <div class={tw`hidden md:block`}>Island hidden block (hidden md:block)</div>
      <p class={tw("md:text-underline")}>{count}</p>
    </div>
  );
}

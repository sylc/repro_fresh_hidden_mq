import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, cssomSheet, setup, Sheet } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) {
  // const el = document.getElementById("__FRSH_STYLE") as HTMLStyleElement;
  // const rules = el.innerText.split("\n");
  // const mappings = JSON.parse(rules.pop()!.slice(2, -2));
  // const precedences = JSON.parse(rules.pop()!.slice(2, -2));
  // const state = [precedences, new Set(rules), new Map(mappings), true];
  // const sheet: Sheet = {
  //   ...cssomSheet({ target: el.sheet! }),
  //   init(cb) {
  //     return cb(state.shift());
  //   },
  // };
  // config.sheet = sheet;
  setup(config); 
}

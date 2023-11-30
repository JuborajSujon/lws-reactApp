import { useState } from "react";
import UseEffectFn from "./UseEffectFn";

export default function UseEffectCleanup() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <UseEffectFn />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide post" : "Show post"}
        </button>
      </p>
    </div>
  );
}

import React, { useCallback, useState } from "react";
import Optimization from "./Optimization";

export default function OptimiztionHooks() {
  const[count, setCounter] = useState(0)
  const func = useCallback(() => {}, []);
  return (
    <div>
      <p>Count is: {count}</p>
      <button
        onClick={() => setCounter((prevCount) => prevCount + 1)}
        className="border border-black p-2 ms-2"
      >
        Increase
      </button>
      <Optimization func={func} />
    </div>
  );
}
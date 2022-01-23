import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button>Increment</button>
        <span>{count}</span>
        <button>Decrement</button>
      </div>
    </div>
  );
}

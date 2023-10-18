import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>React</p>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="bg-indigo-500 py-2 px-8"
        >
          Increment
        </button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
}

import { use, useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
}

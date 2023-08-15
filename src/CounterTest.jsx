import { useState } from "react";
const CounterTest = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
      <button onClick={() => setCount(count - 1)}>Minus 1</button>
      <p>{count}</p>
    </div>
  );
};
export default CounterTest;

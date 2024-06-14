import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={handleDecrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset Counter</button>
    </div>
  );
};

export default Counter;

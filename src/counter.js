import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <span data-testid="count">Count: {count}</span>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
};

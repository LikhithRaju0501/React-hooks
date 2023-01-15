import React, { useState } from "react";

const ExplainUseState = () => {
  const [count, setCount] = useState(() => {
    console.log("Re-render");
    return 0;
  });

  const [state, setState] = useState({ counter: 0, theme: "blue" });
  const decrement = () => {
    setCount((prev) => prev - 1);
    setState((prevState) => {
      return { ...prevState, counter: state.counter - 1 };
    });
  };

  const increment = () => {
    setCount((prev) => prev + 1);
    setState((prevState) => {
      return { ...prevState, theme: "red" };
    });
  };

  return (
    <div>
      <button onClick={decrement}>+</button>
      <span>{count}</span>
      <span style={{ backgroundColor: state.theme }}>
        Counter: {state.counter}
      </span>
      <button onClick={increment}>-</button>
    </div>
  );
};

export default ExplainUseState;

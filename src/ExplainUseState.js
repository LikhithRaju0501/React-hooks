import React, { useState } from "react";

const ExplainUseState = () => {
  const [count, setCount] = useState(() => {
    console.log("Re-render");
    return 0;
  });
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default ExplainUseState;

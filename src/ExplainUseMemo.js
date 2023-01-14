import React, { useState } from "react";

const ExplainUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const theme = {
    backgroundColor: dark && "black",
    color: dark && "white",
  };

  const doubleNumber = slowFunction(number);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={theme}>{doubleNumber}</div>
      <h1>Hello</h1>
    </div>
  );
};

function slowFunction(number) {
  console.log("Calling slow number");
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
}

export default ExplainUseMemo;

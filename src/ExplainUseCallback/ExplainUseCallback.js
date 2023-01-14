import React, { useCallback, useState } from "react";
import List from "./List";

const ExplainUseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementer) => {
      return [
        number + incrementer,
        number + 1 + incrementer,
        number + 2 + incrementer,
      ];
    },
    [number]
  );

  // Same as useMemo but usememo returns the value of the function rather than
  // the returning the function.
  // So you cannot pass any parameters in useMemo but you can pass those in useCallback

  const theme = {
    backgroundColor: dark && "black",
    color: dark && "white",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default ExplainUseCallback;

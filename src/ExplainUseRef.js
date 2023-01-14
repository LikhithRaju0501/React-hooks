import React, { useState, useEffect, useRef } from "react";

const ExplainUseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is: {name} and before it was: {prevName?.current}</div>
      <div>Number of re-renders is: {renderCount?.current}</div>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
};

export default ExplainUseRef;

import React, { useState, useEffect, useRef } from "react";

const ExplainUseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is: {name}</div>
      <div>Number of re-renders is: {renderCount?.current}</div>
    </div>
  );
};

export default ExplainUseRef;

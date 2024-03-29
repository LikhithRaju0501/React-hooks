import React, { useState } from "react";
import List from "./List";

const ExplainUseDeferredValue = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  );
};

export default ExplainUseDeferredValue;

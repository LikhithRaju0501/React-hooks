import React from "react";
import useLocalStorage from "./useLocalStorage";

const ExplainUseCustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default ExplainUseCustomHooks;

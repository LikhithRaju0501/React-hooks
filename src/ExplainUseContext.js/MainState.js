import React, { createContext, useState } from "react";
import ChildState from "./ChildState";

export const ThemeContext = createContext();

const MainState = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      <ChildState />
    </ThemeContext.Provider>
  );
};

export default MainState;

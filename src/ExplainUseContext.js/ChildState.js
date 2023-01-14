import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const ChildState = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme && "black",
    color: darkTheme && "white",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>ChildState</div>
    </>
  );
};

export default ChildState;

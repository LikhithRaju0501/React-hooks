import React from "react";
import {
  useThemePractice,
  useThemeUpdatePractice,
} from "./ThemeProviderPractice";

const ThemeChildPractice = () => {
  const darkTheme = useThemePractice();
  const darkThemeUpdate = useThemeUpdatePractice();
  const themeStyle = {
    backgroundColor: darkTheme && "black",
    color: darkTheme && "white",
  };
  return (
    <>
      <button onClick={darkThemeUpdate}>Toggle Theme</button>
      <div style={themeStyle}>ChildState</div>
    </>
  );
};

export default ThemeChildPractice;

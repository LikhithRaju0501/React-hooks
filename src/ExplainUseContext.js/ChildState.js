import React, { useContext } from "react";
import { ThemeContext } from "./MainState";

const ChildState = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme && "black",
    color: darkTheme && "white",
  };
  return <div style={themeStyle}>ChildState</div>;
};

export default ChildState;

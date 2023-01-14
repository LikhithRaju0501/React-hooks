import React from "react";
import ChildState from "./ChildState";
import ThemeProvider from "./ThemeContext";

const MainState = () => {
  return (
    <ThemeProvider>
      <ChildState />
    </ThemeProvider>
  );
};

export default MainState;

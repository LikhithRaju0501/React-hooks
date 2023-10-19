import React, { useState, useContext, createContext } from "react";

const ThemeContextPractice = createContext();
const ThemeContextUpdatePractice = createContext();

export const useThemePractice = () => useContext(ThemeContextPractice);
export const useThemeUpdatePractice = () =>
  useContext(ThemeContextUpdatePractice);

const ThemeProviderPractice = ({ children }) => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark((prevValue) => !prevValue);
  };
  return (
    <ThemeContextPractice.Provider value={dark}>
      <ThemeContextUpdatePractice.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdatePractice.Provider>
    </ThemeContextPractice.Provider>
  );
};

export default ThemeProviderPractice;

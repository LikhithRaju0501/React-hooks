import React from "react";
import ThemeProviderPractice from "./ThemeProviderPractice";
import ThemeChildPractice from "./ThemeChildPractice";

const PracticeUseContext = () => {
  return (
    <ThemeProviderPractice>
      <ThemeChildPractice />
    </ThemeProviderPractice>
  );
};

export default PracticeUseContext;

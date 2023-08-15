import { useState } from "react";
import { ThemeContext, themes } from "../context/ThemeContext";
import ThemeButton from "../components/ThemeButton";

const TestUseContext = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    console.log(newTheme)
  };

  return (
    <ThemeContext.Provider value={theme}> 
      <ThemeButton/>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
};

export default TestUseContext;

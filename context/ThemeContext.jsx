import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const themes = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

export const ThemeContext = createContext(null);

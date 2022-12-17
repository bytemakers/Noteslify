import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
});

const ThemeModeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  const contextValues = {
    theme: theme,
    toggle: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeModeProvider;

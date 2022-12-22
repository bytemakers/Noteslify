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
      <div
        data-theme={theme}
        className={`isolate ${
          theme === "dark" ? "bg-[#030414] text-white" : "bg-white"
        } transition-all`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeModeProvider;

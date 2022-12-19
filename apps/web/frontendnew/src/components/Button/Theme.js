import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const Theme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggle();
  };

  return (
    <button className=" transition-all" onClick={handleThemeToggle}>
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-[#d8e6e7]" />
      ) : (
        <MoonIcon className="w-5 h-5 text-black" />
      )}
    </button>
  );
};

export default Theme;

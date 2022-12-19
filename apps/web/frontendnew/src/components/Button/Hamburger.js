import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const Hamburger = ({ dark, setMobileMenuOpen }) => {
  const { theme } = useContext(ThemeContext);
  const handleOnClick = () => {
    setMobileMenuOpen(true);
  };

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={handleOnClick}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon
          className={`h-6 w-6 ${theme === "dark" ? "text-white" : null}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Hamburger;

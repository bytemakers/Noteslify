import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const SignUp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="hidden lg:flex lg:min-w-0 lg:items-center lg:justify-center">
      <a
        href="https://noteslify.stonecss.com"
        target="_blank"
        className={`inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ${
          theme === "dark"
            ? "text-white ring-gray-600 hover:ring-gray-300/20"
            : "text-gray-900 ring-gray-900/10 hover:ring-gray-900/20"
        } ring-1 transition-all`}
      >
        Sign Up
      </a>
    </div>
  );
};

export default SignUp;

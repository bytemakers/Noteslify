import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const DesktopMenu = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-center lg:gap-x-12"
      aria-label="menu-list"
    >
      {navigation.map((item) => (
        <Link
          to={item.href}
          key={`desktop-menu-item-${item.name}`}
          className={`font-semibold ${
            theme === "dark"
              ? "text-white hover:text-[#a1ace9]"
              : "text-gray-900 hover:text-gray-900"
          } transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopMenu;

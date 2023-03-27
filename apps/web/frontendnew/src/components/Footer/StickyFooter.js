import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const StickyFooter = () => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === "dark";

  return (
    <div>
      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-gray-600">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 | <a href="https://bio.link/bytemakers" class="hover:underline">ByteMakers</a>. All rights reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="/" class="mr-4 hover:underline md:mr-6">Licensing</a>
              </li>
              <li>
                  <a href="/" class="hover:underline">Contact</a>
              </li>
          </ul>
      </footer>
    </div>
  );
};

export default StickyFooter;
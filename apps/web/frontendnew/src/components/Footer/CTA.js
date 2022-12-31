import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const CTA = () => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === "dark";

  return (
    <div>
              <div className={`${dark && "bg-[#131a42]"} bg-gray-50`}>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className={`${dark && "text-gray-300"} block`}>
              Ready to dive in?
            </span>
            <span className="block text-blue-600">
              Start Saving Your Notes Securely Today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CTA;
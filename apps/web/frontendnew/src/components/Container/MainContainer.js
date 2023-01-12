import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";
import Custom from "../Button/Custom";

const MainContainer = () => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === "dark";

  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32">
        <div>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              data-theme={theme}
              className=" announce relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              <span data-theme={theme} className="color text-gray-600">
                Announcing our next round of funding.{" "}
                <a href="/" className="font-semibold text-blue-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
          <div>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 text-5xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Your Privacy Friendly, Open Source. Alternative to EverNote.
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                dark ? "text-gray-400" : "text-gray-700"
              } sm:text-center`}
            >
              Capture your notes, files, and life’s work all in one secure
              place.
            </p>
            <div className="mt-8 flex gap-x-4 items-center sm:justify-center">
              <Custom
                buttonClass="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700 transition-all"
                href="/"
                text="Get started for free"
                arrowClass="text-blue-200 ml-1"
              />
              <Custom
                buttonClass={`inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 ring-1 hover:ring-gray-900/20 ${
                  dark
                    ? "text-gray-200 ring-gray-300/10"
                    : "text-gray-900 ring-gray-900/10"
                } transition-all`}
                href="/"
                text="Visit Github"
                arrowClass="text-gray-400 ml-1"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

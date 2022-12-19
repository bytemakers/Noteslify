import { Link } from "react-router-dom";
import SignUp from "../Button/SignUp";
import Theme from "../Button/Theme";
import Hamburger from "../Button/Hamburger";
import DesktopMenu from "../Navbar/DesktopMenu";
import { useState } from "react";
import MobileNav from "./MobileNav";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    // { name: "Dashboard", href: "https://noteslifysystem.stonecss.com/Notes" },
    { name: "Dashboard", href: "/notes" },
  ];

  return (
    <>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
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
      <div className="px-6 pt-6 lg:px-8">
        <div>
          {/* desktop nav */}
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div
              className="flex w-[9em] items-center justify-between lg:min-w-0 "
              aria-label="Global"
            >
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Noteslify</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  alt="Tailwindui-icon"
                />
              </Link>
              {/* theme toggle button */}
              <Theme />
            </div>
            {/* hamburger button */}
            <Hamburger setMobileMenuOpen={setMobileMenuOpen} />
            {/* top nav desktop menu */}
            <DesktopMenu navigation={navigation} />
            {/* sign up button */}
            <SignUp />
          </nav>
          {/* mobile nav */}
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navigation={navigation}
          />
        </div>
      </div>
    </>
  );
};

export default TopNav;

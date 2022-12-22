<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
import { useContext } from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const dark = theme === "dark";

  const features = [
    {
      name: "Cloud Synced",
      description:
        "Tired of not having the right info handy when you need it? Noteslify automatically saves notes online and syncs them to all your devices.",
      icon: GlobeAltIcon,
    },
    {
      name: "Reminders",
      description:
        "Create and assign your task with due dates and reminders. Find notes by searching for keywords, titles, or tags.",
      icon: ScaleIcon,
    },
    {
      name: "Capture Infinitely",
      description:
        "Store as many notes you can safely backed up on cloud. Get all arranged in one place safely and securely.",
      icon: BoltIcon,
    },
    {
      name: "Web application",
      description:
        "Many note-taking apps lack a fully functional web application. Noteslify offers a complete lineup of features from any major browser.",
      icon: DevicePhoneMobileIcon,
    },
  ];

=======
import '../../App.css';
import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Helmet } from "react-helmet";
import { ThemeContext } from '../../contexts/ThemeModeProvider';
import './Home.css';

const Home = () => {
  const context = useContext(ThemeContext);
  localStorage.setItem('theme', context.theme);

=======
import '../../App.css';
import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Helmet } from "react-helmet";
import { ThemeContext } from '../../contexts/ThemeModeProvider';
import './Home.css';

const Home = () => {
  const context = useContext(ThemeContext);
  localStorage.setItem('theme', context.theme);

>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js
  const handleToggleTheme = () => {
    context.toggle();
  }
  const dark = context.theme === 'dark';
    const features = [
        {
          name: 'Cloud Synced',
          description:
            'Tired of not having the right info handy when you need it? Noteslify automatically saves notes online and syncs them to all your devices.',
          icon: GlobeAltIcon,
        },
        {
          name: 'Reminders',
          description:
            'Create and assign your task with due dates and reminders. Find notes by searching for keywords, titles, or tags.',
          icon: ScaleIcon,
        },
        {
          name: 'Capture Infinitely',
          description:
            'Store as many notes you can safely backed up on cloud. Get all arranged in one place safely and securely.',
          icon: BoltIcon,
        },
        {
          name: 'Web application',
          description:
            'Many note-taking apps lack a fully functional web application. Noteslify offers a complete lineup of features from any major browser.',
          icon: DevicePhoneMobileIcon,
        },
      ]
    
      const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
        { name: 'Dashboard', href: 'https://noteslifysystem.stonecss.com/Notes' },
      ]
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
>>>>>>> parent of 8ad5af5 (Fix issue #250 - LocalStorage 'theme' item not updated (#251)):apps/web/frontendnew/src/components/Home/Home.js
=======
>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js
  return (
    <>
      <Helmet>
        <title>Noteslify | Home</title>
        <meta name="description" content="Your Privacy Friendly, Open Source. Alternative to EverNote." />
      </Helmet>
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
      <>
=======
=======
>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js

      <div
        // data-theme={context.theme}
        className={`isolate ${dark ? 'bg-[#030414] text-white' : 'bg-white'} transition-all`}>
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
            
            {/* ### NAV START */}
            <nav className="flex h-9 items-center justify-between" aria-label="Global">
              <div className="flex w-[9em] justify-between lg:min-w-0 " aria-label="Global">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Noteslify</span>
                  <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="" />
                </a>
                <button
                  className=' transition-all'
                  onClick={handleToggleTheme}>
                  {dark
                    ? <SunIcon className='w-5 h-5 text-[#d8e6e7]' />
                    : <MoonIcon className='w-5 h-5 text-black' />}
                </button>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className={`h-6 w-6 ${dark && 'text-white'}`} aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={`font-semibold ${dark && 'text-white hover:text-[#a1ace9]'} text-gray-900 hover:text-gray-900 transition-all`}>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:min-w-0  lg:justify-end">
                <a
                  href="https://noteslifysystem.stonecss.com/Signup"
                  className={`inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ${dark && 'text-white ring-gray-600 hover:ring-gray-300/20' } ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all`}
                >
                  Sign Up
                </a>
              </div>
            </nav> {/* ### NAV END */}
            
            {/* ### MOBILE MENU START */}
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel data-theme={context.theme} focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Noteslify</span>
                      <img
                        className="h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon data-theme={context.theme} className="color h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`${dark && 'text-white'} -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10`}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="/"
                        className={`-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 ${dark && 'text-white'} text-gray-900 hover:bg-gray-400/10`}
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog> {/* ### MOBILE MENU END */}
          </div>
        </div>
        
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
>>>>>>> parent of 8ad5af5 (Fix issue #250 - LocalStorage 'theme' item not updated (#251)):apps/web/frontendnew/src/components/Home/Home.js
=======
>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js
        {/* ### MAIN START */}
        <main>

          {/* ### HERO START */}
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div className=''>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
                  <div
                    data-theme={theme}
                    className=" announce relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    <span data-theme={theme} className="color text-gray-600">
                      Announcing our next round of funding.{" "}
=======
                  <div data-theme={context.theme} className=" announce relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span data-theme={context.theme} className="color text-gray-600">
                      Announcing our next round of funding.{' '}
>>>>>>> parent of 8ad5af5 (Fix issue #250 - LocalStorage 'theme' item not updated (#251)):apps/web/frontendnew/src/components/Home/Home.js
=======
                  <div data-theme={context.theme} className=" announce relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span data-theme={context.theme} className="color text-gray-600">
                      Announcing our next round of funding.{' '}
>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js
                      <a href="/" className="font-semibold text-blue-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Your Privacy Friendly, Open Source. Alternative to EverNote.
                  </h1>
                  <p className={`mt-6 text-lg leading-8 ${dark ? 'text-gray-400' : 'text-gray-700'} sm:text-center`}>
                    Capture your notes, files, and life’s work all in one secure place.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                      href="/"
                      className="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700 transition-all"
                    >
                      Get started for free
                      <span className="text-blue-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                    <a
                      href="/"
                      className={`inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ${dark && 'text-gray-200 ring-1 ring-gray-300/10 hover:ring-gray-900/20'} transition-all`}
                    >
                      Visit Github
                      <span className="text-gray-400" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
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
          </div> {/* ### HERO END */}
        </main>
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
<<<<<<< HEAD:apps/web/frontendnew/src/pages/Home/Home.js
      </>
      {/* ### FEATURES START */}
      <div
        className={`${
          dark && "bg-[#030414]"
        } bg-white py-24 sm:py-32 lg:py-40 transition-all`}
        id="features"
      >
=======
      </div>

      {/* ### FEATURES START */}
      <div className={`${dark && 'bg-[#030414]'} bg-white py-24 sm:py-32 lg:py-40 transition-all`}>
>>>>>>> parent of 8ad5af5 (Fix issue #250 - LocalStorage 'theme' item not updated (#251)):apps/web/frontendnew/src/components/Home/Home.js
=======
      </div>

      {/* ### FEATURES START */}
      <div className={`${dark && 'bg-[#030414]'} bg-white py-24 sm:py-32 lg:py-40 transition-all`}>
>>>>>>> parent of d4cdf65 (Fix issue #250 - LocalStorage 'theme' item not updated):apps/web/frontendnew/src/components/Home/Home.js
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-blue-600">Features</h2>
            <p className={`${dark && 'text-gray-200'} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>Why choose Noteslify?</p>
            <p className={`${dark && 'text-gray-400'} mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600`}>
              Make plans. Keep a journal. Clip anything from the web. Noteslify lets you collect information quickly, organize it easily, and find it when you need it.
            </p>
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className={`${dark && 'text-gray-200'} text-lg font-semibold leading-8 text-gray-900`}>{feature.name}</p>
                    <p className={`${dark && 'text-gray-400'} mt-2 text-base leading-7 text-gray-600`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>  {/* ### FEATURES END */}

      {/* ### TESTIMONIALS START */}
      <div className={`${dark && 'bg-[#030414]'} flex flex-col items-center gap-2`}>
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-blue-600">Testimonials</h2>
          <p className={`${dark && 'text-white'} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>Customer Reviews</p>
          <p className={`${dark && 'text-gray-400'} mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 mb-5`}>
            See how Noteslify customers around the globe are becoming productive and managing their time and efficiency.
          </p>
        </div>
        {/*          <!-- Rating --> */}
        <span className="flex items-center gap-4 px-4 py-2 text-sm rounded shadow-md bg-slate-50 text-slate-500 shadow-slate-200">
          <span
            className="flex gap-1 text-amber-400"
            role="img"
            aria-label="Rating: 4.2 out of 5 stars"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </span>
          <span> 4.2 out 5 </span>
        </span>
        {/*          <!-- Helper text --> */}
        <span className="text-xs leading-6 text-slate-400 mb-10">
          based on 153 user ratings
        </span>
      </div> {/* ### TESTIMONIALS END */}

      {/* ### CTA START */}
      <div className={`${dark && 'bg-[#131a42]'} bg-gray-50`}>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className={`${dark && 'text-gray-300'} block`}>Ready to dive in?</span>
            <span className="block text-blue-600">Start Saving Your Notes Securely Today.</span>
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
      </div> {/* ### CTA END */}

      <footer className={`relative z-10 ${dark && 'bg-[#09021a] text-white'} bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20`}>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src="https://cdn.noteslify.stonecss.com/cdn/assets/noteslifyfooter.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="text-body-color mb-7 text-base">
                  Your Privacy Friendly, Open Source. Alternative to EverNote. Capture your notes, files, and life’s work all in one secure place.
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Resources</h4>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      SaaS Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Flow
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Company</h4>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Contact & Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Success History
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Setting & Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Quick Links</h4>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Know Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="/"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path
                        d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path
                        d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path
                        d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path
                        d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-body-color text-base">&copy; 2022 | DVS Tech Labs</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]">
            <svg
              width="217"
              height="229"
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1="281"
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute top-10 right-10 z-[-1]">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2="75"
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Home
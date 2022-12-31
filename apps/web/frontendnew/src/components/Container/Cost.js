import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeModeProvider";

const Cost = () => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === "dark";

  return (
    <div>
        <section className="relative py-36 bg-blueGray-50 overflow-hidden">
        <img className="absolute top-1/2 right-0 transform -translate-y-1/2" src="flaro-assets/images/pricing/gradient.svg" alt=""></img>
        <div className="relative z-10 container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md">
                <h2 className="mb-16 lg:mb-52 text-6xl md:text-6xl xl:text-8xl font-bold font-heading tracking-px-n leading-none">Simple No-tricks Pricing</h2>
                <h3 className="mb-6 text-xl text-gray-900 font-semibold leading-normal">If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.</h3>
                <p className="font-medium text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volut pat tempor condimentum commodo tincidunt sit dictumst. Eu placerat arcu at sem vitae eros, purus non, eu. Adipiscing vitae amet nunc volutpat sit. Enim eu integer duis arcu.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-8xl">
                <div className="p-9">
                    <span className="mb-7 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Features included:</span>
                    <ul>
                    <li className="mb-4 flex items-center">
                        <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-semibold leading-normal">3 Team Members</p>
                    </li>
                    <li className="mb-4 flex items-center">
                        <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-semibold leading-normal">1200+ UI Blocks</p>
                    </li>
                    <li className="mb-4 flex items-center">
                        <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-semibold leading-normal">10 GB Cloud Storage</p>
                    </li>
                    <li className="mb-4 flex items-center">
                        <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-semibold leading-normal">Individual Email Account</p>
                    </li>
                    <li className="flex items-center">
                        <svg className="mr-2" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p className="font-semibold leading-normal">Premium Support</p>
                    </li>
                    </ul>
                </div>
                <div className="p-9 bg-white">
                    <div className="flex flex-wrap -m-8">
                    <div className="w-full sm:w-1/2 p-8">
                        <span className="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">Pro Package</span>
                        <p className="text-gray-900 font-semibold leading-normal">Best for Startups &amp; Small Businesses</p>
                    </div>
                    <div className="w-full sm:w-1/2 p-8">
                        <div className="sm:max-w-max ml-auto">
                        <p className="font-bold">
                            <span className="text-5xl leading-tight tracking-px-n">$49</span>
                            <span className="text-lg text-gray-500 leading-snug tracking-px-n">/mo</span>
                        </p>
                        <p className="font-medium text-gray-500 leading-relaxed">Billed anually</p>
                        </div>
                    </div>
                    </div>
                    <div className="mt-9">
                    <button className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200" type="button">Start 14 days free trial</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default Cost;
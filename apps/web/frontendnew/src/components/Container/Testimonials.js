import React from "react";
import Review from "../Rating/Review";

const Testimonials = ({ dark }) => {
  return (
    <div>
      <div
        className={`${
          dark ? "bg-[#030414]" : "bg-white"
        } flex flex-col items-center gap-2`}
      >
        <div className="sm:text-center">
          <h3 className="text-lg font-semibold leading-8 text-blue-600">
            Testimonials
          </h3>
          <p
            className={`${
              dark ? "text-white" : "text-gray-900"
            } mt-2 text-3xl font-bold tracking-tight sm:text-4xl`}
          >
            Customer Reviews
          </p>
          <p
            className={`${
              dark ? "text-gray-400" : "text-gray-600"
            } mx-auto mt-6 max-w-2xl text-lg leading-8 mb-5`}
          >
            See how Noteslify customers around the globe are becoming productive
            and managing their time and efficiency.
          </p>
        </div>
        {/* ratings */}
        <Review target={4} total={5} />
        {/*          <!-- Helper text --> */}
        <span className="text-xs leading-6 text-slate-400 mb-10">
          based on 153 user ratings
        </span>
      </div>
        <section className="bg-white dark:bg-black">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p className="text-2xl font-medium dark:text-gray-400 text-gray-900">"With Noteslify, I can organize all my notes and files in one place, and the search feature saves me time. I highly recommend Noteslify to anyone looking for a privacy-friendly note-taking app."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://cdn.noteslify.stonecss.com/cdn/assets/contacticon.jpeg" alt="profile"></img>
                    <div className="flex items-center divide-x-2 divide-gray-500">
                        <div className="pr-3 font-medium dark:text-gray-400 text-gray-900">Anonymous</div>
                        <div className="pl-3 text-sm font-light text-gray-500">Satisfied Noteslify User</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

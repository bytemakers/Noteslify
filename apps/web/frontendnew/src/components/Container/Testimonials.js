import React from "react";
import Review from "../Rating/Review";

const Testimonials = ({ dark }) => {
  return (
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
  );
};

export default Testimonials;

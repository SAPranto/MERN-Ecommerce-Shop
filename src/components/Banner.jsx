import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"
const Banner = () => {
  return (
    <banner className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Online Shoe Store
          </h1>
          <h2 className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We are the only shoe importer from vietnam. Our Shoes are 100% original and we are licensed by lorem ipsum.
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Buy Now
          <HiArrowNarrowRight className="text-2xl ml-2"/>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact Now
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5">
          <img
            src="/shoe.webp"
            alt="Nexoy"
            className=""
          />
        </div>
      </div>
    </banner>
  );
};

export default Banner;

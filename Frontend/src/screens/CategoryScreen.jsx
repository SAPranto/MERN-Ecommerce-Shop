import React from "react";
import FilterBar from "../components/FilterBar";
import Pagnination from "../components/Pagnination";
import ProductsGrid from "../components/ProductsGrid";

const CategoryScreen = () => {
  return (
    <>
      <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Our Products
        </h2>
        {/*  Mobile Filter */}
        <div className="block mt-8 lg:hidden">
          <button className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
            <span className="text-sm font-medium"> Filters &amp; Sorting </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-5 lg:items-start lg:gap-8">
          <FilterBar />
          <ProductsGrid />
        </div>
      </div>

      <Pagnination />
    </>
  );
};

export default CategoryScreen;

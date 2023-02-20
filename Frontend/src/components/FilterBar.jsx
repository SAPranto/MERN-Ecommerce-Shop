import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const FilterBar = () => {
  return (
    <>
    <div className="hidden space-y-4 lg:block ">
      <div>
        <select
          id="SortBy"
          className="mt-1 text-sm border-gray-300 rounded border p-2"
        >
          <option>Sort By</option>
          <option value="Title, DESC">Price</option>
          <option value="Title, ASC">Rating</option>
          <option value="Price, DESC">Date</option>
        </select>
      </div>
      <div>
        <p className="block text-xs font-medium text-gray-700">Filters</p>
        <div className="mt-1 space-y-2">
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
              <span className="text-sm font-medium"> Availability </span>
              <IoIosArrowDown />
            </summary>
            <div className="bg-white border-t border-gray-200">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>
                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>
              <ul className="p-4 space-y-1 border-t border-gray-200">
                <li>
                  <label
                    htmlFor="FilterInStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      In Stock (5+)
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterPreOrder"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Pre Order (3+)
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterOutOfStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Out of Stock (10+)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
              <span className="text-sm font-medium"> Price </span>
              <IoIosArrowDown />
            </summary>
            <div className="bg-white border-t border-gray-200">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  The highest price is $600
                </span>
                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>
              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor="FilterPriceFrom"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </label>
                  <label
                    htmlFor="FilterPriceTo"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>
                    <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
              <span className="text-sm font-medium"> Colors </span>
              <IoIosArrowDown />
            </summary>
            <div className="bg-white border-t border-gray-200">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Selected </span>
                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>
              <ul className="p-4 space-y-1 border-t border-gray-200">
                <li>
                  <label
                    htmlFor="FilterRed"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterRed"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Red
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterBlue"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterBlue"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Blue
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterGreen"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterGreen"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Green
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterOrange"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOrange"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Orange
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterPurple"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPurple"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Purple
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterTeal"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterTeal"
                      className="w-5 h-5 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Teal
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>

    </>
  );
};

export default FilterBar;

import React from "react";
import { BsSuitHeart, BsFillStarFill, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css";
const ProductCard = () => {
  return (
    <li className="">
      <Link to="#" className="">
        <div className="max-w-md w-[full] bg-gray-900 shadow-lg rounded-xl p-3">
          <div className="flex flex-col">
            <div className="relative h-62 w-full mb-3">
              <div className="absolute top-0 right-0 p-2">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-red-500 rounded-full w-8 h-8 text-center p-1">
                  <BsSuitHeart className="text-2xl" />
                </button>
              </div>
              <div className="absolute top-0 left-0 p-2">
                <button className="transition ease-in duration-300 bg-gray-800 hover:bg-gray-800 border hover:border-gray-500 border-gray-500 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                  <BsEye className="text-lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1591370409347-2fd43b7842de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Just a flower"
                className="w-full max-h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600 gap-1">
                  <BsFillStarFill className="text-yellow-400" />
                  <span className="text-gray-400 whitespace-nowrap font-semibold">
                    4.78
                  </span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg font-semibold mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                    Air-Jordan Shoe
                  </h2>
                  <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    INSTOCK
                  </div>
                </div>
              </div>
              <div className="text-xl text-white font-semibold mt-1">
                $240.00
              </div>
              <div className="flex flex-col xl:flex-row py-4 text-sm text-gray-600">
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <ul className="flex flex-row justify-center items-center space-x-1">
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                          <a
                            href="#blue"
                            className="block w-3 h-3 bg-blue-600 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <a
                            href="#yellow"
                            className="block w-3 h-3  bg-yellow-400 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#red"
                            className="block w-3 h-3  bg-red-500 rounded-full"
                          />
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#green"
                            className="block w-3 h-3  bg-green-500 rounded-full"
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1 inline-flex items-center mb-3">
                  <span className="text-secondary whitespace-nowrap mr-3">
                    Size
                  </span>
                  <div className="cursor-pointer text-gray-400 ">
                    <span className="hover:text-purple-500 p-1 py-0">S</span>
                    <span className="hover:text-purple-500 p-1 py-0">M</span>
                    <span className="hover:text-purple-500 p-1 py-0">L</span>
                    <span className="hover:text-purple-500 p-1 py-0">XL</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 text-sm font-medium justify-between">
                <button className="btn bg-sky-600">Buy Now</button>
                <button className="btn bg-red-500">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;

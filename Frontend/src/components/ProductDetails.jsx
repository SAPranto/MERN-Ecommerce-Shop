import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../app.css";

const ProductDetails = () => {
  return (
    <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src="https://images.unsplash.com/photo-1593287073863-c992914cb3e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="object-cover w-full aspect-square rounded-xl"
          />
          <div className="grid grid-cols-4 gap-4 lg:mt-4">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1620794341491-76be6eeb6946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
              className="object-cover w-full aspect-square rounded-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              className="object-cover w-full aspect-square rounded-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1574020462714-5451391cc336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="object-cover w-full aspect-square rounded-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="object-cover w-full aspect-square rounded-xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="sticky top-10">
          <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
            Pre Order
          </strong>
          <div className="flex justify-between mt-8">
            <div className="max-w-[35ch]">
              <h1 className="text-2xl font-bold">
                Fun Product That Does Something Cool
              </h1>
              <p className="mt-0.5 text-sm">Highest Rated Product</p>
              <div className="mt-2 -ml-0.5 flex text-yellow-400 text-xl">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
            <p className="text-lg font-bold">$119.99</p>
          </div>
          <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="block">
              <div>
                <div className="prose max-w-none group-open:hidden">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>
                </div>
                <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                  Read More
                </span>
              </div>
            </summary>
            <div className="pb-6 prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                rerum at recusandae?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nam sapiente nobis ea veritatis error consequatur nisi
                exercitationem iure laudantium culpa, animi temporibus non!
                Maxime et quisquam amet. A, deserunt!
              </p>
            </div>
          </details>
          <form className="mt-8">
            <fieldset>
              <legend className="mb-1 text-sm font-medium">Color</legend>
              <div className="flex-1 inline-flex items-center mb-3">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <ul className="flex flex-row justify-center items-center space-x-1">
                    <li className="">
                      <span className="block p-1 border-2 border-blue-600 hover:scale-110 rounded-full transition ease-in duration-300">
                        <a
                          href="#blue"
                          className="block w-3 h-3 bg-blue-600 rounded-full"
                        />
                      </span>
                    </li>
                    <li className="">
                      <span className="block p-1 border-2 border-yellow-400 hover:scale-110 rounded-full transition ease-in duration-300">
                        <a
                          href="#yellow"
                          className="block w-3 h-3  bg-yellow-400 rounded-full"
                        />
                      </span>
                    </li>
                    <li className="">
                      <span className="block p-1 border-2 border-red-500 hover:scale-110 rounded-full transition ease-in duration-300">
                        <a
                          href="#red"
                          className="block w-3 h-3  bg-red-500 rounded-full"
                        />
                      </span>
                    </li>
                    <li className="">
                      <span className="block p-1 border-2 border-green-500 hover:scale-110 rounded-full transition ease-in duration-300">
                        <a
                          href="#green"
                          className="block w-3 h-3  bg-green-500 rounded-full"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-4">
              <legend className="mb-1 text-sm font-medium">Size</legend>
              <div className="flow-root">
                <div className="-m-0.5 flex flex-wrap">
                  <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                    <input
                      type="radio"
                      name="size"
                      id="size_xs"
                      className="sr-only peer"
                    />
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                      XS
                    </span>
                  </label>
                  <label htmlFor="size_s" className="cursor-pointer p-0.5">
                    <input
                      type="radio"
                      name="size"
                      id="size_s"
                      className="sr-only peer"
                    />
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                      S
                    </span>
                  </label>
                  <label htmlFor="size_m" className="cursor-pointer p-0.5">
                    <input
                      type="radio"
                      name="size"
                      id="size_m"
                      className="sr-only peer"
                    />
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                      M
                    </span>
                  </label>
                  <label htmlFor="size_l" className="cursor-pointer p-0.5">
                    <input
                      type="radio"
                      name="size"
                      id="size_l"
                      className="sr-only peer"
                    />
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                      L
                    </span>
                  </label>
                  <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                    <input
                      type="radio"
                      name="size"
                      id="size_xl"
                      className="sr-only peer"
                    />
                    <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                      XL
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="flex mt-8">
              <div>
                <label htmlFor="quantity" className="sr-only">
                  Qty
                </label>
                <input
                  type="number"
                  id="quantity"
                  min={1}
                  defaultValue={1}
                  className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <button type="submit" className="btn bg-red-500">
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

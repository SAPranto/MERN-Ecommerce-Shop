import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart4, BsSuitHeartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between w-full ${
        isSticky
          ? "bg-gray-600 transition-all duration-700 text-white"
          : "bg-transparent transition-all duration-700 text-black"
      } sticky top-0 z-50`}
    >
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold font-heading hover:scale-110 transition duration-300">
          NeXoy
          </h1>
        </Link>
        <ul className="hidden md:flex px-4 mx-auto text-lg font-semibold font-heading space-x-12">
          <li className="hover:text-sky-600 hover:scale-110 transition ease-in-out duration-300">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-sky-600 hover:scale-110 transition ease-in-out duration-300">
            <Link to="/category">
              Products
            </Link>
          </li>
          <li className="hover:text-sky-600 hover:scale-110 transition ease-in-out duration-300">
            <Link to="#">
              About Us
            </Link>
          </li>
          <li className="hover:text-sky-600 hover:scale-110 transition ease-in-out duration-300">
            <Link to="#">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden xl:flex items-center space-x-5">
          <Link href="#">
            <BsSuitHeartFill className="text-xl text-red-600 hover:scale-110 transition ease-in" />
          </Link>
          <Link className="flex items-center " href="#">
            <BsCart4
              className={`text-xl hover:scale-110 transition ease-in ${isSticky ? "text-white" : "text-blue-900"}`}
            />
            <span className="flex absolute -mt-4 ml-4">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
            </span>
          </Link>
          <Link className="flex items-center" href="#">
            <FaUserAlt
              className={`text-xl hover:scale-110 transition ease-in ${isSticky ? "text-white" : "text-blue-600"}`}
            />
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <BsCart4 className="text-2xl" />
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
        <GiHamburgerMenu className="text-2xl" />
      </a>
    </nav>
  );
};

export default Navbar;

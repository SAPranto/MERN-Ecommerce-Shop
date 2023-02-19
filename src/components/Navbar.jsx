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
        <Link className="text-3xl font-bold font-heading" to="/">
          {/* <img class="h-9" src="logo.png" alt="logo"> */}
          NeXoy
        </Link>
        {/* Nav Links */}
        <ul className="hidden md:flex px-4 mx-auto text-lg font-semibold font-heading space-x-12">
          <li>
            <Link className="hover:text-sky-600" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600" to="/category">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600" to="#">
              About Us
            </Link>
          </li>
          <li>
            <Link className="" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Header Icons */}
        <div className="hidden xl:flex items-center space-x-5">
          <a className="text-red-600" href="#">
            <BsSuitHeartFill className="text-xl" />
          </a>
          <a className="flex items-center " href="#">
            <BsCart4
              className={`text-xl ${isSticky ? "text-white" : "text-blue-900"}`}
            />
            <span className="flex absolute -mt-4 ml-4">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-pink-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
            </span>
          </a>
          <a className="flex items-center" href="#">
            <FaUserAlt
              className={`text-xl ${isSticky ? "text-white" : "text-blue-600"}`}
            />
          </a>
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

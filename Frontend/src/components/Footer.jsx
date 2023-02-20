import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 border-gray-100 pt-10 md:grid-cols-4 lg:grid-cols-6">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Brands</p>
              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Nikez
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Adidaz
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Pumaz
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Air-Jordnaz
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">
                Products We Sell
              </p>
              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Shoe
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Bags
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Sliders
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Hats
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Service</p>
              <nav aria-label="Footer Resources Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Free Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Money return
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Cards Accepted
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      No Shipment Fee
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>
              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat
                      </span>
                      <span className="relative -mr-2 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg font-medium text-gray-900">Stay in Touch</p>
              <div className="mx-auto mt-8 max-w-md sm:ml-0">
                <p className="text-center leading-relaxed text-gray-500 sm:text-left">
                  Want to get notify about the latest products?
                </p>
                <form className="mt-4">
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      className="w-full rounded-full px-6 py-3 shadow-lg bg-gray-100"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button
                      className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-300 pt-6 sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              Copyright © 2022-2023. All rights reserved by NEXOY.
            </p>
            <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-700 text-xl transition hover:text-red-700/75"
                >
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-pink-600 text-xl transition hover:text-blue-700/75"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-700 text-xl transition hover:text-red-700/75"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black text-xl transition hover:text-red-700/75"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

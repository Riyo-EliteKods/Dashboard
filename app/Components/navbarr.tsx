"use client";

import React, { useState } from "react";
import { AiFillGold } from "react-icons/ai";



const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-custom-brown border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <span className="font-extralight text-3xl bg-gradient-to-r from-orange-600 to-orange-400 p-1 ">Z</span>
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text p-1 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Zwappi
            </span>
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:flex md:w-auto gap-240 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium mb-2 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-orange-600 rounded md:bg-transparent md:hover:text-orange-700 md:hover:underline md:p-0 dark:text-white "
                  aria-current="page"
                >
                  Swap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:text-white  md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:hover:underline md:p-0 dark:text-white "
                >
                  Bridge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white  md:text-orange-700  md:hover:bg-transparent md:border-0  md:hover:border-b-2 md:hover:border-b-orange-800 md:p-0 dark:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:text-white  md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:hover:underline md:p-0 dark:text-white"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:text-white  md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:hover:underline md:p-0 dark:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-600 to-orange-400 p-2 rounded-2xl text-white"><span><AiFillGold /></span> <span>degentrades.lens</span></div>

          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;

/** @format */

import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center ">
          <a href="/" className="block">
            logo
          </a>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <img src="/square.png" width="32px" alt="hamburger-icon" />
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />

        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex item-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer">
            <img
              src="/jerry-seinfeld.jpg"
              alt="avatar"
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400 object-cover mt-4 lg:mt-0"
            />
          </a>
        </div>
      </header>
      <style jsx>
        {`
          #menu-toggle:checked + #menu {
            display: block;
          }
        `}
      </style>
    </>
  );
}

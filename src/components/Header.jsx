import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles.css";
import "../assets/dreamJob.css";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-around">
      {/* Title section  */}
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/JyyVqRB/genie.png"
          alt="Logo"
          className="h-9 mt-1 "
        />
        <span className="text-3xl text-gray-800 font-bold tracking-wide">
          <Link to="/"> Job Genie</Link>
        </span>
      </div>

      {/* Nav Items */}
      <nav className="">
        <ul className="items-center space-x-8 hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/applied"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blogs
          </NavLink>
        </ul>
      </nav>
      {/* btn  */}
      <div>
        <button className="pl-5 pr-5 pt-3 pb-3 start-applying rounded-lg  text-white st">
          Start Applying
        </button>
      </div>
      {/* Mobile Navbar Section */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-5 text-gray-60 mr-2" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-5 left-4 w-11/12  z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <img
                      src="https://i.ibb.co/JyyVqRB/genie.png"
                      alt="Logo"
                      className="h-9 mt-1 "
                    />
                    <span className="text-3xl text-gray-800 font-bold tracking-wide">
                      Job Genie
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link to="/statistics" className="default">
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/applied"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

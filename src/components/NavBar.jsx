import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.jpg";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-800 flex justify-between items-center p-1">
        <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/">
                    <a
                      href="#s"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </a>
                  </Link>
                  <Link to="/gallery">
                    <a
                      href="s"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Gallery
                    </a>
                  </Link>
                  <Link to="/dashboard">
                    <a
                      href="d"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Dashboard
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={logo} alt="" style={{ width: 60, borderRadius: "50%" }} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

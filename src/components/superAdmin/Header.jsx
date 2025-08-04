import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import {
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiShoppingCart,
} from "react-icons/fi";
import {
  MdAccountCircle,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import {  HiX , HiDotsVertical} from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-4  z-20">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-1">
        <TfiMenu
          className="text-xl text-gray-700 cursor-pointer  lg:hidden"
          onClick={toggleSidebar}
        />

        {/* Title centered on mobile */}
        <h1 className="text-2xl font-bold text-gray-700 mx-4 sm:mx-0 sm:text-left text-center w-full sm:w-auto">
          SCHOOL ERP
        </h1>
        <TfiMenu
          className="text-xl text-gray-700 cursor-pointer hidden ml-12 lg:block"
          onClick={toggleSidebar}
        />

        {/* Hide on small screens */}
        <div className="relative hidden sm:flex items-center ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FiSearch className="absolute left-2 top-1.5 text-gray-500 text-sm" />
        </div>

        <div className="hidden sm:block ml-2">
          {isFullscreen ? (
            <MdFullscreenExit
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={toggleFullscreen}
            />
          ) : (
            <MdFullscreen
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={toggleFullscreen}
            />
          )}
        </div>
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden sm:flex items-center gap-6">
        <FiMessageSquare className="text-xl text-gray-700 cursor-pointer" />
        <FiBell className="text-xl text-gray-700 cursor-pointer" />
        <FiShoppingCart className="text-xl text-gray-700 cursor-pointer" />

        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <MdAccountCircle className="text-xl text-gray-600" />
            <span className="text-sm font-medium">Institute Name</span>
            <IoMdArrowDropdown className="text-xl text-gray-600" />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <Link to={"#"} className="block px-4 py-2 hover:bg-gray-100">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to={"#"}className="block px-4 py-2 hover:bg-gray-100">
                    Change Password
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="block px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Mobile Toggle */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          {mobileMenuOpen ? <HiX /> : <HiDotsVertical />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute right-0 top-10 w-52 bg-white border rounded-md shadow-lg z-30">
            <ul className="py-2 px-2 text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <FiMessageSquare /> Messages
              </li>
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <FiBell /> Notifications
              </li>
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <FiShoppingCart /> Cart
              </li>
              <hr />
              <li className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <MdAccountCircle /> Profile
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Help</li>
              <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Change Password
              </li>
              <li className="px-2 py-1 text-red-600 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
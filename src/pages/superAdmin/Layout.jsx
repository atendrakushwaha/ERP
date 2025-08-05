"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { AiFillLeftCircle } from "react-icons/ai";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // open on desktop, closed on mobile
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar (Fixed) */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-30 bg-white border-r shadow transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-[50px] -right-4 w-10 h-10 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg z-50"
        >
          <AiFillLeftCircle
            size={24}
            className={`transform transition-transform duration-300 ${
              !sidebarOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 p-4 ${
          isMobile ? "ml-0" : sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

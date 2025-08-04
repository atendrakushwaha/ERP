import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/superAdmin/Header";
import Sidebar from "../../components/superAdmin/Sidebar";


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile); // auto-hide on small screen
    };

    handleResize(); // run on first load

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-30 px-4 flex items-center">
        <Header toggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar (overlay on mobile, static on desktop) */}
      {sidebarOpen && (
        <div
          className={`fixed top-16 bottom-0 z-20 transition-transform duration-300 bg-white border-r shadow ${
            isMobile ? "left-0 w-64" : "w-64 static"
          }`}
        >
          <Sidebar closeSidebar={isMobile ? () => setSidebarOpen(false) : null} />
        </div>
      )}

      {/* Main Content hjvghvghgh */}
      <div
        className={`pt-16 transition-all duration-300 ${
          isMobile ? "" : sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-4 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
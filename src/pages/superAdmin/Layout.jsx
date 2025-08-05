"use client"
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import GroupAdmins from "../../components/dashboard/group-admins";
import Subscriptions from "../../components/dashboard/subscriptions";
import Institutions from "../../components/dashboard/institutions";
import Analytics from "../../components/dashboard/analytics";
import Settings from "../../components/dashboard/settings";
import Sidebar from "../../components/dashboard/sidebar";
import { AiFillLeftCircle } from "react-icons/ai";

export default function Layout() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false); // Auto collapse on mobile
      } else {
        setSidebarOpen(true); // Default open on desktop
      }
    };

    handleResize(); // run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "group-admins":
        return <GroupAdmins />;
      case "subscriptions":
      case "active-plans":
      case "billing-history":
      case "payment-methods":
        return <Subscriptions />;
      case "institutions":
      case "all-institutions":
      case "colleges":
      case "schools":
      case "universities":
        return <Institutions />;
      case "analytics":
      case "revenue-reports":
      case "usage-stats":
      case "growth-metrics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar Wrapper */}
      <div className="relative h-screen">
        <div
          className={`transition-all duration-300 h-full ${
            sidebarOpen ? "w-64" : "w-20"
          }`}
        >
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            sidebarOpen={sidebarOpen}
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 rounded-full absolute top-[50px] -right-4 shadow-lg z-50"
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
      <div className="flex-1 overflow-auto transition-all duration-300 p-4">
        {renderContent()}
      </div>
    </div>
  );
}

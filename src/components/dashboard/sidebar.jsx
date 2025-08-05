"use client";
import {
  LayoutDashboard,
  Users,
  Building2,
  CreditCard,
  BarChart3,
  Settings,
  Bell,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  UserCheck,
  Shield,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Utility to convert label to slug (for paths)
const toSlug = (label) => label.toLowerCase().replace(/\s+/g, "-");

// Initial base structure
const rawMenu = [
  { icon: LayoutDashboard, label: "Dashboard" },
  {
    icon: Users,
    label: "User Management",
    submenu: [
      { label: "Group Admins" },
      { label: "Institution Admins" },
      { label: "All Users" },
    ],
  },
  {
    icon: Building2,
    label: "Institutions",
    submenu: [
      { label: "All Institutions" },
      { label: "Colleges" },
      { label: "Schools" },
      { label: "Universities" },
    ],
  },
  {
    icon: CreditCard,
    label: "Subscriptions",
    submenu: [
      { label: "Active Plans" },
      { label: "Billing History" },
      { label: "Payment Methods" },
    ],
  },
  {
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { label: "Revenue Reports" },
      { label: "Usage Statistics" },
      { label: "Growth Metrics" },
    ],
  },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Support" },
  { icon: Settings, label: "Settings" },
];

// Final transformed menu with paths
const generateMenuItems = () =>
  rawMenu.map((item) => {
    const id = toSlug(item.label);
    if (item.submenu) {
      return {
        ...item,
        id,
        submenu: item.submenu.map((sub) => ({
          ...sub,
          id: toSlug(sub.label),
          path: `/admin/${id}/${toSlug(sub.label)}`,
        })),
      };
    } else {
      return {
        ...item,
        id,
        path: `/admin/${id}`,
      };
    }
  });

export default function Sidebar({ sidebarOpen }) {
  const menuItems = generateMenuItems();
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const isActive = (id) => location.pathname.includes(id);
  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-full bg-gray-900 text-white flex flex-col relative">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-700 flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6" />
        </div>
        {sidebarOpen && (
          <div>
            <h1 className="text-lg font-bold">ERP Master</h1>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-2 overflow-auto no-scrollbar">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Item with submenu */}
            {item.submenu ? (
              <button
                onClick={() => toggleExpanded(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  isActive(item.id) ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                </div>
                {sidebarOpen &&
                  (expandedItems[item.id] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  ))}
              </button>
            ) : (
              // Direct item
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive(item.id) ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="ml-3 text-sm font-medium">{item.label}</span>}
              </Link>
            )}

            {/* Flyout submenu when collapsed */}
            {!sidebarOpen && item.submenu && (
              <div className="absolute left-full top-0 ml-2 z-50 hidden group-hover:block">
                <div className="bg-gray-800 text-white rounded shadow-lg w-fit px-2 py-1">
                  <div className="text-sm font-bold px-2 py-1">{item.label}</div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.path}
                      className={`block text-sm px-3 py-1 rounded hover:bg-blue-600 ${
                        isActive(subItem.id) ? "bg-blue-600" : ""
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Submenu when expanded */}
            {item.submenu && expandedItems[item.id] && sidebarOpen && (
              <div className="ml-8 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    className={`block text-sm p-2 rounded hover:bg-gray-800 transition-colors ${
                      isActive(subItem.id) ? "bg-blue-600" : ""
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>
          {sidebarOpen && (
            <div>
              <p className="text-sm font-medium">Super Admin</p>
              <p className="text-xs text-gray-400">admin@erpmaster.com</p>
            </div>
          )}
        </div>
        {sidebarOpen && (
          <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        )}
      </div>
    </div>
  );
}

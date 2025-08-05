"use client"

import { useState } from "react"
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
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  {
    icon: Users,
    label: "User Management",
    id: "users",
    submenu: [
      { label: "Group Admins", id: "group-admins" },
      { label: "Institution Admins", id: "institution-admins" },
      { label: "All Users", id: "all-users" },
    ],
  },
  {
    icon: Building2,
    label: "Institutions",
    id: "institutions",
    submenu: [
      { label: "All Institutions", id: "all-institutions" },
      { label: "Colleges", id: "colleges" },
      { label: "Schools", id: "schools" },
      { label: "Universities", id: "universities" },
    ],
  },
  {
    icon: CreditCard,
    label: "Subscriptions",
    id: "subscriptions",
    submenu: [
      { label: "Active Plans", id: "active-plans" },
      { label: "Billing History", id: "billing-history" },
      { label: "Payment Methods", id: "payment-methods" },
    ],
  },
  {
    icon: BarChart3,
    label: "Analytics",
    id: "analytics",
    submenu: [
      { label: "Revenue Reports", id: "revenue-reports" },
      { label: "Usage Statistics", id: "usage-stats" },
      { label: "Growth Metrics", id: "growth-metrics" },
    ],
  },
  { icon: Bell, label: "Notifications", id: "notifications" },
  { icon: HelpCircle, label: "Support", id: "support" },
  { icon: Settings, label: "Settings", id: "settings" },
]

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-full bg-gray-900 text-white flex flex-col">
      {/* Logo */}
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
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.id);
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                activeTab === item.id ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                {sidebarOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
              {item.submenu && sidebarOpen && (
                expandedItems[item.id] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
            </button>

            {/* Submenu */}
            {item.submenu && expandedItems[item.id] && sidebarOpen && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => setActiveTab(subItem.id)}
                    className={`w-full text-left p-2 rounded text-sm transition-colors ${
                      activeTab === subItem.id
                        ? "bg-blue-600"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
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


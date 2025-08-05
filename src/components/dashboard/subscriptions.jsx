"use client"

import { useState } from "react"
import { Search, Plus, Calendar, AlertTriangle, CheckCircle, DollarSign, Users, Building2 } from "lucide-react"

const subscriptions = [
  {
    id: 1,
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    plan: "Premium",
    price: "₹25,000",
    billing: "Monthly",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    institutions: 12,
    students: 15420,
    features: ["Unlimited Students", "Advanced Analytics", "Priority Support"],
    paymentStatus: "paid",
    nextBilling: "2024-02-15",
  },
  {
    id: 2,
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    plan: "Standard",
    price: "₹15,000",
    billing: "Monthly",
    status: "active",
    startDate: "2024-02-20",
    endDate: "2025-02-20",
    institutions: 8,
    students: 9870,
    features: ["Up to 10,000 Students", "Basic Analytics", "Email Support"],
    paymentStatus: "paid",
    nextBilling: "2024-03-20",
  },
  {
    id: 3,
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    plan: "Enterprise",
    price: "₹50,000",
    billing: "Yearly",
    status: "expired",
    startDate: "2023-11-10",
    endDate: "2024-11-10",
    institutions: 15,
    students: 12350,
    features: ["Unlimited Everything", "Custom Features", "24/7 Support"],
    paymentStatus: "failed",
    nextBilling: "2024-11-10",
  },
  {
    id: 4,
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    plan: "Standard",
    price: "₹15,000",
    billing: "Monthly",
    status: "trial",
    startDate: "2024-03-05",
    endDate: "2024-04-05",
    institutions: 6,
    students: 7230,
    features: ["Up to 10,000 Students", "Basic Analytics", "Email Support"],
    paymentStatus: "pending",
    nextBilling: "2024-04-05",
  },
]

const plans = [
  {
    name: "Basic",
    price: "₹5,000",
    billing: "Monthly",
    features: ["Up to 1,000 Students", "Basic Features", "Email Support"],
    color: "bg-gray-500",
  },
  {
    name: "Standard",
    price: "₹15,000",
    billing: "Monthly",
    features: ["Up to 10,000 Students", "Advanced Features", "Priority Support"],
    color: "bg-blue-500",
  },
  {
    name: "Premium",
    price: "₹25,000",
    billing: "Monthly",
    features: ["Up to 50,000 Students", "Premium Features", "Phone Support"],
    color: "bg-purple-500",
  },
  {
    name: "Enterprise",
    price: "₹50,000",
    billing: "Monthly",
    features: ["Unlimited Students", "Custom Features", "24/7 Support"],
    color: "bg-orange-500",
  },
]

export default function Subscriptions() {
  const [activeTab, setActiveTab] = useState("active")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesSearch =
      sub.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === "all" || sub.status === activeTab
    return matchesSearch && matchesTab
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "expired":
        return "bg-red-100 text-red-800"
      case "trial":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscriptions</h1>
          <p className="text-gray-600 mt-2">Manage all subscription plans and billing</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Subscription</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₹12,45,000</p>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">1,234</p>
              <p className="text-sm text-blue-600 mt-1">+8.2% from last month</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Expired/Failed</p>
              <p className="text-2xl font-bold text-red-600 mt-2">45</p>
              <p className="text-sm text-red-600 mt-1">Needs attention</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Trial Users</p>
              <p className="text-2xl font-bold text-yellow-600 mt-2">89</p>
              <p className="text-sm text-yellow-600 mt-1">Potential conversions</p>
            </div>
            <Users className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className={`w-full h-2 ${plan.color} rounded-full mb-3`}></div>
              <h3 className="font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">{plan.price}</p>
              <p className="text-sm text-gray-600 mb-3">per {plan.billing.toLowerCase()}</p>
              <ul className="space-y-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by admin name or organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            {["all", "active", "trial", "expired"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Group Admin</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Plan Details</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Usage</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Payment</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Next Billing</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSubscriptions.map((subscription) => (
                <tr key={subscription.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{subscription.groupAdmin}</p>
                      <p className="text-sm text-gray-600">{subscription.organization}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{subscription.plan}</p>
                      <p className="text-sm text-gray-600">
                        {subscription.price}/{subscription.billing}
                      </p>
                      <p className="text-xs text-gray-500">Started: {subscription.startDate}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Building2 className="w-3 h-3 mr-1 text-gray-400" />
                        <span>{subscription.institutions} institutions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1 text-gray-400" />
                        <span>{subscription.students.toLocaleString()} students</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(subscription.status)}`}
                    >
                      {subscription.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(subscription.paymentStatus)}`}
                    >
                      {subscription.paymentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {subscription.nextBilling}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Cancel</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { CreditCard, Plus, Settings, Eye, Edit, Trash2, CheckCircle, XCircle, AlertTriangle, DollarSign, TrendingUp, Activity, Zap, Shield, Clock } from 'lucide-react'

const paymentGateways = [
  {
    id: 1,
    name: "Razorpay",
    logo: "/placeholder.svg?height=40&width=120&text=Razorpay",
    status: "active",
    transactionFee: 2.0,
    setupFee: 0,
    monthlyFee: 0,
    supportedMethods: ["Credit Card", "Debit Card", "Net Banking", "UPI", "Wallets"],
    totalTransactions: 15420,
    totalVolume: 45600000,
    successRate: 96.8,
    avgProcessingTime: "2.3s",
    lastTransaction: "2024-01-15T14:30:00Z",
    apiKey: "rzp_live_1234567890",
    webhookUrl: "https://api.erpmaster.com/webhooks/razorpay",
    isDefault: true,
  },
  {
    id: 2,
    name: "PayU",
    logo: "/placeholder.svg?height=40&width=120&text=PayU",
    status: "active",
    transactionFee: 2.5,
    setupFee: 5000,
    monthlyFee: 1000,
    supportedMethods: ["Credit Card", "Debit Card", "Net Banking", "EMI"],
    totalTransactions: 8930,
    totalVolume: 28900000,
    successRate: 94.2,
    avgProcessingTime: "3.1s",
    lastTransaction: "2024-01-15T12:45:00Z",
    apiKey: "payu_live_9876543210",
    webhookUrl: "https://api.erpmaster.com/webhooks/payu",
    isDefault: false,
  },
  {
    id: 3,
    name: "Stripe",
    logo: "/placeholder.svg?height=40&width=120&text=Stripe",
    status: "inactive",
    transactionFee: 2.9,
    setupFee: 0,
    monthlyFee: 0,
    supportedMethods: ["Credit Card", "Debit Card", "International Cards"],
    totalTransactions: 2340,
    totalVolume: 8900000,
    successRate: 97.5,
    avgProcessingTime: "1.8s",
    lastTransaction: "2024-01-10T09:20:00Z",
    apiKey: "sk_live_abcdef123456",
    webhookUrl: "https://api.erpmaster.com/webhooks/stripe",
    isDefault: false,
  },
  {
    id: 4,
    name: "PhonePe",
    logo: "/placeholder.svg?height=40&width=120&text=PhonePe",
    status: "active",
    transactionFee: 1.5,
    setupFee: 0,
    monthlyFee: 0,
    supportedMethods: ["UPI", "Wallets"],
    totalTransactions: 5670,
    totalVolume: 12300000,
    successRate: 98.1,
    avgProcessingTime: "1.2s",
    lastTransaction: "2024-01-15T16:10:00Z",
    apiKey: "phonepe_live_xyz789",
    webhookUrl: "https://api.erpmaster.com/webhooks/phonepe",
    isDefault: false,
  },
]

const paymentStats = [
  {
    title: "Total Gateways",
    value: "4",
    change: "+1",
    changeType: "positive",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    title: "Active Gateways",
    value: "3",
    change: "0",
    changeType: "neutral",
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    title: "Total Volume",
    value: "₹9.58Cr",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-purple-500",
  },
  {
    title: "Avg Success Rate",
    value: "96.7%",
    change: "+0.8%",
    changeType: "positive",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
]

const transactionMethods = [
  { method: "Credit Card", transactions: 12450, volume: 38900000, percentage: 42.3, avgTicket: 3125 },
  { method: "Net Banking", transactions: 9870, volume: 28600000, percentage: 31.1, avgTicket: 2898 },
  { method: "UPI", transactions: 8930, volume: 15400000, percentage: 16.7, avgTicket: 1725 },
  { method: "Debit Card", transactions: 5670, volume: 8900000, percentage: 9.9, avgTicket: 1570 },
]

export default function PaymentMethods() {
  const [selectedGateway, setSelectedGateway] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredGateways = paymentGateways.filter(gateway => 
    filterStatus === "all" || gateway.status === filterStatus
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600 mt-2">Manage payment gateways and transaction methods</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Settings className="w-4 h-4" />
            <span>Gateway Settings</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Gateway</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "positive" ? "text-green-600" : 
                      stat.changeType === "negative" ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">this month</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Filter by status:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Gateways</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Payment Gateways */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGateways.map((gateway) => (
          <div
            key={gateway.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={gateway.logo || "/placeholder.svg"}
                  alt={gateway.name}
                  className="w-20 h-10 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{gateway.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(gateway.status)}`}>
                      {gateway.status}
                    </span>
                    {gateway.isDefault && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Default
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Transaction Fee</p>
                <p className="text-lg font-semibold text-gray-900">{gateway.transactionFee}%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Success Rate</p>
                <p className="text-lg font-semibold text-green-600">{gateway.successRate}%</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Total Volume</p>
                <p className="text-lg font-semibold text-blue-600">₹{(gateway.totalVolume / 10000000).toFixed(1)}Cr</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Transactions</p>
                <p className="text-lg font-semibold text-purple-600">{gateway.totalTransactions.toLocaleString()}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Supported Methods:</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{gateway.avgProcessingTime}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {gateway.supportedMethods.map((method, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {method}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Last Transaction: {formatDate(gateway.lastTransaction)}</span>
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Methods Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction Methods Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Payment Method</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Transactions</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Volume</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Market Share</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Avg Ticket Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactionMethods.map((method, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        method.method === 'Credit Card' ? 'bg-blue-500' :
                        method.method === 'Net Banking' ? 'bg-green-500' :
                        method.method === 'UPI' ? 'bg-purple-500' : 'bg-orange-500'
                      }`}></div>
                      <span className="font-medium text-gray-900">{method.method}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-900">{method.transactions.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-gray-900">₹{(method.volume / 10000000).toFixed(1)}Cr</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{method.percentage}%</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${method.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-900">₹{method.avgTicket.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Excellent</span>
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

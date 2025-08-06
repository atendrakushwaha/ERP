"use client"

import { useState } from "react"
import { Search, Filter, Download, Calendar, CreditCard, CheckCircle, XCircle, Clock, AlertTriangle, Eye, RefreshCw, DollarSign, TrendingUp, Users, Building2 } from 'lucide-react'

const billingTransactions = [
  {
    id: "TXN-2024-001",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    plan: "Enterprise",
    amount: 102000,
    status: "completed",
    paymentMethod: "Credit Card",
    transactionDate: "2024-01-15T10:30:00Z",
    dueDate: "2024-01-15T00:00:00Z",
    invoiceNumber: "INV-2024-001",
    billingPeriod: "Jan 2024 - Dec 2024",
    institutions: 12,
    students: 15420,
    paymentGateway: "Razorpay",
    gatewayTransactionId: "pay_123456789",
  },
  {
    id: "TXN-2024-002",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    plan: "Premium",
    amount: 60000,
    status: "completed",
    paymentMethod: "Net Banking",
    transactionDate: "2024-01-12T14:20:00Z",
    dueDate: "2024-01-12T00:00:00Z",
    invoiceNumber: "INV-2024-002",
    billingPeriod: "Jan 2024 - Dec 2024",
    institutions: 8,
    students: 9870,
    paymentGateway: "PayU",
    gatewayTransactionId: "payu_987654321",
  },
  {
    id: "TXN-2024-003",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    plan: "Enterprise",
    amount: 102000,
    status: "failed",
    paymentMethod: "Credit Card",
    transactionDate: "2024-01-10T09:15:00Z",
    dueDate: "2024-01-10T00:00:00Z",
    invoiceNumber: "INV-2024-003",
    billingPeriod: "Jan 2024 - Dec 2024",
    institutions: 15,
    students: 12350,
    paymentGateway: "Razorpay",
    gatewayTransactionId: "pay_failed_123",
    failureReason: "Insufficient funds",
  },
  {
    id: "TXN-2024-004",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    plan: "Standard",
    amount: 40000,
    status: "pending",
    paymentMethod: "UPI",
    transactionDate: "2024-01-08T16:45:00Z",
    dueDate: "2024-01-08T00:00:00Z",
    invoiceNumber: "INV-2024-004",
    billingPeriod: "Jan 2024 - Dec 2024",
    institutions: 6,
    students: 7230,
    paymentGateway: "PhonePe",
    gatewayTransactionId: "phonepe_pending_456",
  },
  {
    id: "TXN-2024-005",
    groupAdmin: "Vikram Singh",
    organization: "Punjab Education Alliance",
    plan: "Premium",
    amount: 60000,
    status: "refunded",
    paymentMethod: "Credit Card",
    transactionDate: "2024-01-05T11:30:00Z",
    dueDate: "2024-01-05T00:00:00Z",
    invoiceNumber: "INV-2024-005",
    billingPeriod: "Jan 2024 - Dec 2024",
    institutions: 9,
    students: 8900,
    paymentGateway: "Stripe",
    gatewayTransactionId: "stripe_refund_789",
    refundReason: "Service cancellation",
    refundDate: "2024-01-07T10:00:00Z",
  },
]

const billingStats = [
  {
    title: "Total Transactions",
    value: "1,247",
    change: "+23",
    changeType: "positive",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    title: "Successful Payments",
    value: "1,189",
    change: "+18",
    changeType: "positive",
    icon: CheckCircle,
    color: "bg-green-500",
  },
  {
    title: "Failed Transactions",
    value: "45",
    change: "+3",
    changeType: "negative",
    icon: XCircle,
    color: "bg-red-500",
  },
  {
    title: "Pending Payments",
    value: "13",
    change: "+2",
    changeType: "negative",
    icon: Clock,
    color: "bg-orange-500",
  },
]

const paymentMethods = [
  { method: "Credit Card", count: 456, percentage: 36.6, amount: 4560000 },
  { method: "Net Banking", count: 389, percentage: 31.2, amount: 3890000 },
  { method: "UPI", count: 234, percentage: 18.8, amount: 2340000 },
  { method: "Debit Card", count: 168, percentage: 13.4, amount: 1680000 },
]

export default function BillingHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPlan, setFilterPlan] = useState("all")
  const [filterPaymentMethod, setFilterPaymentMethod] = useState("all")
  const [dateRange, setDateRange] = useState("30days")
  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const filteredTransactions = billingTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    const matchesPlan = filterPlan === "all" || transaction.plan === filterPlan
    const matchesPaymentMethod = filterPaymentMethod === "all" || transaction.paymentMethod === filterPaymentMethod
    return matchesSearch && matchesStatus && matchesPlan && matchesPaymentMethod
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "refunded":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return CheckCircle
      case "pending":
        return Clock
      case "failed":
        return XCircle
      case "refunded":
        return RefreshCw
      default:
        return AlertTriangle
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

  const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const successfulTransactions = filteredTransactions.filter(t => t.status === "completed").length
  const successRate = ((successfulTransactions / filteredTransactions.length) * 100).toFixed(1)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing History</h1>
          <p className="text-gray-600 mt-2">Complete transaction history and payment records</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Advanced Filter</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {billingStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "positive" ? "text-green-600" : "text-red-600"
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Transaction Summary</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Amount</span>
              <span className="font-semibold text-gray-900">₹{(totalAmount / 100000).toFixed(1)}L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Success Rate</span>
              <span className="font-semibold text-green-600">{successRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Avg Transaction</span>
              <span className="font-semibold text-blue-600">₹{(totalAmount / filteredTransactions.length / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
            <CreditCard className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-3">
            {paymentMethods.slice(0, 3).map((method, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{method.method}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{method.percentage}%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="space-y-3">
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Last Transaction</p>
              <p className="font-semibold text-gray-900">2 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Largest Payment</p>
              <p className="font-semibold text-green-600">₹1,02,000</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Failed Today</p>
              <p className="font-semibold text-red-600">3 transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
          <select
            value={filterPlan}
            onChange={(e) => setFilterPlan(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Plans</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
          </select>
          <select
            value={filterPaymentMethod}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Methods</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Debit Card">Debit Card</option>
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Transaction Details</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Customer</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Amount</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Payment Method</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => {
                const StatusIcon = getStatusIcon(transaction.status)
                return (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.id}</p>
                        <p className="text-sm text-gray-600">{transaction.invoiceNumber}</p>
                        <p className="text-xs text-gray-500">{transaction.billingPeriod}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.groupAdmin}</p>
                        <p className="text-sm text-gray-600">{transaction.organization}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                            transaction.plan === 'Premium' ? 'bg-blue-100 text-blue-800' :
                            transaction.plan === 'Standard' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {transaction.plan}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-900">₹{transaction.amount.toLocaleString()}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                          <Building2 className="w-3 h-3" />
                          <span>{transaction.institutions} institutions</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="w-4 h-4" />
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </div>
                      {transaction.status === 'failed' && transaction.failureReason && (
                        <p className="text-xs text-red-600 mt-1">{transaction.failureReason}</p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{transaction.paymentMethod}</p>
                        <p className="text-xs text-gray-500">{transaction.paymentGateway}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm text-gray-900">{formatDate(transaction.transactionDate)}</p>
                        <p className="text-xs text-gray-500">Due: {formatDate(transaction.dueDate)}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setSelectedTransaction(transaction)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          <Download className="w-4 h-4" />
                        </button>
                        {transaction.status === 'failed' && (
                          <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {filteredTransactions.length} of {billingTransactions.length} transactions
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

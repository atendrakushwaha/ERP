"use client"

import { useState } from "react"
import { HelpCircle, MessageSquare, Phone, Mail, Search, Plus, Clock, CheckCircle, AlertTriangle, User, Calendar, FileText, Send, Paperclip, Star, ThumbsUp, Book, Video, Download } from 'lucide-react'

const supportTickets = [
  {
    id: "TKT-001",
    title: "Payment Gateway Integration Issue",
    description: "Unable to process payments through Razorpay gateway. Getting error code 400.",
    status: "open",
    priority: "high",
    category: "technical",
    createdBy: "Rajesh Kumar",
    organization: "Delhi Education Group",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:20:00Z",
    assignedTo: "Technical Team",
  },
  {
    id: "TKT-002",
    title: "Bulk Student Import Not Working",
    description: "CSV import feature is failing for files with more than 1000 records.",
    status: "in-progress",
    priority: "medium",
    category: "feature",
    createdBy: "Priya Sharma",
    organization: "Mumbai Education Network",
    createdAt: "2024-01-14T09:15:00Z",
    updatedAt: "2024-01-15T11:30:00Z",
    assignedTo: "Development Team",
  },
  {
    id: "TKT-003",
    title: "Request for Custom Report",
    description: "Need a custom attendance report with parent contact details included.",
    status: "resolved",
    priority: "low",
    category: "request",
    createdBy: "Amit Patel",
    organization: "Gujarat Education Hub",
    createdAt: "2024-01-13T16:45:00Z",
    updatedAt: "2024-01-14T10:20:00Z",
    assignedTo: "Support Team",
  },
  {
    id: "TKT-004",
    title: "Account Access Issue",
    description: "Group admin unable to login after password reset. Getting authentication error.",
    status: "open",
    priority: "high",
    category: "account",
    createdBy: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    createdAt: "2024-01-15T08:20:00Z",
    updatedAt: "2024-01-15T08:20:00Z",
    assignedTo: "Support Team",
  },
]

const faqData = [
  {
    id: 1,
    question: "How do I add a new institution to my group?",
    answer: "To add a new institution, go to Institutions > Add Institution. Fill in the required details including institution name, type, address, and contact information. The institution will be activated after verification.",
    category: "institutions",
    helpful: 45,
  },
  {
    id: 2,
    question: "How can I upgrade my subscription plan?",
    answer: "You can upgrade your subscription by going to Subscriptions > Current Plan > Upgrade. Choose your desired plan and complete the payment process. The upgrade will be effective immediately.",
    category: "billing",
    helpful: 38,
  },
  {
    id: 3,
    question: "What payment methods are supported?",
    answer: "We support multiple payment methods including Credit/Debit Cards, Net Banking, UPI, and Bank Transfers. All payments are processed securely through our payment partners.",
    category: "billing",
    helpful: 52,
  },
  {
    id: 4,
    question: "How do I reset a group admin's password?",
    answer: "Go to User Management > Group Admins, find the user, and click on 'Reset Password'. The user will receive an email with password reset instructions.",
    category: "users",
    helpful: 29,
  },
]

const supportStats = [
  {
    title: "Open Tickets",
    value: "23",
    change: "+5",
    changeType: "positive",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    title: "Avg Response Time",
    value: "2.5h",
    change: "-0.5h",
    changeType: "negative",
    icon: Clock,
    color: "bg-green-500",
  },
  {
    title: "Resolution Rate",
    value: "94%",
    change: "+2%",
    changeType: "positive",
    icon: CheckCircle,
    color: "bg-purple-500",
  },
  {
    title: "Satisfaction Score",
    value: "4.8",
    change: "+0.2",
    changeType: "positive",
    icon: Star,
    color: "bg-orange-500",
  },
]

export default function Support() {
  const [activeTab, setActiveTab] = useState("tickets")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [showNewTicketModal, setShowNewTicketModal] = useState(false)

  const filteredTickets = supportTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.createdBy.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || ticket.status === filterStatus
    const matchesPriority = filterPriority === "all" || ticket.priority === filterPriority
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-IN", {
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
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600 mt-2">Get help and support for your ERP system</p>
        </div>
        <button
          onClick={() => setShowNewTicketModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {supportStats.map((stat, index) => (
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
                  <span className="text-sm text-gray-500 ml-1">this week</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-4">Get immediate help from our support team</p>
          <p className="text-xl font-bold text-blue-600 mb-4">+91 1800-123-4567</p>
          <p className="text-sm text-gray-500">Mon-Fri: 9 AM - 6 PM IST</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">Send us your queries and we'll respond within 24 hours</p>
          <p className="text-lg font-bold text-green-600 mb-4">support@erpmaster.com</p>
          <p className="text-sm text-gray-500">Response within 24 hours</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4">Chat with our support agents in real-time</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Start Chat
          </button>
          <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex space-x-2 mb-6">
          {["tickets", "faq", "resources"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab === "faq" ? "FAQ" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "tickets" && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Tickets List */}
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
                        <span className="text-sm font-medium text-gray-500">#{ticket.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {ticket.status.replace("-", " ")}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {ticket.createdBy} ({ticket.organization})
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Created: {formatTimestamp(ticket.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Updated: {formatTimestamp(ticket.updatedAt)}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Assigned to:</span>
                      <span className="text-sm font-medium text-gray-900">{ticket.assignedTo}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Category:</span>
                      <span className="text-sm font-medium text-gray-900 capitalize">{ticket.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="space-y-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQ..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-4">
                      {faq.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{faq.answer}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Was this helpful?</span>
                      <button className="flex items-center space-x-1 text-green-600 hover:text-green-700">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">Yes ({faq.helpful})</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Manual</h3>
                <p className="text-gray-600 mb-4">Complete guide to using the ERP system</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Step-by-step video guides</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Watch Videos
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Documentation</h3>
                <p className="text-gray-600 mb-4">Technical documentation for developers</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Docs
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                  <FileText className="w-4 h-4" />
                  <span>Getting Started Guide</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                  <FileText className="w-4 h-4" />
                  <span>System Requirements</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                  <FileText className="w-4 h-4" />
                  <span>Troubleshooting Guide</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                  <FileText className="w-4 h-4" />
                  <span>Best Practices</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

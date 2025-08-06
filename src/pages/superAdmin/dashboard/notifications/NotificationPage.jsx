"use client"

import { useState } from "react"
import { Bell, AlertTriangle, CheckCircle, Info, X, Search, Filter, MoreVertical, Eye, Trash2, Settings, Users, CreditCard, Building2, Calendar, Clock } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Payment Failed - Chennai Education Network",
    message: "Payment of ₹25,000 failed for Chennai Education Network. Please follow up immediately.",
    timestamp: "2024-01-15T10:30:00Z",
    isRead: false,
    priority: "high",
    category: "billing",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 2,
    type: "success",
    title: "New Group Admin Registered",
    message: "Rajesh Kumar from Delhi Education Group has successfully registered as Group Admin.",
    timestamp: "2024-01-15T09:15:00Z",
    isRead: false,
    priority: "medium",
    category: "user",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 3,
    type: "info",
    title: "System Maintenance Scheduled",
    message: "Scheduled maintenance on January 20th from 2:00 AM to 4:00 AM IST. All users will be notified.",
    timestamp: "2024-01-15T08:45:00Z",
    isRead: true,
    priority: "low",
    category: "system",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    type: "alert",
    title: "High Server Load Detected",
    message: "Server load is above 85%. Consider scaling resources or optimizing performance.",
    timestamp: "2024-01-15T07:20:00Z",
    isRead: true,
    priority: "high",
    category: "system",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 5,
    type: "success",
    title: "New Institution Added",
    message: "St. Mary's College has been successfully added to Mumbai Education Network.",
    timestamp: "2024-01-15T06:10:00Z",
    isRead: true,
    priority: "medium",
    category: "institution",
    icon: Building2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 6,
    type: "info",
    title: "Monthly Report Generated",
    message: "December 2023 monthly report has been generated and is ready for download.",
    timestamp: "2024-01-15T05:30:00Z",
    isRead: true,
    priority: "low",
    category: "report",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
]

const notificationStats = [
  {
    title: "Total Notifications",
    value: "156",
    change: "+12",
    changeType: "positive",
    icon: Bell,
    color: "bg-blue-500",
  },
  {
    title: "Unread",
    value: "23",
    change: "+5",
    changeType: "positive",
    icon: Eye,
    color: "bg-orange-500",
  },
  {
    title: "High Priority",
    value: "8",
    change: "+2",
    changeType: "positive",
    icon: AlertTriangle,
    color: "bg-red-500",
  },
  {
    title: "System Alerts",
    value: "12",
    change: "-3",
    changeType: "negative",
    icon: Settings,
    color: "bg-purple-500",
  },
]

export default function Notifications() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedNotifications, setSelectedNotifications] = useState([])

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || notification.category === filterCategory
    const matchesPriority = filterPriority === "all" || notification.priority === filterPriority
    const matchesStatus = filterStatus === "all" || 
      (filterStatus === "read" && notification.isRead) ||
      (filterStatus === "unread" && !notification.isRead)
    return matchesSearch && matchesCategory && matchesPriority && matchesStatus
  })

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    return date.toLocaleDateString()
  }

  const markAsRead = (id) => {
    // Implementation for marking notification as read
    console.log("Mark as read:", id)
  }

  const deleteNotification = (id) => {
    // Implementation for deleting notification
    console.log("Delete notification:", id)
  }

  const markAllAsRead = () => {
    // Implementation for marking all as read
    console.log("Mark all as read")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-2">Stay updated with system alerts and important updates</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={markAllAsRead}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Mark All Read
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Settings className="w-4 h-4 mr-2 inline" />
            Settings
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {notificationStats.map((stat, index) => (
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

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="billing">Billing</option>
              <option value="user">User</option>
              <option value="system">System</option>
              <option value="institution">Institution</option>
              <option value="report">Report</option>
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
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition-colors ${
                !notification.isRead ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 ${notification.bgColor} rounded-lg flex items-center justify-center border ${notification.borderColor}`}>
                  <notification.icon className={`w-5 h-5 ${notification.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className={`text-sm font-semibold ${!notification.isRead ? "text-gray-900" : "text-gray-700"}`}>
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            notification.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : notification.priority === "medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {notification.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatTimestamp(notification.timestamp)}
                        </div>
                        <span className="capitalize">{notification.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600"
                          title="Mark as read"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredNotifications.length === 0 && (
          <div className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length > 0 && (
        <div className="text-center">
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Load More Notifications
          </button>
        </div>
      )}
    </div>
  )
}

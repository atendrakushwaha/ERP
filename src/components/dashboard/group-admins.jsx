"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Building2,
  Users,
} from "lucide-react"

const groupAdmins = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@delhiedu.com",
    phone: "+91 9876543210",
    organization: "Delhi Education Group",
    institutions: 12,
    students: 15420,
    subscriptionPlan: "Premium",
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@mumbaigroup.com",
    phone: "+91 9876543211",
    organization: "Mumbai Education Network",
    institutions: 8,
    students: 9870,
    subscriptionPlan: "Standard",
    status: "active",
    joinDate: "2024-02-20",
    lastLogin: "1 day ago",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@gujaratedu.com",
    phone: "+91 9876543212",
    organization: "Gujarat Education Hub",
    institutions: 15,
    students: 12350,
    subscriptionPlan: "Enterprise",
    status: "inactive",
    joinDate: "2023-11-10",
    lastLogin: "1 week ago",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    email: "sunita@hyderabadedu.com",
    phone: "+91 9876543213",
    organization: "Hyderabad Schools Group",
    institutions: 6,
    students: 7230,
    subscriptionPlan: "Standard",
    status: "active",
    joinDate: "2024-03-05",
    lastLogin: "3 hours ago",
  },
]

export default function GroupAdmins() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredAdmins = groupAdmins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || admin.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Group Admins</h1>
          <p className="text-gray-600 mt-2">Manage all group administrators and their organizations</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Group Admin</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Group Admins</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">234</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Admins</p>
              <p className="text-2xl font-bold text-green-600 mt-2">198</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inactive Admins</p>
              <p className="text-2xl font-bold text-red-600 mt-2">36</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Institutions</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">856</p>
            </div>
            <Building2 className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Group Admins Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Admin Details</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Organization</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Institutions</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Students</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Plan</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Last Login</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredAdmins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{admin.name}</p>
                      <p className="text-sm text-gray-600">{admin.email}</p>
                      <p className="text-sm text-gray-600">{admin.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900">{admin.organization}</p>
                    <p className="text-sm text-gray-600">Joined: {admin.joinDate}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                      {admin.institutions}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{admin.students.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        admin.subscriptionPlan === "Enterprise"
                          ? "bg-purple-100 text-purple-800"
                          : admin.subscriptionPlan === "Premium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {admin.subscriptionPlan}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        admin.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600">{admin.lastLogin}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
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

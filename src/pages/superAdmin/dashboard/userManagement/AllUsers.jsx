"use client"

import { useState } from "react"
import { Search, Filter, Plus, Users, Shield, UserCheck, Eye, Edit, Trash2, MoreVertical, Calendar, Mail, Phone, Building2, GraduationCap, School, Download, Upload } from 'lucide-react'

const allUsers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@delhiedu.com",
    phone: "+91 9876543210",
    role: "Group Admin",
    organization: "Delhi Education Group",
    institutions: 12,
    students: 15420,
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
    permissions: ["Full Access", "User Management", "Billing"],
    avatar: "/placeholder.svg?height=40&width=40&text=RK",
    location: "New Delhi, India",
    subscriptionPlan: "Enterprise",
    department: "Administration",
    experience: "8 years"
  },
  {
    id: 2,
    name: "Dr. Meera Sharma",
    email: "meera@dpsvk.com",
    phone: "+91 9876543211",
    role: "Institution Admin",
    organization: "Delhi Public School, Vasant Kunj",
    institutions: 1,
    students: 2500,
    status: "active",
    joinDate: "2024-02-20",
    lastLogin: "1 day ago",
    permissions: ["Institution Management", "Student Records", "Staff Management"],
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
    location: "New Delhi, India",
    subscriptionPlan: "Premium",
    department: "Academic Affairs",
    experience: "12 years"
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@mumbaigroup.com",
    phone: "+91 9876543212",
    role: "Group Admin",
    organization: "Mumbai Education Network",
    institutions: 8,
    students: 9870,
    status: "active",
    joinDate: "2024-03-10",
    lastLogin: "3 hours ago",
    permissions: ["Full Access", "User Management", "Analytics"],
    avatar: "/placeholder.svg?height=40&width=40&text=PS",
    location: "Mumbai, India",
    subscriptionPlan: "Standard",
    department: "Operations",
    experience: "6 years"
  },
  {
    id: 4,
    name: "Prof. Rajesh Gupta",
    email: "rajesh@hansraj.ac.in",
    phone: "+91 9876543213",
    role: "Institution Admin",
    organization: "Hansraj College",
    institutions: 1,
    students: 4200,
    status: "active",
    joinDate: "2024-01-25",
    lastLogin: "5 hours ago",
    permissions: ["Institution Management", "Academic Records", "Faculty Management"],
    avatar: "/placeholder.svg?height=40&width=40&text=RG",
    location: "New Delhi, India",
    subscriptionPlan: "Premium",
    department: "Academic Affairs",
    experience: "15 years"
  },
  {
    id: 5,
    name: "Amit Patel",
    email: "amit@gujaratedu.com",
    phone: "+91 9876543214",
    role: "Group Admin",
    organization: "Gujarat Education Hub",
    institutions: 15,
    students: 12350,
    status: "inactive",
    joinDate: "2023-11-10",
    lastLogin: "1 week ago",
    permissions: ["Full Access", "User Management", "Billing"],
    avatar: "/placeholder.svg?height=40&width=40&text=AP",
    location: "Ahmedabad, India",
    subscriptionPlan: "Enterprise",
    department: "Business Development",
    experience: "10 years"
  },
  {
    id: 6,
    name: "Dr. Sunita Kapoor",
    email: "sunita@ryanmumbai.org",
    phone: "+91 9876543215",
    role: "Institution Admin",
    organization: "Ryan International School, Mumbai",
    institutions: 1,
    students: 1800,
    status: "active",
    joinDate: "2024-04-05",
    lastLogin: "30 minutes ago",
    permissions: ["Institution Management", "Student Records", "Parent Communication"],
    avatar: "/placeholder.svg?height=40&width=40&text=SK",
    location: "Mumbai, India",
    subscriptionPlan: "Standard",
    department: "Student Affairs",
    experience: "9 years"
  },
  {
    id: 7,
    name: "Vikram Singh",
    email: "vikram@teacher.edu",
    phone: "+91 9876543216",
    role: "Teacher",
    organization: "St. Mary's School",
    institutions: 1,
    students: 45,
    status: "active",
    joinDate: "2024-06-01",
    lastLogin: "1 hour ago",
    permissions: ["Class Management", "Student Assessment", "Parent Communication"],
    avatar: "/placeholder.svg?height=40&width=40&text=VS",
    location: "Bangalore, India",
    subscriptionPlan: "Basic",
    department: "Mathematics",
    experience: "5 years"
  },
  {
    id: 8,
    name: "Anita Desai",
    email: "anita@staff.edu",
    phone: "+91 9876543217",
    role: "Staff",
    organization: "Modern Public School",
    institutions: 1,
    students: 0,
    status: "active",
    joinDate: "2024-05-15",
    lastLogin: "2 hours ago",
    permissions: ["Administrative Tasks", "Record Keeping"],
    avatar: "/placeholder.svg?height=40&width=40&text=AD",
    location: "Chennai, India",
    subscriptionPlan: "Basic",
    department: "Administration",
    experience: "3 years"
  }
]

const userStats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+156",
    changeType: "positive",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Group Admins",
    value: "234",
    change: "+12",
    changeType: "positive",
    icon: Shield,
    color: "bg-purple-500",
  },
  {
    title: "Institution Admins",
    value: "856",
    change: "+45",
    changeType: "positive",
    icon: UserCheck,
    color: "bg-green-500",
  },
  {
    title: "Active Users",
    value: "2,698",
    change: "+89%",
    changeType: "positive",
    icon: Users,
    color: "bg-orange-500",
  },
]

const roleDistribution = [
  { role: "Institution Admins", count: 856, percentage: 30.1, color: "bg-green-500" },
  { role: "Group Admins", count: 234, percentage: 8.2, color: "bg-purple-500" },
  { role: "Teachers", count: 1245, percentage: 43.7, color: "bg-blue-500" },
  { role: "Staff", count: 512, percentage: 18.0, color: "bg-orange-500" },
]

export default function AllUsers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedUsers, setSelectedUsers] = useState([])
  const [showUserModal, setShowUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === "all" || user.role === filterRole
    const matchesStatus = filterStatus === "all" || user.status === filterStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  const getRoleIcon = (role) => {
    switch (role) {
      case "Group Admin":
        return Shield
      case "Institution Admin":
        return UserCheck
      case "Teacher":
        return GraduationCap
      case "Staff":
        return Users
      default:
        return Users
    }
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "Group Admin":
        return "bg-purple-100 text-purple-800"
      case "Institution Admin":
        return "bg-green-100 text-green-800"
      case "Teacher":
        return "bg-blue-100 text-blue-800"
      case "Staff":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPlanColor = (plan) => {
    switch (plan) {
      case "Enterprise":
        return "bg-purple-100 text-purple-800"
      case "Premium":
        return "bg-blue-100 text-blue-800"
      case "Standard":
        return "bg-green-100 text-green-800"
      case "Basic":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleUserSelect = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleBulkAction = (action) => {
    console.log(`Performing ${action} on users:`, selectedUsers)
    // Implement bulk actions here
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Users</h1>
          <p className="text-gray-600 mt-2">Manage all users across the platform - {filteredUsers.length} users found</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
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

      {/* Role Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">User Role Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {roleDistribution.map((role, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${role.color}`}></div>
                <div>
                  <p className="font-medium text-gray-900">{role.role}</p>
                  <p className="text-sm text-gray-600">{role.count} users</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{role.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Bulk Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
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
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Institution Admin">Institution Admin</option>
              <option value="Teacher">Teacher</option>
              <option value="Staff">Staff</option>
            </select>
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

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-sm font-medium text-blue-900">
              {selectedUsers.length} user(s) selected
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleBulkAction('activate')}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                Activate
              </button>
              <button 
                onClick={() => handleBulkAction('deactivate')}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
              >
                Deactivate
              </button>
              <button 
                onClick={() => handleBulkAction('export')}
                className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
              >
                Export Selected
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(filteredUsers.map(user => user.id))
                      } else {
                        setSelectedUsers([])
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">User Details</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Role & Organization</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Usage Stats</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Plan & Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Last Activity</th>
                <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role)
                return (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleUserSelect(user.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover bg-gray-200"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Mail className="w-3 h-3" />
                            <span>{user.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Phone className="w-3 h-3" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RoleIcon className="w-4 h-4 text-gray-600" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-medium">{user.organization}</p>
                        <p className="text-xs text-gray-500">{user.location}</p>
                        <p className="text-xs text-gray-500">{user.department} • {user.experience}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <Building2 className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-900">{user.institutions} institutions</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-900">{user.students.toLocaleString()} students</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Joined: {user.joinDate}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(user.subscriptionPlan)}`}>
                          {user.subscriptionPlan}
                        </span>
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-3 h-3" />
                        <span>{user.lastLogin}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => {
                            setSelectedUser(user)
                            setShowUserModal(true)
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
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
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {filteredUsers.length} of {allUsers.length} users
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

      {/* User Detail Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">User Details</h2>
              <button 
                onClick={() => setShowUserModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.name}
                  className="w-16 h-16 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedUser.name}</h3>
                  <p className="text-gray-600">{selectedUser.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Email:</span> {selectedUser.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedUser.phone}</p>
                    <p><span className="font-medium">Location:</span> {selectedUser.location}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Organization:</span> {selectedUser.organization}</p>
                    <p><span className="font-medium">Department:</span> {selectedUser.department}</p>
                    <p><span className="font-medium">Experience:</span> {selectedUser.experience}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.permissions.map((permission, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Account Status</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Status:</span> 
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        selectedUser.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {selectedUser.status}
                      </span>
                    </p>
                    <p><span className="font-medium">Plan:</span> 
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${getPlanColor(selectedUser.subscriptionPlan)}`}>
                        {selectedUser.subscriptionPlan}
                      </span>
                    </p>
                    <p><span className="font-medium">Join Date:</span> {selectedUser.joinDate}</p>
                    <p><span className="font-medium">Last Login:</span> {selectedUser.lastLogin}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Usage Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Institutions:</span> {selectedUser.institutions}</p>
                    <p><span className="font-medium">Students:</span> {selectedUser.students.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

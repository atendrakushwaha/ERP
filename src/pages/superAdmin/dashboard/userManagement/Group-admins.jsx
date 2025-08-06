"use client"

import { useState } from "react"
import { Search, Filter, Plus, MoreVertical, Edit, Trash2, Eye, CheckCircle, XCircle, Building2, Users, Download, Upload, UserCheck, AlertCircle } from 'lucide-react'
import AddGroupAdminModal from "../../../../components/dashboard/usermManagement/addGroupAdminModal"
import EditGroupAdminModal from "../../../../components/dashboard/usermManagement/editGroupAdminModal"


const initialGroupAdmins = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@delhiedu.com",
    phone: "+91 9876543210",
    organization: "Delhi Education Group",
    address: "Sector 15, Noida, Uttar Pradesh",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    institutions: 12,
    students: 15420,
    subscriptionPlan: "Premium",
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
    permissions: {
      manageInstitutions: true,
      manageStudents: true,
      manageStaff: true,
      viewReports: true,
      manageBilling: true
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@mumbaigroup.com",
    phone: "+91 9876543211",
    organization: "Mumbai Education Network",
    address: "Andheri West, Mumbai, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400058",
    institutions: 8,
    students: 9870,
    subscriptionPlan: "Standard",
    status: "active",
    joinDate: "2024-02-20",
    lastLogin: "1 day ago",
    permissions: {
      manageInstitutions: true,
      manageStudents: true,
      manageStaff: false,
      viewReports: true,
      manageBilling: false
    }
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@gujaratedu.com",
    phone: "+91 9876543212",
    organization: "Gujarat Education Hub",
    address: "Satellite, Ahmedabad, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380015",
    institutions: 15,
    students: 12350,
    subscriptionPlan: "Enterprise",
    status: "inactive",
    joinDate: "2023-11-10",
    lastLogin: "1 week ago",
    permissions: {
      manageInstitutions: true,
      manageStudents: true,
      manageStaff: true,
      viewReports: true,
      manageBilling: true
    }
  },
  {
    id: 4,
    name: "Sunita Reddy",
    email: "sunita@hyderabadedu.com",
    phone: "+91 9876543213",
    organization: "Hyderabad Schools Group",
    address: "Banjara Hills, Hyderabad, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500034",
    institutions: 6,
    students: 7230,
    subscriptionPlan: "Standard",
    status: "active",
    joinDate: "2024-03-05",
    lastLogin: "3 hours ago",
    permissions: {
      manageInstitutions: true,
      manageStudents: true,
      manageStaff: false,
      viewReports: true,
      manageBilling: false
    }
  },
]

export default function GroupAdmins() {
  const [groupAdmins, setGroupAdmins] = useState(initialGroupAdmins)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPlan, setFilterPlan] = useState("all")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState(null)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedAdmins, setSelectedAdmins] = useState([])

  const filteredAdmins = groupAdmins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || admin.status === filterStatus
    const matchesPlan = filterPlan === "all" || admin.subscriptionPlan === filterPlan
    return matchesSearch && matchesStatus && matchesPlan
  })

  const handleAddAdmin = (newAdmin) => {
    setGroupAdmins([...groupAdmins, newAdmin])
  }

  const handleEditAdmin = (updatedAdmin) => {
    setGroupAdmins(groupAdmins.map(admin => 
      admin.id === updatedAdmin.id ? updatedAdmin : admin
    ))
  }

  const handleDeleteAdmin = (adminId) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setGroupAdmins(groupAdmins.filter(admin => admin.id !== adminId))
    }
  }

  const handleBulkDelete = () => {
    if (selectedAdmins.length > 0 && window.confirm(`Are you sure you want to delete ${selectedAdmins.length} admin(s)?`)) {
      setGroupAdmins(groupAdmins.filter(admin => !selectedAdmins.includes(admin.id)))
      setSelectedAdmins([])
    }
  }

  const handleSelectAdmin = (adminId) => {
    setSelectedAdmins(prev => 
      prev.includes(adminId) 
        ? prev.filter(id => id !== adminId)
        : [...prev, adminId]
    )
  }

  const handleSelectAll = () => {
    if (selectedAdmins.length === filteredAdmins.length) {
      setSelectedAdmins([])
    } else {
      setSelectedAdmins(filteredAdmins.map(admin => admin.id))
    }
  }

  const totalStats = {
    total: groupAdmins.length,
    active: groupAdmins.filter(admin => admin.status === "active").length,
    inactive: groupAdmins.filter(admin => admin.status === "inactive").length,
    institutions: groupAdmins.reduce((sum, admin) => sum + admin.institutions, 0)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Group Admins</h1>
          <p className="text-gray-600 mt-2">Manage all group administrators and their organizations</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Import</span>
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Group Admin</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Group Admins</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{totalStats.total}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Admins</p>
              <p className="text-2xl font-bold text-green-600 mt-2">{totalStats.active}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inactive Admins</p>
              <p className="text-2xl font-bold text-red-600 mt-2">{totalStats.inactive}</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Institutions</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">{totalStats.institutions}</p>
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
            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Plans</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
        </div>
        
        {/* Bulk Actions */}
        {selectedAdmins.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">
                {selectedAdmins.length} admin(s) selected
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Delete Selected
              </button>
              <button
                onClick={() => setSelectedAdmins([])}
                className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Group Admins Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedAdmins.length === filteredAdmins.length && filteredAdmins.length > 0}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </th>
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
                    <input
                      type="checkbox"
                      checked={selectedAdmins.includes(admin.id)}
                      onChange={() => handleSelectAdmin(admin.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </td>
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
                      <button 
                        onClick={() => {
                          setSelectedAdmin(admin)
                          setShowViewModal(true)
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedAdmin(admin)
                          setShowEditModal(true)
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Edit Admin"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button 
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Delete Admin"
                      >
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

      {/* View Admin Modal */}
      {showViewModal && selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Admin Details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {selectedAdmin.name}</p>
                    <p><span className="font-medium">Email:</span> {selectedAdmin.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedAdmin.phone}</p>
                    <p><span className="font-medium">Join Date:</span> {selectedAdmin.joinDate}</p>
                    <p><span className="font-medium">Last Login:</span> {selectedAdmin.lastLogin}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Organization</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Organization:</span> {selectedAdmin.organization}</p>
                    <p><span className="font-medium">Address:</span> {selectedAdmin.address}</p>
                    <p><span className="font-medium">City:</span> {selectedAdmin.city}</p>
                    <p><span className="font-medium">State:</span> {selectedAdmin.state}</p>
                    <p><span className="font-medium">Pincode:</span> {selectedAdmin.pincode}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Statistics</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Institutions:</span> {selectedAdmin.institutions}</p>
                    <p><span className="font-medium">Students:</span> {selectedAdmin.students.toLocaleString()}</p>
                    <p><span className="font-medium">Plan:</span> {selectedAdmin.subscriptionPlan}</p>
                    <p><span className="font-medium">Status:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        selectedAdmin.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                        {selectedAdmin.status}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Permissions</h3>
                  <div className="space-y-2 text-sm">
                    {Object.entries(selectedAdmin.permissions || {}).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <span className={`w-3 h-3 rounded-full mr-2 ${value ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Admin Modal */}
      <AddGroupAdminModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddAdmin}
      />

      {/* Edit Admin Modal */}
      <EditGroupAdminModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleEditAdmin}
        admin={selectedAdmin}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {filteredAdmins.length} of {groupAdmins.length} admins
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

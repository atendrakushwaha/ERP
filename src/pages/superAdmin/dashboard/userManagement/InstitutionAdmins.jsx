"use client"

import { useState } from "react"
import { Search, Filter, Plus, UserCheck, Eye, Edit, Trash2, MoreVertical, Calendar, Mail, Phone, Building2, Users, GraduationCap, School, University, Award } from 'lucide-react'

const institutionAdmins = [
  {
    id: 1,
    name: "Dr. Meera Sharma",
    email: "meera@dpsvk.com",
    phone: "+91 9876543211",
    designation: "Principal",
    institution: "Delhi Public School, Vasant Kunj",
    institutionType: "School",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    students: 2500,
    teachers: 150,
    status: "active",
    joinDate: "2024-02-20",
    lastLogin: "1 day ago",
    permissions: ["Student Management", "Staff Management", "Academic Records", "Fee Management"],
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
    location: "New Delhi, India",
    experience: "15 years",
    qualification: "Ph.D in Education",
    achievements: ["Best Principal Award 2023", "Academic Excellence", "School Transformation"]
  },
  {
    id: 2,
    name: "Prof. Rajesh Gupta",
    email: "rajesh@hansraj.ac.in",
    phone: "+91 9876543213",
    designation: "Principal",
    institution: "Hansraj College",
    institutionType: "College",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    students: 4200,
    teachers: 220,
    status: "active",
    joinDate: "2024-01-25",
    lastLogin: "5 hours ago",
    permissions: ["Academic Management", "Faculty Management", "Research Coordination", "Student Affairs"],
    avatar: "/placeholder.svg?height=40&width=40&text=RG",
    location: "New Delhi, India",
    experience: "20 years",
    qualification: "Ph.D in Physics",
    achievements: ["Research Excellence Award", "NAAC A+ Rating", "Innovation in Teaching"]
  },
  {
    id: 3,
    name: "Dr. Sunita Kapoor",
    email: "sunita@ryanmumbai.org",
    phone: "+91 9876543215",
    designation: "Principal",
    institution: "Ryan International School, Mumbai",
    institutionType: "School",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    students: 1800,
    teachers: 120,
    status: "active",
    joinDate: "2024-04-05",
    lastLogin: "30 minutes ago",
    permissions: ["Student Management", "Parent Communication", "Academic Planning", "Staff Development"],
    avatar: "/placeholder.svg?height=40&width=40&text=SK",
    location: "Mumbai, India",
    experience: "12 years",
    qualification: "M.Ed, B.Ed",
    achievements: ["ICSE Excellence Award", "Digital Innovation", "Parent Satisfaction Award"]
  },
  {
    id: 4,
    name: "Prof. Balvinder Shukla",
    email: "balvinder@amity.edu",
    phone: "+91 9876543216",
    designation: "Vice Chancellor",
    institution: "Amity University, Noida",
    institutionType: "University",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    students: 35000,
    teachers: 1200,
    status: "active",
    joinDate: "2023-08-15",
    lastLogin: "2 hours ago",
    permissions: ["University Administration", "Academic Policy", "Research Management", "International Relations"],
    avatar: "/placeholder.svg?height=40&width=40&text=BS",
    location: "Noida, India",
    experience: "25 years",
    qualification: "Ph.D in Management",
    achievements: ["University Ranking Improvement", "International Collaborations", "Research Publications"]
  },
  {
    id: 5,
    name: "Dr. Rama Sharma",
    email: "rama@dce.edu",
    phone: "+91 9876543217",
    designation: "Director",
    institution: "Delhi College of Engineering",
    institutionType: "College",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    students: 3500,
    teachers: 280,
    status: "inactive",
    joinDate: "2023-06-10",
    lastLogin: "2 weeks ago",
    permissions: ["Engineering Programs", "Industry Relations", "Placement Coordination", "Technical Development"],
    avatar: "/placeholder.svg?height=40&width=40&text=RS",
    location: "New Delhi, India",
    experience: "18 years",
    qualification: "Ph.D in Computer Science",
    achievements: ["Industry Partnership", "Placement Records", "Technical Innovation"]
  },
  {
    id: 6,
    name: "Dr. John Varghese",
    email: "john@ststephens.edu",
    phone: "+91 9876543218",
    designation: "Principal",
    institution: "St. Stephen's College",
    institutionType: "College",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    students: 1800,
    teachers: 120,
    status: "active",
    joinDate: "2024-03-20",
    lastLogin: "4 hours ago",
    permissions: ["Liberal Arts Management", "Student Development", "Cultural Programs", "Academic Excellence"],
    avatar: "/placeholder.svg?height=40&width=40&text=JV",
    location: "New Delhi, India",
    experience: "22 years",
    qualification: "Ph.D in English Literature",
    achievements: ["Academic Excellence", "Cultural Leadership", "Student Development"]
  },
]

const adminStats = [
  {
    title: "Total Institution Admins",
    value: "856",
    change: "+45",
    changeType: "positive",
    icon: UserCheck,
    color: "bg-green-500",
  },
  {
    title: "School Principals",
    value: "456",
    change: "+28",
    changeType: "positive",
    icon: School,
    color: "bg-blue-500",
  },
  {
    title: "College Principals",
    value: "234",
    change: "+12",
    changeType: "positive",
    icon: Building2,
    color: "bg-purple-500",
  },
  {
    title: "University Heads",
    value: "166",
    change: "+5",
    changeType: "positive",
    icon: University,
    color: "bg-orange-500",
  },
]

const institutionTypeDistribution = [
  { type: "Schools", count: 456, percentage: 53.3, color: "bg-blue-500" },
  { type: "Colleges", count: 234, percentage: 27.3, color: "bg-purple-500" },
  { type: "Universities", count: 166, percentage: 19.4, color: "bg-orange-500" },
]

export default function InstitutionAdmins() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredAdmins = institutionAdmins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.institution.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || admin.institutionType === filterType
    const matchesStatus = filterStatus === "all" || admin.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeIcon = (type) => {
    switch (type) {
      case "School":
        return School
      case "College":
        return Building2
      case "University":
        return University
      default:
        return Building2
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "School":
        return "bg-blue-100 text-blue-800"
      case "College":
        return "bg-purple-100 text-purple-800"
      case "University":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Institution Admins</h1>
          <p className="text-gray-600 mt-2">Manage all institution-level administrators</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Advanced Filter</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Admin</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {adminStats.map((stat, index) => (
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

      {/* Institution Type Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Distribution by Institution Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {institutionTypeDistribution.map((type, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                <div>
                  <p className="font-medium text-gray-900">{type.type}</p>
                  <p className="text-sm text-gray-600">{type.count} admins</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{type.percentage}%</p>
              </div>
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
              placeholder="Search by name, email, or institution..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="School">Schools</option>
              <option value="College">Colleges</option>
              <option value="University">Universities</option>
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
      </div>

      {/* Admins Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAdmins.map((admin) => {
          const TypeIcon = getTypeIcon(admin.institutionType)
          return (
            <div
              key={admin.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={admin.avatar || "/placeholder.svg"}
                    alt={admin.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{admin.name}</h3>
                    <p className="text-green-600 font-medium">{admin.designation}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <TypeIcon className="w-4 h-4 text-gray-600" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(admin.institutionType)}`}>
                        {admin.institutionType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      admin.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {admin.status}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-medium text-gray-900">{admin.institution}</p>
                  <p className="text-sm text-gray-600">{admin.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {admin.students.toLocaleString()} Students
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {admin.teachers} Teachers
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-3 h-3 mr-1" />
                    {admin.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-3 h-3 mr-1" />
                    {admin.phone}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Experience:</span>
                    <p className="text-gray-900">{admin.experience}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Qualification:</span>
                    <p className="text-gray-900">{admin.qualification}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Join Date:</span>
                    <p className="text-gray-900">{admin.joinDate}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Last Login:</span>
                    <p className="text-gray-900">{admin.lastLogin}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Key Permissions:</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {admin.permissions.slice(0, 3).map((permission, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {permission}
                    </span>
                  ))}
                  {admin.permissions.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      +{admin.permissions.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Recent Achievements:</span>
                  <Award className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {admin.achievements.map((achievement, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Group Admin:</span>
                  <span className="text-sm text-gray-900">{admin.groupAdmin}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-700">Organization:</span>
                  <span className="text-sm text-gray-900">{admin.organization}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-50 text-green-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center">
                    <Eye className="w-4 h-4 mr-1" />
                    View Profile
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

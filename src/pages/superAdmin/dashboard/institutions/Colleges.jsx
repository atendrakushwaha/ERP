"use client"

import { useState } from "react"
import { Search, Filter, Plus, MapPin, Users, GraduationCap, Building2, Eye, Edit, MoreVertical, Calendar, Phone, Mail, Award } from 'lucide-react'

const colleges = [
  {
    id: 1,
    name: "Delhi College of Engineering",
    type: "Engineering College",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    address: "Bawana Road, Delhi 110042",
    students: 3500,
    faculty: 280,
    departments: 12,
    courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
    status: "active",
    established: "1973",
    contact: "+91 11 2788 9000",
    email: "info@dce.edu",
    principal: "Dr. Rajesh Gupta",
    accreditation: "NAAC A+",
    affiliation: "Delhi University",
    campus: "150 acres",
    hostel: "Yes",
    library: "Central Library - 50,000 books",
    labs: 45,
    ranking: "Top 50 Engineering Colleges",
    fees: {
      tuition: 85000,
      hostel: 45000,
      other: 15000
    }
  },
  {
    id: 2,
    name: "Lady Shri Ram College",
    type: "Arts & Commerce College",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    address: "Lajpat Nagar IV, New Delhi 110024",
    students: 2800,
    faculty: 180,
    departments: 8,
    courses: ["B.A", "B.Com", "M.A", "M.Com"],
    status: "active",
    established: "1956",
    contact: "+91 11 2464 3011",
    email: "info@lsr.edu.in",
    principal: "Dr. Suman Sharma",
    accreditation: "NAAC A++",
    affiliation: "Delhi University",
    campus: "25 acres",
    hostel: "Yes",
    library: "Modern Library - 75,000 books",
    labs: 20,
    ranking: "Top 10 Women's Colleges",
    fees: {
      tuition: 45000,
      hostel: 35000,
      other: 10000
    }
  },
  {
    id: 3,
    name: "St. Stephen's College",
    type: "Liberal Arts College",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    address: "University Enclave, Delhi 110007",
    students: 1800,
    faculty: 120,
    departments: 6,
    courses: ["B.A", "B.Sc", "M.A", "M.Sc"],
    status: "active",
    established: "1881",
    contact: "+91 11 2766 7271",
    email: "info@ststephens.edu",
    principal: "Dr. John Varghese",
    accreditation: "NAAC A++",
    affiliation: "Delhi University",
    campus: "35 acres",
    hostel: "Yes",
    library: "Heritage Library - 100,000 books",
    labs: 15,
    ranking: "Top 5 Liberal Arts Colleges",
    fees: {
      tuition: 55000,
      hostel: 40000,
      other: 12000
    }
  },
  {
    id: 4,
    name: "Hansraj College",
    type: "Science College",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    address: "Mahatma Gandhi Marg, Delhi 110007",
    students: 4200,
    faculty: 220,
    departments: 10,
    courses: ["B.Sc", "M.Sc", "B.Com", "M.Com"],
    status: "active",
    established: "1948",
    contact: "+91 11 2766 7271",
    email: "info@hansrajcollege.ac.in",
    principal: "Dr. Rama Sharma",
    accreditation: "NAAC A+",
    affiliation: "Delhi University",
    campus: "40 acres",
    hostel: "Limited",
    library: "Science Library - 60,000 books",
    labs: 35,
    ranking: "Top 20 Science Colleges",
    fees: {
      tuition: 35000,
      hostel: 30000,
      other: 8000
    }
  },
]

const collegeStats = [
  {
    title: "Total Colleges",
    value: "234",
    change: "+12",
    changeType: "positive",
    icon: Building2,
    color: "bg-blue-500",
  },
  {
    title: "Total Students",
    value: "2,45,670",
    change: "+8.2%",
    changeType: "positive",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Faculty Members",
    value: "18,450",
    change: "+5.1%",
    changeType: "positive",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    title: "Avg Students/College",
    value: "1,049",
    change: "+3.2%",
    changeType: "positive",
    icon: Award,
    color: "bg-orange-500",
  },
]

export default function Colleges() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || college.type.toLowerCase().includes(filterType.toLowerCase())
    const matchesStatus = filterStatus === "all" || college.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const collegeTypes = ["All Types", "Engineering College", "Arts & Commerce College", "Liberal Arts College", "Science College", "Medical College", "Management College"]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Colleges</h1>
          <p className="text-gray-600 mt-2">Manage all college institutions and their academic programs</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add College</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {collegeStats.map((stat, index) => (
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
                  <span className="text-sm text-gray-500 ml-1">vs last month</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by college name, location, or group admin..."
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
              {collegeTypes.map((type) => (
                <option key={type} value={type === "All Types" ? "all" : type}>
                  {type}
                </option>
              ))}
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

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{college.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {college.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    college.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {college.status}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {college.address}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {college.students.toLocaleString()} Students
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {college.faculty} Faculty
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Established: {college.established}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Principal:</span>
                  <p className="text-gray-900">{college.principal}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Accreditation:</span>
                  <p className="text-gray-900">{college.accreditation}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Campus:</span>
                  <p className="text-gray-900">{college.campus}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Ranking:</span>
                  <p className="text-gray-900">{college.ranking}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Courses Offered:</span>
                <span className="text-sm text-gray-600">{college.departments} Departments</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {college.courses.map((course, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Tuition:</span>
                  <p className="text-gray-900">₹{college.fees.tuition.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Hostel:</span>
                  <p className="text-gray-900">₹{college.fees.hostel.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Other:</span>
                  <p className="text-gray-900">₹{college.fees.other.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Group Admin:</span>
                <span className="text-sm text-gray-900">{college.groupAdmin}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">Organization:</span>
                <span className="text-sm text-gray-900">{college.organization}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
            </div>  
          </div>
        ))}
      </div>
    </div>
  )
}

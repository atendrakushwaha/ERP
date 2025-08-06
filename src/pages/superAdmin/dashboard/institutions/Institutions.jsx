"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Plus,
  MapPin,
  Users,
  GraduationCap,
  Building2,
  School,
  University,
  Eye,
  Edit,
  MoreVertical,
} from "lucide-react"

const institutions = [
  {
    id: 1,
    name: "Delhi Public School, Vasant Kunj",
    type: "School",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    address: "Vasant Kunj, New Delhi, Delhi 110070",
    students: 2500,
    teachers: 150,
    classes: "1st to 12th",
    status: "active",
    established: "1995",
    contact: "+91 11 2613 6969",
    email: "info@dpsvk.com",
    principal: "Dr. Meera Sharma",
  },
  {
    id: 2,
    name: "Amity University, Noida",
    type: "University",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    address: "Sector 125, Noida, Uttar Pradesh 201313",
    students: 15000,
    teachers: 800,
    classes: "UG, PG, PhD",
    status: "active",
    established: "2005",
    contact: "+91 120 4392 500",
    email: "info@amity.edu",
    principal: "Prof. Balvinder Shukla",
  },
  {
    id: 3,
    name: "Ryan International School, Mumbai",
    type: "School",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    address: "Kandivali East, Mumbai, Maharashtra 400101",
    students: 1800,
    teachers: 120,
    classes: "Nursery to 12th",
    status: "inactive",
    established: "1990",
    contact: "+91 22 2887 4444",
    email: "info@ryanmumbai.org",
    principal: "Mrs. Sunita Kapoor",
  },
  {
    id: 4,
    name: "DAV College, Chandigarh",
    type: "College",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    address: "Sector 10, Chandigarh 160011",
    students: 3500,
    teachers: 200,
    classes: "UG, PG",
    status: "active",
    established: "1970",
    contact: "+91 172 274 0464",
    email: "info@davchandigarh.ac.in",
    principal: "Dr. Rajesh Gupta",
  },
]

const institutionTypes = ["All", "School", "College", "University"]

export default function Institutions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredInstitutions = institutions.filter((institution) => {
    const matchesSearch =
      institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "All" || institution.type === filterType
    const matchesStatus = filterStatus === "all" || institution.status === filterStatus
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
        return GraduationCap
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "School":
        return "bg-blue-100 text-blue-800"
      case "College":
        return "bg-green-100 text-green-800"
      case "University":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Institutions</h1>
          <p className="text-gray-600 mt-2">Manage all educational institutions across different groups</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Institution</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Institutions</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">856</p>
              <p className="text-sm text-blue-600 mt-1">+15.3% from last month</p>
            </div>
            <Building2 className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Schools</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">456</p>
              <p className="text-sm text-gray-600 mt-1">53% of total</p>
            </div>
            <School className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Colleges</p>
              <p className="text-2xl font-bold text-green-600 mt-2">234</p>
              <p className="text-sm text-gray-600 mt-1">27% of total</p>
            </div>
            <Building2 className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Universities</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">166</p>
              <p className="text-sm text-gray-600 mt-1">20% of total</p>
            </div>
            <University className="w-8 h-8 text-purple-500" />
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
              placeholder="Search by name, location, or group admin..."
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
              {institutionTypes.map((type) => (
                <option key={type} value={type}>
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

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInstitutions.map((institution) => {
          const TypeIcon = getTypeIcon(institution.type)
          return (
            <div
              key={institution.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(institution.type)}`}
                  >
                    <TypeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{institution.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(institution.type)}`}>
                      {institution.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      institution.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {institution.status}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {institution.address}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {institution.students.toLocaleString()} Students • {institution.teachers} Teachers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Classes: {institution.classes}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Group Admin:</span>
                  <span className="text-sm text-gray-900">{institution.groupAdmin}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Principal:</span>
                  <span className="text-sm text-gray-900">{institution.principal}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-700">Established:</span>
                  <span className="text-sm text-gray-900">{institution.established}</span>
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
          )
        })}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, Filter, Plus, MapPin, Users, GraduationCap, School, Eye, Edit, MoreVertical, Calendar, Phone, Mail, Award, BookOpen } from 'lucide-react'

const schools = [
  {
    id: 1,
    name: "Delhi Public School, Vasant Kunj",
    type: "CBSE School",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    address: "Vasant Kunj, New Delhi, Delhi 110070",
    students: 2500,
    teachers: 150,
    classes: "Nursery to 12th",
    status: "active",
    established: "1995",
    contact: "+91 11 2613 6969",
    email: "info@dpsvk.com",
    principal: "Dr. Meera Sharma",
    board: "CBSE",
    affiliation: "CBSE/Delhi/07-1234",
    campus: "15 acres",
    transport: "Yes - 45 buses",
    library: "Modern Library - 25,000 books",
    labs: 12,
    playgrounds: 3,
    fees: {
      admission: 25000,
      tuition: 45000,
      transport: 18000,
      other: 8000
    },
    facilities: ["Swimming Pool", "Auditorium", "Computer Lab", "Science Labs", "Sports Complex"],
    achievements: ["Best School Award 2023", "Academic Excellence", "Sports Championship"]
  },
  {
    id: 2,
    name: "Ryan International School, Mumbai",
    type: "ICSE School",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    address: "Kandivali East, Mumbai, Maharashtra 400101",
    students: 1800,
    teachers: 120,
    classes: "Nursery to 12th",
    status: "active",
    established: "1990",
    contact: "+91 22 2887 4444",
    email: "info@ryanmumbai.org",
    principal: "Mrs. Sunita Kapoor",
    board: "ICSE",
    affiliation: "ICSE/Mumbai/08-5678",
    campus: "12 acres",
    transport: "Yes - 35 buses",
    library: "Central Library - 20,000 books",
    labs: 10,
    playgrounds: 2,
    fees: {
      admission: 30000,
      tuition: 55000,
      transport: 20000,
      other: 10000
    },
    facilities: ["Dance Studio", "Music Room", "Art Studio", "Basketball Court", "Cafeteria"],
    achievements: ["ICSE Topper 2023", "Cultural Excellence", "Debate Championship"]
  },
  {
    id: 3,
    name: "DAV Public School, Chandigarh",
    type: "CBSE School",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    address: "Sector 8, Chandigarh 160009",
    students: 2200,
    teachers: 140,
    classes: "1st to 12th",
    status: "active",
    established: "1985",
    contact: "+91 172 274 0464",
    email: "info@davchandigarh.com",
    principal: "Dr. Rajesh Gupta",
    board: "CBSE",
    affiliation: "CBSE/Chandigarh/09-9012",
    campus: "18 acres",
    transport: "Yes - 40 buses",
    library: "DAV Library - 30,000 books",
    labs: 15,
    playgrounds: 4,
    fees: {
      admission: 20000,
      tuition: 35000,
      transport: 15000,
      other: 6000
    },
    facilities: ["Yoga Hall", "Meditation Center", "Robotics Lab", "Cricket Ground", "Indoor Stadium"],
    achievements: ["Best CBSE School 2023", "Science Olympiad Winners", "Green School Award"]
  },
  {
    id: 4,
    name: "Kendriya Vidyalaya, Bangalore",
    type: "Central Government School",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    address: "Malleswaram, Bangalore, Karnataka 560003",
    students: 1500,
    teachers: 85,
    classes: "1st to 12th",
    status: "active",
    established: "1963",
    contact: "+91 80 2334 1234",
    email: "info@kvbangalore.ac.in",
    principal: "Mr. Suresh Kumar",
    board: "CBSE",
    affiliation: "CBSE/Bangalore/10-3456",
    campus: "10 acres",
    transport: "Limited",
    library: "KV Library - 18,000 books",
    labs: 8,
    playgrounds: 2,
    fees: {
      admission: 5000,
      tuition: 12000,
      transport: 8000,
      other: 3000
    },
    facilities: ["NCC Training", "Scouts & Guides", "Hobby Classes", "Volleyball Court", "Canteen"],
    achievements: ["KVS Excellence Award", "National Level Competitions", "Discipline Award"]
  },
]

const schoolStats = [
  {
    title: "Total Schools",
    value: "456",
    change: "+18",
    changeType: "positive",
    icon: School,
    color: "bg-blue-500",
  },
  {
    title: "Total Students",
    value: "4,56,780",
    change: "+12.3%",
    changeType: "positive",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Teaching Staff",
    value: "28,450",
    change: "+6.8%",
    changeType: "positive",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    title: "Avg Students/School",
    value: "1,002",
    change: "+4.1%",
    changeType: "positive",
    icon: Award,
    color: "bg-orange-500",
  },
]

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || school.type.toLowerCase().includes(filterType.toLowerCase())
    const matchesStatus = filterStatus === "all" || school.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const schoolTypes = ["All Types", "CBSE School", "ICSE School", "State Board School", "International School", "Central Government School"]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schools</h1>
          <p className="text-gray-600 mt-2">Manage all school institutions and their academic programs</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add School</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {schoolStats.map((stat, index) => (
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
              placeholder="Search by school name, location, or group admin..."
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
              {schoolTypes.map((type) => (
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

      {/* Schools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchools.map((school) => (
          <div
            key={school.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <School className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{school.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {school.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    school.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {school.status}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {school.address}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  {school.students.toLocaleString()} Students
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {school.teachers} Teachers
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <BookOpen className="w-4 h-4 mr-2" />
                Classes: {school.classes}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Principal:</span>
                  <p className="text-gray-900">{school.principal}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Board:</span>
                  <p className="text-gray-900">{school.board}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Established:</span>
                  <p className="text-gray-900">{school.established}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Campus:</span>
                  <p className="text-gray-900">{school.campus}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Key Facilities:</span>
                <span className="text-sm text-gray-600">{school.labs} Labs</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {school.facilities.slice(0, 4).map((facility, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {facility}
                  </span>
                ))}
                {school.facilities.length > 4 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                    +{school.facilities.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Admission:</span>
                  <p className="text-gray-900">₹{school.fees.admission.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Annual Fee:</span>
                  <p className="text-gray-900">₹{school.fees.tuition.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Transport:</span>
                  <p className="text-gray-900">₹{school.fees.transport.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Other:</span>
                  <p className="text-gray-900">₹{school.fees.other.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Recent Achievements:</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {school.achievements.map((achievement, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Group Admin:</span>
                <span className="text-sm text-gray-900">{school.groupAdmin}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">Organization:</span>
                <span className="text-sm text-gray-900">{school.organization}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-green-50 text-green-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center">
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

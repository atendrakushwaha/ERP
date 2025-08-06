"use client"

import { useState } from "react"
import { Search, Filter, Plus, MapPin, Users, GraduationCap, University, Eye, Edit, MoreVertical, Calendar, Award, BookOpen, Globe, Phone, Mail, Building, Star, TrendingUp } from 'lucide-react'

const universities = [
  {
    id: 1,
    name: "Amity University, Noida",
    type: "Private University",
    groupAdmin: "Rajesh Kumar",
    organization: "Delhi Education Group",
    address: "Sector 125, Noida, Uttar Pradesh 201313",
    students: 35000,
    faculty: 1200,
    departments: 45,
    courses: ["UG", "PG", "PhD", "Diploma"],
    status: "active",
    established: "2005",
    contact: "+91 120 4392 500",
    email: "info@amity.edu",
    website: "www.amity.edu",
    vicechancellor: "Prof. Balvinder Shukla",
    accreditation: "NAAC A+",
    ugcRecognition: "Yes",
    campus: "1000 acres",
    hostels: "25 hostels",
    library: "Central Library - 500,000 books",
    labs: 150,
    researchCenters: 12,
    ranking: "Top 50 Private Universities",
    fees: {
      ugAdmission: 150000,
      ugAnnual: 250000,
      pgAdmission: 200000,
      pgAnnual: 300000,
      hostel: 80000
    },
    specializations: ["Engineering", "Management", "Law", "Medicine", "Arts & Sciences"],
    internationalPrograms: ["Student Exchange", "Dual Degree", "Study Abroad"],
    placements: {
      percentage: 85,
      averagePackage: 650000,
      highestPackage: 4500000,
      topRecruiters: ["TCS", "Infosys", "Microsoft", "Google"]
    },
    achievements: ["Best Private University 2023", "Excellence in Research", "Industry Connect Award"],
    affiliations: ["UGC", "AICTE", "BCI", "MCI"],
    logo: "/placeholder.svg?height=60&width=60&text=AU"
  },
  {
    id: 2,
    name: "Jawaharlal Nehru University",
    type: "Central University",
    groupAdmin: "Priya Sharma",
    organization: "Mumbai Education Network",
    address: "New Mehrauli Road, New Delhi 110067",
    students: 8500,
    faculty: 600,
    departments: 25,
    courses: ["UG", "PG", "M.Phil", "PhD"],
    status: "active",
    established: "1969",
    contact: "+91 11 2670 4000",
    email: "info@jnu.ac.in",
    website: "www.jnu.ac.in",
    vicechancellor: "Prof. Santishree Dhulipudi Pandit",
    accreditation: "NAAC A++",
    ugcRecognition: "Yes",
    campus: "1000 acres",
    hostels: "18 hostels",
    library: "Central Library - 800,000 books",
    labs: 80,
    researchCenters: 20,
    ranking: "Top 5 Central Universities",
    fees: {
      ugAdmission: 5000,
      ugAnnual: 15000,
      pgAdmission: 8000,
      pgAnnual: 20000,
      hostel: 12000
    },
    specializations: ["Social Sciences", "Languages", "International Studies", "Sciences", "Computer Applications"],
    internationalPrograms: ["International Relations", "Foreign Languages", "Cultural Studies"],
    placements: {
      percentage: 70,
      averagePackage: 450000,
      highestPackage: 2500000,
      topRecruiters: ["Civil Services", "Research Institutes", "NGOs", "Media"]
    },
    achievements: ["University of Excellence", "Research Excellence Award", "International Recognition"],
    affiliations: ["UGC", "NAAC", "AIU"],
    logo: "/placeholder.svg?height=60&width=60&text=JNU"
  },
  {
    id: 3,
    name: "Manipal Academy of Higher Education",
    type: "Deemed University",
    groupAdmin: "Amit Patel",
    organization: "Gujarat Education Hub",
    address: "Manipal, Karnataka 576104",
    students: 28000,
    faculty: 1800,
    departments: 30,
    courses: ["UG", "PG", "PhD", "Professional"],
    status: "active",
    established: "1953",
    contact: "+91 820 292 3000",
    email: "info@manipal.edu",
    website: "www.manipal.edu",
    vicechancellor: "Dr. H.S. Ballal",
    accreditation: "NAAC A++",
    ugcRecognition: "Yes",
    campus: "600 acres",
    hostels: "30 hostels",
    library: "Health Sciences Library - 300,000 books",
    labs: 200,
    researchCenters: 15,
    ranking: "Top 10 Deemed Universities",
    fees: {
      ugAdmission: 200000,
      ugAnnual: 350000,
      pgAdmission: 250000,
      pgAnnual: 400000,
      hostel: 100000
    },
    specializations: ["Medicine", "Engineering", "Management", "Allied Health", "Architecture"],
    internationalPrograms: ["Global Health", "International Medicine", "Engineering Exchange"],
    placements: {
      percentage: 90,
      averagePackage: 750000,
      highestPackage: 5000000,
      topRecruiters: ["Hospitals", "IT Companies", "Pharma", "Consulting"]
    },
    achievements: ["Best Health Sciences University", "Innovation Excellence", "Global Recognition"],
    affiliations: ["UGC", "MCI", "AICTE", "COA"],
    logo: "/placeholder.svg?height=60&width=60&text=MAHE"
  },
  {
    id: 4,
    name: "Banaras Hindu University",
    type: "Central University",
    groupAdmin: "Sunita Reddy",
    organization: "Hyderabad Schools Group",
    address: "Varanasi, Uttar Pradesh 221005",
    students: 30000,
    faculty: 1500,
    departments: 140,
    courses: ["UG", "PG", "M.Phil", "PhD"],
    status: "active",
    established: "1916",
    contact: "+91 542 230 7000",
    email: "info@bhu.ac.in",
    website: "www.bhu.ac.in",
    vicechancellor: "Prof. Sudhir Kumar Jain",
    accreditation: "NAAC A++",
    ugcRecognition: "Yes",
    campus: "1300 acres",
    hostels: "60 hostels",
    library: "Central Library - 1,000,000 books",
    labs: 300,
    researchCenters: 25,
    ranking: "Top 3 Central Universities",
    fees: {
      ugAdmission: 3000,
      ugAnnual: 12000,
      pgAdmission: 5000,
      pgAnnual: 18000,
      hostel: 8000
    },
    specializations: ["Arts", "Science", "Commerce", "Law", "Medicine", "Engineering", "Agriculture"],
    internationalPrograms: ["Sanskrit Studies", "Indian Philosophy", "Ayurveda Research"],
    placements: {
      percentage: 75,
      averagePackage: 500000,
      highestPackage: 3000000,
      topRecruiters: ["Government", "PSUs", "Private Sector", "Research"]
    },
    achievements: ["Heritage University", "Research Excellence", "Cultural Preservation Award"],
    affiliations: ["UGC", "NAAC", "AIU", "AICTE"],
    logo: "/placeholder.svg?height=60&width=60&text=BHU"
  },
  {
    id: 5,
    name: "Indian Institute of Technology Delhi",
    type: "Institute of National Importance",
    groupAdmin: "Dr. Vikram Singh",
    organization: "Technical Education Board",
    address: "Hauz Khas, New Delhi 110016",
    students: 8000,
    faculty: 500,
    departments: 16,
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    status: "active",
    established: "1961",
    contact: "+91 11 2659 1000",
    email: "info@iitd.ac.in",
    website: "www.iitd.ac.in",
    vicechancellor: "Prof. Rangan Banerjee",
    accreditation: "NBA Accredited",
    ugcRecognition: "Yes",
    campus: "325 acres",
    hostels: "13 hostels",
    library: "Central Library - 400,000 books",
    labs: 120,
    researchCenters: 18,
    ranking: "Top 2 Engineering Institute",
    fees: {
      ugAdmission: 25000,
      ugAnnual: 200000,
      pgAdmission: 30000,
      pgAnnual: 250000,
      hostel: 25000
    },
    specializations: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical Engineering"],
    internationalPrograms: ["Student Exchange", "Joint PhD", "Research Collaboration"],
    placements: {
      percentage: 95,
      averagePackage: 1800000,
      highestPackage: 15000000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    achievements: ["Institute of Eminence", "QS World Ranking Top 200", "Research Excellence"],
    affiliations: ["MHRD", "NBA", "NAAC"],
    logo: "/placeholder.svg?height=60&width=60&text=IITD"
  }
]

const universityStats = [
  {
    title: "Total Universities",
    value: "166",
    change: "+8",
    changeType: "positive",
    icon: University,
    color: "bg-blue-500",
  },
  {
    title: "Total Students",
    value: "10,15,000",
    change: "+15.2%",
    changeType: "positive",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Faculty Members",
    value: "51,200",
    change: "+7.8%",
    changeType: "positive",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    title: "Research Centers",
    value: "1,250",
    change: "+12.5%",
    changeType: "positive",
    icon: Award,
    color: "bg-orange-500",
  },
]

const universityTypes = [
  { type: "Central Universities", count: 54, color: "bg-blue-500" },
  { type: "State Universities", count: 78, color: "bg-green-500" },
  { type: "Private Universities", count: 25, color: "bg-purple-500" },
  { type: "Deemed Universities", count: 9, color: "bg-orange-500" },
]

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  const [showUniversityModal, setShowUniversityModal] = useState(false)

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.groupAdmin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || university.type.toLowerCase().includes(filterType.toLowerCase())
    const matchesStatus = filterStatus === "all" || university.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const universityTypeOptions = ["All Types", "Central University", "State University", "Private University", "Deemed University", "Institute of National Importance"]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Universities</h1>
          <p className="text-gray-600 mt-2">Manage all university institutions and their academic programs - {filteredUniversities.length} universities found</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add University</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {universityStats.map((stat, index) => (
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

      {/* University Type Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">University Type Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {universityTypes.map((type, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                <div>
                  <p className="font-medium text-gray-900">{type.type}</p>
                  <p className="text-sm text-gray-600">{type.count} universities</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{((type.count / 166) * 100).toFixed(1)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by university name, location, or group admin..."
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
              {universityTypeOptions.map((type) => (
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

      {/* Universities Grid */}
      <div className="space-y-6">
        {filteredUniversities.map((university) => (
          <div
            key={university.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img 
                    src={university.logo || "/placeholder.svg"} 
                    alt={university.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl">{university.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {university.type}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {university.accreditation}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Est. {university.established}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    university.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {university.status}
                </span>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Basic Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{university.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{university.contact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{university.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{university.website}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Students:</span>
                      <p className="text-gray-900 font-semibold">{university.students.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Faculty:</span>
                      <p className="text-gray-900 font-semibold">{university.faculty.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Academic Programs
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Vice Chancellor:</span>
                    <p className="text-gray-900">{university.vicechancellor}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Courses Offered:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {university.courses.map((course, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Specializations:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {university.specializations.slice(0, 3).map((spec, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                      {university.specializations.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{university.specializations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Departments:</span>
                      <p className="text-gray-900">{university.departments}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Research Centers:</span>
                      <p className="text-gray-900">{university.researchCenters}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placement & Rankings */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Performance & Rankings
                </h4>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Ranking:</span>
                    <p className="text-purple-600 font-semibold">{university.ranking}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Placement %:</span>
                      <p className="text-green-600 font-semibold">{university.placements.percentage}%</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Avg Package:</span>
                      <p className="text-blue-600 font-semibold">₹{(university.placements.averagePackage / 100000).toFixed(1)}L</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Highest Package:</span>
                    <p className="text-purple-600 font-semibold">₹{(university.placements.highestPackage / 100000).toFixed(1)}L</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Recent Achievements:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {university.achievements.slice(0, 2).map((achievement, index) => (
                        <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                          <Star className="w-3 h-3 inline mr-1" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure & Fees */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Campus:</span>
                  <p className="text-gray-900">{university.campus}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Hostels:</span>
                  <p className="text-gray-900">{university.hostels}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">UG Annual Fee:</span>
                  <p className="text-gray-900">₹{university.fees.ugAnnual.toLocaleString()}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">PG Annual Fee:</span>
                  <p className="text-gray-900">₹{university.fees.pgAnnual.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="font-medium text-gray-700">Group Admin:</span>
                  <span className="text-gray-900">{university.groupAdmin}</span>
                  <span className="font-medium text-gray-700">Organization:</span>
                  <span className="text-gray-900">{university.organization}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => {
                    setSelectedUniversity(university)
                    setShowUniversityModal(true)
                  }}
                  className="flex-1 bg-purple-50 text-purple-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors flex items-center justify-center"
                >
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

      {/* University Detail Modal */}
      {showUniversityModal && selectedUniversity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">University Details</h2>
              <button 
                onClick={() => setShowUniversityModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center space-x-4">
                <img
                  src={selectedUniversity.logo || "/placeholder.svg"}
                  alt={selectedUniversity.name}
                  className="w-20 h-20 object-contain bg-gray-100 rounded-lg p-2"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{selectedUniversity.name}</h3>
                  <p className="text-gray-600">{selectedUniversity.type}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      {selectedUniversity.accreditation}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {selectedUniversity.ranking}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detailed Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Contact & Location</h4>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-medium">Address:</span> {selectedUniversity.address}</p>
                    <p><span className="font-medium">Phone:</span> {selectedUniversity.contact}</p>
                    <p><span className="font-medium">Email:</span> {selectedUniversity.email}</p>
                    <p><span className="font-medium">Website:</span> {selectedUniversity.website}</p>
                    <p><span className="font-medium">Campus Size:</span> {selectedUniversity.campus}</p>
                    <p><span className="font-medium">Established:</span> {selectedUniversity.established}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Academic Leadership</h4>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-medium">Vice Chancellor:</span> {selectedUniversity.vicechancellor}</p>
                    <p><span className="font-medium">Total Students:</span> {selectedUniversity.students.toLocaleString()}</p>
                    <p><span className="font-medium">Faculty Members:</span> {selectedUniversity.faculty.toLocaleString()}</p>
                    <p><span className="font-medium">Departments:</span> {selectedUniversity.departments}</p>
                    <p><span className="font-medium">Research Centers:</span> {selectedUniversity.researchCenters}</p>
                    <p><span className="font-medium">Labs:</span> {selectedUniversity.labs}</p>
                  </div>
                </div>
              </div>

              {/* Academic Programs */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Academic Programs & Specializations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Courses Offered:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedUniversity.courses.map((course, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Specializations:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedUniversity.specializations.map((spec, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Structure */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Fee Structure</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">UG Admission</p>
                    <p className="text-lg font-semibold text-gray-900">₹{selectedUniversity.fees.ugAdmission.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">UG Annual</p>
                    <p className="text-lg font-semibold text-gray-900">₹{selectedUniversity.fees.ugAnnual.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">PG Annual</p>
                    <p className="text-lg font-semibold text-gray-900">₹{selectedUniversity.fees.pgAnnual.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">Hostel</p>
                    <p className="text-lg font-semibold text-gray-900">₹{selectedUniversity.fees.hostel.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Placement Statistics */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Placement Statistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-700">Placement Percentage</p>
                    <p className="text-2xl font-bold text-green-900">{selectedUniversity.placements.percentage}%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700">Average Package</p>
                    <p className="text-2xl font-bold text-blue-900">₹{(selectedUniversity.placements.averagePackage / 100000).toFixed(1)}L</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-purple-700">Highest Package</p>
                    <p className="text-2xl font-bold text-purple-900">₹{(selectedUniversity.placements.highestPackage / 100000).toFixed(1)}L</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-700">Top Recruiters:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUniversity.placements.topRecruiters.map((recruiter, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {recruiter}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Infrastructure & Facilities */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Infrastructure & Facilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">Library:</span> {selectedUniversity.library}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Hostels:</span> {selectedUniversity.hostels}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Laboratories:</span> {selectedUniversity.labs}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">UGC Recognition:</span> {selectedUniversity.ugcRecognition}</p>
                    <p className="text-sm"><span className="font-medium text-gray-700">Accreditation:</span> {selectedUniversity.accreditation}</p>
                  </div>
                </div>
              </div>

              {/* International Programs */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">International Programs</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUniversity.internationalPrograms.map((program, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Globe className="w-3 h-3 mr-1" />
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements & Affiliations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.achievements.map((achievement, index) => (
                      <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Affiliations</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.affiliations.map((affiliation, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {affiliation}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Management Information */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-4">Management Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <p><span className="font-medium text-gray-700">Group Admin:</span> {selectedUniversity.groupAdmin}</p>
                  <p><span className="font-medium text-gray-700">Organization:</span> {selectedUniversity.organization}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {filteredUniversities.length} of {universities.length} universities
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

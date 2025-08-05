import { Users, Building2, CreditCard, TrendingUp, DollarSign, UserPlus, School, AlertCircle } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "₹12,45,000",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    title: "Active Subscriptions",
    value: "1,234",
    change: "+8.2%",
    changeType: "positive",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    title: "Total Institutions",
    value: "856",
    change: "+15.3%",
    changeType: "positive",
    icon: Building2,
    color: "bg-purple-500",
  },
  {
    title: "Group Admins",
    value: "234",
    change: "+5.1%",
    changeType: "positive",
    icon: Users,
    color: "bg-orange-500",
  },
]

const recentActivities = [
  {
    id: 1,
    type: "subscription",
    message: "New subscription activated for Delhi Education Group",
    time: "2 hours ago",
    icon: CreditCard,
    color: "text-green-600",
  },
  {
    id: 2,
    type: "institution",
    message: "St. Mary's College added to Mumbai Group",
    time: "4 hours ago",
    icon: School,
    color: "text-blue-600",
  },
  {
    id: 3,
    type: "user",
    message: "New Group Admin registered: Rajesh Kumar",
    time: "6 hours ago",
    icon: UserPlus,
    color: "text-purple-600",
  },
  {
    id: 4,
    type: "alert",
    message: "Payment failed for Chennai Education Network",
    time: "8 hours ago",
    icon: AlertCircle,
    color: "text-red-600",
  },
]

const topInstitutions = [
  { name: "Delhi Public School Group", students: 15420, revenue: "₹2,45,000" },
  { name: "Amity University Network", students: 12350, revenue: "₹1,98,000" },
  { name: "Ryan International Schools", students: 9870, revenue: "₹1,67,000" },
  { name: "DAV College Group", students: 8540, revenue: "₹1,34,000" },
  { name: "Kendriya Vidyalaya Sangathan", students: 7230, revenue: "₹1,12,000" },
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your ERP system.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Institutions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Performing Institutions</h2>
          <div className="space-y-4">
            {topInstitutions.map((institution, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{institution.name}</p>
                  <p className="text-sm text-gray-600">{institution.students.toLocaleString()} students</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{institution.revenue}</p>
                  <p className="text-xs text-gray-500">Monthly</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <UserPlus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Add Group Admin</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Building2 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Add Institution</p>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <CreditCard className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Create Subscription</p>
          </button>
        </div>
      </div>
    </div>
  )
}

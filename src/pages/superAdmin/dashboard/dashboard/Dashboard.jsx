"use client";

import {
  Users,
  Building2,
  CreditCard,
  TrendingUp,
  DollarSign,
  UserPlus,
  School,
  AlertCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
];

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
];

const topInstitutions = [
  { name: "Delhi Public School Group", students: 15420, revenue: "₹2,45,000" },
  { name: "Amity University Network", students: 12350, revenue: "₹1,98,000" },
  { name: "Ryan International Schools", students: 9870, revenue: "₹1,67,000" },
  { name: "DAV College Group", students: 8540, revenue: "₹1,34,000" },
  {
    name: "Kendriya Vidyalaya Sangathan",
    students: 7230,
    revenue: "₹1,12,000",
  },
];

// Data for charts
const revenueData = [
  { name: "Jan", revenue: 200000, subscriptions: 120 },
  { name: "Feb", revenue: 350000, subscriptions: 190 },
  { name: "Mar", revenue: 450000, subscriptions: 210 },
  { name: "Apr", revenue: 550000, subscriptions: 280 },
  { name: "May", revenue: 700000, subscriptions: 350 },
  { name: "Jun", revenue: 850000, subscriptions: 410 },
  { name: "Jul", revenue: 950000, subscriptions: 480 },
  { name: "Aug", revenue: 1245000, subscriptions: 520 },
];

const institutionGrowthData = [
  { name: "2019", institutions: 320 },
  { name: "2020", institutions: 450 },
  { name: "2021", institutions: 580 },
  { name: "2022", institutions: 690 },
  { name: "2023", institutions: 790 },
  { name: "2024", institutions: 856 },
];

const planDistributionData = [
  { name: "Enterprise", value: 35 },
  { name: "Premium", value: 45 },
  { name: "Standard", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const studentActivityData = [
  { name: "Mon", active: 4000, new: 2400 },
  { name: "Tue", active: 3000, new: 1398 },
  { name: "Wed", active: 2000, new: 9800 },
  { name: "Thu", active: 2780, new: 3908 },
  { name: "Fri", active: 1890, new: 4800 },
  { name: "Sat", active: 2390, new: 3800 },
  { name: "Sun", active: 3490, new: 4300 },
];

const codingActivitiesData = [
  { name: "PHP", value: 40.2, color: "#3366cc" },
  { name: "MySQL", value: 17.2, color: "#ff9900" },
  { name: "JavaScript", value: 23, color: "#dc3912" },
  { name: "AJAX", value: 13.8, color: "#109618" },
  { name: "CSS", value: 5.7, color: "#990099" },
];

export default function Dashboard() {


  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Welcome back! Here's what's happening with your ERP system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1" />
                  <span
                    className={`text-xs md:text-sm font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500 ml-1">
                    vs last month
                  </span>
                </div>
              </div>
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
     
   {/* Revenue vs Subscriptions Bar Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Revenue & Subscriptions
          </h2>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#0088FE" />
                <YAxis yAxisId="right" orientation="right" stroke="#00C49F" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="revenue"
                  name="Revenue (₹)"
                  fill="#0088FE"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="subscriptions"
                  name="Subscriptions"
                  fill="#00C49F"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Coding Activities Pie Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">My Daily Coding Activities</h2>
          <div className="flex flex-col md:flex-row h-64 md:h-80">
            <div className="w-full md:w-2/3 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={codingActivitiesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                    dataKey="value"
                  >
                    {codingActivitiesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%, 'Percentage'`]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center pl-4 mt-4 md:mt-0">
              <ul className="space-y-2">
                {codingActivitiesData.map((entry, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span
                      className="w-4 h-4 rounded-sm inline-block"
                      style={{ backgroundColor: entry.color }}
                    ></span>
                    <span className="text-sm">{entry.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
     

        {/* Student Activity Line Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Student Activity
          </h2>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="active"
                  name="Active Students"
                  stroke="#FF8042"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  name="New Students"
                  stroke="#00C49F"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Plan Distribution Pie Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Subscription Plan Distribution
          </h2>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={planDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                   ` ${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {planDistributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>


      {/* Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`} >
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Institutions
          </h2>
          <div className="space-y-3">
            {topInstitutions.map((institution, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {institution.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {institution.students.toLocaleString()} students
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">
                    {institution.revenue}
                  </p>
                  <p className="text-xs text-gray-500">Monthly</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button className="p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center">
            <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mb-2" />
            <p className="text-xs md:text-sm font-medium text-gray-700">
              Add Group Admin
            </p>
          </button>
          <button className="p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mb-2" />
            <p className="text-xs md:text-sm font-medium text-gray-700">
              Add Institution
            </p>
          </button>
          <button className="p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center">
            <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mb-2" />
            <p className="text-xs md:text-sm font-medium text-gray-700">
              Create Subscription
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
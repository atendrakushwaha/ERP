import { TrendingUp, TrendingDown, Users, DollarSign, Calendar, BarChart3, PieChart, Activity } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 850000, subscriptions: 180 },
  { month: "Feb", revenue: 920000, subscriptions: 195 },
  { month: "Mar", revenue: 1100000, subscriptions: 220 },
  { month: "Apr", revenue: 980000, subscriptions: 210 },
  { month: "May", revenue: 1250000, subscriptions: 245 },
  { month: "Jun", revenue: 1180000, subscriptions: 235 },
]

const planDistribution = [
  { plan: "Basic", count: 45, percentage: 18, color: "bg-gray-500" },
  { plan: "Standard", count: 98, percentage: 40, color: "bg-blue-500" },
  { plan: "Premium", count: 67, percentage: 27, color: "bg-purple-500" },
  { plan: "Enterprise", count: 35, percentage: 15, color: "bg-orange-500" },
]

const topPerformers = [
  { name: "Delhi Education Group", revenue: 245000, growth: 15.2, institutions: 12 },
  { name: "Mumbai Education Network", revenue: 198000, growth: 12.8, institutions: 8 },
  { name: "Chennai Schools Alliance", revenue: 167000, growth: 18.5, institutions: 10 },
  { name: "Bangalore University Group", revenue: 134000, growth: 8.9, institutions: 6 },
  { name: "Hyderabad Education Hub", revenue: 112000, growth: 22.1, institutions: 7 },
]

const metrics = [
  {
    title: "Monthly Recurring Revenue",
    value: "₹12,45,000",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    description: "Total MRR across all subscriptions",
  },
  {
    title: "Customer Acquisition Cost",
    value: "₹8,500",
    change: "-5.2%",
    changeType: "positive",
    icon: Users,
    description: "Average cost to acquire new customer",
  },
  {
    title: "Churn Rate",
    value: "2.3%",
    change: "+0.5%",
    changeType: "negative",
    icon: TrendingDown,
    description: "Monthly customer churn rate",
  },
  {
    title: "Average Revenue Per User",
    value: "₹18,750",
    change: "+8.1%",
    changeType: "positive",
    icon: BarChart3,
    description: "Average monthly revenue per customer",
  },
]

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600 mt-2">Comprehensive insights into your ERP system performance</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export Report
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  metric.changeType === "positive" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <metric.icon
                  className={`w-6 h-6 ${metric.changeType === "positive" ? "text-green-600" : "text-red-600"}`}
                />
              </div>
              <div
                className={`flex items-center text-sm font-medium ${
                  metric.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.changeType === "positive" ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-gray-700 mb-2">{metric.title}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Revenue Trend</h2>
            <div className="flex space-x-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">6M</button>
              <button className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">1Y</button>
            </div>
          </div>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-8">{data.month}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(data.revenue / 1250000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{(data.revenue / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-gray-500">{data.subscriptions} subs</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Subscription Plans Distribution</h2>
          <div className="space-y-4">
            {planDistribution.map((plan, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${plan.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{plan.plan}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                    <div className={`${plan.color} h-2 rounded-full`} style={{ width: `${plan.percentage}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-8">{plan.count}</span>
                  <span className="text-xs text-gray-500 w-8">{plan.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Groups</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Group Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Monthly Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Growth Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Institutions</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topPerformers.map((performer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                      </div>
                      <span className="font-medium text-gray-900">{performer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-gray-900">₹{performer.revenue.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-600 font-medium">{performer.growth}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                      {performer.institutions}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${Math.min(performer.growth * 4, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">Excellent</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Student Growth</h3>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Students</span>
              <span className="font-semibold text-gray-900">2,45,670</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">New Admissions</span>
              <span className="font-semibold text-green-600">+12,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Growth Rate</span>
              <span className="font-semibold text-blue-600">+15.3%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">System Usage</h3>
            <PieChart className="w-5 h-5 text-purple-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Daily Active Users</span>
              <span className="font-semibold text-gray-900">45,230</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Feature Adoption</span>
              <span className="font-semibold text-purple-600">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Mobile Usage</span>
              <span className="font-semibold text-orange-600">62%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Support Metrics</h3>
            <Calendar className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Avg Response Time</span>
              <span className="font-semibold text-gray-900">2.5 hrs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Resolution Rate</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Satisfaction Score</span>
              <span className="font-semibold text-blue-600">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, TrendingDown, Calendar, Download, Filter, BarChart3, PieChart, Users, Building2, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const revenueData = [
  { month: "Jan 2024", revenue: 850000, subscriptions: 180, growth: 12.5 },
  { month: "Feb 2024", revenue: 920000, subscriptions: 195, growth: 8.2 },
  { month: "Mar 2024", revenue: 1100000, subscriptions: 220, growth: 19.6 },
  { month: "Apr 2024", revenue: 980000, subscriptions: 210, growth: -10.9 },
  { month: "May 2024", revenue: 1250000, subscriptions: 245, growth: 27.6 },
  { month: "Jun 2024", revenue: 1180000, subscriptions: 235, growth: -5.6 },
  { month: "Jul 2024", revenue: 1350000, subscriptions: 260, growth: 14.4 },
  { month: "Aug 2024", revenue: 1420000, subscriptions: 275, growth: 5.2 },
  { month: "Sep 2024", revenue: 1380000, subscriptions: 270, growth: -2.8 },
  { month: "Oct 2024", revenue: 1500000, subscriptions: 290, growth: 8.7 },
  { month: "Nov 2024", revenue: 1650000, subscriptions: 315, growth: 10.0 },
  { month: "Dec 2024", revenue: 1750000, subscriptions: 340, growth: 6.1 },
]

const planRevenue = [
  { plan: "Basic", revenue: 2500000, percentage: 15, subscribers: 125, avgRevenue: 20000 },
  { plan: "Standard", revenue: 6800000, percentage: 40, subscribers: 170, avgRevenue: 40000 },
  { plan: "Premium", revenue: 5100000, percentage: 30, subscribers: 85, avgRevenue: 60000 },
  { plan: "Enterprise", revenue: 2550000, percentage: 15, subscribers: 25, avgRevenue: 102000 },
]

const topRevenueGroups = [
  { 
    name: "Delhi Education Group", 
    revenue: 2450000, 
    growth: 15.2, 
    institutions: 12, 
    plan: "Enterprise",
    lastPayment: "2024-01-10"
  },
  { 
    name: "Mumbai Education Network", 
    revenue: 1980000, 
    growth: 12.8, 
    institutions: 8, 
    plan: "Premium",
    lastPayment: "2024-01-08"
  },
  { 
    name: "Chennai Schools Alliance", 
    revenue: 1670000, 
    growth: 18.5, 
    institutions: 10, 
    plan: "Premium",
    lastPayment: "2024-01-12"
  },
  { 
    name: "Bangalore University Group", 
    revenue: 1340000, 
    growth: 8.9, 
    institutions: 6, 
    plan: "Standard",
    lastPayment: "2024-01-05"
  },
  { 
    name: "Hyderabad Education Hub", 
    revenue: 1120000, 
    growth: 22.1, 
    institutions: 7, 
    plan: "Standard",
    lastPayment: "2024-01-15"
  },
]

const revenueMetrics = [
  {
    title: "Total Revenue",
    value: "₹1,75,00,000",
    change: "+15.2%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-green-500",
    description: "This month"
  },
  {
    title: "Monthly Recurring Revenue",
    value: "₹1,45,00,000",
    change: "+12.8%",
    changeType: "positive",
    icon: TrendingUp,
    color: "bg-blue-500",
    description: "MRR growth"
  },
  {
    title: "Average Revenue Per User",
    value: "₹51,470",
    change: "+8.5%",
    changeType: "positive",
    icon: Users,
    color: "bg-purple-500",
    description: "Per subscriber"
  },
  {
    title: "Revenue Growth Rate",
    value: "18.7%",
    change: "+2.3%",
    changeType: "positive",
    icon: BarChart3,
    color: "bg-orange-500",
    description: "Year over year"
  },
]

export default function RevenueReports() {
  const [selectedPeriod, setSelectedPeriod] = useState("12months")
  const [selectedMetric, setSelectedMetric] = useState("revenue")
  const [showComparison, setShowComparison] = useState(false)

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
  const avgGrowth = revenueData.reduce((sum, item) => sum + item.growth, 0) / revenueData.length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Reports</h1>
          <p className="text-gray-600 mt-2">Comprehensive revenue analytics and insights</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center text-sm font-medium ${
                metric.changeType === "positive" ? "text-green-600" : "text-red-600"
              }`}>
                {metric.changeType === "positive" ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
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

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="12months">Last 12 Months</option>
                <option value="24months">Last 24 Months</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-gray-400" />
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="revenue">Revenue</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="growth">Growth Rate</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="comparison"
              checked={showComparison}
              onChange={(e) => setShowComparison(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="comparison" className="text-sm font-medium text-gray-700">
              Show Year-over-Year Comparison
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Revenue Trend</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Total: ₹{(totalRevenue / 10000000).toFixed(1)}Cr</span>
              <span>•</span>
              <span>Avg Growth: {avgGrowth.toFixed(1)}%</span>
            </div>
          </div>
          <div className="space-y-3">
            {revenueData.slice(-6).map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-20">{data.month.split(' ')[0]}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 w-40">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(data.revenue / 1750000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{(data.revenue / 100000).toFixed(1)}L</p>
                  <p className={`text-xs ${data.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {data.growth >= 0 ? '+' : ''}{data.growth.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Revenue Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Revenue by Plan</h2>
          <div className="space-y-4">
            {planRevenue.map((plan, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    plan.plan === 'Enterprise' ? 'bg-purple-500' :
                    plan.plan === 'Premium' ? 'bg-blue-500' :
                    plan.plan === 'Standard' ? 'bg-green-500' : 'bg-gray-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{plan.plan}</p>
                    <p className="text-sm text-gray-600">{plan.subscribers} subscribers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{(plan.revenue / 100000).toFixed(1)}L</p>
                  <p className="text-sm text-gray-600">{plan.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Revenue Groups */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Revenue Generating Groups</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Group Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Growth</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Plan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Institutions</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Last Payment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topRevenueGroups.map((group, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                      </div>
                      <span className="font-medium text-gray-900">{group.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-gray-900">₹{(group.revenue / 100000).toFixed(1)}L</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {group.growth >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span className={`font-medium ${group.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {group.growth >= 0 ? '+' : ''}{group.growth}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      group.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                      group.plan === 'Premium' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {group.plan}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-gray-900">{group.institutions}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{group.lastPayment}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                        <div
                          className={`h-2 rounded-full ${
                            group.growth >= 15 ? 'bg-green-500' :
                            group.growth >= 10 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(group.growth * 5, 100)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {group.growth >= 15 ? 'Excellent' :
                         group.growth >= 10 ? 'Good' : 'Average'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Forecast</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Next Month</span>
              <span className="font-semibold text-gray-900">₹1.85Cr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Next Quarter</span>
              <span className="font-semibold text-green-600">₹5.8Cr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Confidence</span>
              <span className="font-semibold text-blue-600">87%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment Health</h3>
            <CreditCard className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">On-time Payments</span>
              <span className="font-semibold text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Late Payments</span>
              <span className="font-semibold text-yellow-600">4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Failed Payments</span>
              <span className="font-semibold text-red-600">2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Insights</h3>
            <BarChart3 className="w-5 h-5 text-purple-500" />
          </div>
          <div className="space-y-3">
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Best Performing Month</p>
              <p className="font-semibold text-gray-900">December 2024</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Highest Growth Rate</p>
              <p className="font-semibold text-green-600">+27.6% (May)</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Revenue per Institution</p>
              <p className="font-semibold text-blue-600">₹2.04L</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

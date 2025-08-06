"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, Users, Building2, DollarSign, Calendar, Target, BarChart3, PieChart, Activity, ArrowUpRight, ArrowDownRight, Download, Filter } from 'lucide-react'

const growthData = [
  { 
    month: "Jan 2024", 
    revenue: 850000, 
    users: 180, 
    institutions: 45, 
    revenueGrowth: 12.5,
    userGrowth: 8.2,
    institutionGrowth: 15.3
  },
  { 
    month: "Feb 2024", 
    revenue: 920000, 
    users: 195, 
    institutions: 48, 
    revenueGrowth: 8.2,
    userGrowth: 8.3,
    institutionGrowth: 6.7
  },
  { 
    month: "Mar 2024", 
    revenue: 1100000, 
    users: 220, 
    institutions: 52, 
    revenueGrowth: 19.6,
    userGrowth: 12.8,
    institutionGrowth: 8.3
  },
  { 
    month: "Apr 2024", 
    revenue: 980000, 
    users: 210, 
    institutions: 50, 
    revenueGrowth: -10.9,
    userGrowth: -4.5,
    institutionGrowth: -3.8
  },
  { 
    month: "May 2024", 
    revenue: 1250000, 
    users: 245, 
    institutions: 58, 
    revenueGrowth: 27.6,
    userGrowth: 16.7,
    institutionGrowth: 16.0
  },
  { 
    month: "Jun 2024", 
    revenue: 1180000, 
    users: 235, 
    institutions: 56, 
    revenueGrowth: -5.6,
    userGrowth: -4.1,
    institutionGrowth: -3.4
  },
]

const kpiMetrics = [
  {
    title: "Revenue Growth Rate",
    value: "18.7%",
    change: "+2.3%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-green-500",
    target: "20%",
    progress: 93.5,
    description: "Year-over-year growth"
  },
  {
    title: "User Acquisition Rate",
    value: "15.2%",
    change: "+1.8%",
    changeType: "positive",
    icon: Users,
    color: "bg-blue-500",
    target: "18%",
    progress: 84.4,
    description: "Monthly new users"
  },
  {
    title: "Institution Growth",
    value: "12.8%",
    change: "+0.9%",
    changeType: "positive",
    icon: Building2,
    color: "bg-purple-500",
    target: "15%",
    progress: 85.3,
    description: "New institutions added"
  },
  {
    title: "Market Penetration",
    value: "8.4%",
    change: "+1.2%",
    changeType: "positive",
    icon: Target,
    color: "bg-orange-500",
    target: "12%",
    progress: 70.0,
    description: "Total addressable market"
  },
]

const cohortData = [
  { cohort: "Jan 2024", month1: 100, month2: 85, month3: 78, month4: 72, month5: 68, month6: 65 },
  { cohort: "Feb 2024", month1: 100, month2: 88, month3: 82, month4: 76, month5: 71, month6: null },
  { cohort: "Mar 2024", month1: 100, month2: 92, month3: 86, month4: 80, month5: null, month6: null },
  { cohort: "Apr 2024", month1: 100, month2: 89, month3: 83, month4: null, month5: null, month6: null },
  { cohort: "May 2024", month1: 100, month2: 94, month3: null, month4: null, month5: null, month6: null },
  { cohort: "Jun 2024", month1: 100, month2: null, month3: null, month4: null, month5: null, month6: null },
]

const segmentGrowth = [
  { segment: "Schools", growth: 22.5, revenue: 4500000, users: 156, color: "bg-blue-500" },
  { segment: "Colleges", growth: 18.3, revenue: 3200000, users: 89, color: "bg-green-500" },
  { segment: "Universities", growth: 15.7, revenue: 2800000, users: 45, color: "bg-purple-500" },
  { segment: "Training Centers", growth: 12.1, revenue: 1500000, users: 35, color: "bg-orange-500" },
]

const forecasting = [
  { period: "Next Month", revenue: 1850000, users: 355, confidence: 87 },
  { period: "Next Quarter", revenue: 5800000, users: 1120, confidence: 82 },
  { period: "Next 6 Months", revenue: 12500000, users: 2340, confidence: 75 },
  { period: "Next Year", revenue: 28000000, users: 4800, confidence: 68 },
]

export default function GrowthMetrics() {
  const [selectedMetric, setSelectedMetric] = useState("revenue")
  const [selectedPeriod, setSelectedPeriod] = useState("6months")
  const [showForecasting, setShowForecasting] = useState(true)

  const currentGrowthRate = growthData[growthData.length - 1]?.revenueGrowth || 0
  const avgGrowthRate = growthData.reduce((sum, item) => sum + item.revenueGrowth, 0) / growthData.length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Growth Metrics</h1>
          <p className="text-gray-600 mt-2">Track business growth and performance indicators</p>
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

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => (
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
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-gray-700 mb-2">{metric.title}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Target: {metric.target}</span>
                <span className="font-medium text-gray-900">{metric.progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${metric.color}`}
                  style={{ width: `${metric.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-gray-400" />
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="revenue">Revenue Growth</option>
                <option value="users">User Growth</option>
                <option value="institutions">Institution Growth</option>
                <option value="all">All Metrics</option>
              </select>
            </div>
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
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="forecasting"
              checked={showForecasting}
              onChange={(e) => setShowForecasting(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="forecasting" className="text-sm font-medium text-gray-700">
              Show Forecasting
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Growth Trends</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Current: {currentGrowthRate >= 0 ? '+' : ''}{currentGrowthRate.toFixed(1)}%</span>
              <span>•</span>
              <span>Avg: {avgGrowthRate >= 0 ? '+' : ''}{avgGrowthRate.toFixed(1)}%</span>
            </div>
          </div>
          <div className="space-y-4">
            {growthData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-20">{data.month.split(' ')[0]}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 w-32">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        data.revenueGrowth >= 0 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.abs(data.revenueGrowth) * 3}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">₹{(data.revenue / 100000).toFixed(1)}L</p>
                  <p className={`text-xs ${data.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {data.revenueGrowth >= 0 ? '+' : ''}{data.revenueGrowth.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segment Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Growth by Segment</h2>
          <div className="space-y-4">
            {segmentGrowth.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{segment.segment}</p>
                    <p className="text-sm text-gray-600">{segment.users} groups</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{segment.growth >= 0 ? '+' : ''}{segment.growth}%</p>
                  <p className="text-sm text-gray-600">₹{(segment.revenue / 100000).toFixed(1)}L</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cohort Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">User Retention Cohort Analysis</h2>
          <div className="text-sm text-gray-600">
            Retention rates by month
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Cohort</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 1</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 2</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 3</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 4</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 5</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Month 6</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cohortData.map((cohort, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{cohort.cohort}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      {cohort.month1}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {cohort.month2 ? (
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        cohort.month2 >= 80 ? 'bg-green-100 text-green-800' :
                        cohort.month2 >= 70 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cohort.month2}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {cohort.month3 ? (
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        cohort.month3 >= 75 ? 'bg-green-100 text-green-800' :
                        cohort.month3 >= 65 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cohort.month3}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {cohort.month4 ? (
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        cohort.month4 >= 70 ? 'bg-green-100 text-green-800' :
                        cohort.month4 >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cohort.month4}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {cohort.month5 ? (
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        cohort.month5 >= 65 ? 'bg-green-100 text-green-800' :
                        cohort.month5 >= 55 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cohort.month5}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {cohort.month6 ? (
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        cohort.month6 >= 60 ? 'bg-green-100 text-green-800' :
                        cohort.month6 >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {cohort.month6}%
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Forecasting */}
      {showForecasting && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Growth Forecasting</h2>
            <div className="text-sm text-gray-600">
              Predictive analytics based on historical data
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forecasting.map((forecast, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{forecast.period}</h3>
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    forecast.confidence >= 80 ? 'bg-green-100' :
                    forecast.confidence >= 70 ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-2xl font-bold ${
                      forecast.confidence >= 80 ? 'text-green-600' :
                      forecast.confidence >= 70 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {forecast.confidence}%
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-xl font-bold text-gray-900">₹{(forecast.revenue / 10000000).toFixed(1)}Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Users</p>
                    <p className="text-lg font-semibold text-blue-600">{forecast.users}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Confidence Level</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Growth Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Growth Velocity</h3>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Current Momentum</span>
              <span className="font-semibold text-green-600">High</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Acceleration</span>
              <span className="font-semibold text-blue-600">+2.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Trend Direction</span>
              <span className="font-semibold text-green-600">Upward</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Market Position</h3>
            <Target className="w-5 h-5 text-purple-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Market Share</span>
              <span className="font-semibold text-gray-900">8.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Competitive Rank</span>
              <span className="font-semibold text-purple-600">#3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Growth vs Market</span>
              <span className="font-semibold text-green-600">+5.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Drivers</h3>
            <TrendingUp className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-3">
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Primary Driver</p>
              <p className="font-semibold text-gray-900">Product Innovation</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Growth Channel</p>
              <p className="font-semibold text-blue-600">Digital Marketing</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600 mb-1">Success Factor</p>
              <p className="font-semibold text-green-600">Customer Retention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

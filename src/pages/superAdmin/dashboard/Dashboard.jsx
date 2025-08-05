// src/pages/Dashboard.jsx
import React from "react";
import { FaUsers, FaSchool, FaRupeeSign, FaCheckCircle } from "react-icons/fa";
import Chart from "../../../components/superAdmin/Chart/chart";
import SummaryCards from "../../../components/superAdmin/Chart/SummaryCards";
import ChartsSection from "../../../components/superAdmin/Chart/ChartsSection";
import TasksTable from "../../../components/superAdmin/Chart/TasksTable";

const statCards = [
  {
    title: "Total Groups",
    value: "12",
    icon: <FaUsers className="text-blue-500 text-3xl" />,
    color: "bg-blue-100"
  },
  {
    title: "Total Institutes",
    value: "45",
    icon: <FaSchool className="text-green-500 text-3xl" />,
    color: "bg-green-100"
  },
  {
    title: "Active Subscriptions",
    value: "39",
    icon: <FaCheckCircle className="text-yellow-500 text-3xl" />,
    color: "bg-yellow-100"
  },
  {
    title: "Revenue",
    value: "₹2,40,000",
    icon: <FaRupeeSign className="text-purple-500 text-3xl" />,
    color: "bg-purple-100"
  }
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Super Admin Dashboard</h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl shadow-md flex items-center gap-4 ${card.color}`}
          >
            <div>{card.icon}</div>
            <div>
              <h4 className="text-gray-700 font-semibold text-lg">{card.title}</h4>
              <p className="text-xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className=" bg-white p-4 mt-2 rounded-xl shadow-md">
       {/* <Chart/> */}
       <main className="p-6 space-y-6 overflow-auto">
          <SummaryCards />
          <ChartsSection />
          <TasksTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

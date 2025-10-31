import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faCalendarAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function DashboardOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Users", value: "1,245", icon: faUser, color: "bg-blue-100 text-blue-600" },
          { title: "Destinations", value: "32", icon: faMapMarkerAlt, color: "bg-teal-100 text-teal-600" },
          { title: "Bookings", value: "456", icon: faCalendarAlt, color: "bg-purple-100 text-purple-600" },
          { title: "Revenue", value: "$24,580", icon: faChartLine, color: "bg-orange-100 text-orange-600" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 flex items-center gap-4 hover:shadow-lg transition">
            <div className={`p-4 rounded-full ${item.color}`}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-xl font-bold">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200 text-sm text-gray-600">
          <li className="py-3 flex justify-between">
            <span>New booking from <strong>John Doe</strong></span>
            <span>2h ago</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Added destination <strong>Greece</strong></span>
            <span>5h ago</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>User <strong>Emily</strong> registered</span>
            <span>8h ago</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>Booking cancelled by <strong>Michael</strong></span>
            <span>1d ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardOverview;

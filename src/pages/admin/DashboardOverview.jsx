import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faCalendarAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import {
  getAllUsersAPI,
  getAllDestinationsAPI,
  getAllBookingsAPI,
} from "../../service/allAPI";

function DashboardOverview() {
  const [overview, setOverview] = useState({
    totalUsers: 0,
    destinations: 0,
    bookings: 0,
    revenue: 0,
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const [usersRes, destinationsRes, bookingsRes] = await Promise.all([
          getAllUsersAPI(),
          getAllDestinationsAPI(),
          getAllBookingsAPI(),
        ]);

        // Calculate overview data
        const updatedOverview = {
          totalUsers: usersRes.data.length,
          destinations: destinationsRes.data.length,
          bookings: bookingsRes.data.length,
          revenue: bookingsRes.data.length * 1000, // Example logic
        };
        setOverview(updatedOverview);

        // Combine all data for recent activity
        const usersActivity = usersRes.data
          .slice(-3)
          .map((u) => ({
            message: `New user registered: ${u.name || "Unknown"}`,
            time: "Just now",
            type: "user",
          }));

        const bookingsActivity = bookingsRes.data
          .slice(-3)
          .map((b) => ({
            message: `New booking by ${b.user || "Guest"} for ${
              b.destination || "Unknown place"
            }`,
            time: "Recently",
            type: "booking",
          }));

        const destinationsActivity = destinationsRes.data
          .slice(-3)
          .map((d) => ({
            message: `New destination added: ${d.name || "Unnamed"}`,
            time: "Recently",
            type: "destination",
          }));

        // Merge all and sort by latest (assuming backend sorted newest last)
        const mergedActivity = [
          ...usersActivity,
          ...bookingsActivity,
          ...destinationsActivity,
        ].reverse();

        setRecentActivity(mergedActivity);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      }
    };

    fetchOverviewData();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: overview.totalUsers,
      icon: faUser,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Destinations",
      value: overview.destinations,
      icon: faMapMarkerAlt,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Bookings",
      value: overview.bookings,
      icon: faCalendarAlt,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Revenue",
      value: `$${overview.revenue}`,
      icon: faChartLine,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-4 hover:shadow-lg transition"
          >
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

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        {recentActivity.length > 0 ? (
          <ul className="divide-y divide-gray-200 text-sm text-gray-600">
            {recentActivity.map((item, index) => (
              <li key={index} className="py-3 flex justify-between">
                <span>{item.message}</span>
                <span className="text-gray-400">{item.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No recent activity found.</p>
        )}
      </div>
    </div>
  );
}

export default DashboardOverview;

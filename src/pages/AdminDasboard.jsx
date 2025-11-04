import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  faChartLine,
  faMapMarkedAlt,
  faUsers,
  faCalendarCheck,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/dashboard/overview", label: "Overview", icon: faChartLine },
    { path: "/admin/dashboard/destinations", label: "Destinations", icon: faMapMarkedAlt },
    { path: "/admin/dashboard/users", label: "Users", icon: faUsers },
    { path: "/admin/dashboard/bookings", label: "Bookings", icon: faCalendarCheck },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-teal-700 to-teal-500 text-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-teal-400 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">Admin Panel</h1>
          <p className="text-sm text-teal-200 mt-1">Travel & Tours</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-5 space-y-2 mt-2">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-white/20 backdrop-blur text-white shadow-md"
                    : "hover:bg-white/10 text-teal-100"
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${active ? "text-white" : "text-teal-200"}`}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-teal-400">
          <button
            onClick={() => window.location.assign("/")}
            className="flex items-center justify-center gap-2 w-full bg-teal-800 py-2.5 px-3 rounded-lg hover:bg-teal-900 transition-all duration-200 shadow-md"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-gray-50">
        {/* Top bar */}
        <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome, <span className="text-teal-600">Admin 👋</span>
          </h2>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">admin@sailo.com</div>
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Admin avatar"
              className="rounded-full w-10 h-10 border-2 border-teal-500 shadow-sm"
            />
          </div>
        </header>

        {/* Main body */}
        <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
    faChartLine,
    faMapMarkedAlt,
    faUsers,
    faCalendarCheck,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-teal-600 to-teal-500 text-white flex flex-col">
                <div className="p-6 border-b border-teal-400">
                    <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>
                    <p className="text-sm text-teal-100">Travel & Tours</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        to="/overview"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        <FontAwesomeIcon icon={faChartLine} />
                        <span>Overview</span>
                    </Link>

                    <Link
                        to="/destinations"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <span>Destinations</span>
                    </Link>

                    <Link
                        to="/users"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        <FontAwesomeIcon icon={faUsers} />
                        <span>Users</span>
                    </Link>

                    <Link
                        to="/bookings"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 transition"
                    >
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <span>Bookings</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-teal-400">
                    <button
                        onClick={() => window.location.assign("/")}
                        className="flex items-center gap-2 w-full bg-teal-700 py-2 px-3 rounded-lg hover:bg-teal-800 transition"
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Topbar */}
                <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Welcome, Admin 👋
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500">admin@travelgo.com</div>
                        <img
                            src="https://i.pravatar.cc/40?img=3"
                            alt="Admin avatar"
                            className="rounded-full w-10 h-10"
                        />
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;

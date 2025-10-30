import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMapMarkerAlt,
    faCalendarAlt,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function DashboardOverview() {
    return (
        <>

            <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
                        <div className="p-4 bg-teal-100 text-teal-600 rounded-full">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Users</p>
                            <h3 className="text-xl font-bold">1,245</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
                        <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Destinations</p>
                            <h3 className="text-xl font-bold">32</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
                        <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
                            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Bookings</p>
                            <h3 className="text-xl font-bold">456</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-5 flex items-center gap-4">
                        <div className="p-4 bg-orange-100 text-orange-600 rounded-full">
                            <FontAwesomeIcon icon={faChartLine} size="lg" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Revenue</p>
                            <h3 className="text-xl font-bold">$24,580</h3>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Recent Activity
                    </h2>
                    <ul className="divide-y divide-gray-200">
                        <li className="py-3 flex justify-between text-sm text-gray-600">
                            <span>New booking from <strong>John Doe</strong></span>
                            <span>2 hours ago</span>
                        </li>
                        <li className="py-3 flex justify-between text-sm text-gray-600">
                            <span>Added destination <strong>Greece</strong></span>
                            <span>5 hours ago</span>
                        </li>
                        <li className="py-3 flex justify-between text-sm text-gray-600">
                            <span>User <strong>Emily</strong> registered</span>
                            <span>8 hours ago</span>
                        </li>
                        <li className="py-3 flex justify-between text-sm text-gray-600">
                            <span>Booking cancelled by <strong>Michael</strong></span>
                            <span>1 day ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardOverview
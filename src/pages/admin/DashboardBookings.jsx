import React, { useEffect, useState } from "react";
import { getAllBookingsAPI } from "../../service/allAPI";

const DashboardBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const result = await getAllBookingsAPI();
        if (result.status === 200) {
          setBookings(result.data);
        } else {
          console.error("Failed to fetch bookings, status:", result.status);
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800"> Bookings</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3 text-left">Booking ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Tickets</th>
            <th className="p-3 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length ? (
            bookings.map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.customer}</td>
                <td className="p-3">{b.destination}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.tickets}</td>
                <td className="p-3">{b.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-3 text-center text-gray-500">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardBookings;

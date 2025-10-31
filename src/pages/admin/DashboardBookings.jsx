import React from "react";

function DashboardBookings() {
  const bookings = [
    { id: 101, customer: "John Doe", destination: "Greece", date: "2025-10-20", status: "Confirmed" },
    { id: 102, customer: "Emily Carter", destination: "Spain", date: "2025-11-02", status: "Pending" },
    { id: 103, customer: "Michael Lee", destination: "Taiwan", date: "2025-11-15", status: "Cancelled" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Bookings</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3 text-left">Booking ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">{b.id}</td>
              <td className="p-3">{b.customer}</td>
              <td className="p-3">{b.destination}</td>
              <td className="p-3">{b.date}</td>
              <td className={`p-3 font-semibold ${b.status === "Confirmed"
                ? "text-green-600"
                : b.status === "Pending"
                ? "text-yellow-600"
                : "text-red-600"
                }`}>
                {b.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardBookings;

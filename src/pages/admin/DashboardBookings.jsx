import React, { useEffect, useState } from "react";
import {
  getAllBookingsAPI,
  updateBookingStatusAPI,
  deleteBookingAPI,
} from "../../service/allAPI";
import Swal from "sweetalert2";

const DashboardBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const result = await getAllBookingsAPI();

      if (result.status === 200) {
        setBookings(result.data);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  const handleApprove = async (id) => {
    try {
      const result = await updateBookingStatusAPI(id, { status: "Approved" });
      if (result.status === 200) {
        setBookings((prev) =>
          prev.map((b) =>
            b.id === id ? { ...b, status: "Approved" } : b
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      const result = await updateBookingStatusAPI(id, { status: "Rejected" });

      if (result.status === 200) {
        setBookings((prev) =>
          prev.map((b) =>
            b.id === id ? { ...b, status: "Rejected" } : b
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You cannot undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const result = await deleteBookingAPI(id);

        if (result.status === 200) {
          setBookings((prev) => prev.filter((b) => b.id !== id));

          Swal.fire("Deleted!", "Booking has been removed.", "success");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Bookings</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Destination</th>
            <th className="p-3">Date</th>
            <th className="p-3">Tickets</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length > 0 ? (
            bookings.map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{String(b.id)}</td>
                <td className="p-3">{String(b.customer)}</td>
                <td className="p-3">{String(b.destination)}</td>
                <td className="p-3">{String(b.date)}</td>
                <td className="p-3">{String(b.tickets)}</td>
                <td className="p-3">{String(b.phone)}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                      ${b.status === "Approved"
                      ? "bg-green-200 text-green-800"
                      : b.status === "Rejected"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {b.status ? b.status : "Pending"}
                  </span>
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button onClick={() => handleApprove(b.id)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"> Approve </button>
                  <button onClick={() => handleReject(b.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700" > Reject</button>
                  <button onClick={() => handleDelete(b.id)} className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900"> Delete </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="p-3 text-center text-gray-500">
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

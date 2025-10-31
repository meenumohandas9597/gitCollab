import React from "react";

function DashboardUsers() {
  const users = [
    { name: "John Doe", email: "john@gmail.com", role: "Traveler" },
    { name: "Emily Carter", email: "emily@yahoo.com", role: "Traveler" },
    { name: "Michael Lee", email: "michael@hotmail.com", role: "Traveler" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardUsers;

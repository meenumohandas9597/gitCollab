import React, { useEffect, useState } from "react";
import { getAllUsersAPI } from "../../service/allAPI";

function DashboardUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getAllUsersAPI();
        setUsers(result.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="p-3 text-center text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardUsers;

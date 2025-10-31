import React from "react";

function DashboardDestinations() {
  const destinations = [
    { name: "Greece", country: "Europe", visitors: 1450 },
    { name: "Taiwan", country: "Asia", visitors: 980 },
    { name: "Spain", country: "Europe", visitors: 1210 },
    { name: "Netherlands", country: "Europe", visitors: 860 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Destinations</h1>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Country</th>
            <th className="p-3 text-left">Visitors</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((d, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">{d.name}</td>
              <td className="p-3">{d.country}</td>
              <td className="p-3">{d.visitors}</td>
              <td className="p-3 text-center space-x-3">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardDestinations;

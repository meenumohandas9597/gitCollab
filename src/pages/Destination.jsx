import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/destinations")
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error("Error fetching destinations:", err));
  }, []);

  return (
    <div className="w-full bg-white">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
          Destination
        </h1>
      </div>

      <div className="-mt-24 relative z-10 bg-white max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 rounded-3xl shadow-xl">
        {destinations.length > 0 ? (
          destinations.map((item) => (
            <Link
              to={`/destination/${item.path}`}
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="dtnfont text-white text-4xl drop-shadow-lg">
                    {item.title}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            Loading destinations...
          </p>
        )}
      </div>
    </div>
  );
};

export default Destination;

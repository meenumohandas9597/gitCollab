import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/destinations?path=${id}`)
      .then((res) => setDestination(res.data[0]))
      .catch((err) => console.error("Error fetching destination:", err));
  }, [id]);

  if (!destination) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading destination...
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800">
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${destination.heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center z-10 px-4">
          <div className="mb-6">
            <Link
              to="/destination"
              className="inline-block bg-white/20 text-white py-2 px-4 rounded-md backdrop-blur-sm hover:bg-white/30 transition"
            >
              ← Back
            </Link>
          </div>
          <h3 className="text-2xl dtnfont font-light mb-2 tracking-wide">
            Destinations
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold">{destination.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-20 bg-white rounded-2xl shadow-2xl p-6 md:p-12 relative z-20">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-3">{destination.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {destination.description}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery?.map((g, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={g}
                  alt={`${destination.title} ${i + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-700 ease-in-out rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-cyan-600 text-white rounded-xl p-6">
              <h4 className="text-2xl font-semibold mb-3">Good to Know</h4>
              <p className="mb-4">Helpful facts and tips for planning your visit.</p>
              <ul className="space-y-2">
                <li><strong>Country:</strong> {destination.info?.country}</li>
                <li><strong>Visa:</strong> {destination.info?.visa}</li>
                <li><strong>Language:</strong> {destination.info?.language}</li>
                <li><strong>Currency:</strong> {destination.info?.currency}</li>
                <li><strong>Area:</strong> {destination.info?.area}</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-4">About {destination.title}</h4>
              <p className="text-gray-700">
                This destination offers a mix of cultural landmarks, scenic nature, & local cuisine — great for short trips and extended stays alike.
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Major Cities</h4>
              <div className="grid grid-cols-2 gap-3">
                {destination.municipalities?.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-20 object-cover transform hover:scale-105 transition duration-700 ease-in-out rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium">{m.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-cyan-600 text-white p-4 rounded-xl">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm mb-3">
                Get travel tips & deals for {destination.title}.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2  rounded-md mb-2 text-black"
              />
              <button className="w-full bg-white text-black py-2 rounded-md font-semibold">
                Subscribe
              </button>
            </section>
          </aside>
        </div>

        <section className="bg-cyan-600 text-white rounded-xl p-6">
          <h4 className="text-2xl font-semibold mb-3">Leave a Reply</h4>
          <p className="mb-4">Share your questions or travel experiences.</p>
          <form className="space-y-4">
            <textarea
              className="w-full p-3  rounded-md text-black"
              rows="4"
              placeholder="Message*"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                className="p-2  rounded-md text-black"
                placeholder="Email*"
              />
              <input
                type="text"
                className="p-2  rounded-md text-black"
                placeholder="Name*"
              />
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default DestinationDetail;

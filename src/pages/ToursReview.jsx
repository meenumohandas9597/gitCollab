import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviewData = [
  { label: "Rating", value: 40 },
  { label: "Comfort", value: 40 },
  { label: "Food", value: 60 },
  { label: "Hospitality", value: 100 },
  { label: "Hygiene", value: 40 },
  { label: "Reception", value: 40 },
];

const categories = ["Rating", "Comfort", "Food", "Hospitality", "Hygiene", "Reception"];

function ToursReview() {
  const [userRating, setUserRating] = useState({
    Rating: 3,
    Comfort: 4,
    Food: 3,
    Hospitality: 4,
    Hygiene: 3,
    Reception: 4,
  });

  const renderStars = (count, editable, category) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`${i < count ? "text-cyan-500" : "text-gray-300 opacity-40"}
                    text-lg cursor-pointer transition`}
        onClick={() => {
          if (editable) {
            setUserRating((prev) => ({ ...prev, [category]: i + 1 }));
          }
        }}
      />
    ));
  };

  return (
    <div className="space-y-16">
      {/* --- Review Score Breakdown --- */}
      <div className="flex flex-col md:flex-row gap-8 px-6 py-10 bg-white rounded-2xl shadow-md">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Reviews Scores and Score Breakdown
          </h2>
          <p className="text-gray-500 mb-8">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue.
          </p>

          {/* Bars */}
          <div className="space-y-6">
            {reviewData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-gray-800 font-medium mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="h-3 bg-cyan-400 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-cyan-50 p-8 rounded-xl">
          <div className="text-6xl font-bold text-gray-900">5.3</div>
          <div className="text-cyan-600 font-semibold text-lg mt-1">Good</div>
        </div>
      </div>

      {/* --- Reviewer Card --- */}
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src="https://i.pravatar.cc/100?img=3"
          alt="Reviewer"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">James Fisher</h3>
          <p className="text-gray-500 mb-3">
            Fa etor evuias lwqedit tas, vut et nihc egam yubulas. Ei euvy
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-800">
            {categories.map((c, i) => (
              <div key={i}>
                <span className="font-semibold mr-2">{c}</span>
                {renderStars(userRating[c], false)}
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            October 10, 2018 at 9:13 am
          </p>
        </div>
      </div>

      {/* --- Post a Comment Section --- */}
      <div className="bg-cyan-100 rounded-2xl p-8 shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Post a Comment</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {categories.map((c, i) => (
            <div key={i}>
              <span className="font-semibold mr-2">{c}</span>
              {renderStars(userRating[c], true, c)}
            </div>
          ))}
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Write your review..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default ToursReview;

import React from "react";
import { Typography, TextField, Slider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faStar,
  faUser,
  faArrowDown,
  faArrowUp,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

const Tours = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen font-sans">
      {/* Hero Section */}
      <div
        className="h-[55vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white tracking-wide">
          Tours Search Page
        </h1>
      </div>

      {/* Sort Bar */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 bg-white py-5 px-6 shadow-sm border-b">
        <button className="flex items-center gap-2 text-cyan-500 font-semibold border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white transition-all">
          <FontAwesomeIcon icon={faCalendarAlt} /> Date
        </button>
        <button className="flex items-center gap-2 text-cyan-500 font-semibold border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white transition-all">
          <FontAwesomeIcon icon={faArrowDown} /> Price Low to High
        </button>
        <button className="flex items-center gap-2 text-cyan-500 font-semibold border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white transition-all">
          <FontAwesomeIcon icon={faArrowUp} /> Price High to Low
        </button>
        <button className="flex items-center gap-2 text-cyan-500 font-semibold border border-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-white transition-all">
          <FontAwesomeIcon icon={faFont} /> Name (A - Z)
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1574342411551-8b1a7c3b6f5d?auto=format&fit=crop&w=800&q=80"
              alt="Barcelona"
              className="w-full h-56 object-cover"
            />
            <div className="bg-cyan-500 text-white flex justify-around py-2 text-sm">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarAlt} /> 1
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} /> 13+
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Popular
              </span>
            </div>
            <div className="p-5">
              <Typography variant="h6" className="font-bold text-gray-800">
                Barcelona
              </Typography>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-gray-800 text-lg">$840</span>
                <span className="flex items-center gap-1 text-sm text-gray-700">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  5.3 Good
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <img
              src="https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80"
              alt="Active Winter"
              className="w-full h-56 object-cover"
            />
            <div className="bg-cyan-500 text-white flex justify-around py-2 text-sm">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarAlt} /> 1
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} /> 13+
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Skiing
              </span>
            </div>
            <div className="p-5">
              <Typography variant="h6" className="font-bold text-gray-800">
                Active Winter
              </Typography>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo...
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-gray-800 text-lg">
                  $3600
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-700">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  7.3 Superb
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 bg-cyan-400 text-white rounded-lg p-6 space-y-6 h-fit shadow-md">
          <Typography variant="h6" className="font-bold text-white">
            Plan Your Trip
          </Typography>
          <Typography variant="body2">
            It’s time to plan just the perfect vacation!
          </Typography>

          <div className="space-y-4">
            <TextField
              fullWidth
              variant="filled"
              label="Search Tour"
              InputProps={{ style: { backgroundColor: "white" } }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Where To?"
              InputProps={{ style: { backgroundColor: "white" } }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Month"
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          {/* Filter by Price */}
          <div className="pt-6">
            <Typography variant="subtitle1" className="font-semibold">
              Filter by Price
            </Typography>
            <Slider
              defaultValue={50}
              aria-label="Price range"
              sx={{
                color: "white",
                "& .MuiSlider-thumb": { backgroundColor: "white" },
              }}
            />
            <Typography variant="body2" className="mt-2">
              Price: $450 - $3600
            </Typography>
            <div className="mt-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-white" />
                <span>Popular</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;

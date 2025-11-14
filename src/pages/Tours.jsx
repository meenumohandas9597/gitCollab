import React, { useState } from "react";
import { Box, Typography, Button, Slider, TextField, Card, CardContent, } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser, faMapMarkerAlt, faStar, } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const navigate = useNavigate();
  const tours = [
    {
      title: "Barcelona",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42.jpg",
      price: 840,
      description:
        "Explore the vibrant city of Barcelona, filled with culture, beaches, and breathtaking architecture.",
      destination: "Spain",
      departure: "Main Square, Old Town",
      time: "Approximately 8.30AM",
      returnTime: "Approximately 7.30PM",
      dressCode: "Casual, comfortable and light",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-39.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-36.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-28.jpg",
      ],
    },
    {
      title: "Madrid",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41.jpg",
      price: 920,
      description:
        "Discover the charm of Madrid — art, cuisine, and unforgettable nightlife await you.",
      destination: "Spain",
      departure: "Main Square, Old Town",
      time: "Approximately 8.30AM",
      returnTime: "Approximately 7.30PM",
      dressCode: "Casual, comfortable and light",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destionations-1-masonry-33.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-31.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-36.jpg",
      ],
    },
    {
      title: "Active Winter",
      img: "https://cdn-cms.bookingexperts.com/media/839/59/optimized.jpg",
      price: 780,
      description:
        "France offers diverse active winter experiences, from skiing and snowboarding in the French Alps and Pyrenees to more unique activities like dog sledding, ice climbing, and speedriding",
      destination: "France",
      departure: "Town Center",
      time: "Approximately 10.00AM",
      returnTime: "Approximately 6.00PM",
      dressCode: "Light and tropical",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-35.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-37.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-38.jpg",
      ],
    },
    {
      title: "Beautiful Holland",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-51-1100x650.jpg",
      price: 880,
      description: "Immerse yourself in the colorful fields and canals of Holland.",
      destination: "Netherlands",
      departure: "City Center",
      time: "Approximately 9.00AM",
      returnTime: "Approximately 6.00PM",
      dressCode: "Casual",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-35.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-37.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-38.jpg",
      ],
    },
    {
      title: "Denpasar",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-1100x650.jpg",
      price: 720,
      description:
        "Immerse yourself in the lush jungles and tranquil rice terraces of Ubud.",
      destination: "Bali, Indonesia",
      departure: "Ubud Town Center",
      time: "Approximately 10.00AM",
      returnTime: "Approximately 6.00PM",
      dressCode: "Light and tropical",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-35.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-37.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-38.jpg",
      ],
    },
    {
      title: "Temple Tour",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-52-1100x650.jpg",
      price: 690,
      description: "Experience the serenity of ancient temples and rich culture.",
      destination: "Thailand",
      departure: "Bangkok",
      time: "Approximately 9.00AM",
      returnTime: "Approximately 5.00PM",
      dressCode: "Modest clothing",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-39-650x650.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-36-650x650.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-34-650x650.jpg",
      ],
    },
    {
      title: "Vatican City",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg",
      price: 950,
      description: "Visit the spiritual heart of Rome — Vatican City awaits you.",
      destination: "Italy",
      departure: "Rome City Center",
      time: "Approximately 8.00AM",
      returnTime: "Approximately 5.00PM",
      dressCode: "Modest clothing",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-35.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-37.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-38.jpg",
      ],
    },
    {
      title: "Milan",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-5.jpg",
      price: 870,
      description:
        "Discover Milan’s fashion, food, and architecture — a city full of life and luxury.",
      destination: "Italy",
      departure: "City Square",
      time: "Approximately 10.00AM",
      returnTime: "Approximately 7.00PM",
      dressCode: "Trendy and light",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-35.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-37.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-38.jpg",
      ],
    },
  ];

  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([450, 3600]);
  const [sortType, setSortType] = useState("DATE");

  const filteredTours = tours
    .filter(
      (tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase()) &&
        tour.price >= priceRange[0] &&
        tour.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortType === "PRICE LOW TO HIGH") return a.price - b.price;
      if (sortType === "PRICE HIGH TO LOW") return b.price - a.price;
      if (sortType === "NAME (A–Z)")
        return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
      return 0;
    });

  return (
    <div className="bg-white min-h-screen font-sans">
      <Box className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" sx={{ backgroundImage: "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/tour-list-title-img.jpg')", }}>
        <Box className="absolute inset-0 bg-black/30" />
        <Typography variant="h2" className="relative text-white font-bold text-center" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }} >
          Tours Search Page
        </Typography>
      </Box>

      <Box className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative">
        {["DATE", "PRICE LOW TO HIGH", "PRICE HIGH TO LOW", "NAME (A–Z)"].map(
          (label, i) => (
            <Button key={i} startIcon={i === 0 ? <FontAwesomeIcon icon={faCalendarAlt} /> : null} sx={{ color: sortType === label ? "#00bfa6" : "black", fontWeight: 600, borderBottom: sortType === label ? "2px solid #00bfa6" : "2px solid transparent", borderRadius: 0, "&:hover": { color: "#00bfa6" }, }} onClick={() => setSortType(label)} > {label} </Button>
          )
        )}
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-16">
        <Box className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour, i) => (
                <Card key={i} onClick={() => navigate(`/tours/${tour.title.toLowerCase()}`, { state: tour })} className="shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer">
                  <div className="relative overflow-hidden group">
                    <img src={tour.img} alt={tour.title} className="w-full h-64 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"/>
                  </div>
                  <CardContent className="p-6">
                    <Typography
                      variant="h5"
                      className="font-bold mb-2 text-gray-800 tracking-wide"
                    >
                      {tour.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-gray-600 mb-3 leading-relaxed"
                    >
                      {tour.description}
                    </Typography>
                    <Typography className="font-semibold mb-3 text-gray-700 text-[15px]">
                      ${tour.price} &nbsp;
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 6.7 &nbsp;
                      Good
                    </Typography>

                    <Box className="flex gap-2 mt-3">
                      <Button startIcon={<FontAwesomeIcon icon={faCalendarAlt} />} variant="contained" sx={{ backgroundColor: "#00bfa5", "&:hover": { backgroundColor: "#009e8f" }, borderRadius: "50px", textTransform: "none", }} >
                        1
                      </Button>
                      <Button startIcon={<FontAwesomeIcon icon={faUser} />} variant="contained" sx={{ backgroundColor: "#00bfa5", "&:hover": { backgroundColor: "#009e8f" }, borderRadius: "50px", textTransform: "none", }} >
                        13+
                      </Button>
                      <Button startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />} variant="contained"sx={{
                          backgroundColor: "#00bfa5", "&:hover": { backgroundColor: "#009e8f" }, borderRadius: "50px", textTransform: "none", }} >
                        Skiing
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="h6" className="text-gray-500">
                No tours found matching your filters.
              </Typography>
            )}
          </div>
        </Box>

        <Box className="flex flex-col gap-8">
          <Box className="bg-teal-400 text-white p-6 rounded-2xl">
            <Typography variant="h5" className="font-bold mb-3">
              Plan Your Trip
            </Typography>
            <Typography className="text-sm mb-6">
              It’s time to plan just the perfect vacation!
            </Typography>

            <Box className="flex flex-col gap-3 mb-6">
              <TextField fullWidth placeholder="Search Tour" variant="filled" value={search} onChange={(e) => setSearch(e.target.value)} sx={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "6px", input: { color: "white" }, }}/>
            </Box>
          </Box>
          <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidebar-img-1.jpg" alt="Promo" className="rounded-xl w-full hover:scale-105 transition-transform duration-700 ease-in-out"/>
        </Box>
      </Box>
    </div>
  );
};

export default Tours;

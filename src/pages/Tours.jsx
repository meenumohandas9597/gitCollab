import React from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faMapMarkerAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
      departure: "	Main Square, Old Town",
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
      departure: " Town Center",
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
      price: 780,
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
      title: "Denpasar",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48-1100x650.jpg",
      price: 780,
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
      price: 780,
      description:
        "Immerse yourself in the lush jungles and tranquil rice terraces of Ubud.",
      destination: "Bali, Indonesia",
      departure: "Ubud Town Center",
      time: "Approximately 10.00AM",
      returnTime: "Approximately 6.00PM",
      dressCode: "Light and tropical",
      gallery: [
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-39-650x650.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-36-650x650.jpg",
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-34-650x650.jpg",
      ],
    },
    {
      title: "Vatican City",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-1.jpg",
      price: 780,
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
      title: "Milan",
      img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-5.jpg",
      price: 780,
      description:
        "Immerse yourself in the lush jungles and tranquil rice terraces of Ubud.",
      destination: "	Italy",
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
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <Box
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/tour-list-title-img.jpg')",
        }}
      >
        <Box className="absolute inset-0 bg-black/30" />
        <Typography
          variant="h2"
          className="relative text-white font-bold text-center"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Tours Search Page
        </Typography>
      </Box>

      {/* Sorting Bar */}
      <Box className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative">
        {["DATE", "PRICE LOW TO HIGH", "PRICE HIGH TO LOW", "NAME (A–Z)"].map(
          (label, i) => (
            <Button
              key={i}
              startIcon={i === 0 ? <FontAwesomeIcon icon={faCalendarAlt} /> : null}
              sx={{
                color: "black",
                fontWeight: 600,
                borderBottom: i === 0 ? "2px solid black" : "none",
                borderRadius: 0,
                "&:hover": { color: "#00bfa6" },
              }}
            >
              {label}
            </Button>
          )
        )}
      </Box>

      {/* Main Content */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-16">
        {/* Left: Tour Cards */}
        <Box className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {tours.map((tour, i) => (
              <Card
                key={i}
                onClick={() =>
                  navigate(`/tours/${tour.title.toLowerCase()}`, { state: tour })
                }
                className="shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-64 object-cover transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                  />
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
                    Explore the most beautiful attractions in {tour.title}.
                  </Typography>
                  <Typography className="font-semibold mb-3 text-gray-700 text-[15px]">
                    ${tour.price} &nbsp;
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 6.7 &nbsp; Good
                  </Typography>

                  <Box className="flex gap-2 mt-3">
                    <Button
                      startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                      variant="contained"
                      sx={{
                        backgroundColor: "#00bfa5",
                        "&:hover": { backgroundColor: "#009e8f" },
                        borderRadius: "50px",
                        textTransform: "none",
                      }}
                    >
                      1
                    </Button>
                    <Button
                      startIcon={<FontAwesomeIcon icon={faUser} />}
                      variant="contained"
                      sx={{
                        backgroundColor: "#00bfa5",
                        "&:hover": { backgroundColor: "#009e8f" },
                        borderRadius: "50px",
                        textTransform: "none",
                      }}
                    >
                      13+
                    </Button>
                    <Button
                      startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                      variant="contained"
                      sx={{
                        backgroundColor: "#00bfa5",
                        "&:hover": { backgroundColor: "#009e8f" },
                        borderRadius: "50px",
                        textTransform: "none",
                      }}
                    >
                      Skiing
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </Box>

        {/* Right Sidebar */}
        <Box className="flex flex-col gap-8">
          <Box className="bg-teal-400 text-white p-6 rounded-2xl">
            <Typography variant="h5" className="font-bold mb-3">
              Plan Your Trip
            </Typography>
            <Typography className="text-sm mb-6">
              It’s time to plan just the perfect vacation!
            </Typography>

            <Box className="flex flex-col gap-3 mb-6">
              {["Search Tour", "Where To?", "Month"].map((placeholder, i) => (
                <TextField
                  key={i}
                  fullWidth
                  placeholder={placeholder}
                  variant="filled"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    input: { color: "white" },
                  }}
                />
              ))}
            </Box>

            <Typography variant="h6" className="font-semibold mb-3">
              Filter by price
            </Typography>
            <Slider value={[450, 3600]} min={450} max={3600} sx={{ color: "white" }} />
            <Typography className="mb-6">Price: $450 - $3600</Typography>

            <Box className="flex flex-col gap-2 text-white mb-6">
              {["Popular", "Europe", "Wines", "Trendy"].map((item, i) => (
                <label key={i} className="flex items-center">
                  <input type="radio" name="filter" className="mr-2 accent-white" />
                  {item}
                </label>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#00bfa5",
                fontWeight: "bold",
                width: "100%",
                "&:hover": { backgroundColor: "#f2f2f2" },
              }}
            >
              SEARCH
            </Button>
          </Box>

          <img
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidebar-img-1.jpg"
            alt="Promo"
            className="rounded-xl w-full hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Tours;

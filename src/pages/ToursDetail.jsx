import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCalendarAlt,
  faMapMarkerAlt,
  faImages,
  faComments,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

// Child Components
import ToursPlan from "./ToursPlan";
import ToursLocation from "./Tourslocation";
import ToursReview from "./ToursReview";
import ToursGallery from "./ToursGallery";
import { addBookingAPI } from "../service/allAPI";
import Swal from "sweetalert2";

// API

const ToursDetail = () => {
  const location = useLocation();
  const [tour, setTour] = useState(location.state);
  const [activeTab, setActiveTab] = useState("information");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    date: "",
    tickets: "",
    message: "",
  });

  // Persist tour selection
  useEffect(() => {
    if (location.state) {
      localStorage.setItem("selectedTour", JSON.stringify(location.state));
    } else {
      const savedTour = localStorage.getItem("selectedTour");
      if (savedTour) {
        setTour(JSON.parse(savedTour));
      }
    }
  }, [location.state]);

  if (!tour) {
    return (
      <Box sx={{ textAlign: "center", py: 20 }}>
        <Typography variant="h5">No tour selected.</Typography>
      </Box>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = async (e) => {

    // Validation
    if (!formData.name || !formData.email || !formData.confirmEmail || !formData.date) {
      alert("⚠️ Please fill all required fields (Name, Email, Confirm Email, Date).");
      return;
    }

    if (formData.email !== formData.confirmEmail) {
      alert("⚠️ Email and Confirm Email do not match.");
      return;
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.tickets && isNaN(formData.tickets)) {
      alert("⚠️ Number of tickets must be a number.");
      return;
    }

    // Format date
    const [year, month, day] = formData.date.split("-");
    const formattedDate = `${day}-${month}-${year.slice(-2)}`;

    // Booking object
    const bookingData = {
      customer: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formattedDate,
      tickets: formData.tickets,
      message: formData.message,
      destination: tour.title,
    };

    try {
      const response = await addBookingAPI(bookingData);
      console.log("Booking saved:", response);
      Swal.fire({
        title: "Good job!",
        text: ` Booking confirmed for ${formData.name} on ${formattedDate}`,
        icon: "success"
      });

      setFormData({
        name: "",
        email: "",
        confirmEmail: "",
        phone: "",
        date: "",
        tickets: "",
        message: "",
      });
    } catch (err) {
      console.error("Booking failed:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to book the tour.Please try again. ",
      });
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          backgroundImage: `url(${tour.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.3)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div className="relative text-center z-10 px-4">
            <div className="mb-6">
              <Link
                to="/tour"
                className="inline-block bg-white/20 text-white py-2 px-4 rounded-md backdrop-blur-sm hover:bg-white/30 transition"
              >
                ← Back
              </Link>
            </div>
          </div>
          <Typography variant="h6" sx={{ fontFamily: "cursive", mb: 1 }}>
            Amazing Tour
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              textTransform: "capitalize",
              fontSize: { xs: "2rem", md: "4rem" },
            }}
          >
            {tour.title}
          </Typography>
        </Box>
      </Box>

      {/* TABS SECTION */}
      <Box className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative">
        {[
          { label: "INFORMATION", icon: faInfoCircle, id: "information" },
          { label: "TOUR PLAN", icon: faCalendarAlt, id: "tour-plan" },
          { label: "LOCATION", icon: faMapMarkerAlt, id: "location" },
          { label: "GALLERY", icon: faImages, id: "gallery" },
          { label: "REVIEWS", icon: faComments, id: "reviews" },
        ].map((tab) => (
          <Button
            key={tab.id}
            startIcon={<FontAwesomeIcon icon={tab.icon} />}
            onClick={() => setActiveTab(tab.id)}
            sx={{
              color: activeTab === tab.id ? "#00bfa6" : "black",
              fontWeight: 600,
              borderBottom: activeTab === tab.id ? "2px solid #00bfa6" : "2px solid transparent",
              borderRadius: 0,
              "&:hover": { color: "#00bfa6" },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* MAIN LAYOUT */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 py-16">
        {/* LEFT PANEL */}
        <Box className="md:col-span-2">
          {activeTab === "information" && (
            <>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {tour.title}
              </Typography>
              <Typography variant="h6" sx={{ color: "#00bfa6", fontWeight: 600, display: "inline" }}>
                ${tour.price}
              </Typography>
              <Typography variant="body1" sx={{ display: "inline", ml: 1, color: "#555" }}>
                / per person
              </Typography>

              <Box className="flex items-center gap-2 my-2">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i < 4 ? "text-teal-500" : "text-gray-300"}
                  />
                ))}
                <Typography variant="body2" sx={{ color: "#555" }}>
                  (1 Review)
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}>
                {tour.description}
              </Typography>

              <Box className="grid grid-cols-2 gap-6 mb-10">
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Destination</Typography>
                  <Typography sx={{ color: "#555" }}>{tour.destination}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Departure</Typography>
                  <Typography sx={{ color: "#555" }}>{tour.departure}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Departure Time</Typography>
                  <Typography sx={{ color: "#555" }}>{tour.time}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Return Time</Typography>
                  <Typography sx={{ color: "#555" }}>{tour.returnTime}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Dress Code</Typography>
                  <Typography sx={{ color: "#555" }}>{tour.dressCode}</Typography>
                </Box>
              </Box>
            </>
          )}

          {activeTab === "tour-plan" && <ToursPlan />}
          {activeTab === "location" && <ToursLocation />}
          {activeTab === "gallery" && <ToursGallery />}
          {activeTab === "reviews" && <ToursReview />}
        </Box>

        {/* RIGHT PANEL (Booking Form) */}
        <Box
          sx={{
            bgcolor: "#2ec4b6",
            p: 4,
            borderRadius: 2,
            color: "#fff",
            boxShadow: 3,
            height: "fit-content",
          }}
          component="form"
          onSubmit={handleBooking}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Book This Tour
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Arrange your trip in advance – book this tour now!
          </Typography>

          {[
            { label: "Name *", name: "name" },
            { label: "Email *", name: "email" },
            { label: "Confirm Email *", name: "confirmEmail" },
            { label: "Phone", name: "phone" },
            { label: "Number of ticket", name: "tickets" },
            { label: "Message", name: "message" },
          ].map(({ label, name }, i) => (
            <TextField
              key={i}
              name={name}
              placeholder={label}
              variant="outlined"
              fullWidth
              value={formData[name]}
              onChange={handleInputChange}
              sx={{
                bgcolor: "#3ddad7",
                mb: 2,
                borderRadius: 1,
                "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
                input: { color: "#fff" },
              }}
            />
          ))}

          <TextField
            name="date"
            type="date"
            label="Select Date *"
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            variant="outlined"
            fullWidth
            value={formData.date}
            onChange={handleInputChange}
            sx={{
              bgcolor: "#3ddad7",
              mb: 2,
              borderRadius: 1,
              "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
              input: { color: "#fff" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              color: "#2ec4b6",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#f2f2f2" },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ToursDetail;

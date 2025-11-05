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

const ToursDetail = () => {
  const location = useLocation();
  const [tour, setTour] = useState(location.state);
  const [activeTab, setActiveTab] = useState("information");

  // ✅ Booking form logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    date: "",
    tickets: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { placeholder, value } = e.target;

    // Match placeholders with state keys
    const map = {
      "Name *": "name",
      "Email *": "email",
      "Confirm Email *": "confirmEmail",
      "Phone": "phone",
      "dd-mm-yy *": "date",
      "Number of ticket": "tickets",
      "Message": "message",
    };

    const key = map[placeholder];
    if (key) {
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // ✅ Validation logic
    if (!formData.name || !formData.email || !formData.confirmEmail || !formData.date) {
      alert("⚠️ Please fill all required fields (Name, Email, Confirm Email, Date).");
      return;
    }

    // Email match validation
    if (formData.email !== formData.confirmEmail) {
      alert("⚠️ Email and Confirm Email do not match.");
      return;
    }

    // Phone validation (optional but recommended)
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    // Date format validation
    if (!/^\d{2}-\d{2}-\d{2}$/.test(formData.date)) {
      alert("⚠️ Please enter a valid date in dd-mm-yy format.");
      return;
    }

    // Ticket count validation
    if (formData.tickets && isNaN(formData.tickets)) {
      alert("⚠️ Number of tickets must be a number.");
      return;
    }

    // ✅ Success message
    alert(`✅ Booking confirmed for ${formData.name}! Thank you for choosing ${tour.title}.`);
    console.log("Booking Details:", formData);

    // ✅ Reset form after successful booking
    setFormData({
      name: "",
      email: "",
      confirmEmail: "",
      phone: "",
      date: "",
      tickets: "",
      message: "",
    });
  };

  // ✅ Persist tour data on refresh
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

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* -------- HERO SECTION -------- */}
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

      {/* -------- TABS SECTION -------- */}
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
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #00bfa6"
                  : "2px solid transparent",
              borderRadius: 0,
              "&:hover": { color: "#00bfa6" },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* -------- MAIN LAYOUT -------- */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 py-16">
        {/* -------- LEFT PANEL -------- */}
        <Box className="md:col-span-2">
          {activeTab === "information" && (
            <>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {tour.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#00bfa6", fontWeight: 600, display: "inline" }}
              >
                ${tour.price}
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "inline", ml: 1, color: "#555" }}
              >
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

              <Typography
                variant="body1"
                sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
              >
                {tour.description}
              </Typography>

              <Box className="grid grid-cols-2 gap-6 mb-10">
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Destination</Typography>
                  <Typography sx={{ color: "#555" }}>
                    {tour.destination}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Departure</Typography>
                  <Typography sx={{ color: "#555" }}>
                    {tour.departure}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Departure Time
                  </Typography>
                  <Typography sx={{ color: "#555" }}>{tour.time}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Return Time</Typography>
                  <Typography sx={{ color: "#555" }}>
                    {tour.returnTime}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Dress Code</Typography>
                  <Typography sx={{ color: "#555" }}>
                    {tour.dressCode}
                  </Typography>
                </Box>
              </Box>
            </>
          )}

          {activeTab === "tour-plan" && <ToursPlan />}
          {activeTab === "location" && <ToursLocation />}
          {activeTab === "gallery" && <ToursGallery />}
          {activeTab === "reviews" && <ToursReview />}
        </Box>

        {/* -------- RIGHT PANEL (Booking Form) -------- */}
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
            "Name *",
            "Email *",
            "Confirm Email *",
            "Phone",
            "dd-mm-yy *",
            "Number of ticket",
            "Message",
          ].map((label, i) => (
            <TextField
              key={i}
              placeholder={label}
              variant="outlined"
              fullWidth
              value={
                {
                  "Name *": formData.name,
                  "Email *": formData.email,
                  "Confirm Email *": formData.confirmEmail,
                  "Phone": formData.phone,
                  "dd-mm-yy *": formData.date,
                  "Number of ticket": formData.tickets,
                  "Message": formData.message,
                }[label]
              }
              onChange={handleInputChange}
              sx={{
                bgcolor: "#3ddad7",
                mb: 2,
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
                input: { color: "#fff" },
              }}
            />
          ))}

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

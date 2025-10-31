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

const ToursDetail = () => {
    const location = useLocation();
    const [tour, setTour] = useState(location.state);

    // ✅ Persist state in localStorage (so refresh doesn't break)
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
            {/* Hero Section */}
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

            {/* Floating Tab Bar */}
            <Box className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative">
                <Button
                    startIcon={<FontAwesomeIcon icon={faInfoCircle} />}
                    sx={{
                        color: "black",
                        fontWeight: 600,
                        borderBottom: "2px solid black",
                        borderRadius: 0,
                        "&:hover": { color: "#00bfa6" },
                    }}
                >
                    INFORMATION
                </Button>
                <Button
                    startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                    sx={{ color: "black", fontWeight: 600, "&:hover": { color: "#00bfa6" } }}
                >
                    TOUR PLAN
                </Button>
                <Button
                    startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                    sx={{ color: "black", fontWeight: 600, "&:hover": { color: "#00bfa6" } }}
                >
                    LOCATION
                </Button>
                <Button
                    startIcon={<FontAwesomeIcon icon={faImages} />}
                    sx={{ color: "black", fontWeight: 600, "&:hover": { color: "#00bfa6" } }}
                >
                    GALLERY
                </Button>
                <Button
                    startIcon={<FontAwesomeIcon icon={faComments} />}
                    sx={{ color: "black", fontWeight: 600, "&:hover": { color: "#00bfa6" } }}
                >
                    REVIEWS
                </Button>
            </Box>

            {/* Main Content Section */}
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 py-16">
                {/* Left Section */}
                <Box className="md:col-span-2">
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

                    {/* Rating */}
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

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
                    >
                        {tour.description}
                    </Typography>

                    {/* Tour Details */}
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

                    {/* Gallery */}
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            From our gallery
                        </Typography>

                        {Array.isArray(tour.gallery) && tour.gallery.length > 0 ? (
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        sm: "1fr 1fr",
                                        md: "repeat(3, 1fr)",
                                    },
                                    gap: 3,
                                }}
                            >
                                {tour.gallery.map((img, i) => (
                                    <Box
                                        key={i}
                                        component="img"
                                        src={img}
                                        alt={`${tour.title}-${i}`}
                                        sx={{
                                            width: "100%",
                                            height: "300px",
                                            borderRadius: "8px",
                                            objectFit: "cover",
                                            transition: "0.4s",
                                            "&:hover": { transform: "scale(1.03)" },
                                        }}
                                    />
                                ))}
                            </Box>
                        ) : (
                            <Typography sx={{ color: "#777" }}>
                                No gallery images available.
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* Booking Form */}
                <Box
                    sx={{
                        bgcolor: "#2ec4b6",
                        p: 4,
                        borderRadius: 2,
                        color: "#fff",
                        boxShadow: 3,
                        height: "fit-content",
                    }}
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

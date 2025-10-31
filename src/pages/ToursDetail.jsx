import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfoCircle,
    faCalendarAlt,
    faMapMarkerAlt,
    faImages,
    faComments,
    faStar,
    faUser,
    faTicketAlt,
    faPhone,
    faCheckCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ToursDetail = () => {
    return (
        <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: "relative",
                    height: "70vh",
                    backgroundImage:
                        "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-title.jpg')",
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
                    <Typography
                        variant="h6"
                        sx={{ fontFamily: "cursive", mb: 1, fontWeight: 400 }}
                    >
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
                        Barcelona
                    </Typography>
                </Box>
            </Box>

            {/* Floating Tab Bar */}
           <Box
  className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative"
>
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
    startIcon={<FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />}
    sx={{
      color: "black",
      fontWeight: 600,
      "&:hover": { color: "#00bfa6" },
    }}
  >
    TOUR PLAN
  </Button>

  <Button
    startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />}
    sx={{
      color: "black",
      fontWeight: 600,
      "&:hover": { color: "#00bfa6" },
    }}
  >
    LOCATION
  </Button>

  <Button
    startIcon={<FontAwesomeIcon icon={faImages} className="mr-2" />}
    sx={{
      color: "black",
      fontWeight: 600,
      "&:hover": { color: "#00bfa6" },
    }}
  >
    GALLERY
  </Button>

  <Button
    startIcon={<FontAwesomeIcon icon={faComments} className="mr-2" />}
    sx={{
      color: "black",
      fontWeight: 600,
      "&:hover": { color: "#00bfa6" },
    }}
  >
    REVIEWS
  </Button>
</Box>



            {/* Main Content Section */}
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-20 py-16">
                {/* Left Section: Tour Info */}
                <Box className="md:col-span-2">
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 1, fontFamily: "Poppins, sans-serif" }}
                    >
                        Barcelona
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#00bfa6", fontWeight: 600, display: "inline" }}
                    >
                        $840
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
                                className={i < 3 ? "text-teal-500" : "text-gray-300"}
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
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
                        tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                        sit amet adipiscing sem neque sed ipsum.
                    </Typography>

                    {/* Tags */}
                    <Box className="flex flex-wrap gap-3 mb-6">
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "#2ec4b6", textTransform: "none" }}
                            startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                        >
                            1
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "#2ec4b6", textTransform: "none" }}
                            startIcon={<FontAwesomeIcon icon={faUser} />}
                        >
                            13+ Age
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "#2ec4b6", textTransform: "none" }}
                            startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                        >
                            Popular
                        </Button>
                    </Box>

                    {/* Tour Details */}
                    <Box className="grid grid-cols-2 gap-6 mb-10">
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Destination</Typography>
                            <Typography sx={{ color: "#555" }}>Spain</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Departure</Typography>
                            <Typography sx={{ color: "#555" }}>Main Square, Old Town</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                                Departure Time
                            </Typography>
                            <Typography sx={{ color: "#555" }}>Approximately 8.30AM</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Return Time</Typography>
                            <Typography sx={{ color: "#555" }}>Approximately 7.30PM</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>Dress Code</Typography>
                            <Typography sx={{ color: "#555" }}>
                                Casual, comfortable and light
                            </Typography>
                        </Box>
                    </Box>

                    {/* Included / Not Included Section */}
                    <Box className="grid grid-cols-2 md:grid-cols-2 gap-10 mb-12">
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                Included
                            </Typography>
                            <Box className="flex flex-col gap-2 text-gray-600">
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-teal-500 mr-2"
                                    />
                                    5 Star Accommodation
                                </Typography>
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-teal-500 mr-2"
                                    />
                                    Breakfast
                                </Typography>
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-teal-500 mr-2"
                                    />
                                    Airport Transfer
                                </Typography>
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="text-teal-500 mr-2"
                                    />
                                    Personal Guide
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                Not Included
                            </Typography>
                            <Box className="flex flex-col gap-2 text-gray-600">
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        className="text-gray-500 mr-2"
                                    />
                                    Gallery Ticket
                                </Typography>
                                <Typography>
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        className="text-gray-500 mr-2"
                                    />
                                    Lunch
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Gallery Section */}
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 2, fontFamily: "Poppins, sans-serif" }}
                        >
                            From our gallery
                        </Typography>
                        <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Typography>

                        {/* ✅ Added Gallery Image Grid Section */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                                gap: 3,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-39.jpg"
                                alt="Gallery 1"
                                sx={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    height: "300px",
                                    objectFit: "cover",
                                    transition: "0.4s",
                                    "&:hover": { transform: "scale(1.03)" },
                                }}
                            />
                            <Box
                                component="img"
                                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-36.jpg"
                                alt="Gallery 2"
                                sx={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    height: "300px",
                                    objectFit: "cover",
                                    transition: "0.4s",
                                    "&:hover": { transform: "scale(1.03)" },
                                }}
                            />
                            <Box
                                component="img"
                                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-masonry-28.jpg"
                                alt="Gallery 3"
                                sx={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    height: "300px",
                                    objectFit: "cover",
                                    transition: "0.4s",
                                    "&:hover": { transform: "scale(1.03)" },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Right Section: Booking Form */}
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
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, mb: 1, fontFamily: "Poppins, sans-serif" }}
                    >
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
                            bgcolor: "#fff",
                            color: "#111",
                            fontWeight: 600,
                            py: 1.5,
                            mt: 1,
                            "&:hover": { bgcolor: "#f5f5f5" },
                        }}
                    >
                        CHECK AVAILABILITY
                    </Button>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            bgcolor: "#111",
                            color: "#fff",
                            fontWeight: 600,
                            py: 1.5,
                            mt: 2,
                            "&:hover": { bgcolor: "#333" },
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

import React from "react";

import { Button, Box, Typography, Grid, Container } from "@mui/material";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,

  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";




function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/what-we-offer-title-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ letterSpacing: 2, fontSize: "2rem", mb: 1 }}
        >
          Amazing Tour
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: "5rem",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Get In Touch
        </Typography>
      </Box>




      <section className="p-5">


        <div className="flex flex-col md:flex-row items-center">

          {/* Left side: Text */}
          <div className="w-full md:w-1/2 p-5">
            <h1 className="text-center text-5xl font-bold p-5">Contact Us Now</h1>
            <p className="mb-3 text-gray-700">
             Ready to start your next adventure? Whether you’re planning a relaxing vacation, a business trip, or an unforgettable group tour — we’re here to make it seamless and memorable.

            </p>
            <p className="mb-3 text-gray-700">
              Reach out to us for bookings, itinerary customization, or travel assistance.
Let’s explore the world together!
            </p>

            <Button variant="contained" size="large" sx={{
              backgroundColor: "#4ed4d2",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              ml: 3,
              "&:hover": {
                backgroundColor: "#3bbfbd", // slightly darker shade on hover
              },
            }}>Read More</Button>
          </div>

          {/* Right side: Image */}
          <div className="w-full md:w-1/2 p-5 flex justify-center md:justify-end">
            <img
              className="shadow-lg object-cover"
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/contact-us-img-1.jpg"
              alt="Testimonial"
            />
          </div>
        </div>
      </section>


    <Box sx={{ py: 10, bgcolor: "#fff" }}>
  <Container maxWidth="lg">
    <Grid container spacing={6} justifyContent="center">
      
      {/* Paris */}
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#111" }}>
            Paris
          </Typography>
         

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 mr-2 text-[16px]" />
              <span>setsail@example.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-teal-400 mr-2 text-[16px]" />
              <span>5544332211</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-teal-400 mr-2 text-[16px]" />
              <span>Place des Pyramides 7, Paris</span>
            </li>
          </ul>
        </Box>
      </Grid>

      {/* London */}
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#111" }}>
            London
          </Typography>
         

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 mr-2 text-[16px]" />
              <span>setsail@example.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-teal-400 mr-2 text-[16px]" />
              <span>0011223344</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-teal-400 mr-2 text-[16px]" />
              <span>11 Strand, London WC2N 5RJ</span>
            </li>
          </ul>
        </Box>
      </Grid>

      {/* New York */}
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#111" }}>
            New York
          </Typography>
         

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 mr-2 text-[16px]" />
              <span>setsail@example.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-teal-400 mr-2 text-[16px]" />
              <span>1122334455</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-teal-400 mr-2 text-[16px]" />
              <span>Broadway, New York, NY 10031</span>
            </li>
          </ul>
        </Box>
      </Grid>

    </Grid>
  </Container>
</Box>




      <section className="bg-teal-400 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Leave a Reply
          </h2>

          <form className="space-y-6">
            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-white text-lg" />
              <textarea
                rows="5"
                placeholder="Message*"
                className="w-full bg-teal-300 text-white placeholder-white pl-12 pr-4 py-4 rounded-sm outline-none resize-none"
              ></textarea>
            </div>

            {/* Email + Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-white text-lg" />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-teal-300 text-white placeholder-white pl-12 pr-4 py-3 rounded-sm outline-none"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-white text-lg" />
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-teal-300 text-white placeholder-white pl-12 pr-4 py-3 rounded-sm outline-none"
                />
              </div>
            </div>

            {/* Send Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-white text-gray-900 font-semibold tracking-wide py-3 rounded-sm hover:bg-gray-100 transition"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>

    </>
  );
}


export default Contact;

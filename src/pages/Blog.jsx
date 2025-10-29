import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faComment } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
    return (
        <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
            {/* Hero Section */}
           <Box
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-title-img-2.jpg')",
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
          sx={{ letterSpacing: 2, fontSize: "1rem", mb: 1 }}
        >
          AMAZING TOUR
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Blog Masonry
        </Typography>
      </Box>
        </Box>
    );
};

export default Blog;

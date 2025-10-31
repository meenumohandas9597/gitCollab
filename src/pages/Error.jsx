import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
            {/* Hero Section */}
           <Box
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/404-error-page-background-1.jpg')",
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
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize : "5rem",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >  404 ERROR 
          
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ letterSpacing: 2, fontSize: "2rem", mb: 1 }}
        >
        take me home please
        </Typography>
        

     <Link to='/'><Button  variant="contained" sx={{
      backgroundColor: "#4ed4d2",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#3bbfbd", // slightly darker shade on hover
      },
    }}>Back to Home</Button> </Link> 
      </Box>
        </Box>
    );
};

export default Error;

import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function GetinTouch() {
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

      {/* Contact Section */}
      <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
        <Container maxWidth="md">
          {/* Centered Heading */}
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: "bold", mb: 6, color: "#111" }}
          >
            Stay In Touch
          </Typography>

          {/* Two Columns: Paris & New York */}
          <Grid container spacing={6} justifyContent="center">
            {/* Paris */}
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2, color: "#111" }}
                >
                  Paris
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#4ed4d2" style={{ marginRight: "2px" }}/>
                  <Typography>setsail@example.com</Typography>
                </Box>

               
                 
                 <Typography
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 1
    
  }}
>
  <FontAwesomeIcon icon={faPhone} color="#4ed4d2" style={{ marginRight: "20px" }} />
  +1 (985) 233-4455
</Typography>
               

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} color="#4ed4d2" />
                  <Typography sx={{ ml: 1 }}>Place Pyramid, Paris</Typography>
                </Box>
              </Box>
            </Grid>

            {/* New York */}
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2, color: "#111" }}
                >
                  New York
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#4ed4d2" />
                  <Typography sx={{ ml:0.2 }}>setsail@example.com</Typography>
                </Box>


                <Typography
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 1,
  }}
>
  <FontAwesomeIcon icon={faPhone} color="#4ed4d2" style={{ marginRight: "20px" }} />
  +1 (546) 233-4455
</Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} color="#4ed4d2" />
                  <Typography sx={{ ml: 1 }}>Broadway, New York</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default GetinTouch;

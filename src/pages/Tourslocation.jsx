import React from "react";
import { Box, Typography } from "@mui/material";

const ToursLocation = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 3, md: 16 }, backgroundColor: "#fff",}}>
      <Typography variant="h4"sx={{ fontWeight: 700, mb: 2,color: "#222",}}>
        Tour Location
      </Typography>

      <Typography variant="body1" sx={{ color: "#555", mb: 4, maxWidth: "800px", lineHeight: 1.8, }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Nullam dictum felis eu
        pede mollis pretium.
      </Typography>

      <Box sx={{ width: "100%", height: "450px", borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", }}>
        <iframe title="tour-location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24183.10521436861!2d-74.01201805085527!3d40.71395599366412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b1234ad%3A0xa0b61bbd6b2f0d53!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sin!4v1699463456789!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </Box>
    </Box>
  );
};

export default ToursLocation;

import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const TourPlan = () => {
  const tourDays = [
    {
      day: 1,
      title: "Arrival & Relaxation",
      description:
        "Arrive at Barcelona airport and transfer to your 5-star hotel. Spend the rest of the day at leisure exploring nearby attractions or relaxing by the beach.",
      items: ["5 Star Accommodation", "Dinner", "Welcome Drink"],
    },
    {
      day: 2,
      title: "City Tour & Gaudi Architecture",
      description:
        "Enjoy a full-day city tour covering Barcelona’s highlights – Sagrada Familia, Park Güell, and Casa Batlló. Learn about Gaudi’s masterpieces and their history.",
      items: ["Breakfast", "Guided City Tour", "Lunch"],
    },
    {
      day: 3,
      title: "Beach & Shopping Experience",
      description:
        "Spend your morning at Barceloneta Beach followed by shopping in the Gothic Quarter. Evening free for personal exploration and nightlife.",
      items: ["Breakfast", "Beach Visit", "Shopping Tour"],
    },
    {
      day: 4,
      title: "Historical Tour",
      description:
        "Visit the Gothic Cathedral, La Rambla, and Picasso Museum. Learn about Barcelona’s rich history and artistic influence through the centuries.",
      items: ["5 Star Accommodation", "Breakfast"],
    },
    {
      day: 5,
      title: "Return",
      description:
        "Enjoy your last breakfast at the hotel before your airport transfer. Take home beautiful memories from your Barcelona adventure.",
      items: ["Breakfast", "Airport Transfer"],
    },
  ];

  return (
    <Box sx={{ px: { xs: 4, md: 16 }, py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
        Tour Plan
      </Typography>

      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "30px",
            width: "2px",
            height: "100%",
            backgroundColor: "#2ec4b6",
          },
        }}
      >
        {tourDays.map((day, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              mb: 6,
              position: "relative",
            }}
          >
            {/* Day Number */}
            <Box
              sx={{
                backgroundColor: "#2ec4b6",
                color: "#fff",
                borderRadius: "6px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "18px",
                position: "relative",
                zIndex: 2,
                mr: 4,
              }}
            >
              {day.day}
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, color: "#333" }}
              >
                Day {day.day}: {day.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1.5, color: "#555", lineHeight: 1.7 }}
              >
                {day.description}
              </Typography>

              <List sx={{ listStyleType: "disc", pl: 3 }}>
                {day.items.map((item, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      display: "list-item",
                      py: 0,
                      color: "#444",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TourPlan;

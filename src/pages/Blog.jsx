import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  const blogs = [
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-1.jpg",
      title: "Letters From Florida",

    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-2.jpg",
      title: "Down Town",

    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-3.jpg",
      title: "Photography",
      comments: 2,
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2016/12/blog-img-5.jpg",
      title: "Inspired By Food",
      comments: 2,
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2016/01/blog-img-4.jpg",
      title: "It's Time To Travel",
      comments: 2,
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/08/blog-img-6.jpg",
      title: "Old Town",
      comments: 2,
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/08/blog-img-8.jpg",
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-9.jpg",
    },
    {
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-7.jpg",
    },
  ];

  const categories = [
    {
      name: "Adventure",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Food",

      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Summer",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-2.jpg",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
    if (visibleCount >= blogs.length - 3) {
      setShowCategories(true);
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", bgcolor: "#f9f9f9" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-title-img-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Blog Masonry
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Paper
        elevation={8}
        sx={{
          position: "relative",
          zIndex: 5,
          maxWidth: "1200px",
          mx: "auto",
          mt: -12,
          mb: 10,
          borderRadius: "20px",
          p: { xs: 3, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            columnCount: { xs: 1, sm: 2, md: 3 },
            columnGap: "24px",
          }}
        >
          {blogs.slice(0, visibleCount).map((blog, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                display: "inline-block",
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                breakInside: "avoid",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
              onClick={() => navigate(`/blog/${index}`, { state: blog })}
            >
              <CardMedia component="img" height="220" image={blog.image} />

            </Card>
          ))}
        </Box>

        {/* Load More */}
        {visibleCount < blogs.length && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{
                backgroundColor: "#00bcd4",
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                "&:hover": { backgroundColor: "#0097a7" },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Paper>
 {/* Heading for Categories */}
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: "center", fontWeight: 700 }}
          >
            Categories
          </Typography>
      {/* Categories Scroll */}
      {showCategories && (

        <Box
          sx={{
            mt: 6,
            display: "flex",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
         
          <Box
            sx={{
              display: "inline-flex",
              animation: "scrollRightToLeft 25s linear infinite",
              "@keyframes scrollRightToLeft": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {[...categories, ...categories].map((cat, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 280,
                  mx: 2,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  "&:hover .overlay": { opacity: 1 },
                }}
                onClick={() =>
                  navigate(`/blog/category/${cat.name}`, { state: cat })
                }
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={cat.image}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                  }}
                >
                  {cat.name}
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Blog;
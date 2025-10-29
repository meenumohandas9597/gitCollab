import React from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faMapMarkerAlt,
  faStar,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Tours = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <Box
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/tour-list-title-img.jpg')",
        }}
      >
        <Box className="absolute inset-0 bg-black/30" />
        <Typography
          variant="h2"
          className="relative text-white font-bold text-center"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          Tours Search Page
        </Typography>
      </Box>

      {/* Sorting Bar */}
      <Box className="flex flex-wrap justify-center items-center gap-8 py-6 bg-white shadow-lg -mt-12 mx-6 md:mx-16 rounded-2xl z-10 relative">
        <Button
          startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
          className="text-teal-500 font-semibold border-b-2 border-teal-500 rounded-none"
        >
          DATE
        </Button>
        <Button className="text-gray-700 font-semibold hover:text-teal-500">
          PRICE LOW TO HIGH
        </Button>
        <Button className="text-gray-700 font-semibold hover:text-teal-500">
          PRICE HIGH TO LOW
        </Button>
        <Button className="text-gray-700 font-semibold hover:text-teal-500">
          NAME (A–Z)
        </Button>
      </Box>

      {/* Main Content */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        {/* Left side: Tour Cards */}
        <Box className="md:col-span-2 flex flex-col gap-10">
          {/* Card 1 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42.jpg"
              alt="Barcelona"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2 ">
                  Barcelona
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>

                <Typography className="font-semibold mb-3 ">
                  $720 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  7.3 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  popular
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-14.jpg"
              alt="Kids Ski School"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Active Winter
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 3 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-18.jpg"
              alt="Snow Surfing"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Snow Surfing
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 4 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-19.jpg"
              alt="Kids Ski School"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Kids Ski School
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 5 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-51.jpg"
              alt="Beautiful Holland"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Beautiful Holland
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 6 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41.jpg"
              alt="Madrid"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Madrid
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 7 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-48.jpg"
              alt="Denpasar"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Denpasar
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* card 8 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47.jpg"
              alt="Seminyak"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Seminyak
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* card 9 */}
          <Card className="flex flex-col md:flex-row shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-46.jpg"
              alt="Ubud"
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <Box>
                <Typography variant="h4" className="font-bold mb-2">
                  Ubud
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo...
                </Typography>
                <Typography className="font-semibold text-gray-700 mb-3">
                  $1600 &nbsp;
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />{" "}
                  6.7 &nbsp; Good
                </Typography>
              </Box>
              <Box className="flex gap-2">
                <Button
                  startIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  1
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faUser} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  13+
                </Button>
                <Button
                  startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#00bfa5",
                    "&:hover": { backgroundColor: "#009e8f" },
                  }}
                >
                  Skiing
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* Pagination Section */}
          <Box className="flex justify-center items-center py-10">
            <Box className="flex items-center gap-2 text-gray-400 text-[15px] font-medium">
              <Typography className="text-black font-semibold cursor-pointer">1</Typography>
              <Typography className="cursor-pointer hover:text-black">2</Typography>
              <Typography className="cursor-pointer hover:text-black">3</Typography>
              <Typography className="cursor-pointer hover:text-black">4</Typography>
              <Typography className="cursor-pointer hover:text-black">5</Typography>
              <Typography className="cursor-pointer hover:text-black">6</Typography>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="cursor-pointer text-gray-500 hover:text-black ml-2"
              />
            </Box>
          </Box>


        </Box>

        {/* Right side: Sidebar */}
        <Box className="flex flex-col gap-8">
          {/* Plan Your Trip Box */}
          <Box className="bg-teal-400 text-white p-6 rounded-2xl">
            <Typography variant="h5" className="font-bold mb-3">
              Plan Your Trip
            </Typography>
            <Typography className="text-sm mb-6">
              It’s time to plan just the perfect vacation!
            </Typography>

            <Box className="flex flex-col gap-3 mb-6">
              <TextField
                fullWidth
                placeholder="Search Tour"
                variant="filled"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "6px",
                  input: { color: "white" },
                }}
              />
              <TextField
                fullWidth
                placeholder="Where To?"
                variant="filled"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "6px",
                  input: { color: "white" },
                }}
              />
              <TextField
                fullWidth
                placeholder="Month"
                variant="filled"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "6px",
                  input: { color: "white" },
                }}
              />
            </Box>

            <Typography variant="h6" className="font-semibold mb-3">
              Filter by price
            </Typography>
            <Slider value={[450, 3600]} min={450} max={3600} sx={{ color: "white" }} />
            <Typography className="mb-6">Price: $450 - $3600</Typography>

            {/* Category Filters */}
            <Box className="flex flex-col gap-2 text-white mb-6">
              {["Popular", "Europe", "Wines", "Trendy"].map((item, i) => (
                <label key={i} className="flex items-center">
                  <input type="radio" name="filter" className="mr-2 accent-white" />
                  {item}
                </label>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#00bfa5",
                fontWeight: "bold",
                width: "100%",
                "&:hover": { backgroundColor: "#f2f2f2" },
              }}
            >
              SEARCH
            </Button>
          </Box>

          {/* Ad / Promo Box */}
            <img
              src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidebar-img-1.jpg"
              alt="Promo"
              className="rounded-xl mb-3 w-full"
            />
        </Box>
      </Box>
    </div>
  );
};

export default Tours;

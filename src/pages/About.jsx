import React from 'react'
import { Box, Typography, Button, Modal, IconButton } from "@mui/material";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaTwitter, FaPinterestP, FaFacebookF, FaInstagram } from "react-icons/fa";

const tours = [
  { name: "Countryside", progress: 76 },
  { name: "Vineyard", progress: 92 },
  { name: "Wine Tasting", progress: 86 },
];


const destinations = [
  { name: "Barcelona", price: "$840", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42-650x650.jpg" },
  { name: "Wine Tasting", price: "$920", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-34-650x650.jpg" },
  
  { name: "Sydney Opera", price: "$550", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/tour-featured-img-49-1024x1024.jpg" },
  { name: "Kaohsiung", price: "$963", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-43-1024x1024.jpg" },
  { name: "Tainan", price: "$999", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-45-1024x1024.jpg" },
 
  { name: "Seminyak", price: "$966", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47-1024x1024.jpg" },
   { name: "Ubud", price: "$888", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-46-1024x1024.jpg" },
  { name: "Camping", price: "$1550", img: "	https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-35-650x1300.jpg" },
  { name: "Caving", price: "$1550", img: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-50-1024x1024.jpg" },
  { name: "Beautiful Holland", price: "$1330", img: "	https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-51-1024x1024.jpg" },
  { name: "Temple Tour", price: "$1550", img: "	https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-52-1024x1024.jpg" },
];



const testimonials = [
  {
    id: 1,
    name: "John Rios",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-testimonials-2.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis.",
  },
  {
    id: 2,
    name: "Marianna Loreto",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-testimonial-1.png",
    quote:
      "Suspendisse potenti. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
  },
];


const experts = [
  {
    id: 1,
    name: "Teresa James",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-1.jpg",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit",
  },
  {
    id: 2,
    name: "Jane Willis",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    name: "Ralph Fields",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-3.jpg",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem",
  },
  {
    id: 4,
    name: "Lori Harvey",
    image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-4.jpg",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
  },
];

function About() {
   const [isPlaying, setIsPlaying] = useState(false);

   


 const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  return (
    <>
    {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-title-img-1.jpg')",
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
          Amazing 
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
          About Us
        </Typography>
      </Box>

     <section className="p-5">
      

      <div className="flex flex-col md:flex-row items-center">
       
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 p-5">
           <h1 className="text-center text-5xl font-bold p-5">Our Popular Tours</h1>
          <p className="mb-3 text-gray-700">
            At Sailo, we believe travel is more than just visiting new places — it’s about creating stories, memories, and connections that last a lifetime.
From breathtaking mountain adventures to peaceful beach escapes, we design personalized tour experiences that suit every traveler’s dream.
          </p>
           <p className="mb-3 text-gray-700">
            With years of expertise and a passion for exploration, our mission is to make your journey effortless and unforgettable. Whether you’re a solo explorer, a couple seeking a romantic getaway, or a family looking for fun-filled adventures, we’ve got you covered.
          </p>
        
          <Button  variant="contained" size="large" sx={{
      backgroundColor: "#4ed4d2",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      ml:3,
      "&:hover": {
        backgroundColor: "#3bbfbd", // slightly darker shade on hover
      },
    }}>Read More</Button> 
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 p-5 flex justify-center md:justify-end">
          <img
            className="w-3/4 rounded-full md:ml-5 shadow-lg object-cover"
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-1.png"
            alt="Testimonial"
          />
        </div>
      </div>
    </section>

   <section className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg my-10">
      {/* If video is not playing, show background image with play button */}
      {!isPlaying ? (
        <>
          {/* Background Image */}
          <img
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-parallax-img-1.jpg"
            alt="Travel"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <IconButton
              onClick={() => setIsPlaying(true)}
              sx={{
                color: "#4ed4d2",
                "&:hover": { color: "#3bbfbd", transform: "scale(1.1)" },
                transition: "0.3s",
              }}
            >
              <FaPlayCircle sx={{ fontSize: 100 }} />
            </IconButton>
          </div>
        </>
      ) : (
        <iframe  className="absolute top-0 left-0 w-full h-full rounded-2xl" src="https://www.youtube.com/embed/UWdfaNWThnA?si=tSj8COqUPvHylW3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      )}
    </section>


    <section className="p-5">
      

      <div className="flex flex-col md:flex-row items-center">
       
  {/* Left side: Image */}
        <div className="w-full md:w-1/2 p-5 flex justify-center md:justify-end">
          <img
            className="w-3/4  md:ml-5  object-cover"
            src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/about-us-img-2.png"
            alt="Testimonial"
          />
        </div>


        {/* Right side: Text */}
        <div className="w-full md:w-1/2 p-5">
           <h1 className="text-center text-5xl font-bold p-5">Our Popular Tours</h1>
         {/* Progress Bars */}
        <div className="space-y-6">
          {tours.map((tour) => (
            <div key={tour.name}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-800">{tour.name}</span>
                <span className="font-semibold text-gray-800">{tour.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 bg-cyan-400 rounded-full relative"
                  style={{ width: `${tour.progress}%` }}
                >
                  <div className="absolute right-0 top-0 h-full w-3 bg-cyan-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

       </div>
      </div>
    </section>


  <section className="px-8 py-12 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-[200px] gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-md group ${item.span}`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-base font-bold">{item.name}</h3>
              <p className="text-white text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


<section className="px-8 py-24 bg-white">
<div className="relative w-full max-w-4xl mx-auto py-16 flex flex-col items-center text-center">
      {/* Slides */}
      {testimonials.map((t, index) => (
        <div
          key={t.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-40 h-40 rounded-full object-cover mb-6 shadow-md"
          />
          <p className="text-gray-600 text-lg italic max-w-2xl mx-auto mb-4">
            “{t.quote}”
          </p>
          <h3 className="font-semibold text-gray-800 text-lg italic">
            {t.name}
          </h3>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
      >
        <FaChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
      >
        <FaChevronRight size={28} />
      </button>
    </div>

</section>

 <section className="py-20 bg-white text-center">
      {/* Heading */}
      <div className="mb-12">
        <h4 className="text-lg text-teal-500 font-semibold italic">The Best</h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Travel Experts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </p>
      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16">
        {experts.map((expert) => (
          <div key={expert.id} className="relative group overflow-hidden rounded-md shadow-md">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-[350px] object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-teal-500 bg-opacity-90 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-xl font-semibold">{expert.name}</h3>
              <p className="text-sm mb-4">{expert.desc}</p>
              <div className="flex space-x-4 text-lg">
                <FaTwitter className="cursor-pointer hover:text-gray-200" />
                <FaPinterestP className="cursor-pointer hover:text-gray-200" />
                <FaFacebookF className="cursor-pointer hover:text-gray-200" />
                <FaInstagram className="cursor-pointer hover:text-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
function Shop() {
  const navigate = useNavigate();
  
 
  const products = [
    {
      id: 1,
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-18-768x672.jpg",
      title: "Umbrella",
      price: 186,
      rating: 5,
      description: "A stylish umbrella perfect for travel and adventure.",
    },
    {
      id: 2,
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-17-768x672.jpg",
      title: "Power Bank",
      price: 193,
      oldPrice: 205,
      rating: 3,
      sale: true,
      description: "Portable power bank to charge your devices anywhere.",
    },
    {
      id: 3,
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-16-768x672.jpg",
      title: "Tent",
      price: 560,
      rating: 4,
      description: "Durable camping tent for 2-3 people.",
    },
    {
      id: 4,
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-15-768x672.jpg",
      title: "Bag",
      price: 98,
      rating: 5,
      description: "Lightweight travel backpack with extra compartments.",
    },
      {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-14-768x672.jpg",
      title: "Skateboard",
      price: 300,
      rating: 4,
    },
     {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-13-768x672.jpg",
      title: "Lamp",
      price: 29,
      rating: 3,
    },
    {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-12-768x672.jpg",
      title: "Rope",
      price: 70,
      rating: 5,
    },
    {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-11-768x672.jpg",
      title: "Flip-flops",
      price: 39,
      rating: 4,
    },
    {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-10-768x672.jpg",
      title: "Star",
      price: 109,
      rating: 5,
    },
    {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-9-768x672.jpg",
      title: "Summer Hat",
      price: 96,
      rating: 3,
    },
     {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-8-768x672.jpg",
      title: "Sunglasses",
      price: 120,
      rating: 4,
    },
     {
      image: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-7-768x672.jpg",
      title: "Thermos",
      price: 100,
      rating: 4,
    },
  ];


  const [addedIndex, setAddedIndex] = useState(null);



  const handleAddToCart = (product, index) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...oldCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setAddedIndex(index);

    Swal.fire({
      title: "🛒 Added to Cart!",
      text: `${product.title} has been added successfully.`,
      icon: "success",
      confirmButtonColor: "#00bcd4",
      timer: 1500,
      showConfirmButton: false,
    });
  };

 
  const handleViewCart = () => {
    navigate("/cart");
  };

  return (
    <>
     {/* Hero Section */}
      <Box sx={{backgroundImage:"url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-title-img-1.jpg')",
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
        <Typography variant="subtitle1" sx={{ letterSpacing: 2, fontSize: "2rem", mb: 1 }}>Amazing Tour</Typography>
        <Typography variant="h3"sx={{fontWeight: 700, fontSize: "5rem", textTransform: "uppercase",letterSpacing: 2,}}>Shop</Typography>
      </Box>

      {/* Product Section */}
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          {products.map((p, i) => (
            <div key={i} className="relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl w-64">
              <div className="relative bg-gray-50 flex items-center justify-center h-56 group">
                <img src={p.image} alt={p.title} className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"/>

                <button onClick={() => addedIndex === i ? 
                       handleViewCart()
                      : 
                      handleAddToCart(p, i)
                  }
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 hover:bg-cyan-500 ${
                    addedIndex === i
                      ? "bg-cyan-500"
                      : "hidden group-hover:block"
                  }`}
                >
                  {addedIndex === i ? "View Cart" : "Add to Cart"}
                </button>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <span className="text-gray-800 font-semibold">${p.price}</span>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className={`${j < p.rating ? "text-cyan-400" : "text-gray-300" } text-sm`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
         

    </>
  );
}

export default Shop;

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

function Cart() {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  
  const handleRemove = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };


  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleBuyNow = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Your cart is empty!",
        text: "Please add some items before purchasing.",
        confirmButtonColor: "#00bcd4",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Purchase Successful!",
      text: "Your items have been purchased successfully.",
      confirmButtonColor: "#00bcd4",
      timer: 2000,
      showConfirmButton: false,
    });

    // Clear cart after success
    setCart([]);
    localStorage.removeItem("cart");
  };


  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 700 }}>
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography align="center" color="textSecondary">
          Your cart is empty.
        </Typography>
      ) : (
        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            background: "#fff",
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {cart.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
                borderBottom: "1px solid #eee",
                pb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${item.price}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleRemove(i)}
                startIcon={<FaTrash />}
              >
                Remove
              </Button>
            </Box>
          ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Total: ${total.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleClearCart}
              sx={{ borderRadius: 2 }}
            >
              Clear Cart
            </Button>
             <Button
                variant="contained"
                color="primary"
                onClick={handleBuyNow}
                sx={{ borderRadius: 2, backgroundColor: "#00bcd4" }}
              >
                Buy Now
              </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Cart;

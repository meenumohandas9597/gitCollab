import React, { useState, useRef } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

function Pages() {
  const [anchorEl, setAnchorEl] = useState(null);
  const leaveTimer = useRef(null);
  const buttonRef = useRef(null); // Ref for fixed anchoring

  const handleMouseEnter = () => {
    clearTimeout(leaveTimer.current);
    setAnchorEl(buttonRef.current);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const handleClick = () => {
    // Toggle on click (optional)
    setAnchorEl((prev) => (prev ? null : buttonRef.current));
  };

  const open = Boolean(anchorEl);

  return (
    <div
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ display: "inline-block", position: "relative" }}
    >
      {/* Main Header Text */}
      <li
        className={`cursor-pointer list-none font-semibold select-none ${
          open ? "text-[#4ed4d2]" : "text-black"
        } hover:text-[#4ed4d2]`}
      >
        Pages
      </li>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={buttonRef.current} // Always anchored to this element
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          list: {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            sx: { py: 0 },
          },
          paper: {
            elevation: 3,
            sx: {
              mt: 1,
              borderRadius: 2,
              minWidth: 180,
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {[
          { label: "About Us", to: "/about" },
          { label: "What We Offer", to: "/offer" },
          { label: "Our Team", to: "/team" },
          { label: "Get In Touch", to: "/getintouch" },
          { label: "FAQ Page", to: "/faq" },
          { label: "Error Page", to: "/error" },
        ].map((item) => (
          <MenuItem
            key={item.to}
            component={Link}
            to={item.to}
            sx={{
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#E0F7F7",
                color: "#4ed4d2",
              },
              transition: "all 0.2s ease",
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Pages;

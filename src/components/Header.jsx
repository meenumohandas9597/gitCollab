import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <header className="w-full ">
      <div className="bg-[#1d1d1d] text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@sailo.com"
            className="flex items-center gap-2 hover:text-teal-400 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400" />
            sailo123@gmail.com
          </a>
          <span className="flex items-center hover:text-teal-400 gap-2"><FontAwesomeIcon icon={faPhone} className="text-teal-400 " />  1 562 867 5309
          </span>

          <span className="hidden md:flex items-center hover:text-teal-400 gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-teal-400" />Broadway & Morris St, New York</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-white">
            <FontAwesomeIcon icon={faTwitter} className="text-white-400 " />
            <FontAwesomeIcon icon={faPinterestP} className="text-white-400 " />
            <FontAwesomeIcon icon={faFacebookF} className="text-white-400 " />
            <FontAwesomeIcon icon={faInstagram} className="text-white-400 " />
          </div>
          <div className="flex items-center bg-[#4ed4d2] px-3 py-1 rounded-sm  font-medium gap-2">
            <FontAwesomeIcon icon={faUser} className="text-white-400 " />Login

          </div>
        </div>
      </div>
      <nav className="bg-white flex justify-between items-center px-8 shadow-sm">
        <a href=""><img width={"100px"} height={"80px"} src="https://i.ibb.co/fYt9mDrs/Chat-GPT-Image-Oct-27-2025-10-48-49-PM-removebg-preview.png" alt="" border="0" /></a>
        <ul className="hidden md:flex gap-20 font-semibold text-[15px]">
          <li className="text-[#4ed4d2] cursor-pointer">Home</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">About</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">Destinations</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">Tours</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">Blog</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">Shop</li>
          <li className="hover:text-[#4ed4d2] cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center gap-6 text-gray-700 text-2xl hover:text-teal-600">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

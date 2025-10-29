import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full ">
      <div className="bg-[#1d1d1d] text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-4">
        <Link to={''}  className="flex items-center gap-2 hover:text-teal-400 transition">
           <FontAwesomeIcon icon={faEnvelope} className="text-teal-400" />
              sailo123@gmail.com
        </Link>
         
          <Link to={''}>
            <span className="flex items-center hover:text-teal-400 gap-2"><FontAwesomeIcon icon={faPhone} className="text-teal-400 " />  1 562 867 5309
            </span>
          </Link>

      <Link to={''}>    <span className="hidden md:flex items-center hover:text-teal-400 gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-teal-400" />Broadway & Morris St, New York</span></Link>

        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-white">
          <Link to={''}>  <FontAwesomeIcon icon={faTwitter} className="text-white-400 " /></Link>
            <Link to={''}><FontAwesomeIcon icon={faPinterestP} className="text-white-400 " /></Link>
            <Link to={''}><FontAwesomeIcon icon={faFacebookF} className="text-white-400 " /></Link>
           <Link to={''}> <FontAwesomeIcon icon={faInstagram} className="text-white-400 " /></Link>
          </div>
          <div className="flex items-center bg-[#4ed4d2] px-3 py-1 rounded-sm  font-medium gap-2">
            <Link to={''}><FontAwesomeIcon icon={faUser} className="text-white-400 " />Login</Link>

          </div>
        </div>
      </div>
      <nav className="bg-white flex justify-between items-center px-8 shadow-sm">
     <Link to={'/'}>   <img width={"100px"} height={"80px"} src="https://i.ibb.co/fYt9mDrs/Chat-GPT-Image-Oct-27-2025-10-48-49-PM-removebg-preview.png" alt="" border="0" /></Link>
        <ul className="hidden md:flex gap-20 font-semibold text-[15px]">
         <Link to='/'> <li className="text-[#4ed4d2] cursor-pointer">Home</li></Link>
         <Link to={'/'}> <li className="hover:text-[#4ed4d2] cursor-pointer">About</li></Link>
          <Link to={'/destination'}><li className="hover:text-[#4ed4d2] cursor-pointer">Destinations</li></Link>
          <Link to={'/tour'}><li className="hover:text-[#4ed4d2] cursor-pointer">Tours</li></Link>
          <Link to={'/'}><li className="hover:text-[#4ed4d2] cursor-pointer">Blog</li></Link>
          <Link to={'/'}><li className="hover:text-[#4ed4d2] cursor-pointer">Shop</li></Link>
          <Link to={'/'}><li className="hover:text-[#4ed4d2] cursor-pointer">Contact</li></Link>
        </ul>
        <div className="flex items-center gap-6 text-gray-700 text-2xl hover:text-teal-600">
        <Link to={''}>  <FontAwesomeIcon icon={faCartShopping} /></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

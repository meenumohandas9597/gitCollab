import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faUser,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h1 style={{ fontFamily: 'cursive' }} className="text-4xl font-extrabold text-yellow-400 mb-3">
            Sailo
          </h1>
          <p className="text-sm mb-6">
            Sailo is your ultimate travel companion, helping you explore the world with ease and excitement.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
              sailo123@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400" />
              1 562 867 5309
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400" />
              Broadway & Morris St, New York
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Our Recent Posts</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p>Visit Thailand, Bali And China</p>
              <p className="text-gray-400 text-xs">September 7, 2016</p>
            </div>
            <div>
              <p>The Sound Of Our Jungle</p>
              <p className="text-gray-400 text-xs">September 7, 2016</p>
            </div>
            <div>
              <p>New Year, New Resolutions!</p>
              <p className="text-gray-400 text-xs">September 7, 2016</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Subscribe to our Sailo</h2>
          <p className="text-sm mb-4 text-gray-400">
            Join the Sailo community today.
            Discover new destinations and exclusive travel deals first.
          </p>
          <div className="space-y-3">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none text-sm w-full text-gray-200"
              />
            </div>
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none text-sm w-full text-gray-200"
              />
            </div>
            <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold px-6 py-2 rounded transition">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Our Instagram</h2>
          <p className="text-sm text-gray-400">
            Stay connected with Sailo.
            Get the latest travel news and special offers.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © 2025 Created By Sailo
      </div>
    </footer>
  );
}

export default Footer;

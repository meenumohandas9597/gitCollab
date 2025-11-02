import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      {/* carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background slideshow */}
        <div className="absolute inset-0">
          <div className="slideshow"></div>
        </div>

        {/* Text content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center ">
          <p className="text-4xl italic mb-4 tracking-wide" style={{ fontFamily: 'Pacifico' }}>Lets Go Now</p>
          <h1 className="text-6xl font-extrabold mb-6">Relax and Enjoy</h1>
          <p className="text-lg max-w-2xl">
            Discover beautiful destinations and enjoy every moment of your journey.
          </p>
        </div>

        <style>{`
          /* Zoom animation */
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
  
          /* Background image slideshow */
          @keyframes slideShow {
            0%, 33% {
              background-image: url('https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383057.jpg?semt=ais_hybrid&w=740&q=80');
            }
            34%, 66% {
              background-image: url('https://daddysdeals.co.za/wp-content/uploads/2023/09/Untitled-design-2023-09-21T140627.336.png');
            }
            67%, 100% {
              background-image: url('https://img.freepik.com/premium-photo/selfie-diversity-portrait-friends-holiday-while-having-fun-together-weekend-trip_1315585-5552.jpg?semt=ais_hybrid&w=740&q=80');
            }
          }
  
          .slideshow {
            width: 100%;
            height: 600px;
            background-size: cover;
            background-position: center;
            animation:
              slideShow 9s linear infinite,
              zoomIn 2s ease-in-out infinite alternate;
          }
        `}</style>
      </div>

      {/* packages */}

      <div className="py-10 px-6 md:px-12 bg-white text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-teal-500 font-semibold text-2xl" style={{ fontFamily: "Pacifico" }}>Choose Your</span><br />
          Perfect Holiday
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Escape the ordinary and explore the beauty of the world. Find the best places to relax, adventure, and make memories that last forever..
        </p>

        {/* Destination Images with Overlay Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Card 1 */}

          <Link to={'/destination'}>
            <div className="relative overflow-hidden rounded-full w-64 h-64 mx-auto">
              <img
                src="https://img.freepik.com/free-photo/general-view-toledo-from-hill_1398-4496.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Spain"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-3xl font-bold text-white drop-shadow-lg"
                  style={{ fontFamily: "Pacifico" }}
                >
                  Spain
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://t3.ftcdn.net/jpg/05/45/96/80/360_F_545968000_7QVbAal7eIsy6dnaRItEzfz4qum8cWso.jpg"
                alt="Tarragona"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Tarragona</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.6 Good
                  </span>
                  <span className="font-semibold">$1740</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-madrid.jpg"
                alt="Madrid"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Madrid</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 7.0 Superb
                  </span>
                  <span className="font-semibold">$1100</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://t3.ftcdn.net/jpg/02/16/87/22/360_F_216872259_ylytLwJnKPD8q1J7kr4VrlZ9h7bcr7wg.jpg"
                alt="Barcelona"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Barcelona</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

          {/* card 5 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGJlYWNofGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
                alt="Bali"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Bali</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

          {/* card 6 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://media.istockphoto.com/id/939181294/photo/cherry-blossom-of-spring-in-seoul-south-korea.jpg?s=612x612&w=0&k=20&c=IgChDV_ZBuXeD5y0vZT4q5gIs3dQkeRTg2RLAjmMNcQ="
                alt="Korea"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Korea</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

          {/* card 7 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://www.superprof.co.uk/blog/wp-content/uploads/2019/08/greece.jpg"
                alt="greece"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Greece</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

          {/* card 8 */}

          <Link to={'/tour'}>
            <div className="relative overflow-hidden rounded-full w-64 h-64 mx-auto">
              <img
                src="https://cdn.tripzaza.com/en/destinations/wp-content/uploads/2018/07/Dostoprimechatelnosti-Tayvanya-e1531382297718.jpg"
                alt="taiwan"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-3xl font-bold text-white drop-shadow-lg"
                  style={{ fontFamily: "Pacifico" }}
                >
                  Taiwan
                </p>
              </div>
            </div>
          </Link>

          {/* card 9 */}
          <Link to={'/tour'}>
            <div className="relative overflow-hidden rounded-full w-64 h-64 mx-auto">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUvo3MdplaHGqf3-YnK2P89dQKjUhqFHvCw&s"
                alt="taiwan"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-3xl font-bold text-white drop-shadow-lg"
                  style={{ fontFamily: "Pacifico" }}
                >
                  Japan
                </p>
              </div>
            </div>
          </Link>

          {/* card 10 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://thumbs.dreamstime.com/b/stunning-landscape-scene-agriculture-rural-area-new-zealand-flock-sheep-green-grassland-cloudy-day-157477606.jpg"
                alt="NewZealand"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">NewZealand</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

          {/* card 11 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://www.insightvacations.com/wp-content/uploads/2025/02/getty-images-FWFTOJTRih8-unsplash-1024x630.jpg"
                alt="italy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Italy</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>
          {/* card 12 */}
          <Link to={'/tour'}>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://thumbs.dreamstime.com/b/old-town-hoi-buildings-along-thu-bon-river-city-vietnam-207508349.jpg"
                alt="italy"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">Vietnam</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 5.3 Good
                  </span>
                  <span className="font-semibold">$840</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* video */}

      <div
        className="relative w-full bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "url('https://thumbs.wbm.im/pw/small/81f2cf06ad84e265142998786f466b98.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <p
            className="text-2xl italic mb-2"
            style={{ fontFamily: "Pacifico" }}
          >
            Go & Discover
          </p>
          <h2 className="text-5xl font-extrabold mb-4">Breathtaking Cities</h2>
          <p className="max-w-2xl text-lg mb-8">
            Find exciting new paths waiting to be explored. Every route leads to a
            fresh adventure and unforgettable memories.
          </p>

          {/* Video Thumbnail (Static Section) */}
          <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://c02.purpledshub.com/uploads/sites/41/2023/04/Shanghai-14fcc7a.jpg?w=1200&webp=1"
              alt="Travel Video"
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <a
              href="https://media.istockphoto.com/id/1498348723/video/shopping-street-in-seoul.mp4?s=mp4-640x640-is&k=20&c=5tCoz_VMalNwBtG6B0Xa-hCwn3XwRkeCCZaZRtur2EQ="
              target="_blank"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-300 transition-all duration-300">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* reviews */}

      <div
        className="relative w-full bg-cover bg-center py-32 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-2xl italic mb-2" style={{ fontFamily: "Pacifico" }}>
            Read The Top
          </p>
          <h2 className="text-5xl font-extrabold mb-4">Travel Reviews</h2>
          <p className="max-w-2xl text-lg mb-12">
            Discover stories and experiences from travelers who explored breathtaking destinations around the world.
          </p>

          {/* Reviews Wrapper */}
          <div className="overflow-hidden w-full max-w-7xl">
            <div className="flex w-[200%] animate-slide group-hover:pause-slide">
              {/* cards */}
              <div className="flex w-1/2 justify-center gap-8">
                {/* card 1 */}
                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg"
                    alt="Reviewer"
                    className="w-30 h-25 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Beautiful Holland</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    The tulip fields were stunning, and the canals made it magical.
                  </p>
                  <p className="font-bold mt-3">Carol Silva</p>
                </div>

                {/* card 2 */}

                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Reviewer"
                    className="w-25 h-25 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Temple Tour</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    A peaceful experience exploring the historic temples.
                  </p>
                  <p className="font-bold mt-3">Carl Moore</p>
                </div>

                {/* card 3 */}

                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://img.freepik.com/free-photo/smiling-young-african-man-standing-isolated_171337-9681.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Reviewer"
                    className="w-25 h-25 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Desert Safari</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    Amazing dunes and great adventure experience.
                  </p>
                  <p className="font-bold mt-3">Ryan Lee</p>
                </div>
              </div>

              <div className="flex w-1/2 justify-center gap-8">

                {/* card 4 */}
                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://thumbs.dreamstime.com/b/man-perfect-brilliant-smile-unshaven-face-defocused-background-guy-happy-emotional-expression-outdoors-bearded-man-124640934.jpg"
                    alt="Reviewer"
                    className="w-30 h-25 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Swiss Alps</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    Truly breathtaking views and peaceful atmosphere.
                  </p>
                  <p className="font-bold mt-3">Laura Jones</p>
                </div>

                {/* card 5 */}

                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Reviewer"
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Rome Streets</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    Loved the history and architecture everywhere!
                  </p>
                  <p className="font-bold mt-3">Noah Clark</p>
                </div>

                {/* card 6 */}

                <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-2xl transition-all duration-300">
                  <img
                    src="https://thumbs.dreamstime.com/b/portrait-young-attractive-cheerful-woman-smiling-happy-face-human-expressions-emotions-teenager-studio-shot-isolated-143260494.jpg"
                    alt="Reviewer"
                    className="w-30 h-25 rounded-full mx-auto"
                  />
                  <h3 className="text-xl font-bold mt-4">Tokyo Nights</h3>
                  <div className="flex justify-center mt-2 text-cyan-500">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className="text-gray-600 mt-2">
                    The lights, food, and energy were out of this world!
                  </p>
                  <p className="font-bold mt-3">Kenji Ito</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <style>
          {`
      @keyframes slide {
        0%, 45% { transform: translateX(0); }
        50%, 95% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-slide {
        animation: slide 16s infinite ease-in-out;
      }
      .group:hover .animate-slide {
        animation-play-state: paused;
      }
    `}
        </style>
      </div>

      {/* blog */}

      <div className="bg-white py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">


          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-4">From Our Blog</h2>
            <p className="text-gray-600 mb-10">
              “Discover inspiring travel stories and tips from explorers around the world.
              Stay updated with the latest adventures and destination insights.”
            </p>


            <div className="flex gap-5 mb-10">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200"
                alt="blog1"
                className="w-28 h-28 rounded-md object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Amazing Tour</h3>
                <p className="text-gray-600 mb-2">
                  Al alit emnos inipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.
                </p>
                <div className="flex items-center gap-4 text-gray-700 text-sm font-semibold">
                  <p>September 11, 2016</p>
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-comment"></i> 1 <FontAwesomeIcon icon={faComment} className="text-teal-500"/>
                  </span>
                </div>
              </div>
            </div>


            <div className="flex gap-5 mb-10">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/bg_luxury/869918c9da63b2c5685fce05965700da5b0e6617.jpg"
                alt="blog2"
                className="w-28 h-28 rounded-md object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Your Vacation</h3>
                <p className="text-gray-600 mb-2">
                  Al alit emnos inipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.
                </p>
                <div className="flex items-center gap-4 text-gray-700 text-sm font-semibold">
                  <p>September 11, 2016</p>
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-comment"></i> 1 <FontAwesomeIcon icon={faComment} className="text-teal-500"/>
                  </span>
                </div>
              </div>
            </div>


            <Link to={'/blog'} className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-md  transition-all">
              View More
            </Link>
          </div>


          <div className="relative">
            <img
              src="https://img.freepik.com/free-vector/travelling-objects-with-airplane-white-background_1308-101184.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Sale Banner"
              className="w-full h-[500px] object-cover rounded-md"
            />


          </div>

        </div>
      </div>
















    </>

  );
}

export default Home;

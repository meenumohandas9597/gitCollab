import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
              background-image: url('https://img.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3651.jpg?semt=ais_hybrid&w=740&q=80');
            }
            34%, 66% {
              background-image: url('https://daddysdeals.co.za/wp-content/uploads/2023/09/Untitled-design-2023-09-21T140627.336.png');
            }
            67%, 100% {
              background-image: url('https://img.freepik.com/premium-photo/women-with-hats-sunglasses-looking-map_83925-7089.jpg?semt=ais_hybrid&w=740&q=80');
            }
          }
  
          .slideshow {
            width: 100%;
            height: 500px;
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

          {/* Card 2 */}
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

          {/* Card 3 */}
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

          {/* Card 4 */}
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

          {/* card 5 */}
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

          {/* card 6 */}
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

          {/* card 7 */}
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

          {/* card 8 */}
          
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

          {/* card 9 */}
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

          {/* card 10 */}
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

          {/* card 11 */}
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
          {/* card 12 */}
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









        </div>
      </div>



    </>

  );
}

export default Home;

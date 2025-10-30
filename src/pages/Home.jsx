import React from "react";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <div className="slideshow"></div>
      </div>

      {/* Text content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center ">
        <p className="text-4xl italic mb-4 tracking-wide" style={{fontFamily:'Pacifico'}}>Lets Go Now</p>
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
            background-image: url('https://www.westernunion.com/blogs-staticassets/R25-07.05.0-161/media/Travel_Abroad_01.jpg');
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
  );
}

export default Home;

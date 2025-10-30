import React from "react";
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="w-full bg-white">
      <div
        className="relative w-full h-[70vh]  bg-cover bg-center"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
          Destination
        </h1>
      </div>

      <div className="-mt-24 relative z-10 bg-white max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 rounded-3xl shadow-xl">
        {/*  Taiwan */}
        <Link to="/destination/taiwan" className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="dtnfont text-white text-4xl drop-shadow-lg">Taiwan</span>
            </div>
          </div>
        </Link>

        {/*  Greece */}
        <Link to="/destination/greece" className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_1024,h_684,c_fit/enchanting-web/2023/09/Naxos-Greek-Islands.-Sunny-summer-landscape-with-rocky-island-Cyclades-in-Greece-1.jpg"
              alt="Greece"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="dtnfont text-white text-4xl drop-shadow-lg">Greece</span>
            </div>
          </div>
        </Link>

        {/*  Netherlands */}
        <Link to="/destination/netherlands" className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://hblimg.mmtcdn.com/content/hubble/img/countryimgs/mmt/destination/m_Netherlands_country_images_1_l_617_956.jpg"
              alt="Netherlands"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="dtnfont text-white text-4xl drop-shadow-lg">Netherlands</span>
            </div>
          </div>
        </Link>

        {/*  Spain */}
        <Link to="/destination/spain" className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1561632669-7f55f7975606?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhaW58ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
              alt="Spain"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="dtnfont text-white text-4xl drop-shadow-lg">Spain</span>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white dtnfont text-4xl drop-shadow-lg">
                Australia
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://static.wixstatic.com/media/nsplsh_657846644f576b59425177~mv2.jpg/v1/fill/w_640,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_657846644f576b59425177~mv2.jpg"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                Bali
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://www.planetware.com/wpimages/2019/10/japan-in-pictures-most-beautiful-places-arashiyama-bamboo-grove-kyoto.jpg"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont  drop-shadow-lg">
                Japan
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg?w=1200&h=630&q=95&fit=crop"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                New York
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-133701,resizemode-75,msid-58084960/magazines/travel/how-egypt-offers-a-captivating-canvas-of-the-past-and-the-present.jpg"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                Egypt
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://static.toiimg.com/thumb/82837463/cuba.jpg?width=636&height=358&resize=4"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                Cuba
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://lp-cms-production.imgix.net/2023-03/GettyRF_503257072.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                Russia
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg group">
            <img
              src="https://media.worldnomads.com/Explore/europe/5-things-italy.jpg"
              alt="Taiwan"
              className="w-full h-full object-cover rounded-full transform transition-transform duration-[1000ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/25 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl dtnfont drop-shadow-lg">
                Italy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
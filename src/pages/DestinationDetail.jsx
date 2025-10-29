import React from "react";
import { useParams, Link } from "react-router-dom";

 function DestinationDetail() {
  const { id } = useParams();

  const destinations = {
    taiwan: {
      title: "Taiwan",
      heroImage:
        "https://intriper.com/wp-content/uploads/2023/03/Taiwan-pagara-a-los-turistas-para-que-visiten-su-pais-buscando-incrementar-los-indices-de-turismo-en-la-isla-para-2025.jpg",
      description: `Taiwan is an island of contrasts — neon-lit Taipei streets and night markets sit alongside jade-green mountains and coastal cliffs. Highlights include Taipei 101, Taroko Gorge, Sun Moon Lake, and incredible street food (xiaolongbao, beef noodle soup). It's compact, easy to explore, and packed with friendly local culture.`,
      info: {
        country: "Taiwan",
        visa: "Visa-free for many nationalities (up to 90 days)",
        language: "Mandarin Chinese",
        currency: "New Taiwan Dollar (TWD)",
        area: "36,193 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1557409518-691ebcd96038?auto=format&fit=crop&w=1200&q=80",
        "https://www.kkday.com/en-ph/blog/wp-content/uploads/tw_shutterstock_472924432.jpg",
        "https://www.taiwantrip.com.tw/public/upload/phpfvE2Zc_b.jpg",
        "https://eng.taiwan.net.tw/att/1/big_scenic_spots/pic_11653_2.jpg",
      ],
      municipalities: [
        {
          name: "Taipei",
          img: "https://www.pelago.com/img/destinations/taipei/0227-0524_taipei-xlarge.jpg",
        },
        {
          name: "Taichung",
          img: "https://media.cnn.com/api/v1/images/stellar/prod/160411171025-taichung-feng-chia-night-market.jpg?q=w_4000,h_3000,x_0,y_0,c_fill",
        },
        {
          name: "Kaohsiung",
          img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/87/e2/d9.jpg",
        },
        {
          name: "Tainan",
          img: "https://www.taiwanobsessed.com/wp-content/uploads/2023/08/tainan-taiwan.jpg",
        },
      ],
    },

    greece: {
      title: "Greece",
      heroImage:
        "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1600&q=80",
      description: `Greece blends ancient history with bright Aegean islands and sparkling sea views. Visit Athens for the Acropolis, Santorini for iconic sunsets and whitewashed villages, and Crete for food and rugged landscapes. Mediterranean cuisine and slow island life are highlights.`,
      info: {
        country: "Greece",
        visa: "Schengen rules apply for non-EU visitors",
        language: "Greek",
        currency: "Euro (€)",
        area: "131,957 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      ],
      municipalities: [
        {
          name: "Athens",
          img: "https://images.unsplash.com/photo-1590608897129-79da98d15927?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Santorini",
          img: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Mykonos",
          img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Crete",
          img: "https://images.unsplash.com/photo-1518509562904-8e1dcbdbcc9d?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },

    netherlands: {
      title: "Netherlands",
      heroImage:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
      description: `The Netherlands is known for canals, bike culture, tulip fields and charming cities. Amsterdam’s canals and museums, the colorful Keukenhof (tulip gardens), and windmills in the countryside are classic attractions — easy to experience via short train rides between cities.`,
      info: {
        country: "Netherlands",
        visa: "Schengen rules apply for non-EU visitors",
        language: "Dutch",
        currency: "Euro (€)",
        area: "41,543 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
      ],
      municipalities: [
        {
          name: "Amsterdam",
          img: "https://images.unsplash.com/photo-1549640376-1953e7c9c0c9?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Rotterdam",
          img: "https://images.unsplash.com/photo-1604845025024-3c6e04e6c94e?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Utrecht",
          img: "https://images.unsplash.com/photo-1609861279944-33bba2d72f31?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "The Hague",
          img: "https://images.unsplash.com/photo-1614876676749-611d2e83b9c9?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },

    spain: {
      title: "Spain",
      heroImage:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80",
      description: `Spain dazzles with diverse regions — Catalonia’s architecture, Andalusia’s flamenco and palaces, Madrid’s museums and culinary scene, and sun-drenched Mediterranean beaches. Tapas, lively plazas, and festivals are part of the Spanish experience.`,
      info: {
        country: "Spain",
        visa: "Schengen rules apply for non-EU visitors",
        language: "Spanish",
        currency: "Euro (€)",
        area: "505,990 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494475673543-6a6a27143b16?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554057009-1c224f25d3d2?auto=format&fit=crop&w=1200&q=80",
      ],
      municipalities: [
        {
          name: "Madrid",
          img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Barcelona",
          img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Seville",
          img: "https://images.unsplash.com/photo-1506808547685-e2ba962ded58?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Granada",
          img: "https://images.unsplash.com/photo-1600172454284-9342d8cf0b70?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  };

  const destination = destinations[id] || destinations.taiwan;

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${destination.heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center z-10 px-4">
          <div className="mb-6">
            <Link
              to="/destination"
              className="inline-block bg-white/20 text-white py-2 px-4 rounded-md backdrop-blur-sm hover:bg-white/30 transition"
            >
              ← Back
            </Link>
          </div>
          <h3 className="text-2xl  dtnfont font-light mb-2 tracking-wide">Destinations</h3>
          <h1 className="text-5xl md:text-6xl font-bold">{destination.title}</h1>
        </div>
      </div>

      {/* Main white card overlapping hero */}
      <div className="max-w-6xl mx-auto -mt-20 bg-white rounded-2xl shadow-2xl p-6 md:p-12 relative z-20">
        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-3">{destination.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {destination.description}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery.map((g, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={g}
                  alt={`${destination.title} ${i + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-700 ease-in-out rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Info + Cities layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left: Good to Know (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-cyan-400 text-white rounded-xl p-6">
              <h4 className="text-2xl font-semibold mb-3">Good to Know</h4>
              <p className="mb-4">Helpful facts and tips for planning your visit.</p>
              <ul className="space-y-2">
                <li> <strong>Country:</strong> {destination.info.country}</li>
                <li> <strong>Visa:</strong> {destination.info.visa}</li>
                <li> <strong>Language:</strong> {destination.info.language}</li>
                <li> <strong>Currency:</strong> {destination.info.currency}</li>
                <li> <strong>Area:</strong> {destination.info.area}</li>
              </ul>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-4">About {destination.title}</h4>
              <p className="text-gray-700">
                {/* small extra paragraph to match screenshot density */}
                This destination offers a mix of cultural landmarks, scenic nature, &amp; local cuisine — great for short trips and extended stays alike.
              </p>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Major Cities</h4>
              <div className="grid grid-cols-2 gap-3">
                {destination.municipalities.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-20 object-cover transform hover:scale-105 transition duration-700 ease-in-out rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium">{m.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-cyan-400 text-white p-4 rounded-xl">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm mb-3">Get travel tips & deals for {destination.title}.</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-md mb-2 text-black"
              />
              <button className="w-full bg-white text-black py-2 rounded-md font-semibold">Subscribe</button>
            </section>
          </aside>
        </div>

        <section className="bg-cyan-400 text-white rounded-xl p-6">
          <h4 className="text-2xl font-semibold mb-3">Leave a Reply</h4>
          <p className="mb-4">Share your questions or travel experiences.</p>
          <form className="space-y-4">
            <textarea  className="w-full p-3 rounded-md text-black" rows="4" placeholder="Message*" />
            <div className="grid grid-cols-2 gap-3">
              <input type="email" className="p-2 rounded-md text-black" placeholder="Email*" />
              <input type="text" className="p-2 rounded-md text-black" placeholder="Name*" />
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100">Send</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default DestinationDetail

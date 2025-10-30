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
        "https://www.zicasso.com/static/f0a152d1bc93dc1a7b2fd97679e949b2/508cd/f0a152d1bc93dc1a7b2fd97679e949b2.jpg",
      description: `Greece blends ancient history with bright Aegean islands and sparkling sea views. Visit Athens for the Acropolis, Santorini for iconic sunsets and whitewashed villages, and Crete for food and rugged landscapes. Mediterranean cuisine and slow island life are highlights.`,
      info: {
        country: "Greece",
        visa: "Schengen rules apply for non-EU visitors",
        language: "Greek",
        currency: "Euro (€)",
        area: "131,957 km²",
      },
      gallery: [
        "https://wanderon-images.gumlet.io/gallery/new/2025/07/16/1752648567677-places-to-visit-in-greece.jpeg",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d4/0e/ea/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_686368a229479726f3e9",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      ],
      municipalities: [
        {
          name: "Athens",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7FQAhK-CmH8bl91NITZ31DAgkdqBWjCvvA&s",
        },
        {
          name: "Santorini",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTRLFwTZCgsBNh0sLGc_QOPTywWmvU7j8jA&s",
        },
        {
          name: "Mykonos",
          img: "https://content.r9cdn.net/rimg/dimg/63/30/85cee65b-city-46053-1673284fa31.jpg?width=1366&height=768&xhint=1272&yhint=1072&crop=true",
        },
        {
          name: "Crete",
          img: "https://media.istockphoto.com/id/545660058/photo/motorboat-at-clear-water-of-loutro-town-on-crete-island.jpg?s=612x612&w=0&k=20&c=tR89klvQp1nSH6DDwI5jFME3Qmtcem2sxqFp-ilDVm8=",
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
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/504000/504084-amsterdam.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/countryimgs/mmt/destination/m_Netherlands_country_images_1_l_617_956.jpg",
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/11/Amsterdam.jpg",
        "https://i.natgeofe.com/k/4a509698-ab53-4581-af61-4c4808a81a76/netherlands-tulip-fields.jpg?wp=1&w=1084.125&h=609",
      ],
      municipalities: [
        {
          name: "Amsterdam",
          img: "https://static01.nyt.com/images/2023/09/24/multimedia/24-36Hrs-Amsterdam-01-01-cwqt/24-36Hrs-Amsterdam-01-01-cwqt-videoSixteenByNineJumbo1600.jpg",
        },
        {
          name: "Rotterdam",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/86/f1/0c/miniworld-rotterdam.jpg?w=900&h=500&s=1",
        },
        {
          name: "Utrecht",
          img: "https://lp-cms-production.imgix.net/2025-09/Shutterstock2065956632.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
        },
        {
          name: "The Hague",
          img: "https://utrechtbyinge.nl/wp-content/uploads/2024/10/Daens-Greenhouse-coffee-lunch-hotel-where-to-stay-in-Utrecht-city-center-tips-BB--scaled.jpeg",
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
        "https://assets.vogue.com/photos/6603d64d13a27b5703522946/16:9/w_4496,h_2529,c_limit/509288876",
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/52000/52309-Seville.jpg",
        "https://www.tripsavvy.com/thmb/DV4YcOy0xT9kcDamIS1jOBOWsMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-900638830-42f0d6d3d7074f11af480cec720a909c.jpeg",
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Costa%20Brava/Costa%20Brava%20lead%20image.jpg?imwidth=640",
      ],
      municipalities: [
        {
          name: "Madrid",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0z6cPZ1AwV6Pz_DvyXMERx9A0YSgfCpSKrg&s",
        },
        {
          name: "Barcelona",
          img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-barcelona-1.jpg",
        },
        {
          name: "Seville",
          img: "https://www.travelersuniverse.com/wp-content/uploads/2025/04/seville_s_fascinating_historical_highlights.jpg",
        },
        {
          name: "Granada",
          img: "https://www.gokitetours.com/wp-content/uploads/2025/01/The-10-Best-Things-to-Do-in-Granada-Spain-.webp",
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

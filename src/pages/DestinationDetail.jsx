import { useParams } from "react-router-dom";

 function DestinationDetail() {
  const { id } = useParams();

  const destinations = {
    taiwan: {
      title: "Taiwan",
      heroImage:
        "https://images.unsplash.com/photo-1505739771730-23c1f92fda3c?auto=format&fit=crop&w=1200&q=80",
      description: `
        Taiwan, an island nation off the southeastern coast of China, is known for its fascinating mix
        of modernity and tradition. From the iconic Taipei 101 skyscraper and bustling night markets
        to the peaceful Sun Moon Lake and Taroko Gorge, Taiwan’s charm lies in its diversity.
        Delicious street food, friendly locals, and stunning nature make it a traveler’s paradise.
      `,
      info: {
        country: "Taiwan",
        visa: "Visa-free for up to 90 days for many nationalities",
        language: "Mandarin Chinese",
        currency: "New Taiwan Dollar (TWD)",
        area: "36,193 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1602928328678-6df3d4e0e5d7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1557409518-691ebcd96038?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526481280691-3bfa7568e8f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=800&q=80",
      ],
      municipalities: [
        {
          name: "Taipei",
          img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Taichung",
          img: "https://images.unsplash.com/photo-1604654899052-07cc9a048b14?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Kaohsiung",
          img: "https://images.unsplash.com/photo-1597484661810-8b7c3d25e0b2?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Tainan",
          img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },

    greece: {
      title: "Greece",
      heroImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: `
        Greece, the cradle of Western civilization, enchants visitors with its sun-kissed islands,
        ancient ruins, and vibrant Mediterranean culture. Explore the blue-domed churches of
        Santorini, wander through Athens’ Acropolis, or sail the turquoise waters of Mykonos.
        With incredible food, warm hospitality, and breathtaking sunsets, Greece feels timeless.
      `,
      info: {
        country: "Greece",
        visa: "Schengen Visa required (for non-EU citizens)",
        language: "Greek",
        currency: "Euro (€)",
        area: "131,957 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
      description: `
        The Netherlands, famous for its windmills, tulip fields, and charming canals,
        blends old-world beauty with modern innovation. Amsterdam’s picturesque waterways,
        Rotterdam’s futuristic skyline, and the colorful Keukenhof Gardens make it
        a perfect European getaway. Biking through its countryside is an experience
        unlike any other.
      `,
      info: {
        country: "Netherlands",
        visa: "Schengen Visa required (for non-EU citizens)",
        language: "Dutch",
        currency: "Euro (€)",
        area: "41,543 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80",
      description: `
        Spain is a land of passion, color, and rhythm. From the artistic brilliance of Barcelona
        to the royal charm of Madrid and the flamenco spirit of Seville, every region tells
        a unique story. Enjoy tapas by the beach, explore Moorish palaces in Granada,
        and witness festivals that define Spanish life.
      `,
      info: {
        country: "Spain",
        visa: "Schengen Visa required (for non-EU citizens)",
        language: "Spanish",
        currency: "Euro (€)",
        area: "505,990 km²",
      },
      gallery: [
        "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1494475673543-6a6a27143b16?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554057009-1c224f25d3d2?auto=format&fit=crop&w=800&q=80",
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
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${destination.heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center">
          <h3 className="text-lg italic font-light mb-2 tracking-wide">
            Destination
          </h3>
          <h1 className="text-6xl font-bold">{destination.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto -mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{destination.title}</h2>
          <p className="leading-relaxed text-gray-700 whitespace-pre-line">
            {destination.description}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt=""
                  className="rounded-xl transform hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-cyan-400 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-3">Good to Know</h2>
          <p className="mb-4">
            Useful information to help you plan your trip to {destination.title}.
          </p>
          <ul className="space-y-2">
            <li>🏳️ <strong>Country:</strong> {destination.info.country}</li>
            <li>📄 <strong>Visa:</strong> {destination.info.visa}</li>
            <li>🗣️ <strong>Language:</strong> {destination.info.language}</li>
            <li>💰 <strong>Currency:</strong> {destination.info.currency}</li>
            <li>📏 <strong>Area:</strong> {destination.info.area}</li>
          </ul>
        </section>

        {/* Municipalities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Major Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.municipalities.map((m, i) => (
              <div key={i} className="text-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="rounded-xl hover:scale-110 transition duration-700 ease-in-out"
                  />
                </div>
                <p className="mt-2 font-semibold">{m.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reply Form */}
        <section className="bg-cyan-400 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Leave a Reply</h2>
          <p className="mb-4">
            Have a question or experience to share? We’d love to hear from you!
          </p>
          <form className="space-y-4">
            <textarea
              placeholder="Message*"
              className="w-full p-3 rounded-lg text-black"
              rows="4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="p-3 rounded-lg text-black"
              />
              <input
                type="text"
                placeholder="Name*"
                className="p-3 rounded-lg text-black"
              />
            </div>
            <button className="bg-white text-black px-6 py-2 font-semibold rounded-lg hover:bg-gray-100 transition">
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default DestinationDetail

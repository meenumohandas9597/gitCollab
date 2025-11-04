import React, { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  "https://images.unsplash.com/photo-1522098543979-ffc7f79d7a6c",
  "https://images.unsplash.com/photo-1533089860892-a7c6f0f3c3f9",
  "https://images.unsplash.com/photo-1550831107-1553da8c8464",
  "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef",
  "https://images.unsplash.com/photo-1578996953849-fb3b60aab99d",
];

function ToursGallery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    date: "",
    tickets: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-2">Gallery</h2>
        <p className="text-gray-500 mb-8 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Gallery Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default ToursGallery;

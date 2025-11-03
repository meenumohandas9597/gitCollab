import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getAllDestinationsAPI,
  addDestinationAPI,
  deleteDestinationAPI,
  editDestinationAPI,
} from "../../service/allAPI";

const DashboardDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingDestination, setEditingDestination] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    path: "",
    heroImage: "",
    description: "",
    country: "",
    visa: "",
    currency: "",
    language: "",
    area: "",
    gallery: "",
    municipalities: "",
  });

  // 🧠 Fetch destinations & flatten nested info
  const fetchDestinations = async () => {
    const response = await getAllDestinationsAPI();
    if (response.status === 200) {
      const formatted = response.data.map((d) => ({
        ...d,
        country: d.info?.country || "",
        visa: d.info?.visa || "",
        language: d.info?.language || "",
        currency: d.info?.currency || "",
        area: d.info?.area || "",
      }));
      setDestinations(formatted);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // 🖊 Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 💾 Add or Edit Destination
  const handleSave = async () => {
    if (!formData.title || !formData.heroImage || !formData.country) {
      Swal.fire("Error", "Please fill in all required fields", "error");
      return;
    }

    // Convert gallery and municipalities back to arrays
    const formattedData = {
      ...formData,
      info: {
        country: formData.country,
        visa: formData.visa,
        language: formData.language,
        currency: formData.currency,
        area: formData.area,
      },
      gallery:
        typeof formData.gallery === "string"
          ? formData.gallery.split(",").map((g) => g.trim())
          : formData.gallery,
      municipalities:
        typeof formData.municipalities === "string"
          ? formData.municipalities.split(",").map((m) => {
              const [name, img] = m.split("|");
              return { name: name?.trim(), img: img?.trim() };
            })
          : formData.municipalities,
    };

    if (editingDestination) {
      const response = await editDestinationAPI(editingDestination.id, formattedData);
      if (response.status === 200) {
        Swal.fire("Updated!", "Destination updated successfully!", "success");
        setShowModal(false);
        setEditingDestination(null);
        fetchDestinations();
      }
    } else {
      const exists = destinations.some(
        (dest) => dest.title.toLowerCase() === formData.title.toLowerCase()
      );
      if (exists) {
        Swal.fire("Warning", "Destination already exists!", "warning");
        return;
      }

      const response = await addDestinationAPI(formattedData);
      if (response.status === 201) {
        Swal.fire("Added!", "New destination added!", "success");
        setShowModal(false);
        fetchDestinations();
      }
    }

    setFormData({
      title: "",
      path: "",
      heroImage: "",
      description: "",
      country: "",
      visa: "",
      currency: "",
      language: "",
      area: "",
      gallery: "",
      municipalities: "",
    });
  };

  // ✏️ Edit
  const handleEdit = (destination) => {
    setEditingDestination(destination);
    setFormData({
      ...destination,
      gallery: destination.gallery?.join(", ") || "",
      municipalities:
        destination.municipalities
          ?.map((m) => `${m.name}|${m.img}`)
          .join(", ") || "",
    });
    setShowModal(true);
  };

  // 🗑 Delete
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this destination!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const response = await deleteDestinationAPI(id);
      if (response.status === 200) {
        Swal.fire("Deleted!", "Destination has been removed.", "success");
        fetchDestinations();
      }
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Manage Destinations</h2>
        <button
          onClick={() => {
            setEditingDestination(null);
            setFormData({
              title: "",
              path: "",
              heroImage: "",
              description: "",
              country: "",
              visa: "",
              currency: "",
              language: "",
              area: "",
              gallery: "",
              municipalities: "",
            });
            setShowModal(true);
          }}
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Destination
        </button>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.length > 0 ? (
          destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={dest.heroImage}
                alt={dest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{dest.title}</h3>
                <p className="text-sm text-gray-500">
                  {dest.info?.country || dest.country || "—"}
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(dest)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dest.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No destinations found
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {editingDestination ? "Edit Destination" : "Add Destination"}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="border p-2 rounded"
              />
              <input
                name="path"
                value={formData.path}
                onChange={handleInputChange}
                placeholder="Path (e.g. taiwan)"
                className="border p-2 rounded"
              />
              <input
                name="heroImage"
                value={formData.heroImage}
                onChange={handleInputChange}
                placeholder="Hero image URL"
                className="border p-2 rounded col-span-2"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="border p-2 rounded col-span-2 h-24"
              />
              <input
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="border p-2 rounded"
              />
              <input
                name="visa"
                value={formData.visa}
                onChange={handleInputChange}
                placeholder="Visa"
                className="border p-2 rounded"
              />
              <input
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                placeholder="Language"
                className="border p-2 rounded"
              />
              <input
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                placeholder="Currency"
                className="border p-2 rounded"
              />
              <input
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="Area"
                className="border p-2 rounded col-span-2"
              />
              <input
                name="gallery"
                value={formData.gallery}
                onChange={handleInputChange}
                placeholder="Gallery (comma-separated URLs)"
                className="border p-2 rounded col-span-2"
              />
              <input
                name="municipalities"
                value={formData.municipalities}
                onChange={handleInputChange}
                placeholder="Municipalities: name|img,name|img"
                className="border p-2 rounded col-span-2"
              />
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md"
              >
                {editingDestination ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardDestinations;

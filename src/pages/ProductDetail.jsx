import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) return <p className="text-center mt-10">No product found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-cyan-500 mb-4">
          ${product.price}
        </p>
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

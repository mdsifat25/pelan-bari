import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const products = [
  { name: "Cactus 1", image: "/images/cactus1.jpg", price: 100 },
  { name: "Cactus 2", image: "/images/cactus2.jpg", price: 120 },
  { name: "Snake Plant", image: "/images/snakeplant.jpg", price: 180 },
  { name: "Unknown Cactus", image: "/images/cactus3.jpg", price: 100 }
];

const accessories = [];

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-700">🌿 Pelan Bari</h1>
      <div className="space-x-4">
        <Link to="/" className="text-green-700 font-medium">Plants</Link>
        <Link to="/accessories" className="text-green-700 font-medium">Accessories</Link>
      </div>
    </nav>
  );
}

function PlantPage() {
  return (
    <section className="px-6">
      <h2 className="text-2xl font-semibold mb-4">Our Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
              <p className="text-gray-700 font-medium">৳ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccessoriesPage() {
  return (
    <section className="px-6">
      <h2 className="text-2xl font-semibold mb-4">Accessories</h2>
      <p className="text-gray-600">No accessories available yet. Coming soon!</p>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<PlantPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  { name: 'Charcoal', src: '/assets/charcoal.jpeg', colorCode: '#36454F' },
  { name: 'Gray', src: '/assets/gray.jpeg', colorCode: '#808080' },
  { name: 'Green', src: '/assets/green.jpeg', colorCode: '#228B22' },
  { name: 'Navy', src: '/assets/navy.jpeg', colorCode: '#000080' },
  { name: 'Red', src: '/assets/red.jpeg', colorCode: '#FF0000' },
  { name: 'White', src: '/assets/white.jpeg', colorCode: '#FFFFFF' },
  { name: 'Yellow', src: '/assets/yellow.jpeg', colorCode: '#FFFF00' }
];

function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Column (Image) */}
        <div className="relative aspect-square bg-[#fefef4] rounded-[2.5rem] overflow-hidden shadow-2xl p-8 flex items-center justify-center">
          <Image
            src={selectedProduct.src}
            alt={selectedProduct.name}
            width={600}
            height={600}
            className="object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column (Controls) */}
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4">The Collection</p>
          <h3 className="text-6xl md:text-7xl font-thin tracking-tighter text-white mb-8">Define Your Look</h3>
          <p className="text-2xl font-light text-zinc-300 mb-8">Color: {selectedProduct.name}</p>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <button
                key={product.name}
                onClick={() => setSelectedProduct(product)}
                style={{ backgroundColor: product.colorCode }}
                className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                  selectedProduct.name === product.name
                    ? 'ring-1 ring-[#fefef4] ring-offset-8 ring-offset-black'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`Select ${product.name} color`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Caneless</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#showcase" className="hover:text-gray-400">Showcase</a></li>
              <li><a href="#demo" className="hover:text-gray-400">Demo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          >
            <source src="/assets/glasses video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center p-4">
            <h2 className="text-5xl md:text-6xl font-extrabold">Caneless – Smart Vision, Without Limits</h2>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">About Caneless</h3>
          <p className="text-lg text-gray-300">
            At Caneless, we empower blind and visually-impaired individuals with greater freedom, confidence, and independence. Our intelligent smart glasses combine advanced AI, real-time object detection, and natural voice guidance to transform the way users navigate the world. Designed to replace or complement traditional mobility tools, Caneless glasses offer hands-free assistance that understands the environment, reads text, recognizes objects and faces, and provides intuitive audio feedback — all through a lightweight, comfortable design built for everyday use.
          </p>
        </section>

        {/* Product Showcase Section */}
        <section id="showcase" className="bg-black">
          <ProductShowcase />
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-12">Compact & Portable</h3>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg max-w-4xl mx-auto"
            >
              <source src="/assets/case video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Caneless. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

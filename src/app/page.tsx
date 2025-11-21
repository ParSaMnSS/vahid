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
    <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Left Column (Image) */}
      <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden bg-[#fefef4] shadow-2xl flex items-center justify-center">
        <Image
          src={selectedProduct.src}
          alt={selectedProduct.name}
          width={600}
          height={600}
          className="object-contain w-[80%] h-[80%] drop-shadow-xl"
        />
      </div>

      {/* Right Column (Controls) */}
      <div className="flex flex-col">
        <label className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase mb-6">The Collection</label>
        <h3 className="text-5xl md:text-6xl font-thin text-white mb-8">Define Your Look</h3>
        <p className="text-xl text-[#fefef4] mb-8 font-light">Color: {selectedProduct.name}</p>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              style={{ backgroundColor: product.colorCode }}
              className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                selectedProduct.name === product.name
                  ? 'ring-2 ring-[#fefef4] ring-offset-4 ring-offset-[#050505]'
                  : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Select ${product.name} color`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e0e0e0] selection:bg-[#fefef4] selection:text-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60"
        >
          <source src="/assets/glasses video.mp4" type="video/mp4" />
        </video>
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <label className="uppercase tracking-[0.5em] text-xs text-zinc-400 mb-4">Visionary Tech</label>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mix-blend-overlay">CANELESS</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto py-32 px-8 text-center">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300 mb-8">
          At Caneless, we empower blind and visually-impaired individuals with greater freedom, confidence, and independence. Our intelligent smart glasses combine advanced AI, real-time object detection, and natural voice guidance to transform the way users navigate the world.
        </p>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300">
          Designed to replace or complement traditional mobility tools, Caneless glasses offer hands-free assistance that understands the environment, reads text, recognizes objects and faces, and provides intuitive audio feedback — all through a lightweight, comfortable design built for everyday use.
        </p>
      </div>

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Demo Section */}
      <div className="w-full py-32 flex justify-center bg-[#0a0a0a]">
        <div className="max-w-5xl w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/case%20video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}

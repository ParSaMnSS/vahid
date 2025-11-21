"use client";
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DemoSection = dynamic(() => import('./components/DemoSection'), { ssr: false });

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
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="relative aspect-4/3 w-full rounded-[2.5rem] overflow-hidden bg-[#fefef4] border border-black/5">
        {products.map((product) => (
          <div
            key={product.name}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
              selectedProduct.name === product.name ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={product.src}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain w-[80%] h-[80%]"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <label className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-6">The Collection</label>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-thin text-[#1d1d1f] mb-8">Define Your Look</h3>
        <p className="text-xl text-neutral-500 mb-8 font-light">Color: {selectedProduct.name}</p>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              style={{ backgroundColor: product.colorCode }}
              className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none border border-neutral-300 shadow-md ${
                selectedProduct.name === product.name
                  ? 'ring-2 ring-black ring-offset-4 ring-offset-[#F5F5F7]'
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
    <main className="min-h-screen bg-[#F5F5F7] text-[#1d1d1f]">
      <div className='relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#F5F5F7]'>
        <Image src='/assets/woman.jpeg' alt='Caneless Editorial' fill className='object-cover object-[40%_50%] block md:hidden' priority />
        <div className="absolute inset-0 bg-black/30 block md:hidden" />
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover transform-gpu hidden md:block' 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload='auto' 
          poster='/assets/hero-bg.jpg'
        >
          <source src='/assets/glasses-video.mp4' type='video/mp4' />
        </video>
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4'>
          <label className='uppercase tracking-[0.5em] text-[10px] sm:text-xs text-zinc-500 mb-4'>Visionary Tech</label>
          <h1 className='text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter text-[#1d1d1f]'>CANELESS</h1>
        </div>
      </div>

      <div className='max-w-3xl mx-auto py-20 md:py-32 px-6 text-center'>
        <p className='text-lg sm:text-2xl md:text-3xl font-light leading-relaxed mb-8 text-neutral-800'>At Caneless, we empower blind and visually-impaired individuals with greater freedom, confidence, and independence. Our intelligent smart glasses combine advanced AI, real-time object detection, and natural voice guidance to transform the way users navigate the world.</p>
        <p className='text-lg sm:text-2xl md:text-3xl font-light leading-relaxed text-neutral-800'>Designed to replace or complement traditional mobility tools, Caneless glasses offer hands-free assistance that understands the environment, reads text, recognizes objects and faces, and provides intuitive audio feedback — all through a lightweight, comfortable design built for everyday use.</p>
      </div>
      
      <ProductShowcase />

      <div className='w-full py-20 md:py-32 flex justify-center px-4'>
        <div className='max-w-5xl w-full aspect-video rounded-4xl overflow-hidden shadow-2xl'>
          <video 
            className='w-full h-full object-cover transform-gpu' 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload='auto' 
            src='/assets/case-video.mp4' 
          />
        </div>
      </div>

      <footer className="bg-[#1d1d1f] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div>
            <Image
              src="/assets/logo 2.jpeg"
              width={160}
              height={50}
              alt="Caneless Logo"
              className="object-contain mb-6"
            />
            <p className="text-neutral-400 text-sm">
              Empowering independence through innovative assistive technology.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="text-sm text-neutral-400">
                <p>Email: <a href="mailto:info@caneless.example.com" className="text-white hover:text-gray-300">info@caneless.example.com</a></p>
                <p>Support: <a href="mailto:support@caneless.example.com" className="text-white hover:text-gray-300">support@caneless.example.com</a></p>
              </div>
              <div className="text-sm text-neutral-400">
                <p>Phone: <a href="tel:+15551234567" className="text-white hover:text-gray-300">+1 (555) 123-4567</a></p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Caneless. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
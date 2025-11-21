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
      <div className="relative aspect-4/3 w-full rounded-[2.5rem] overflow-hidden bg-[#fefef4] shadow-2xl flex items-center justify-center">
        <Image
          src={selectedProduct.src}
          alt={selectedProduct.name}
          width={600}
          height={600}
          className="object-contain w-[80%] h-[80%]"
        />
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
              className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
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
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover transform-gpu scale-125 md:scale-100' 
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

      <footer className="py-16 flex justify-center">
        <Image 
          src="/assets/logo png.jpeg" 
          width={120} 
          height={40} 
          alt="Caneless Logo"
          className="object-contain" 
        />
      </footer>
    </main>
  );
}
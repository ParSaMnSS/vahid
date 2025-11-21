import Image from "next/image";

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
        <section id="hero" className="h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="bg-black bg-opacity-60 p-10 rounded-lg">
            <h2 className="text-5xl font-extrabold mb-4">Caneless – Smart Vision</h2>
            <p className="text-xl mb-8">The future of mobility for the visually impaired.</p>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-300 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-6">About Caneless</h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Caneless is a revolutionary smart device designed to empower the visually impaired. By using a combination of advanced sensors and AI, Caneless provides real-time auditory feedback about the user's surroundings, making navigation safer and more intuitive than ever before.
            </p>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section id="showcase" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-12">Product Showcase</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-4">Advanced Obstacle Detection</h4>
                <p className="text-gray-400">Detects obstacles up to 10 meters away, including ground-level hazards and overhanging objects.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-4">AI-Powered Navigation</h4>
                <p className="text-gray-400">Utilizes AI to identify common objects and provide turn-by-turn navigation assistance.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-bold mb-4">Seamless Connectivity</h4>
                <p className="text-gray-400">Connects to your smartphone for personalized settings and software updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="demo" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-12">See Caneless in Action</h3>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
              {/* Placeholder for video */}
              <div className="bg-gray-800 w-full h-full flex items-center justify-center rounded-lg">
                <p className="text-gray-500">Video demo coming soon.</p>
              </div>
            </div>
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

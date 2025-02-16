import React from 'react';
import { Music, Video, Instagram, Twitter, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Dom-I-NATE</h1>
          <p className="text-xl md:text-2xl">Breaking Boundaries in Music</p>
        </div>
      </header>

      {/* Latest Release */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Latest Release</h2>
          <div className="aspect-w-16 aspect-h-9">
            <video 
              className="w-full rounded-lg shadow-2xl"
              controls
              poster="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
            >
              <source src="http://localhost:5000/videos/latest-release.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Featured Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((track) => (
              <div key={track} className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm">
                <Music className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Track {track}</h3>
                <p className="text-gray-300">Experience the latest hits that are dominating the charts.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-10 bg-black/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
          </div>
          <p className="text-center text-gray-400 mt-6">© 2024 Dom-I-NATE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
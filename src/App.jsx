import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased selection:bg-emerald-400/20 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

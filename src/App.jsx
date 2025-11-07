import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0a0b0f] py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Crafted with passion — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;

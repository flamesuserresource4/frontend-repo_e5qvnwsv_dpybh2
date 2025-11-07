import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased scroll-smooth">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0b0f] py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Built with care.
        </div>
      </footer>
    </div>
  );
};

export default App;

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Volume2, VolumeX } from 'lucide-react';
import CodeMatrix from './CodeMatrix';

const ambientSrc = 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_2e2e3b9fda.mp3?filename=ambient-6186.mp3';

const Hero = () => {
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const a = new Audio(ambientSrc);
    a.loop = true;
    a.volume = 0.18;
    audioRef.current = a;
    return () => {
      a.pause();
      a.src = '';
    };
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (soundOn) {
      a.play().catch(() => setSoundOn(false));
    } else {
      a.pause();
    }
  }, [soundOn]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0f] text-white">
      {/* Spline 3D Scene as full-width cover */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Matrix-style code rain overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <CodeMatrix opacity={0.12} color="#22c55e" />
      </div>

      {/* Subtle gradient overlays for depth (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.20),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-xs uppercase tracking-widest text-cyan-200/90">Minimal • Modern • Premium</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Elevate Ideas into Elegant Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          I craft minimalist, high-performance web interfaces with a futuristic aesthetic, smooth
          motion, and delightful interactivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:bg-cyan-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            Contact Me
          </a>

          {/* Ambient sound toggle */}
          <button
            type="button"
            onClick={() => setSoundOn((s) => !s)}
            className="ml-0 sm:ml-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            aria-pressed={soundOn}
            aria-label="Toggle ambient sound"
            title="Toggle ambient sound"
          >
            {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <span className="hidden sm:inline">Ambient</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

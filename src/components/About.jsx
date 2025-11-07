import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0b0f] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-10 md:flex-row md:items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <User className="h-4 w-4 text-cyan-300" />
            <span className="text-xs uppercase tracking-widest text-white/80">About Me</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-white/70">
            I’m a product-focused developer creating premium digital experiences. My craft blends
            minimal design, performance, and motion to deliver interfaces that feel effortless and
            memorable. I obsess over the details: typography, micro-interactions, and accessibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {["Responsive Design","Framer Motion","Design Systems"].map((t) => (
            <div key={t} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition hover:from-white/[0.1]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl transition-opacity group-hover:opacity-70" />
              <h3 className="text-base font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/60">
                Crisp layouts, smooth animations, and scalable components.
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

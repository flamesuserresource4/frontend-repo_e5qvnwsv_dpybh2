import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0b0f] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
        >
          Let’s Create Something Great
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2"
        >
          <input
            required
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50"
          />
          <textarea
            required
            placeholder="Tell me about your project..."
            rows={5}
            className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50"
          />
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-white/60">I typically reply within 24 hours.</p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Send Message
            </button>
          </div>
          {status && (
            <p className="sm:col-span-2 text-sm text-emerald-300/90">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

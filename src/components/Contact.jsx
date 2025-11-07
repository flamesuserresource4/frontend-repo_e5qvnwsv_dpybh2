import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const inputBase =
  'rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-400/50 focus:ring-0';

const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = 'Name is required';
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (values.message.trim().length < 10) e.message = 'Please provide more details';
    return e;
  }, [values]);

  const onBlur = (f) => setTouched((t) => ({ ...t, [f]: true }));
  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      setTouched({ name: true, email: true, message: true });
      return;
    }
    // Simulate async send
    setTimeout(() => setSent(true), 400);
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
          noValidate
        >
          <div className="sm:col-span-1">
            <input
              required
              type="text"
              name="name"
              value={values.name}
              onChange={onChange}
              onBlur={() => onBlur('name')}
              placeholder="Your name"
              aria-invalid={!!errors.name && touched.name}
              className={`${inputBase} ${errors.name && touched.name ? 'border-red-400/60' : ''}`}
            />
            <AnimatePresence>
              {errors.name && touched.name && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 flex items-center gap-1 text-xs text-red-300"
                >
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="sm:col-span-1">
            <input
              required
              type="email"
              name="email"
              value={values.email}
              onChange={onChange}
              onBlur={() => onBlur('email')}
              placeholder="Email address"
              aria-invalid={!!errors.email && touched.email}
              className={`${inputBase} ${errors.email && touched.email ? 'border-red-400/60' : ''}`}
            />
            <AnimatePresence>
              {errors.email && touched.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 flex items-center gap-1 text-xs text-red-300"
                >
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="sm:col-span-2">
            <textarea
              required
              name="message"
              value={values.message}
              onChange={onChange}
              onBlur={() => onBlur('message')}
              placeholder="Tell me about your project..."
              rows={5}
              aria-invalid={!!errors.message && touched.message}
              className={`${inputBase} ${errors.message && touched.message ? 'border-red-400/60' : ''} w-full`}
            />
            <AnimatePresence>
              {errors.message && touched.message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 flex items-center gap-1 text-xs text-red-300"
                >
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

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

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="sm:col-span-2 mt-2 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200"
                role="status"
              >
                <motion.span
                  initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </motion.span>
                <span>Thanks! Your message has been sent.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

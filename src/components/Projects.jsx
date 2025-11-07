import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Aura UI — Component Library',
    desc: 'A minimalist, accessible React component library with motion-first patterns.',
    tags: ['React', 'Tailwind', 'Motion'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Neon Labs — Landing Experience',
    desc: 'Dark, premium brand site with 3D accents and scroll choreography.',
    tags: ['Vite', 'Spline', 'GSAP'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Pulse Analytics — Dashboard',
    desc: 'High-density data UI with focus on clarity and performance.',
    tags: ['Next.js', 'Charts', 'UX'],
    github: 'https://github.com/',
    demo: '#',
  },
];

const MotionCard = ({ children, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, rotateX: -6, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
    viewport={{ once: false, margin: '-100px' }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 will-change-transform"
  >
    {/* sheen */}
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />
    {children}
  </motion.div>
);

const TiltWrap = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-50, Math.min(50, px / 3)));
    y.set(Math.max(-50, Math.min(50, py / 3)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ rotateX, rotateY }} onMouseMove={onMove} onMouseLeave={onLeave} className="[transform-style:preserve-3d]">
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0b0f] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
        >
          Featured Repositories
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <TiltWrap key={p.title}>
              <MotionCard i={i}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </MotionCard>
            </TiltWrap>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

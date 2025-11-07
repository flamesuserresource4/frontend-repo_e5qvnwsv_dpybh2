import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ title, description, tags, github, demo }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px / 4);
    y.set(py / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur will-change-transform"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-400/0 via-emerald-400/0 to-emerald-400/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/70 font-mono">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 font-mono">{t}</span>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors">
                <Github size={16} />
                Code
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-emerald-500 text-[#0a0b0f] px-3 py-1.5 text-sm font-semibold hover:bg-emerald-400 transition-colors">
                <ExternalLink size={16} />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const data = [
    {
      title: 'Realtime Particle Matrix',
      description: 'Shader-driven particle field with code-rain overlay and interactive camera.',
      tags: ['threejs', 'glsl', 'framer-motion'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'Spline + Web Audio',
      description: '3D UI blended with reactive audio analysis and radial visuals.',
      tags: ['spline', 'audio', 'react'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'Portfolio Engine',
      description: 'Composable sections with motion primitives and theme hooks.',
      tags: ['react', 'tailwind', 'ux'],
      github: 'https://github.com',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-white/70 font-mono">Animated cards highlighting GitHub and live demos</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

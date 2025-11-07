import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Figma } from 'lucide-react';

const skills = [
  { icon: Code, label: 'TypeScript & React', level: 'Expert' },
  { icon: Cpu, label: 'Node & APIs', level: 'Advanced' },
  { icon: Figma, label: 'Design Systems', level: 'Advanced' },
  { icon: Code, label: 'Tailwind & CSS', level: 'Expert' },
  { icon: Cpu, label: 'Performance', level: 'Advanced' },
  { icon: Figma, label: 'Prototyping', level: 'Advanced' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0a0b0f] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
        >
          Skills & Capabilities
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map(({ icon: Icon, label, level }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl group-hover:opacity-80" />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60">{level}</p>
                  <p className="text-base font-semibold text-white">{label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

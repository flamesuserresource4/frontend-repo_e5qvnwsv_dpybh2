import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0b0f]/70 px-4 py-2 backdrop-blur-md"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;

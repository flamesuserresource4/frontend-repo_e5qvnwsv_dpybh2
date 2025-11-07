import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(href);
    history.replaceState(null, '', href);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-4 flex items-center gap-1 rounded-full border border-white/10 bg-[#0a0b0f]/60 px-2 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        role="navigation"
        aria-label="Primary"
      >
        {links.map((l) => {
          const isActive = active === l.href;
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                />
              )}
              {l.label}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;

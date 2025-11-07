import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
          <p className="font-mono">© {new Date().getFullYear()} Matrix Portfolio · Built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Code2, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 px-4 py-2">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
              <Code2 size={18} />
            </span>
            <span className="font-semibold tracking-tight">Matrix Portfolio</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#projects" className="hover:text-emerald-300 transition-colors">Projects</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 hover:bg-white/10 transition-colors border border-white/10">
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

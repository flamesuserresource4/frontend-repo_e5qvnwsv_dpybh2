import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

// Simple matrix/code-like particle background rendered on a canvas
// Uses deterministic random movement to avoid heavy libs
const MatrixParticles = () => {
  const id = useMemo(() => `canvas-${Math.random().toString(36).slice(2)}`, []);

  React.useEffect(() => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let raf = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);

    const chars = '01<>/\\{}[]()#$%&*+=-'.split('');
    const cols = Math.floor(width / 14);
    const drops = new Array(cols).fill(0).map(() => Math.random() * height);

    function draw() {
      ctx.fillStyle = 'rgba(10,11,15,0.2)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = '14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[(Math.random() * chars.length) | 0];
        const x = i * 14;
        const y = drops[i] * 1.1;
        ctx.fillStyle = Math.random() > 0.98 ? 'rgba(52,211,153,0.9)' : 'rgba(16,185,129,0.8)';
        ctx.fillText(text, x, y);
        drops[i] = y > height ? 0 : y;
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, [id]);

  return <canvas id={id} className="absolute inset-0 w-full h-full" />;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Matrix particle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <MatrixParticles />
      </div>

      {/* Subtle vignette and radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/40 via-transparent to-[#0a0b0f]/80" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 size-[60vw] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-xs tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live • Building in public
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight font-[ui-sans-serif]">
            Crafting immersive, code-driven experiences
          </h1>
          <p className="mt-4 text-emerald-100/80 font-mono">
            3D interfaces, real-time visuals, and smooth micro-interactions. Monospace precision, modern elegance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-lg bg-emerald-500 text-[#0a0b0f] px-5 py-2.5 font-semibold hover:bg-emerald-400 transition-colors">View Projects</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 font-medium hover:bg-white/10 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

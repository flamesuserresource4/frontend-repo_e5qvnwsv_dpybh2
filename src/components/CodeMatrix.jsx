import React, { useEffect, useRef } from 'react';

// Lightweight Matrix-style code rain using canvas
// Subtle and performant: low density, alpha trails, capped FPS
const CodeMatrix = ({ opacity = 0.15, color = '#22c55e' }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const colsRef = useRef([]);
  const fontSizeRef = useRef(14);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const charset = '01<>/{}[]()*&^%$#@!~';

    const init = () => {
      const fontSize = Math.max(12, Math.min(18, Math.floor(window.innerWidth / 90)));
      fontSizeRef.current = fontSize;
      const columns = Math.floor(canvas.offsetWidth / fontSize);
      colsRef.current = new Array(columns).fill(0);
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
    };

    const draw = () => {
      const fontSize = fontSizeRef.current;
      // fade the canvas
      ctx.fillStyle = `rgba(10, 11, 15, ${Math.max(0.06, 1 - opacity)})`;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      colsRef.current.forEach((y, i) => {
        const text = charset.charAt(Math.floor(Math.random() * charset.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.offsetHeight && Math.random() > 0.975) {
          colsRef.current[i] = 0;
        } else {
          colsRef.current[i] = y + 1;
        }
      });
    };

    let last = 0;
    const fps = 30;
    const loop = (t) => {
      if (t - last > 1000 / fps) {
        draw();
        last = t;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      init();
    };

    init();
    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      aria-hidden
    />
  );
};

export default CodeMatrix;

import { useEffect, useRef } from 'react';

/**
 * ParticleField — canvas-based fluid organic glow animation (no dots or lines).
 * Displays slow-moving blurred spheres and an interactive mouse glow.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const easedMouse = useRef({ x: -9999, y: -9999 });
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, blobs;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = canvas.width  = rect.width || window.innerWidth;
      H = canvas.height = rect.height || window.innerHeight;
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function init() {
      // Create floating gradient blobs (large, slow-moving blurred spheres)
      // Warm orange (#FF914D) and soft amber (#FFA666)
      blobs = [
        {
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.15, 0.15), vy: rand(-0.15, 0.15),
          r: Math.max(W, H) * 0.45,
          color: 'rgba(255, 145, 77, 0.35)' // warm orange
        },
        {
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.12, 0.12), vy: rand(-0.12, 0.12),
          r: Math.max(W, H) * 0.38,
          color: 'rgba(255, 185, 110, 0.28)' // soft amber
        },
        {
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.1, 0.1), vy: rand(-0.1, 0.1),
          r: Math.max(W, H) * 0.32,
          color: 'rgba(255, 210, 150, 0.22)' // light amber
        },
        {
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.08, 0.08), vy: rand(-0.08, 0.08),
          r: Math.max(W, H) * 0.28,
          color: 'rgba(100, 110, 125, 0.08)' // subtle slate
        }
      ];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // 1. Draw floating gradient blobs
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        
        // Bounce off canvas boundaries smoothly
        if (b.x - b.r < 0 || b.x + b.r > W) b.vx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > H) b.vy *= -1;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw interactive mouse glow
      if (mouse.current.x !== -9999) {
        if (easedMouse.current.x === -9999) {
          easedMouse.current.x = mouse.current.x;
          easedMouse.current.y = mouse.current.y;
        } else {
          easedMouse.current.x += (mouse.current.x - easedMouse.current.x) * 0.08;
          easedMouse.current.y += (mouse.current.y - easedMouse.current.y) * 0.08;
        }

        const mouseGrad = ctx.createRadialGradient(
          easedMouse.current.x, easedMouse.current.y, 0,
          easedMouse.current.x, easedMouse.current.y, 300
        );
        mouseGrad.addColorStop(0, 'rgba(255, 145, 77, 0.22)');
        mouseGrad.addColorStop(0.5, 'rgba(255, 185, 110, 0.08)');
        mouseGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(easedMouse.current.x, easedMouse.current.y, 300, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
      easedMouse.current = { x: -9999, y: -9999 };
    }

    resize();
    init();
    draw();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 3,
        pointerEvents: 'none',
      }}
    />
  );
}

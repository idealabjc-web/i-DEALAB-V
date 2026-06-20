import { useEffect, useRef } from 'react';

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let rafId;
    let time = 0;

    const resize = () => {
      // Keep canvas resolution reasonable since we're blurring it massively anyway
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Define the color orbs that will act as the live wallpaper fluid
    // Using the site's brand colors: Amber, Signal Blue, Ink/Slate
    const orbs = [
      { radius: 0.8, color: 'rgba(255, 140, 66, 0.4)', speedX: 0.001, speedY: 0.0012, offsetX: 0, offsetY: 0 }, // Amber
      { radius: 0.9, color: 'rgba(136, 136, 136, 0.3)', speedX: 0.0008, speedY: 0.001, offsetX: Math.PI / 2, offsetY: Math.PI / 3 }, // Gray
      { radius: 0.7, color: 'rgba(0, 0, 0, 0.08)', speedX: 0.0012, speedY: 0.0009, offsetX: Math.PI, offsetY: Math.PI * 1.5 }, // Black/Slate
      { radius: 0.85, color: 'rgba(255, 140, 66, 0.3)', speedX: 0.0007, speedY: 0.0011, offsetX: Math.PI * 1.2, offsetY: Math.PI * 0.5 }, // Extra Amber
      { radius: 0.95, color: 'rgba(136, 136, 136, 0.2)', speedX: 0.0009, speedY: 0.0008, offsetX: Math.PI * 0.5, offsetY: Math.PI * 1.2 }, // Extra Gray
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      orbs.forEach(orb => {
        // Calculate smooth, looping position using Lissajous figures (sin/cos)
        const x = width / 2 + Math.sin(time * orb.speedX + orb.offsetX) * (width * 0.45);
        const y = height / 2 + Math.cos(time * orb.speedY + orb.offsetY) * (height * 0.45);
        const r = Math.max(width, height) * orb.radius;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 1;
      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      <canvas 
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          // Massive blur creates the ultra-smooth "liquid gradient / live wallpaper" look
          filter: 'blur(90px)',
          transform: 'scale(1.2)' // Scale up to hide unblurred edges
        }}
      />
    </div>
  );
}

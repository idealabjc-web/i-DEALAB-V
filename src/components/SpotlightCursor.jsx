import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   SpotlightCursor — 3-layer premium cursor
   Layer 1: tiny 5px dot — follows mouse EXACTLY (precision)
   Layer 2: 38px ring — lags behind with lerp (magnetic feel)
   Layer 3: 130px soft glow — drifts very slowly (atmosphere)

   On hover links/buttons:
   • ring EXPANDS (70px) + fills with orange tint
   • dot shrinks to 0
   • glow warms up

   On click:
   • ring PULSES outward then snaps back
   No dots. No trails. No shapes. Pure morphing ring.
───────────────────────────────────────────────────────────── */

export default function SpotlightCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    let mx = -200, my = -200;   // mouse position
    let rx = -200, ry = -200;   // ring position (lerp)
    let gx = -200, gy = -200;   // glow position (slower lerp)
    let isHovering = false;
    let isClicking = false;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    /* ── track mouse ── */
    const onMove = e => { mx = e.clientX; my = e.clientY; };

    /* ── click pulse ── */
    const onClick = () => {
      ring.classList.add('cursor-click');
      setTimeout(() => ring.classList.remove('cursor-click'), 380);
    };

    /* ── hover detection ── */
    const setHover = (state) => { isHovering = state; };
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, label').forEach(el => {
        el.addEventListener('mouseenter', () => setHover(true));
        el.addEventListener('mouseleave', () => setHover(false));
      });
    };
    addHoverListeners();
    /* re-run when DOM changes (SPA navigation) */
    const mo = new MutationObserver(addHoverListeners);
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    /* ── animation loop ── */
    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      gx = lerp(gx, mx, 0.06);
      gy = lerp(gy, my, 0.06);

      /* dot — exact */
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      /* ring — lagged */
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

      /* glow — very lagged */
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;

      /* hover states */
      if (isHovering) {
        ring.style.width  = '68px';
        ring.style.height = '68px';
        ring.style.background = 'rgba(255, 145, 77, 0.10)';
        ring.style.borderColor = 'rgba(255, 145, 77, 0.90)';
        ring.style.borderWidth = '1.5px';
        dot.style.opacity = '0';
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(0)`;
        glow.style.opacity = '0.18';
        glow.style.width  = '160px';
        glow.style.height = '160px';
      } else {
        ring.style.width  = '38px';
        ring.style.height = '38px';
        ring.style.background = 'transparent';
        ring.style.borderColor = 'rgba(255, 145, 77, 0.65)';
        ring.style.borderWidth = '1.5px';
        dot.style.opacity = '1';
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(1)`;
        glow.style.opacity = '0.10';
        glow.style.width  = '130px';
        glow.style.height = '130px';
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      mo.disconnect();
    };
  }, []);

  const base = {
    position: 'fixed',
    top: 0, left: 0,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99999,
    willChange: 'transform',
  };

  return (
    <>
      {/* Layer 3 — soft glow (slowest) */}
      <div ref={glowRef} style={{
        ...base,
        zIndex: 99997,
        width: 130, height: 130,
        background: 'radial-gradient(circle, rgba(255,145,77,0.28) 0%, transparent 70%)',
        filter: 'blur(12px)',
        opacity: 0.10,
        transition: 'width 0.5s ease, height 0.5s ease, opacity 0.4s ease',
      }} />

      {/* Layer 2 — ring (medium lag) */}
      <div ref={ringRef} style={{
        ...base,
        zIndex: 99998,
        width: 38, height: 38,
        border: '1.5px solid rgba(255,145,77,0.65)',
        background: 'transparent',
        transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
        mixBlendMode: 'multiply',
      }} />

      {/* Layer 1 — precise dot (instant) */}
      <div ref={dotRef} style={{
        ...base,
        zIndex: 99999,
        width: 5, height: 5,
        background: '#FF914D',
        boxShadow: '0 0 6px rgba(255,145,77,0.8)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }} />

      {/* Click pulse style */}
      <style>{`
        @media (pointer: fine) { * { cursor: none !important; } }
        .cursor-click {
          animation: cursorPulse 0.38s cubic-bezier(0.16,1,0.3,1) forwards !important;
        }
        @keyframes cursorPulse {
          0%   { transform: translate(var(--tx, 0), var(--ty, 0)) translate(-50%,-50%) scale(1); }
          40%  { transform: translate(var(--tx, 0), var(--ty, 0)) translate(-50%,-50%) scale(1.8); opacity: 0.4; }
          100% { transform: translate(var(--tx, 0), var(--ty, 0)) translate(-50%,-50%) scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}

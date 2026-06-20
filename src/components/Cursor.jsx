import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Cursor(){
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const curr = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      curr.current.x = lerp(curr.current.x, pos.current.x, 0.12);
      curr.current.y = lerp(curr.current.y, pos.current.y, 0.12);
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${curr.current.x - 16}px, ${curr.current.y - 16}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: 32, height: 32,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,145,77,0.6)',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
        transition: 'width 0.2s, height 0.2s, opacity 0.2s',
      }}
    />
  );
}

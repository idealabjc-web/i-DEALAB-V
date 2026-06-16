import { useEffect, useRef, useState } from 'react';

export default function Cursor(){
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if(isTouch) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e)=>{
      mx = e.clientX; my = e.clientY;
      if(!visible) setVisible(true);
      if(dotRef.current){
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const onOver = (e)=>{
      const target = e.target.closest('a, button, .platform-card, .team-card, input, .nav-toggle');
      setHovering(!!target);
    };

    let raf;
    const animateRing = ()=>{
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if(ringRef.current){
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return ()=>{
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  },[visible]);

  if(window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div className={`cursor-dot ${visible ? 'visible':''}`} ref={dotRef}></div>
      <div className={`cursor-ring ${visible ? 'visible':''} ${hovering ? 'hover':''}`} ref={ringRef}></div>
    </>
  );
}

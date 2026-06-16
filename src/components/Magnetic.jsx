import { useRef } from 'react';
import { motion } from 'framer-motion';

// Wraps children, applies a magnetic pull toward the cursor on hover
export default function Magnetic({ children, strength = 0.35, className = '', ...props }){
  const ref = useRef(null);

  const handleMove = (e)=>{
    const el = ref.current;
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width/2);
    const y = e.clientY - (rect.top + rect.height/2);
    el.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
  };

  const handleLeave = ()=>{
    if(ref.current) ref.current.style.transform = 'translate(0px,0px)';
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition:'transform 0.3s cubic-bezier(.33,1,.68,1)', display:'inline-block' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

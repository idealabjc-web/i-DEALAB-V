import { useEffect, useRef } from 'react';

export default function useReveal(){
  const ref = useRef(null);

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('visible');
      });
    },{threshold:0.15});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[]);

  return ref;
}

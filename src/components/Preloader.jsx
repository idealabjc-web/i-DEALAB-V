import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader(){
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false), 1400);
    return ()=>clearTimeout(t);
  },[]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            className="preloader-mark"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.65,0,0.35,1] }}
          >
            <span className="dot"></span> i-DEALAB
          </motion.div>
          <motion.div
            className="preloader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.65,0,0.35,1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

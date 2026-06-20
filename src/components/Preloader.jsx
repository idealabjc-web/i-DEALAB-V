import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="preloader">
          {/* Top wipe panel */}
          <motion.div
            className="preloader-top"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
          />
          {/* Bottom wipe panel */}
          <motion.div
            className="preloader-bot"
            initial={{ y: 0 }}
            exit={{ y: '100%', transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
          />

          {/* Logo mark */}
          <motion.div
            className="preloader-mark"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          >
            <motion.span
              className="dot"
              animate={{ boxShadow: ['0 0 12px #FF8C42', '0 0 32px #FF8C42', '0 0 12px #FF8C42'] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            i-DEALAB
          </motion.div>

          {/* Progress bar */}
          <div className="preloader-bar">
            <motion.div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, #FF8C42, #FFB347)',
                transformOrigin: 'left',
                boxShadow: '0 0 12px #FF8C42',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              position: 'relative', zIndex: 2,
            }}
          >
            Loading
          </motion.p>
        </div>
      )}
    </AnimatePresence>
  );
}

import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgress — thin amber line at the very top tracking scroll depth.
 * Only appears after scrolling past the hero.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.65,0,0.35,1] } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.4, ease: [0.65,0,0.35,1] } }
};

export default function PageTransition({ children }){
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

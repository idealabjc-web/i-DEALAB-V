import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 }
  }
};

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] }
  }
};

// Splits text into words, each wrapped for a mask-reveal effect
export default function SplitText({ text, className = '', delay = 0, as = 'span' }){
  const words = text.split(' ');
  const Tag = motion[as] || motion.span;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
      transition={{ delayChildren: delay }}
      style={{ display:'inline' }}
    >
      {words.map((w, i)=>(
        <span key={i} style={{ display:'inline-block', overflow:'hidden', verticalAlign:'top' }}>
          <motion.span variants={word} style={{ display:'inline-block' }}>
            {w}{i < words.length-1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

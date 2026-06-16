import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.65,0,0.35,1] } }
};

export default function About(){
  return (
    <>
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>About</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          About <span className="accent">i-DEALAB</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          A global knowledge-driven organization connecting minds, sparking innovation, and inspiring action.
        </motion.p>
      </section>

      <motion.div className="about-hero-img" initial={{opacity:0,scale:1.05}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:0.3}} transition={{duration:0.9,ease:[0.65,0,0.35,1]}}>
        <img src="https://static.wixstatic.com/media/f264b0_52655759174e41f2a9e277dc7474b3f2~mv2.jpg" alt="i-DEALAB team group photo" />
      </motion.div>

      <motion.div className="about-block" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.4}} variants={fadeUp}>
        <h2>About i-DEALAB</h2>
        <p>At i-DEALAB, we believe in the transformative power of ideas. Established over six years ago, we are a global knowledge-driven organization dedicated to building platforms that connect minds, spark innovation, and inspire action. Our mission is to facilitate meaningful conversations and showcase cutting-edge research, leadership, and creativity through our diverse initiatives.</p>
      </motion.div>

      <motion.div className="about-block" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.4}} variants={fadeUp}>
        <h2>iDIAS Global Conferences</h2>
        <p>Our flagship event series, iDIAS Global Conferences, spans continents and industries — bringing together scholars, industry leaders, innovators, and changemakers. These conferences are designed to foster dialogue, share insights, and build networks that transcend borders and disciplines. Whether virtual or in-person, each iDIAS event is a carefully curated experience that amplifies thought leadership and global collaboration.</p>
      </motion.div>

      <motion.div className="about-block" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.4}} variants={fadeUp}>
        <h2>PeerCite Journals</h2>
        <p>PeerCite Journals is our scholarly publishing division, committed to academic integrity and excellence. We provide a platform for researchers to publish peer-reviewed, impactful work across various fields. With a focus on accessibility, rigor, and global reach, PeerCite Journals support both early-career and established researchers in contributing to the global body of knowledge.</p>
      </motion.div>

      <motion.div className="about-block" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.4}} variants={fadeUp}>
        <h2>WINSPIRE Magazines</h2>
        <p>i-DEALAB publishes WINSPIRE Magazines, a global platform spotlighting innovation, leadership, and inspiring stories from changemakers around the world — bringing the work of our research and conference communities to a wider audience.</p>
      </motion.div>

      <motion.div className="vision-mission" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={fadeUp}>
        <motion.div className="vm-card" whileHover={{ y: -6 }}>
          <div className="section-eyebrow">Our Vision</div>
          <h3>A catalyst for connection</h3>
          <p>To be a global catalyst for knowledge, connection, and inspiration — bridging academia, industry, and society.</p>
        </motion.div>
        <motion.div className="vm-card" whileHover={{ y: -6 }}>
          <div className="section-eyebrow">Our Mission</div>
          <h3>Platforms for leading</h3>
          <p>To empower individuals and institutions by creating platforms for learning, sharing, and leading through world-class conferences, reputable journals, and inspiring publications.</p>
        </motion.div>
      </motion.div>
    </>
  );
}

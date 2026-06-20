import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const sections = [
  {
    id: 'about',
    heading: 'About i-DEALAB',
    body: 'At i-DEALAB, we believe in the transformative power of ideas. Established over six years ago, we are a global knowledge-driven organization dedicated to building platforms that connect minds, spark innovation, and inspire action. Our mission is to facilitate meaningful conversations and showcase cutting-edge research, leadership, and creativity through our diverse initiatives.',
  },
  {
    id: 'idias',
    heading: 'iDIAS Global Conferences',
    body: 'Our flagship event series, iDIAS Global Conferences, spans continents and industries — bringing together scholars, industry leaders, innovators, and changemakers. These conferences are designed to foster dialogue, share insights, and build networks that transcend borders and disciplines. Whether virtual or in-person, each iDIAS event is a carefully curated experience that amplifies thought leadership and global collaboration.',
  },
  {
    id: 'peercite',
    heading: 'PeerCite Journals',
    body: 'PeerCite Journals is our scholarly publishing division, committed to academic integrity and excellence. We provide a platform for researchers to publish peer-reviewed, impactful work across various fields. With a focus on accessibility, rigor, and global reach, PeerCite Journals support both early-career and established researchers in contributing to the global body of knowledge.',
  },
  {
    id: 'winspire',
    heading: 'WINSPIRE Magazines',
    body: 'i-DEALAB publishes WINSPIRE Magazines, a global platform spotlighting innovation, leadership, and inspiring stories from changemakers around the world — bringing the work of our research and conference communities to a wider audience.',
  },
];

export default function About() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          About
        </motion.div>
        <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}>
          About <span className="accent">i-DEALAB</span>
        </motion.h1>
        <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}>
          A global knowledge-driven organization connecting minds, sparking innovation, and inspiring action.
        </motion.p>
      </section>

      {/* ─── Hero image ─── */}
      <motion.div
        className="about-hero-img"
        initial={{ opacity:0, scale:1.04 }}
        whileInView={{ opacity:1, scale:1 }}
        viewport={{ once:true, amount:0.3 }}
        transition={{ duration:1, ease:[0.16,1,0.3,1] }}
      >
        <img
          src="https://static.wixstatic.com/media/f264b0_52655759174e41f2a9e277dc7474b3f2~mv2.jpg"
          alt="i-DEALAB team group photo"
          loading="lazy"
        />
      </motion.div>

      {/* ─── Timeline-style content blocks ─── */}
      {sections.map((s, i) => (
        <motion.div
          key={s.id}
          className="about-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.4 }}
          variants={fadeUp}
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          {/* decorative number */}
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.68rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--amber)',
            marginBottom: 20, opacity: 0.7,
          }}>
            {String(i + 1).padStart(2, '0')} / {['About', 'Conferences', 'Journals', 'Magazines'][i]}
          </div>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </motion.div>
      ))}

      {/* ─── Vision & Mission ─── */}
      <motion.div
        className="vision-mission"
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.25 }}
        variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.12 } } }}
      >
        {[
          {
            eyebrow: 'Our Vision',
            title: 'A catalyst for connection',
            body: 'To be a global catalyst for knowledge, connection, and inspiration — bridging academia, industry, and society.',
          },
          {
            eyebrow: 'Our Mission',
            title: 'Platforms for leading',
            body: 'To empower individuals and institutions by creating platforms for learning, sharing, and leading through world-class conferences, reputable journals, and inspiring publications.',
          },
        ].map(vm => (
          <motion.div
            key={vm.eyebrow}
            className="vm-card"
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            {/* Decorative ring */}
            <div style={{
              position: 'absolute', top: -30, right: -30,
              width: 120, height: 120, borderRadius: '50%',
              border: '1px solid var(--amber)', opacity: 0.08,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: -15, right: -15,
              width: 80, height: 80, borderRadius: '50%',
              border: '1px solid var(--amber)', opacity: 0.06,
              pointerEvents: 'none',
            }} />
            <div className="section-eyebrow">{vm.eyebrow}</div>
            <h3>{vm.title}</h3>
            <p>{vm.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

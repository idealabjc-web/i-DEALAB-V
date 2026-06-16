import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NetworkCanvas from '../components/NetworkCanvas';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';
import useReveal from '../hooks/useReveal';
import './Home.css';

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let cur = 0;
    const target = 6;
    const tick = () => {
      cur++;
      setCount(cur);
      if (cur < target) setTimeout(tick, 120);
    };
    const t = setTimeout(tick, 1600);
    return () => clearTimeout(t);
  }, []);
  return <>{count}</>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] }
  })
};

export default function Home() {
  const platformsRef = useReveal();
  const quoteRef = useReveal();
  const citeRef = useReveal();
  const teamHeadRef = useReveal();
  const teamGridRef = useReveal();

  return (
    <>
      <section className="hero">
        {/* Render the background image directly in the component to ensure it loads */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/images/hero-video-liquid.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {/* <span className="line"></span> Journals · Conferences · Magazines <span className="line"></span> */}
          </motion.div>

          {/* <h1>
            <SplitText text="Ideas, in" delay={1.7} as="span" />
            {' '}
            <SplitText text="motion." className="accent" delay={2.0} as="span" />
          </h1> */}

          <motion.p
            className="sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            {/* At i-DEALAB, we believe in the transformative power of ideas. Established over six years ago,
            we are a global knowledge-driven organization dedicated to building platforms that connect minds,
            spark innovation, and inspire action. Our mission is to facilitate meaningful conversations and
            showcase cutting-edge research, leadership, and creativity through our diverse initiatives. */}
          </motion.p>

          {/* <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          > */}
          {/* <div className="stat">
              <div className="num"><Counter /></div>
              <div className="label">Years of Experience</div>
            </div>
            <div className="stat">
              <div className="num">3</div>
              <div className="label">Global Platforms</div>
            </div>
            <div className="stat">
              <div className="num">★</div>
              <div className="label">Best Conference Organizer</div>
            </div> */}
          {/* </motion.div> */}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>
            PeerCite Journals <span className="sep">✦</span> i-DIAS Global Conferences <span className="sep">✦</span> WINSPIRE Magazines <span className="sep">✦</span> Best Conference Organizer <span className="sep">✦</span> 6 Years of Experience <span className="sep">✦</span>
          </span>
          <span>
            PeerCite Journals <span className="sep">✦</span> i-DIAS Global Conferences <span className="sep">✦</span> WINSPIRE Magazines <span className="sep">✦</span> Best Conference Organizer <span className="sep">✦</span> 6 Years of Experience <span className="sep">✦</span>
          </span>
        </div>
      </div>

      <section className="platforms" id="platforms">
        <div className="reveal section-head" ref={platformsRef}>
          <div>
            <div className="section-eyebrow">What we publish</div>
            <h2>Three platforms, <br />one network.</h2>
          </div>
          <p className="desc">Each platform stands on its own — yet every one exists to do the same thing: connect minds, spark conversation, and showcase what's next.</p>
        </div>
        <div className="platform-grid">
          {[
            {
              num: '01 / Research', tag: 'PeerCite Journals', title: 'Journals',
              desc: 'i-DEALAB publishes PeerCite Journals, a platform dedicated to high-quality, peer-reviewed research across diverse academic disciplines.',
              href: 'https://peercite.org/'
            },
            {
              num: '02 / Gatherings', tag: 'i-DIAS Global Conferences', title: 'Conferences',
              desc: 'i-DEALAB is a global conference organizer, leading the way with its signature series, i-DIAS Global Conferences — bringing thought leaders together from around the world.',
              href: 'https://idias.org/'
            },
            {
              num: '03 / Stories', tag: 'WINSPIRE Magazines', title: 'Magazines',
              desc: 'i-DEALAB publishes WINSPIRE Magazines, a global platform spotlighting innovation, leadership, and inspiring stories from around the world.',
              href: 'https://winspire.live/'
            },
          ].map((p, i) => (
            <motion.a
              className="platform-card"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="platform-num">{p.num}</div>
              <div className="platform-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p className="platform-desc">{p.desc}</p>
              <span className="platform-link">Read More <span className="arrow">→</span></span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <blockquote className="reveal" ref={quoteRef}>i-DEALAB challenges you, supports you, and helps you shine</blockquote>
        <cite className="reveal" ref={citeRef}>— Mahesh Jampana</cite>
      </section>

      <section id="team">
        <div className="reveal section-head" ref={teamHeadRef}>
          <div>
            <div className="section-eyebrow">Who we are</div>
            <h2>Team i-DEALAB</h2>
          </div>
          <p className="desc">A small, global team running every conversation, paper, and page that moves through the network.</p>
        </div>
        <div className="reveal team-grid" ref={teamGridRef}>
          <div className="team-card">
            <div className="avatar">SR</div>
            <div className="role">Calling Executive</div>
            <h3>Srinath Reddy. A</h3>
          </div>
          <div className="team-card">
            <div className="avatar">PA</div>
            <div className="role">Human Resources</div>
            <h3>Prathyusha Alluri</h3>
          </div>
          <div className="team-card">
            <div className="avatar">YR</div>
            <div className="role">Web Developer</div>
            <h3>Yaswanth Rudraraju</h3>
          </div>
        </div>
      </section>
    </>
  );
}

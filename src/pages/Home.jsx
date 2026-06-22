import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useReveal from '../hooks/useReveal';
import './Home.css';

/* ─── Animated counter ─── */
function Counter({ target = 6, delay = 1600, duration = 1200 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = null;
    let raf;
    const t = setTimeout(() => {
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [target, delay, duration]);
  return <>{count}</>;
}

/* ─── Platform card data ─── */
const platforms = [
  {
    num: '01', tag: 'Research', platform: 'PeerCite Journals', title: 'Journals',
    desc: 'i-DEALAB publishes PeerCite Journals, a platform dedicated to high-quality, peer-reviewed research across diverse academic disciplines.',
    href: 'https://peercite.org/',
    icon: '◎',
  },
  {
    num: '02', tag: 'Gatherings', platform: 'i-DIAS Global Conferences', title: 'Conferences',
    desc: 'i-DEALAB is a global conference organizer, leading the way with its signature series — bringing thought leaders together from around the world.',
    href: 'https://idias.org/',
    icon: '⬡',
  },
  {
    num: '03', tag: 'Stories', platform: 'WINSPIRE Magazines', title: 'Magazines',
    desc: 'i-DEALAB publishes WINSPIRE Magazines, a global platform spotlighting innovation, leadership, and inspiring stories from around the world.',
    href: 'https://winspire.live/',
    icon: '✦',
  },
];

/* ─── Quotes ─── */
const quotes = [
  { text: 'i-DEALAB challenges you, supports you, and helps you shine.', author: 'Mahesh Jampana' },
  { text: 'Ideas are the currency of the future — and i-DEALAB is where they circulate freely.', author: 'i-DEALAB Team' },
  { text: 'Every great conference begins with a single, compelling idea.', author: 'i-DIAS Community' },
  { text: 'Research without reach is incomplete. PeerCite bridges that gap.', author: 'PeerCite Team' },
];

/* ─── Team preview ─── */
const teamPreview = [
  { id: 1, initials: '', role: '', name: '' },
  { id: 2, initials: '', role: '', name: '' },
  { id: 3, initials: '', role: '', name: '' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }
  }),
};

export default function Home() {
  const platformsRef = useReveal();
  const quoteSectionRef = useReveal();
  const teamHeadRef = useReveal();
  const teamGridRef = useReveal();

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentQuote(q => (q + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, []);

  const handlePrev = () => setCurrentQuote(q => (q - 1 + quotes.length) % quotes.length);
  const handleNext = () => setCurrentQuote(q => (q + 1) % quotes.length);

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const resumeVideo = () => {
      const video = videoRef.current;
      if (!video || document.visibilityState !== 'visible') return;
      video.muted = true;
      const playback = video.play();
      if (playback) playback.catch(() => { });
    };

    document.addEventListener('visibilitychange', resumeVideo);
    window.addEventListener('pageshow', resumeVideo);
    window.addEventListener('focus', resumeVideo);
    resumeVideo();

    return () => {
      document.removeEventListener('visibilitychange', resumeVideo);
      window.removeEventListener('pageshow', resumeVideo);
      window.removeEventListener('focus', resumeVideo);
    };
  }, []);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        {/* Native background video: no YouTube or playback controls */}
        <div className={`hero-media ${videoLoaded ? 'loaded' : ''}`}>
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            onCanPlay={() => {
              setVideoLoaded(true);
              const playback = videoRef.current?.play();
              if (playback) playback.catch(() => { });
            }}
          >
            <source src="/videos/vizag-nature.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          {/* Company name */}
          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            i-DEALAB
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Journals And Conferences
          </motion.p>

          {/* Stats pill */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat">
              <div className="num"><Counter target={6} delay={400} />+</div>
              <div className="label">Years Active</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="num">3</div>
              <div className="label">Global Platforms</div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="num">★</div>
              <div className="label">Best Conference Organizer</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-cue">
          <div className="stick" />
          Scroll
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="marquee">
        <div className="marquee-track">
          {[1, 2].map(n => (
            <span key={n}>
              PeerCite Journals <span className="sep">✦</span>{' '}
              i-DIAS Global Conferences <span className="sep">✦</span>{' '}
              WINSPIRE Magazines <span className="sep">✦</span>{' '}
              Best Conference Organizer <span className="sep">✦</span>{' '}
              6 Years of Excellence <span className="sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════ PLATFORMS ═══════════ */}
      <section className="platforms" id="platforms">
        <div className="reveal section-head" ref={platformsRef}>
          <div>
            <div className="section-eyebrow">What we publish</div>
            <h2>Three platforms,<br />one network.</h2>
          </div>
          <p className="desc">
            Each platform stands on its own — yet every one exists to do the same
            thing: connect minds, spark conversation, and showcase what's next.
          </p>
        </div>

        <div className="platform-grid">
          {platforms.map((p, i) => (
            <motion.a
              key={p.title}
              className="platform-card"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="platform-num">{p.num}</div>
                <span className="platform-icon" style={{
                  fontSize: '2rem', color: 'var(--amber)', opacity: 0.3,
                  lineHeight: 1, transition: 'all 0.4s ease',
                }}>{p.icon}</span>
              </div>
              <div className="platform-tag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p className="platform-desc">{p.desc}</p>
              <span className="platform-link">
                Visit {p.platform.split(' ')[0]}
                <span className="arrow" aria-hidden>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ═══════════ QUOTE CAROUSEL ═══════════ */}
      <section className="quote-section reveal" ref={quoteSectionRef}>
        <div className="quote-slider-wrapper">
          <button className="slider-arrow left-arrow" onClick={handlePrev} aria-label="Previous quote">
            ‹
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="quote-slide"
            >
              <blockquote>{quotes[currentQuote].text}</blockquote>
              <cite>— {quotes[currentQuote].author}</cite>
            </motion.div>
          </AnimatePresence>

          <button className="slider-arrow right-arrow" onClick={handleNext} aria-label="Next quote">
            ›
          </button>

          <div className="slider-dots">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentQuote ? 'active' : ''}`}
                onClick={() => setCurrentQuote(idx)}
                aria-label={`Go to quote ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM PREVIEW ═══════════ */}
      <section id="team">
        <div className="reveal section-head" ref={teamHeadRef}>
          <div>
            <div className="section-eyebrow">Who we are</div>
            <h2>Team i-DEALAB</h2>
          </div>
          <p className="desc">
            A small, global team running every conversation, paper, and page
            that moves through the network.
          </p>
        </div>

        <div className="reveal team-grid" ref={teamGridRef}>
          {teamPreview.map((m, i) => (
            <motion.div
              key={m.id || i}
              className="team-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="avatar">{m.initials}</div>
              <div className="role">{m.role}</div>
              <h3>{m.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA STRIP ═══════════ */}
      <section style={{ paddingTop: 0, paddingBottom: 'var(--section-pad)' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: 'clamp(48px, 7vw, 80px) clamp(40px, 7vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 32,
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 80% at 50% -10%, rgba(255,140,66,0.1), transparent 70%)',
          }} />
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--amber)',
          }}>
            Join the network
          </p>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 300,
            fontSize: 'clamp(2rem, 5vw, 3.6rem)', lineHeight: 1.1,
            letterSpacing: '-0.025em', color: 'var(--text)', maxWidth: 700,
          }}>
            Ready to connect, publish, or collaborate?
          </h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--amber)', color: 'var(--bg)', border: 'none',
                fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '17px 44px', borderRadius: 100,
                boxShadow: '0 0 24px rgba(255,140,66,0.3)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://peercite.org/"
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '17px 44px', borderRadius: 100,
                transition: 'border-color 0.3s ease',
              }}
            >
              Submit Research
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';

const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

/* Simple inline SVG world map silhouette (stylised) */
function WorldMapPins() {
  return (
    <svg
      viewBox="0 0 800 420"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width:'100%', maxWidth:640, opacity:0.55 }}
      aria-hidden="true"
    >
      {/* Simplified continents as abstract shapes */}
      <g fill="none" stroke="rgba(255,140,66,0.18)" strokeWidth="0.8">
        {/* North America */}
        <path d="M60 80 Q100 60 160 80 Q200 100 190 150 Q170 190 130 210 Q90 220 70 190 Q40 160 60 80Z" />
        {/* South America */}
        <path d="M130 230 Q170 220 190 260 Q200 310 170 360 Q140 390 110 360 Q90 320 100 270 Q110 240 130 230Z" />
        {/* Europe */}
        <path d="M330 70 Q380 55 420 75 Q440 100 420 130 Q390 150 355 140 Q325 120 330 70Z" />
        {/* Africa */}
        <path d="M345 155 Q395 145 420 175 Q440 215 430 280 Q415 340 380 360 Q345 370 325 330 Q310 280 320 220 Q330 175 345 155Z" />
        {/* Asia */}
        <path d="M430 55 Q530 40 620 65 Q680 90 700 140 Q700 190 640 210 Q580 220 520 200 Q460 175 440 140 Q420 100 430 55Z" />
        {/* Australia */}
        <path d="M600 260 Q660 245 700 270 Q730 300 710 340 Q680 370 630 360 Q590 340 585 300 Q585 270 600 260Z" />
      </g>

      {/* Grid lines */}
      {[120, 240, 360].map(y => (
        <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,140,66,0.06)" strokeWidth="0.6" />
      ))}
      {[160, 320, 480, 640].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="rgba(255,140,66,0.06)" strokeWidth="0.6" />
      ))}

      {/* USA pin — Albany NY ~ x:130, y:105 */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
        style={{ transformOrigin: '130px 105px' }}
      >
        <circle cx="130" cy="105" r="5" fill="#FF8C42" />
        <circle cx="130" cy="105" r="10" fill="rgba(255,140,66,0.2)" />
        <motion.circle cx="130" cy="105" r="16" fill="none" stroke="#FF8C42" strokeWidth="0.8"
          animate={{ r:[10, 22], opacity:[0.6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut', delay: 0.2 }}
        />
        <text x="145" y="100" fill="#FF8C42" fontSize="10" fontFamily="monospace">USA</text>
      </motion.g>

      {/* India pin — Hyderabad ~ x:580, y:175 */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6, type: 'spring' }}
        style={{ transformOrigin: '580px 175px' }}
      >
        <circle cx="580" cy="175" r="5" fill="#FFB347" />
        <circle cx="580" cy="175" r="10" fill="rgba(255,179,71,0.2)" />
        <motion.circle cx="580" cy="175" r="16" fill="none" stroke="#FFB347" strokeWidth="0.8"
          animate={{ r:[10, 22], opacity:[0.6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut', delay: 0.8 }}
        />
        <text x="595" y="170" fill="#FFB347" fontSize="10" fontFamily="monospace">India</text>
      </motion.g>
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          Get in touch
        </motion.div>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
          Contact <span className="accent">us</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          Reach out to either of our offices, or connect with us on social media.
        </motion.p>
      </section>

      {/* ─── Main contact card ─── */}
      <section className="contact" id="contact">
        <motion.div
          className="section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.3 }}
          variants={fadeUp}
        >
          <div>
            <div className="section-eyebrow">Contact us</div>
            <h2>Let's talk</h2>
          </div>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.2 }}
          variants={fadeUp}
        >
          {/* Left — big links + social */}
          <div>
            <motion.a
              className="big-link"
              href="mailto:idealabjc@gmail.com"
              whileHover={{ x: 6 }}
              transition={{ type:'spring', stiffness:300, damping:20 }}
            >
              idealabjc@gmail.com
            </motion.a>
            <motion.a
              className="big-link"
              href="tel:+919063709344"
              whileHover={{ x: 6 }}
              transition={{ type:'spring', stiffness:300, damping:20 }}
            >
              +91 9063709344
            </motion.a>

            <div style={{ marginTop: 8, marginBottom: 40 }}>
              <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--amber)', marginBottom:16 }}>
                Connect
              </p>
              <div className="social-row">
                {[
                  { href:'https://www.linkedin.com/company/i-dealab/', label:'in', aria:'LinkedIn' },
                  { href:'https://www.facebook.com/profile.php?id=61555897764461', label:'fb', aria:'Facebook' },
                  { href:'https://twitter.com/', label:'x',  aria:'X / Twitter' },
                  { href:'https://instagram.com/', label:'ig', aria:'Instagram' },
                ].map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.aria}
                    whileHover={{ y:-4, scale:1.1 }}
                    transition={{ type:'spring', stiffness:300, damping:20 }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* World map */}
            <WorldMapPins />
          </div>

          {/* Right — offices */}
          <div className="contact-info">
            {[
              {
                label: 'USA Office',
                detail: 'Parklane West, Menands Albany,\nNew York 12204, United States of America',
                phone: { label:'+1 (716) 217-1471', href:'tel:+17162171471' },
              },
              {
                label: 'India Office',
                detail: "GVR's Pride, HIG-85A, KPHB 5th Phase,\nKukatpally, Hyderabad, Telangana 500072",
                phone: { label:'+91 9063709344', href:'tel:+919063709344' },
              },
            ].map((office, i) => (
              <motion.div
                key={office.label}
                className="contact-block glass-card"
                style={{ padding:'28px 32px' }}
                initial={{ opacity:0, x:20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true, amount:0.4 }}
                transition={{ duration:0.7, delay:i*0.12, ease:[0.16,1,0.3,1] }}
              >
                <div className="label">{office.label}</div>
                <p style={{ whiteSpace:'pre-line', marginBottom:12 }}>{office.detail}</p>
                <a href={office.phone.href} style={{ color:'var(--amber)', fontFamily:"'Space Mono',monospace", fontSize:'0.8rem' }}>
                  {office.phone.label}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Spacer */}
      <div style={{ height: 'var(--section-pad)' }} />
    </>
  );
}

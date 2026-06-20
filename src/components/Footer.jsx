import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-brand">
          <NavLink to="/" className="logo" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <img
              src="/images/iDEALAB Logo..png"
              alt="i-DEALAB"
              style={{ height: 44, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.parentElement.insertAdjacentHTML(
                  'afterend',
                  '<span style="font-family:Fraunces,serif;font-weight:700;font-size:1.3rem;color:var(--text)">i-DEALAB</span>'
                );
              }}
            />
          </NavLink>
          <p className="footer-tagline">
            A global knowledge-driven organization connecting minds, sparking innovation,
            and inspiring action across three world-class platforms.
          </p>

          {/* Social links */}
          <div className="social-row" style={{ marginTop: 28 }}>
            {[
              { href: 'https://www.linkedin.com/company/i-dealab/', label: 'in' },
              { href: 'https://www.facebook.com/profile.php?id=61555897764461', label: 'fb' },
              { href: 'https://twitter.com/', label: 'x' },
              { href: 'https://instagram.com/', label: 'ig' },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Platforms column */}
        <div className="footer-col">
          <div className="footer-col-title">Platforms</div>
          <ul>
            <li><a href="https://peercite.org/" target="_blank" rel="noreferrer">PeerCite Journals</a></li>
            <li><a href="https://idias.org/"    target="_blank" rel="noreferrer">i-DIAS Conferences</a></li>
            <li><a href="https://winspire.live/" target="_blank" rel="noreferrer">WINSPIRE Magazines</a></li>
          </ul>
        </div>

        {/* Company column */}
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/our-team">Our Team</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <div className="footer-col-title">Reach Us</div>
          <ul>
            <li><a href="mailto:idealabjc@gmail.com">idealabjc@gmail.com</a></li>
            <li><a href="tel:+919063709344">+91 9063709344</a></li>
            <li><a href="tel:+17162171471">+1 (716) 217-1471</a></li>
            <li style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Kukatpally, Hyderabad,<br />India — 500072
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 i-DEALAB. All Rights Reserved.</span>
        <span>
          Built with
          <span className="amber-dot" />
          for connecting minds.
        </span>
      </div>
    </footer>
  );
}

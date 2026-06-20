import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = useLocation().pathname === '/';

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { close(); }, []);

  return (
    <motion.header
      className={`${scrolled ? 'scrolled' : ''} ${isHome ? 'home-header' : ''}`.trim()}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <NavLink to="/" className="logo" onClick={close}>
        <img
          src="/images/iDEALAB Logo..png"
          alt="i-DEALAB"
          style={{ height: '48px', objectFit: 'contain' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      </NavLink>

      {/* Animated hamburger */}
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <nav aria-label="Main navigation">
        <ul className={open ? 'open' : ''}>
          {[
            { to: '/', label: 'Home', exact: true },
            { to: '/our-team', label: 'Our Team' },
            { href: 'https://peercite.org/', label: 'Journals' },
            { href: 'https://idias.org/', label: 'Conferences' },
            { href: 'https://winspire.live/', label: 'Magazines' },
            { to: '/careers', label: 'Careers' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item, i) =>
            item.href ? (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.3, duration: 0.5 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ) : (
              <li key={item.label} className={item.to === '/contact' ? 'nav-cta-wrapper' : ''}>
                <motion.span
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.3, duration: 0.5 }}
                  className={item.to === '/contact' ? 'nav-cta-span' : ''}
                >
                  <NavLink
                    to={item.to}
                    end={item.exact}
                    onClick={close}
                    className={({ isActive }) =>
                      item.to === '/contact'
                        ? `nav-cta ${isActive ? 'active' : ''}`
                        : isActive ? 'active' : ''
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.span>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile overlay backdrop */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(5,6,8,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
          }}
        />
      )}
    </motion.header>
  );
}

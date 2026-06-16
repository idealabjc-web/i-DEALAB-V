import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    >
      <NavLink to="/" className="logo" onClick={close}>
        <img src="/images/iDEALAB Logo..png" alt="i-DEALAB" style={{ height: '56px', objectFit: 'contain' }} />
      </NavLink>

      <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle navigation">
        {open ? '✕' : '☰'}
      </button>

      <nav>
        <ul className={open ? 'open' : ''}>
          <li><NavLink to="/" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/our-team" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Our Team</NavLink></li>
          <li><a href="https://peercite.org/" target="_blank" rel="noreferrer" onClick={close}>Journals</a></li>
          <li><a href="https://idias.org/" target="_blank" rel="noreferrer" onClick={close}>Conferences</a></li>
          <li><a href="https://winspire.live/" target="_blank" rel="noreferrer" onClick={close}>Magazines</a></li>
          <li><NavLink to="/careers" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Careers</NavLink></li>
          <li><NavLink to="/about" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </motion.header>
  );
}

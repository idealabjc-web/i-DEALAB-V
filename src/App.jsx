import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App(){
  const location = useLocation();

  return (
    <>
      <Preloader />
      <div className="grain"></div>
      <div className="ambient-glow"></div>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/our-team" element={<PageTransition><OurTeam /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

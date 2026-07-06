/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IAAgent from './components/IAAgent';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import TrainingPage from './pages/TrainingPage';
import CoNexusPage from './pages/CoNexusPage';
import DomoticaPage from './pages/DomoticaPage';
import ContactPage from './pages/ContactPage';
import CafeteriaPage from './pages/CafeteriaPage';
import NewsPage from './pages/NewsPage';
import FactorIAPage from './pages/FactorIAPage';
import IngeniaPage from './pages/IngeniaPage';
import AromaPage from './pages/AromaPage';
import SecretariadoMedicoPage from './pages/SecretariadoMedicoPage';

// Rutas secretas (sin nav): /ingenia, /aroma, /secretariado_medico
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-[#050505] grid-bg min-h-screen overflow-hidden selection:bg-violet-500 selection:text-white flex flex-col">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Main Layout */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<AboutPage />} />
            <Route path="/soluciones" element={<SolutionsPage />} />
            <Route path="/capacitaciones" element={<TrainingPage />} />
            <Route path="/co-nexus" element={<CoNexusPage />} />
            <Route path="/factor-ia" element={<FactorIAPage />} />
            <Route path="/cafeteria" element={<CafeteriaPage />} />
            <Route path="/domotica" element={<DomoticaPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/ingenia" element={<IngeniaPage />} />
            <Route path="/aroma" element={<AromaPage />} />
            <Route path="/secretariado_medico" element={<SecretariadoMedicoPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating AI Agent */}
        <IAAgent />

        {/* Global Background Particles/Noise simulation via CSS */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </div>
      </div>
    </Router>
  );
}

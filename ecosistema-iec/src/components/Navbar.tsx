import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl' 
          : 'py-6 bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center group z-50 mr-8"
        >
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-black text-lg md:text-xl xl:text-2xl tracking-tighter text-white uppercase whitespace-nowrap"
          >
            ECOSISTEMA <span className="text-cyan-400 font-black">IEC</span>
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-[10px] xl:text-[11px] uppercase tracking-wider font-bold transition-all relative group py-2 ${
                location.pathname === item.href ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <a
            href="https://wa.me/543434664964"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 rounded-xl bg-white text-black text-[10px] font-bold uppercase hover:bg-cyan-400 transition-all flex items-center gap-2 active:scale-95 shadow-xl shadow-white/5"
          >
            Consultoría <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 glass-dark backdrop-blur-3xl z-40"
          >
            <div className="h-full flex flex-col justify-center p-12 gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-display font-bold tracking-tighter ${
                      location.pathname === item.href ? 'text-cyan-400 underline underline-offset-8' : 'text-zinc-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-white/5"
              >
                <a 
                  href="https://wa.me/543434664964"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-block px-8 py-5 rounded-2xl bg-cyan-500 text-white text-center font-bold text-xl glow-cyan"
                >
                  Contactar por WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

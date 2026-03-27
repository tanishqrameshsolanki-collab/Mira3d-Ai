import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500" aria-label="Main Navigation">
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-7xl mt-4 px-4' : 'max-w-full'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/60 dark:bg-[#111111]/60 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-full px-8 py-3 shadow-sm' : 'px-10 py-6'}`}>
          <Link to="/" className="flex-shrink-0" aria-label="Mira3D Home">
            <img src="https://mira3dp.com/images/Mira3D%20white%203.png" alt="Mira3D Logo" className="w-[100px] md:w-[110px] dark:mix-blend-lighten mix-blend-difference" />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[13px] text-brand-text/80 hover:text-brand-text transition-colors font-medium tracking-tight"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              
              <AnimatePresence>
                {productsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-3xl p-3 rounded-3xl shadow-2xl border border-black/5 dark:border-white/5 flex flex-col gap-1"
                    role="menu"
                  >
                    <Link to="/mira-pro" className="px-5 py-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" role="menuitem">
                      <div className="text-brand-text font-semibold text-sm mb-0.5">Mira Pro</div>
                      <div className="text-[11px] text-brand-muted font-medium">Advanced build processing</div>
                    </Link>
                    <Link to="/mira-max" className="px-5 py-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" role="menuitem">
                      <div className="text-brand-text font-semibold text-sm mb-0.5">Mira Max</div>
                      <div className="text-[11px] text-brand-muted font-medium">Enterprise manufacturing</div>
                    </Link>
                    <div className="h-px bg-black/5 dark:bg-white/5 my-1 mx-3" role="separator"></div>
                    <Link to="/plugins" className="px-5 py-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group" role="menuitem">
                      <div className="text-brand-text font-semibold text-sm mb-0.5">Plugins</div>
                      <div className="text-[11px] text-brand-muted font-medium">Analyze & Akar extensions</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/resources" className="text-[13px] text-brand-text/80 hover:text-brand-text transition-colors font-medium tracking-tight">Resources</Link>
            <Link to="/about" className="text-[13px] text-brand-text/80 hover:text-brand-text transition-colors font-medium tracking-tight">About</Link>
            <Link to="/contact?inquiry=Career" className="text-[13px] text-brand-text/80 hover:text-brand-text transition-colors font-medium tracking-tight">Career</Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ThemeSwitcher />
            <Link to="/contact" className="bg-brand-text text-brand-bg text-[13px] font-medium px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-300">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <button 
              className="text-brand-text p-2" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full mt-4 bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-6 flex flex-col gap-6 shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="text-sm font-semibold text-brand-muted mb-2">Products</div>
            <Link to="/mira-pro" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors pl-4" onClick={() => setIsOpen(false)}>Mira Pro</Link>
            <Link to="/mira-max" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors pl-4" onClick={() => setIsOpen(false)}>Mira Max</Link>
            <Link to="/plugins" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors pl-4" onClick={() => setIsOpen(false)}>Plugins</Link>
          </div>
          <div className="h-px bg-border my-2" role="separator"></div>
          <Link to="/resources" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/about" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact?inquiry=Career" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors" onClick={() => setIsOpen(false)}>Career</Link>
          <Link to="/contact" className="text-lg font-medium text-foreground hover:text-brand-primary transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </motion.div>
      )}
    </nav>
  );
}

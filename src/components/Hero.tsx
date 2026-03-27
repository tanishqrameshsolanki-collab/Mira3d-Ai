import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

const keywords = ["3D Printing", "Investment Casting", "3D Inspection"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { openModal } = useDemoModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-brand-bg">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-luminosity">
          <source src="/file_21.mp4" type="video/mp4" />
          <source src="/jewelry-ring.mp4" type="video/mp4" />
        </video>
        {/* Ambient glow and vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-transparent to-brand-bg/80"></div>
        <div className="absolute inset-0 bg-brand-bg/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl w-full flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-[7.5rem] font-bold font-display tracking-[-0.04em] leading-[1.05] text-brand-text mb-8">
            Making <br className="hidden md:block" />
            <div className="relative inline-flex items-center justify-center py-2 my-2 md:mx-4">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(12px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center inline-block px-6 py-2 bg-brand-primary text-black dark:bg-transparent dark:text-brand-primary rounded-full shadow-sm dark:shadow-none"
                >
                  {keywords[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <br className="hidden md:block" />
            Easier.
          </h1>
          
          <p className="text-xl md:text-3xl text-brand-muted mb-12 max-w-3xl mx-auto font-medium tracking-tight leading-relaxed">
            Advanced software designed to simplify your workflow and improve manufacturing efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href="#products" className="w-full sm:w-auto bg-brand-text text-brand-bg text-lg font-medium rounded-full px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg">
              Get Started
            </a>
            <button onClick={openModal} className="w-full sm:w-auto text-brand-text text-lg font-medium flex items-center justify-center gap-3 group hover:opacity-70 transition-opacity duration-300">
              Watch the film
              <div className="w-10 h-10 rounded-full bg-brand-darkGray flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

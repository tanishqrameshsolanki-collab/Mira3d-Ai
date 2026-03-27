import { motion } from 'motion/react';
import { Monitor, Apple, Terminal } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section className="bg-background py-32 px-6 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#F5F5F7] dark:bg-[#111111] rounded-[48px] overflow-hidden shadow-sm dark:shadow-none border border-transparent dark:border-white/5 relative"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 dark:bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center p-12 md:p-24 relative z-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-bold font-display tracking-[-0.03em] text-brand-text mb-6 leading-[1.05]">
                Precision at your fingertips.
              </h2>
              <p className="text-xl md:text-2xl text-brand-muted font-medium mb-12 max-w-lg leading-relaxed">
                Download the industry-leading suite of 3D printing tools and elevate your manufacturing workflow today.
              </p>
              
              <div className="space-y-4">
                <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-black dark:bg-white text-white dark:text-black px-8 py-5 rounded-full hover:bg-[#1A1A1A] dark:hover:bg-gray-200 transition-colors duration-300 group shadow-lg">
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-white/60 dark:text-black/60 font-medium mb-1">Download for Windows</span>
                    <span className="text-xl font-bold tracking-tight group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">MIRApro</span>
                  </div>
                  <Monitor className="w-8 h-8 opacity-80" />
                </button>
                
                <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-white dark:bg-[#2C2C2E] text-brand-text px-8 py-5 rounded-full hover:bg-gray-50 dark:hover:bg-[#3A3A3C] transition-colors duration-300 group shadow-sm border border-black/5 dark:border-white/5">
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-brand-muted font-medium mb-1">Download for macOS</span>
                    <span className="text-xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">MIRAmax</span>
                  </div>
                  <Apple className="w-8 h-8 opacity-80" />
                </button>
                
                <button className="w-full sm:w-auto flex items-center justify-between gap-6 bg-white dark:bg-[#2C2C2E] text-brand-text px-8 py-5 rounded-full hover:bg-gray-50 dark:hover:bg-[#3A3A3C] transition-colors duration-300 group shadow-sm border border-black/5 dark:border-white/5">
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-brand-muted font-medium mb-1">Download for Linux</span>
                    <span className="text-xl font-bold tracking-tight group-hover:text-brand-primary transition-colors">MIRAanalyse</span>
                  </div>
                  <Terminal className="w-8 h-8 opacity-80" />
                </button>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              {/* Hyper-realistic 3D render placeholder - using a clean, high-fidelity image */}
              <img 
                src="https://mira3dp.com/images/productbangle.png" 
                alt="Perfectly Repaired Mesh" 
                className="w-[120%] max-w-none -ml-[10%] drop-shadow-2xl opacity-90 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

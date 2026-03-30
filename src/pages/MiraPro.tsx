import { motion } from 'motion/react';
import { ArrowRight, Cpu, Layers, Zap } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function MiraPro() {
  const { openModal } = useDemoModal();
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="flex justify-center mb-6">
            <img src="https://mira3dp.com/images/product_miraprowhite.png" alt="MIRApro Logo" className="h-16 md:h-24 object-contain filter brightness-0 dark:invert" />
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted font-medium leading-relaxed">
            The ultimate build processing software for professionals. Making complex 3D printing workflows easier than ever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border border-border p-4 md:p-8 rounded-[40px] relative overflow-hidden group aspect-square md:aspect-video"
          >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://mira3dp.com/images/productbangle.png"
                className="w-full h-full object-cover object-center rounded-[24px] relative z-10 border border-border mix-blend-screen"
              >
                <source src="/file_20.mp4" type="video/mp4" />
              </video>
            </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Printing made simple.</h2>
            <p className="text-lg text-brand-muted leading-relaxed font-medium">
              MIRApro is designed to make even the most demanding 3D printing workflows easier. With advanced algorithms and a streamlined interface, it turns complex models into perfect prints with minimal effort.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: "Lightning Fast Slicing", desc: "Multi-threaded processing for rapid results." },
                { icon: Layers, title: "Advanced Support Generation", desc: "Intelligent structures that save material and time." },
                { icon: Cpu, title: "Machine Learning Optimization", desc: "Predicts and corrects potential print failures." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-card border border-border text-brand-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-brand-muted text-sm font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button onClick={openModal} className="inline-flex items-center gap-2 bg-brand-primary text-black font-bold rounded-[20px] px-8 py-4 hover:bg-white transition-all mt-8 group shadow-[0_0_30px_rgba(255,215,0,0.2)]">
              Get MIRApro <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

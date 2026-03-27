import { motion } from 'motion/react';
import { ArrowRight, Maximize, Shield, Settings } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';

export default function MiraMax() {
  const { openModal } = useDemoModal();
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground mb-6">
            MIRA<span className="text-brand-primary">max</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted font-medium leading-relaxed">
            Enterprise-grade printing software. Making it easier to scale your production with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border border-border p-4 md:p-8 rounded-[40px] relative overflow-hidden group md:order-last aspect-square md:aspect-video"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="https://mira3dp.com/images/producteng%20(5).png"
              className="w-full h-full object-cover object-center rounded-[24px] relative z-10 border border-border mix-blend-screen"
            >
              <source src="/file_19.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:order-first"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Effortless scale.</h2>
            <p className="text-lg text-brand-muted leading-relaxed font-medium">
              MIRAmax makes it easier to manage high-volume production environments. It seamlessly integrates with your existing hardware, simplifying oversight and ensuring consistent quality at scale.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Maximize, title: "Fleet Management", desc: "Control hundreds of printers from a single dashboard." },
                { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption and role-based access control." },
                { icon: Settings, title: "Custom Workflows", desc: "Tailor the software to your unique manufacturing processes." }
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
              Contact Sales <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

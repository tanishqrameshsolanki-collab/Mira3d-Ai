import { motion } from 'motion/react';
import { ArrowRight, Activity, Eye, Database, BarChart3 } from 'lucide-react';

export default function Plugins() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground mb-6">
            Extend your <span className="text-brand-primary">Capabilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted font-medium leading-relaxed">
            Powerful plugins designed to integrate seamlessly with MIRApro and MIRAmax.
          </p>
        </motion.div>

        {/* Mira Analyze Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 md:p-12 rounded-[40px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="aspect-video bg-black border border-border rounded-[24px] flex items-center justify-center relative z-10 overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
              >
                <source src="/file_21.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="flex items-center mb-6">
              <img src="https://mira3dp.com/images/product_miranalysewhite.png" alt="MIRAanalyse Logo" className="h-12 md:h-16 object-contain filter brightness-0 dark:invert" />
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed font-medium">
              Deep dive into your printing data. MIRAanalyse provides comprehensive telemetry, failure prediction, and post-print analysis to continuously improve your yield.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-card border border-border p-6 rounded-[24px]">
                <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Real-time Metrics</h3>
                <p className="text-sm text-brand-muted font-medium">Monitor temperatures, speeds, and material usage live.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-[24px]">
                <Database className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Historical Data</h3>
                <p className="text-sm text-brand-muted font-medium">Compare current prints against past successes and failures.</p>
              </div>
            </div>
            
            <button className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 font-bold rounded-[20px] px-8 py-4 hover:bg-blue-500/20 transition-all mt-8 group">
              Learn more about MIRAanalyse <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Mira Akar Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border p-8 md:p-12 rounded-[40px] relative overflow-hidden group md:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="aspect-video bg-black border border-border rounded-[24px] flex items-center justify-center relative z-10 overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
              >
                <source src="/file_20.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:order-first"
          >
            <h2 className="flex items-center mb-6">
              <img src="https://mira3dp.com/images/ProductsMirakar.png" alt="MIRA Akar Logo" className="h-12 md:h-16 object-contain filter brightness-0 dark:invert" />
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed font-medium">
              Advanced machine vision integration. MIRAakar uses camera feeds to detect anomalies, verify layer adhesion, and automatically pause prints if a failure is imminent.
            </p>
            
            <ul className="space-y-4 text-brand-muted font-medium">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>Spaghetti detection and auto-pause</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>First layer inspection algorithms</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>Automated timelapse generation</span>
              </li>
            </ul>
            
            <button className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 font-bold rounded-[20px] px-8 py-4 hover:bg-purple-500/20 transition-all mt-8 group">
              Learn more about MIRAakar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </main>
  );
}

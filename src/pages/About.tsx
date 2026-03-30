import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const partnerLogos = [
  { name: "AJAX", src: "/logos/ajax.png" },
  { name: "Altair Consulting", src: "/logos/altair.png" },
  { name: "Arrdy", src: "/logos/arrdy.png" },
  { name: "Bluestone", src: "/logos/bluestone.png" },
  { name: "Caratlane", src: "/logos/caratane.png" },
  { name: "Cascade Star", src: "/logos/cascadstar.png" },
  { name: "Cindia", src: "/logos/cindia.png" },
  { name: "Maker.ai", src: "/logos/maker.png" },
  { name: "Octagon Precision", src: "/logos/octagon.png" },
  { name: "RRCAT", src: "/logos/rrcat.png" },
  { name: "Schraffur Studios", src: "/logos/schraffur_studios.webp" },
  { name: "Sculptoris Innovation", src: "/logos/sculptoris.png" },
  { name: "Sinterjet", src: "/logos/sinterjet.webp" },
  { name: "STPL", src: "/logos/stpl.png" },
  { name: "Tecumseh", src: "/logos/tecumseh.png" },
  { name: "Titan Company", src: "/logos/Titan_Company_Logo-1.webp" },
  { name: "Uni-Design", src: "/logos/uni.png" }
];

export default function About() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-brand-text mb-6">About <span className="text-brand-primary">Us</span></h1>
          <p className="text-xl text-brand-muted leading-relaxed font-medium">Headquartered in Mumbai, Samisan Tech Private Limited is a software development company specialized in Digital Manufacturing and Machine Vision applications. Our core product is the MIRA3D Build Processing Software suite. The product line includes MIRApro (for jewelry/ dental industry), MIRAmax (for manufacturing sector), & MIRAanalyse (for part inspection). We are a team of mathematicians and software developers who can also build custom software for your use case.</p>
        </motion.div>

        <div className="mb-32 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-text mb-16 tracking-tight">Our Product Line</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* MIRApro */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center md:justify-between w-full">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <img src="https://mira3dp.com/images/product_miraprowhite.png" alt="MIRApro" className="h-8 object-contain ml-auto mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">Launched in 2023</p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-primary -translate-x-1/2 z-10"></div>
                <div className="w-full pl-16 md:w-1/2 md:pl-12 md:hidden">
                  <img src="https://mira3dp.com/images/product_miraprowhite.png" alt="MIRApro" className="h-8 object-contain mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">Launched in 2023</p>
                </div>
              </motion.div>

              {/* MIRAmax */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center md:justify-between w-full">
                <div className="hidden md:block w-1/2 pr-12"></div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-primary -translate-x-1/2 z-10"></div>
                <div className="w-full pl-16 md:w-1/2 md:pl-12 text-left">
                  <img src="https://mira3dp.com/images/product_miramaxwhite.png" alt="MIRAmax" className="h-8 object-contain mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">Launched in 2023</p>
                </div>
              </motion.div>

              {/* MIRAanalyse */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center md:justify-between w-full">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <img src="https://mira3dp.com/images/product_miranalysewhite.png" alt="MIRAanalyse" className="h-8 object-contain ml-auto mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">Launched in 2024</p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-primary -translate-x-1/2 z-10"></div>
                <div className="w-full pl-16 md:w-1/2 md:pl-12 md:hidden">
                  <img src="https://mira3dp.com/images/product_miranalysewhite.png" alt="MIRAanalyse" className="h-8 object-contain mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">Launched in 2024</p>
                </div>
              </motion.div>

              {/* MIRAfinder */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center md:justify-between w-full">
                <div className="hidden md:block w-1/2 pr-12"></div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-primary -translate-x-1/2 z-10"></div>
                <div className="w-full pl-16 md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-2xl font-bold text-brand-text">MIRA<span className="text-brand-primary">finder</span></h3>
                  <p className="text-brand-muted text-sm italic">Launched in 2024</p>
                </div>
              </motion.div>

              {/* MIRAAkaar */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center md:justify-between w-full">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <img src="https://mira3dp.com/images/ProductsMirakar.png" alt="MIRA Akar" className="h-8 object-contain ml-auto mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">New Launch - 2025</p>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-primary -translate-x-1/2 z-10"></div>
                <div className="w-full pl-16 md:w-1/2 md:pl-12 md:hidden">
                  <img src="https://mira3dp.com/images/ProductsMirakar.png" alt="MIRA Akar" className="h-8 object-contain mb-2 filter brightness-0 dark:invert" />
                  <p className="text-brand-muted text-sm italic">New Launch - 2025</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { label: "Users", value: "600+" },
            { label: "Resellers", value: "30+" },
            { label: "Countries", value: "10+" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-brand-card border border-brand-border p-8 rounded-[40px] text-center">
              <div className="text-5xl font-mono font-bold text-brand-primary mb-2">{stat.value}</div>
              <div className="text-brand-muted font-medium uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-10 tracking-tight">Partnerships & Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* OEMs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-brand-card border border-brand-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-brand-text mb-4">OEMs</h3>
              <p className="text-brand-muted leading-relaxed font-medium">Hardware / Manufacturing Partners & Equipment Providers</p>
            </motion.div>

            {/* Ecosystem Partners */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-brand-card border border-brand-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-brand-text mb-4">Ecosystem Partners</h3>
              <p className="text-brand-muted leading-relaxed font-medium">Supply Chain / Component Partners, Material Collaborators</p>
            </motion.div>

            {/* Distributors */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-brand-card border border-brand-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-brand-text mb-4">Distributors</h3>
              <p className="text-brand-muted leading-relaxed font-medium">Solution Providers, Distribution Partners, Sales Channels</p>
            </motion.div>

            {/* Professionals */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-brand-card border border-brand-border p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-brand-text mb-4">Professionals</h3>
              <p className="text-brand-muted leading-relaxed font-medium">Industry Leaders, Academic Institutions, Technology Innovators</p>
            </motion.div>
          </div>

          {/* Logos Marquee */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="overflow-hidden relative w-full pt-12">
            {/* Gradient masks for smooth fade at edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee">
              {/* Duplicate the array to create a seamless infinite loop */}
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div key={i} className="flex items-center justify-center w-48 mx-8">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-32">
          <h2 className="text-4xl font-bold text-center text-brand-text mb-16 tracking-tight">Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-card border border-brand-border p-8 rounded-[40px] flex flex-col items-center text-center">
              <img src="https://mira3dp.com/images/mohit.png" alt="Mohit Kumar" className="w-40 h-40 rounded-full mb-6 object-cover border-2 border-brand-border" />
              <h3 className="text-2xl font-bold text-brand-text mb-1">Mohit Kumar</h3>
              <p className="text-brand-muted text-sm mb-4 font-medium">B.E. Mech., BITS Pilani '15<br/>Previous: Co-Founder, 3Dware</p>
              <ul className="text-brand-muted text-sm space-y-2 font-medium">
                <li>Built India's first TOP-DOWN DLP 3D Printer</li>
                <li>9+ Years of 3DP industry experience</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-brand-card border border-brand-border p-8 rounded-[40px] flex flex-col items-center text-center">
              <img src="https://mira3dp.com/images/jeet.png" alt="Dr. Jeet Desai" className="w-40 h-40 rounded-full mb-6 object-cover border-2 border-brand-border" />
              <h3 className="text-2xl font-bold text-brand-text mb-1">Dr. Jeet Desai</h3>
              <p className="text-brand-muted text-sm mb-4 font-medium">Ph.D in Applied Mathematics from UP, Paris<br/>B.E. Mech., BITS Pilani '17</p>
              <ul className="text-brand-muted text-sm space-y-2 font-medium">
                <li>Funded by Airbus, Renault, Safran & ESI</li>
                <li>Specializes in Computational Geometry & HPC</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-brand-text mb-16 tracking-tight">Other Services by Samisan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Design Optimization",
                description: "Engineering high-performance components using advanced lattice structures and conformal cooling designs-ideal for improving thermal efficiency and durability in demanding industrial applications."
              },
              {
                title: "Custom Software Development",
                description: "Developing custom software solutions on client-defined problem statements covering CAD automation, image processing, machine vision, robotics, and industrial IoT applications."
              },
              {
                title: "Engineering Consulting Services",
                description: "Offering retainership-based consulting to develop new products or systems-covering design, software development, and short-run manufacturing, with complete confidentiality and client-focused collaboration."
              },
              {
                title: "Additive Manufacturing Services",
                description: "Offering AM services (in metal and polymer) to assist in rapid product development through our vendor network—integrated with our in-house design optimization support."
              }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-brand-card border border-brand-border p-8 rounded-[40px] flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">{service.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-sm font-medium">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

import { motion } from 'motion/react';

const partners = [
  { name: "Partner 1", logo_url: "https://mira3dp.com/images/partner1.png" },
  { name: "Partner 2", logo_url: "https://mira3dp.com/images/partner2.png" },
  { name: "Partner 3", logo_url: "https://mira3dp.com/images/partner3.png" },
  { name: "Partner 4", logo_url: "https://mira3dp.com/images/partner4.png" }
];

export default function Partners() {
  return (
    <section className="py-20 px-6 bg-[#F5F5F7] dark:bg-[#111111] relative z-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-sm md:text-base font-semibold text-brand-muted uppercase tracking-widest mb-10">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {partners.map((partner, idx) => (
              <img 
                key={idx} 
                src={partner.logo_url} 
                alt={partner.name} 
                className="h-12 md:h-16 object-contain filter brightness-0 dark:invert opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "MIRApro",
    specialty: "Jewellery / Dental",
    description: "Build preparation software specialised for Jewellery / Dental.",
    logo: "https://mira3dp.com/images/product_miraprowhite.png",
    image: "https://mira3dp.com/images/productbangle.png",
    video: "/file_19.mp4",
    link: "/mira-pro"
  },
  {
    name: "MIRAmax",
    specialty: "Engineering",
    description: "Build preparation software specialised for Engineering.",
    logo: "https://mira3dp.com/images/product_miramaxwhite.png",
    image: "https://mira3dp.com/images/producteng%20(5).png",
    video: null,
    link: "/mira-max"
  },
  {
    name: "MIRAanalyse",
    specialty: "3D Inspection",
    description: "Scan to CAD matching software specialised for 3D Inspection.",
    logo: "https://mira3dp.com/images/product_miranalysewhite.png",
    image: null,
    video: null,
    link: "/plugins"
  },
  {
    name: "MIRA Akar",
    specialty: "Gold Weight Reduction",
    description: "Jewellery CAD QC software specialised for Gold Weight Reduction.",
    logo: "https://mira3dp.com/images/ProductsMirakar.png",
    image: null,
    video: null,
    link: "/plugins"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24
    }
  }
};

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-white dark:bg-black relative z-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <div className="text-sm font-semibold tracking-wide uppercase mb-4 text-brand-primary drop-shadow-sm dark:drop-shadow-none">Product Suite</div>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-[-0.03em] text-brand-text leading-[1.05]">
            Specialized Printing <br className="hidden md:block" />
            <span className="text-brand-primary glow-text">Tools.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-brand-muted max-w-2xl mx-auto font-medium leading-relaxed">
            A suite of powerful software tools that make build preparation and inspection easier than ever.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {products.map((product, idx) => {
            const isReversed = idx % 2 !== 0;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start w-full">
                  {product.logo ? (
                    <img src={product.logo} alt={`${product.name} Logo`} className="h-12 object-contain mb-8 filter brightness-0 dark:invert" />
                  ) : (
                    <h3 className="text-5xl md:text-6xl font-bold text-brand-text tracking-[-0.02em] font-display mb-6">{product.name}</h3>
                  )}
                  
                  <div className="text-sm font-semibold mb-4 text-brand-primary tracking-wide uppercase">{product.specialty}</div>
                  <p className="text-brand-muted text-xl leading-relaxed max-w-lg font-medium mb-10">{product.description}</p>
                  
                  <Link
                    to={product.link}
                    aria-label={`Learn more about ${product.name}`}
                    className="group flex items-center gap-3 text-lg font-semibold text-brand-text hover:text-brand-primary transition-colors duration-300"
                  >
                    Learn more
                    <div className="w-8 h-8 rounded-full bg-brand-darkGray flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </Link>
                </div>
                
                {/* Media Content */}
                <div className="flex-1 w-full">
                  <Link to={product.link} className="block group">
                    <div className="rounded-[40px] overflow-hidden bg-[#F5F5F7] dark:bg-[#111111] p-4 md:p-8 shadow-sm dark:shadow-none border border-transparent dark:border-white/5 relative aspect-[4/3] md:aspect-[16/10]">
                      <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black/5 dark:bg-black/40 relative">
                        {product.video ? (
                          <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            poster={product.image || undefined}
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                          >
                            <source src={product.video} type="video/mp4" />
                          </video>
                        ) : (
                          <img src={product.image!} alt={`Screenshot of ${product.name} interface`} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

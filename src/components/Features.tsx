import { motion } from 'motion/react';

const capabilities = [
  {
    title: "X-Ray Mode in Shell Repair",
    description: "Visually highlights internal mesh issues for precise manual and automatic shell repair workflows.",
    image: "https://mira3dp.com/images/XRAY1.webp"
  },
  {
    title: "Instant Thickness Analysis",
    description: "Real-time color map visualization of model thickness for manufacturability checks.",
    image: "https://mira3dp.com/images/ThicknessMap.webp"
  },
  {
    title: "DLP Support",
    description: "Adds FCC-based tree with defined branch length capturing all touch points.",
    image: "https://mira3dp.com/images/DLP_Support.webp"
  },
  {
    title: "3D Packing",
    description: "Nest parts with optimal permutation with a desired part-to-part gap and voxel size.",
    image: "https://mira3dp.com/images/3DPacking.webp"
  },
  {
    title: "OPF (Optimised Path Finding)",
    description: "Generates structurally efficient supports using shortest-path logic to reduce weight and post-processing.",
    image: "https://mira3dp.com/images/OPFCapabilities.webp"
  },
  {
    title: "Hex infill on non-planar surface",
    description: "Adds a hexagonal lattice infill inside a solid part by selecting multiple non planar surfaces.",
    image: "https://mira3dp.com/images/HexInfill.webp"
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

export default function Features() {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-[-0.03em] text-brand-text mb-6">
            Advanced tools. <br />
            <span className="text-brand-muted">Making printing easier.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {capabilities.map((cap, idx) => {
            // Create an asymmetrical layout:
            // Item 0: spans 2 columns
            // Item 1: spans 1 column
            // Item 2: spans 1 column
            // Item 3: spans 2 columns
            // Item 4: spans 2 columns
            // Item 5: spans 1 column
            const isLarge = idx === 0 || idx === 3 || idx === 4;
            
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`group relative bg-[#F5F5F7] dark:bg-[#111111] rounded-[40px] overflow-hidden flex flex-col shadow-sm dark:shadow-none border border-transparent dark:border-white/5 ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} ${isLarge ? 'h-[500px] md:h-[600px]' : 'h-[500px] md:h-[600px]'}`}
              >
                <div className={`p-10 md:p-12 relative z-10 flex flex-col ${isLarge ? 'md:w-1/2' : 'w-full'}`}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-brand-text tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-brand-muted text-[15px] md:text-base leading-relaxed font-medium">
                    {cap.description}
                  </p>
                </div>
                
                <div className={`relative flex-grow overflow-hidden px-6 pb-6 ${isLarge ? 'md:absolute md:inset-0 md:left-1/2 md:p-8 md:pl-0' : ''}`}>
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black/5 dark:bg-black/40 relative">
                    <img 
                      src={cap.image} 
                      alt={`Illustration of ${cap.title} feature`} 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]" 
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

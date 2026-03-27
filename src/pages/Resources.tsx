import { motion } from 'motion/react';

const videos = [
  { id: "CIJSjulmJCU", title: "MIRApro Demo 1" },
  { id: "63mgngxRwuk", title: "MIRApro Demo 2" },
  { id: "yoMrfeUyPE0", title: "MIRApro Demo 3" },
  { id: "n8Sp5KqgH50", title: "MIRApro Demo 4" },
  { id: "POcOYrS8NX4", title: "MIRAmax Demo 1" },
  { id: "hooJT1aZWOo", title: "MIRAmax Demo 2" },
  { id: "jg3JP_SxmLI", title: "MIRAanalyse Demo 1" },
  { id: "gFqLfVnyAxE", title: "MIRAanalyse Demo 2" },
  { id: "_ELVJcG9oEQ", title: "MIRAanalyse Demo 3" },
];

export default function Resources() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground mb-6">Resources & <span className="text-brand-primary">Tutorials</span></h1>
          <p className="text-xl text-brand-muted leading-relaxed font-medium">Learn how to get the most out of Mira3D software suite with our comprehensive video guides.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-[40px] overflow-hidden p-4 group hover:scale-[1.02] transition-transform duration-300">
              <div className="relative pb-[56.25%] h-0 rounded-[24px] overflow-hidden bg-background shadow-inner border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

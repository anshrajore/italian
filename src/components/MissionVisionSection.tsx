import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

export const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-warm-cream to-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-full bg-primary/20 mb-6">
                <Target className="w-12 h-12 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Mission
              </h3>

              <p className="text-xl text-foreground leading-relaxed">
                Making high-quality Italian comfort food accessible and affordable for everyone. 
                We believe great food shouldn't be a luxury—it should be an everyday joy that brings people together.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-full bg-secondary/20 mb-6">
                <Eye className="w-12 h-12 text-secondary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Our Vision
              </h3>

              <p className="text-xl text-foreground leading-relaxed">
                Becoming India's most loved Italian comfort-food QSR brand. 
                We envision a future where Italian Ecstasy is synonymous with quality, warmth, and unforgettable flavors across the nation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

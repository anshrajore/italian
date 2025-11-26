import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Award, Sparkles, Users, CheckCircle } from "lucide-react";

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Fast, Fresh & Consistent",
      description: "Quality you can count on, every single time",
    },
    {
      icon: Heart,
      title: "Authentic Flavours",
      description: "Italian recipes with an Indian twist",
    },
    {
      icon: Award,
      title: "Premium QSR Quality",
      description: "Restaurant excellence at value pricing",
    },
    {
      icon: Sparkles,
      title: "Endless Choices",
      description: "A menu that celebrates comfort food diversity",
    },
    {
      icon: Users,
      title: "Customer-First Service",
      description: "Your satisfaction is our priority",
    },
    {
      icon: CheckCircle,
      title: "Always Fresh",
      description: "Never compromised, always delicious",
    },
  ];

  return (
    <section className="section-padding bg-foreground text-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-6">
            Why Choose Italian Ecstasy
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto">
            We're not just serving food—we're creating moments of pure ecstasy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-card/10 backdrop-blur-sm p-8 rounded-2xl border border-cream/20 hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-cream mb-3">
                  {feature.title}
                </h3>

                <p className="text-cream/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

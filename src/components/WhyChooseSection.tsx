import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Leaf, Coffee, DollarSign, Package, CheckCircle, Heart, Users } from "lucide-react";

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Clock,
      title: "Fast, Fresh & Consistent",
      description: "High-quality ingredients, prepared quickly with perfect taste and freshness.",
    },
    {
      icon: Leaf,
      title: "Authentic with Indian Twist",
      description: "Classic Italian techniques tuned for Indian taste buds.",
    },
    {
      icon: Coffee,
      title: "Complete Italian Menu",
      description: "Pasta, mac n cheese, ravioli, lasagna, snacks, desserts & more.",
    },
    {
      icon: DollarSign,
      title: "Value-Priced Premium",
      description: "Restaurant-style flavours at pocket-friendly QSR pricing.",
    },
    {
      icon: Package,
      title: "Quick Dining & Delivery",
      description: "Portions & packaging optimized for speed and perfect delivery.",
    },
    {
      icon: CheckCircle,
      title: "Never Compromised",
      description: "Fresh produce, well-balanced sauces, consistent portioning.",
    },
    {
      icon: Heart,
      title: "Comfort for Every Mood",
      description: "Creamy, cheesy, spicy, tangy, crunchy — something for every craving.",
    },
    {
      icon: Users,
      title: "Customer-First Experience",
      description: "Every meal & interaction crafted to be smooth, enjoyable, memorable.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Why Choose <span className="text-primary italic">Italian Ecstasy</span>?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Eight reasons that make us Nashik's favourite Italian QSR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* Subtle gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChefHat, Clock, Sparkles, ArrowRight } from "lucide-react";

export const DailySpecialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRevealed, setIsRevealed] = useState(false);

  const dailySpecial = {
    name: "Truffle Mushroom Pasta",
    description: "Luxurious truffle-infused cream sauce with sautéed mushrooms, parmesan, and fresh herbs on your choice of pasta",
    originalPrice: "₹349",
    specialPrice: "₹249",
    discount: "30% OFF",
    availableUntil: "11:59 PM Today",
  };

  return (
    <section 
      className="section-padding bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--italian-red))/0.1] to-[hsl(var(--deep-black))] relative overflow-hidden" 
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cream/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: ["-10%", "110%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px hsl(355 70% 45% / 0.3)",
                "0 0 40px hsl(355 70% 45% / 0.5)",
                "0 0 20px hsl(355 70% 45% / 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-cream font-semibold text-sm tracking-wider uppercase">
              Limited Time Offer
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-6">
            Chef's Special of the Day
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto">
            Discover today's exclusive creation — crafted fresh, available today only
          </p>
        </motion.div>

        {/* Interactive Reveal Card */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20 backdrop-blur-lg relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full -ml-20 -mb-20" />

            {!isRevealed ? (
              <motion.div
                className="flex flex-col items-center justify-center min-h-[400px] text-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mb-8"
                >
                  <ChefHat className="w-24 h-24 text-primary" />
                </motion.div>

                <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  Something Special Awaits...
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                  Our chef has prepared an exclusive dish just for today. Click below to reveal the surprise!
                </p>

                <motion.button
                  onClick={() => setIsRevealed(true)}
                  className="group bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:bg-primary/90 shadow-lg hover:shadow-[var(--shadow-glow-red)] flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Reveal Today's Special</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      {dailySpecial.discount}
                    </motion.div>

                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                      {dailySpecial.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {dailySpecial.description}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {dailySpecial.specialPrice}
                      </span>
                      <span className="text-2xl text-muted-foreground line-through">
                        {dailySpecial.originalPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-8 justify-center md:justify-start">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">Available until: {dailySpecial.availableUntil}</span>
                    </div>

                    <motion.button
                      className="btn-hero"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>

                  <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 40px hsl(355 70% 45% / 0.4)",
                            "0 0 80px hsl(355 70% 45% / 0.6)",
                            "0 0 40px hsl(355 70% 45% / 0.4)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChefHat className="w-32 h-32 md:w-40 md:h-40 text-primary" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        NEW
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-cream/60 mt-8 text-sm italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          * Daily Special changes every day. Limited quantities available.
        </motion.p>
      </div>
    </section>
  );
};

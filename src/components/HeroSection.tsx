import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pasta.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Italian Pasta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-cream mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Where Comfort Meets Flavour
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-cream/90 mb-4 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Ecstasy in Every Bite
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-cream/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Nashik's most loved Italian comfort-food destination
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#menu" className="btn-hero">
            Explore Menu
          </a>
          <a href="#contact" className="btn-secondary-hero">
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-cream rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

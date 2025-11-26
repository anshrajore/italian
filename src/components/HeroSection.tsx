import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-pasta.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--italian-red))/0.3] to-[hsl(var(--italian-green))/0.2]" />
        <img
          src={heroImage}
          alt="Delicious Italian Pasta"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--deep-black))/0.4] to-[hsl(var(--deep-black))/0.9]" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cream/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Premium Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Premium Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-cream font-semibold text-sm tracking-wider uppercase">Premium Italian QSR</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-cream mb-8 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Where Comfort <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--italian-red))] to-[hsl(var(--italian-green))]">
            Meets Flavour
          </span>
        </motion.h1>

        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-2xl md:text-4xl lg:text-5xl text-cream/95 font-heading italic">
            Ecstasy in Every Bite
          </p>
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl text-cream/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Nashik's most loved Italian comfort-food destination — where authentic flavours meet modern innovation
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.a 
            href="#menu" 
            className="btn-hero group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Menu</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--italian-red))] to-[hsl(var(--primary))]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn-secondary-hero group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Visit Us</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--italian-green))] to-[hsl(var(--secondary))]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-12 border-2 border-cream/60 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              className="w-2 h-4 bg-cream rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        <span className="text-cream/60 text-sm font-light tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

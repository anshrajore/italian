import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "Boiling the pasta…",
    "Melting the cheese…",
    "Plating your ecstasy…",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.2;
        
        // Update text based on progress
        if (newProgress >= 33 && textIndex === 0) setTextIndex(1);
        if (newProgress >= 66 && textIndex === 1) setTextIndex(2);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return newProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete, textIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-cream"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, hsl(var(--deep-black)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Ingredients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: Math.random() * 360 + 360,
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {["🍝", "🧀", "🍅", "🌿"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <motion.div
            className="absolute inset-0 blur-3xl rounded-full"
            animate={{
              background: [
                "radial-gradient(circle, hsl(var(--italian-red) / 0.2) 0%, transparent 70%)",
                "radial-gradient(circle, hsl(var(--italian-green) / 0.2) 0%, transparent 70%)",
                "radial-gradient(circle, hsl(var(--italian-red) / 0.2) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <img
            src={logo}
            alt="Italian Ecstasy"
            className="w-64 md:w-80 h-auto relative z-10"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl font-heading text-deep-black/80 mb-12 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ecstasy in Every Bite
        </motion.p>

        {/* Animated Fork with Pasta Icon */}
        <motion.div
          className="mb-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <UtensilsCrossed className="w-12 h-12 text-primary" />
        </motion.div>

        {/* Cycling Loading Text */}
        <div className="h-8 mb-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              className="text-lg md:text-xl font-body text-deep-black/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-80 md:w-96 space-y-3">
          <div className="h-2 bg-deep-black/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-italian-green rounded-full relative"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <div className="flex justify-between items-center">
            <motion.span
              className="text-deep-black/60 text-sm font-body font-semibold"
              key={Math.floor(progress)}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress)}%
            </motion.span>
            <span className="text-deep-black/50 text-xs font-body tracking-widest uppercase">
              Loading Experience
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

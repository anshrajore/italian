import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChefHat, Sparkles, Flame } from "lucide-react";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  const stages = [
    { text: "Preparing fresh ingredients...", icon: ChefHat },
    { text: "Heating the perfect sauce...", icon: Flame },
    { text: "Adding the final touches...", icon: Sparkles },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.5;
        
        // Update stage based on progress
        if (newProgress >= 30 && stage === 0) setStage(1);
        if (newProgress >= 65 && stage === 1) setStage(2);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, stage]);

  const CurrentIcon = stages[stage].icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--italian-red))] to-[hsl(var(--italian-green))]"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(0 0% 10%), hsl(355 70% 45%), hsl(155 100% 27%))",
            "linear-gradient(225deg, hsl(0 0% 10%), hsl(355 70% 35%), hsl(155 100% 22%))",
            "linear-gradient(315deg, hsl(0 0% 10%), hsl(355 70% 45%), hsl(155 100% 27%))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cream/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Enhanced Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            rotate: 0,
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative mb-16"
        >
          {/* Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 40px 10px hsl(355 70% 45% / 0.3)",
                "0 0 80px 20px hsl(355 70% 45% / 0.5)",
                "0 0 40px 10px hsl(355 70% 45% / 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <motion.img
            src={logo}
            alt="Italian Ecstasy"
            className="w-72 md:w-[28rem] h-auto relative z-10"
            animate={{
              filter: [
                "drop-shadow(0 0 30px hsl(355 70% 45%))",
                "drop-shadow(0 0 60px hsl(355 70% 50%))",
                "drop-shadow(0 0 30px hsl(355 70% 45%))",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Loading Stage with Icon */}
        <motion.div
          className="flex flex-col items-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                animate={{ rotate: stage === 1 ? 360 : 0 }}
                transition={{ duration: 2, repeat: stage === 1 ? Infinity : 0 }}
              >
                <CurrentIcon className="w-8 h-8 text-cream" />
              </motion.div>
              <p className="text-cream text-xl md:text-3xl font-heading">
                {stages[stage].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar Container */}
          <div className="w-80 md:w-96 space-y-3">
            {/* Progress Bar */}
            <div className="h-2 bg-cream/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-cream to-secondary rounded-full relative"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>

            {/* Progress Percentage */}
            <div className="flex justify-between items-center">
              <motion.span 
                className="text-cream/80 text-sm font-body"
                key={Math.floor(progress)}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
              >
                {Math.floor(progress)}%
              </motion.span>
              <span className="text-cream/60 text-sm font-body tracking-wider">
                LOADING ECSTASY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-cream/70 text-lg md:text-xl font-heading italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Preparing your Italian experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

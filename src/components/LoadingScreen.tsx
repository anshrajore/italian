import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[hsl(var(--deep-black))] via-[hsl(var(--italian-red))] to-[hsl(var(--italian-green))]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.img
          src={logo}
          alt="Italian Ecstasy"
          className="w-64 md:w-96 h-auto"
          animate={{
            filter: [
              "drop-shadow(0 0 20px hsl(355 70% 45%))",
              "drop-shadow(0 0 40px hsl(355 70% 45%))",
              "drop-shadow(0 0 20px hsl(355 70% 45%))",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-cream text-xl md:text-2xl font-heading mb-4">
          Cooking Up Ecstasy...
        </p>
        <div className="w-64 h-1 bg-cream/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cream rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

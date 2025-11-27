import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroDesktop from "@/assets/welcome.png";
import heroMobile from "@/assets/welcome2.png";

export const HeroImageSection = () => {
  const handleScroll = () => {
    const target = document.getElementById("story");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen pt-4 pb-8 md:pt-0 md:pb-0 overflow-hidden">
      <div className="relative min-h-[80vh] md:min-h-[100vh] rounded-[32px] md:rounded-none overflow-hidden mx-3 md:mx-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <picture>
            <source srcSet={heroMobile} media="(max-width: 768px)" />
            <img
              src={heroDesktop}
              alt="Italian Ecstasy hero spread"
              className="w-full h-full object-cover object-[center_60%] md:object-center"
            />
          </picture>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30" />

        <motion.button
          type="button"
          onClick={handleScroll}
          className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 focus:outline-none text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-[12px] uppercase tracking-[0.6em]">Scroll</span>
          <div className="w-[2px] h-10 bg-white/70 relative overflow-hidden rounded-full">
            <motion.span
              className="absolute top-0 left-0 w-full h-3 bg-white"
              animate={{ y: ["0%", "120%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ChevronDown className="w-5 h-5" strokeWidth={1.2} />
        </motion.button>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};


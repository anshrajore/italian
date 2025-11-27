import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Desktop & mobile hero images
import heroBannerDesktop from "@/assets/hero-banner.png";
import heroMobile from "@/assets/Untitleddesign-7.png";

export const HeroImageSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-0">
      <div className="relative min-h-[90vh] md:min-h-[110vh]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Browser automatically picks correct image based on screen width */}
          <picture className="block w-full h-full">
            {/* Mobile image for <= 900px */}
            <source srcSet={heroMobile} media="(max-width: 900px)" />
            {/* Desktop fallback */}
            <img
              src={heroBannerDesktop}
              alt="Italian Ecstasy welcome spread"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </motion.div>

        {/* Dark gradient overlay for better text contrast if you add text later */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />

        {/* Scroll down button */}
        <motion.button
          type="button"
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/90 focus:outline-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-[11px] uppercase tracking-[0.6em] mb-4 text-white/80">
            Scroll
          </span>
          <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-6 h-6" strokeWidth={1.4} />
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Fade into page background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

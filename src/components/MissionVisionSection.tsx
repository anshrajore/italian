import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket, Heart, Star, Zap, MapPin, Calendar, Clock } from "lucide-react";

export const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brandPillars = [
    { name: "Comfort", icon: Heart },
    { name: "Quality", icon: Star },
    { name: "Convenience", icon: Zap },
  ];

  const softCream = "#fdf7f0";
  const warmBeige = "#f4eadc";
  const deepRed = "#7c1d12";
  const luxeGold = "#c08f44";
  const charcoal = "#2b2b2b";
  const mutedCharcoal = "#4a4a4a";

  return (
    <section 
      className="relative overflow-hidden flex items-center"
      style={{
        background: `linear-gradient(135deg, ${softCream} 0%, ${warmBeige} 100%)`,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      ref={ref}
    >
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Top Meta Row */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              color: deepRed,
              border: `1px solid ${luxeGold}`,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            Our Purpose
          </span>

          <h2
            className="text-5xl md:text-6xl font-heading font-bold mb-3"
            style={{ color: charcoal }}
          >
            Mission & Vision
          </h2>

          <p className="text-lg md:text-xl" style={{ color: mutedCharcoal }}>
            The heart behind every bowl we serve.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 mb-16">
          {/* Left column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3
                className="text-4xl md:text-5xl font-heading font-bold leading-tight"
                style={{ color: charcoal }}
              >
                Comfort food, crafted for every Indian mood.
              </h3>

              <motion.div
                className="h-1 rounded-full"
                style={{ background: luxeGold, opacity: 0.8 }}
                initial={{ width: 0 }}
                animate={isInView ? { width: "60%" } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              />

              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: `1px solid ${luxeGold}33`,
                    color: mutedCharcoal,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Calendar className="w-4 h-4" style={{ color: deepRed }} />
                  Since 2020
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: `1px solid ${luxeGold}33`,
                    color: mutedCharcoal,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Clock className="w-4 h-4" style={{ color: luxeGold }} />
                  Quick-Service Italian
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: `1px solid ${luxeGold}33`,
                    color: mutedCharcoal,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <MapPin className="w-4 h-4" style={{ color: deepRed }} />
                  Nashik → India
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className="p-6 md:p-8 rounded-[28px] shadow-xl relative overflow-hidden"
                style={{
                  backgroundColor: "#fffdf9",
                  border: `1px solid ${luxeGold}33`,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[28px]"
                  style={{ backgroundColor: deepRed }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${deepRed}15` }}
                  >
                    <Target className="w-5 h-5" style={{ color: deepRed }} />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-[0.35em]"
                    style={{ color: deepRed }}
                  >
                    OUR MISSION
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-heading font-bold mb-4"
                  style={{ color: charcoal }}
                >
                  Accessible Italian Comfort for Everyone
                </h3>

                <p className="text-base md:text-lg leading-relaxed" style={{ color: mutedCharcoal }}>
                  Making high-quality Italian comfort food accessible and affordable for everyone. We believe great food shouldn't be a luxury—it should be an everyday joy that brings people together.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div
                className="p-6 md:p-8 rounded-[28px] shadow-xl relative overflow-hidden"
                style={{
                  backgroundColor: "#fffdf9",
                  border: `1px solid ${luxeGold}33`,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: luxeGold }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${luxeGold}1A` }}
                  >
                    <Rocket className="w-5 h-5" style={{ color: luxeGold }} />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-[0.35em]"
                    style={{ color: luxeGold }}
                  >
                    OUR VISION
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-heading font-bold mb-4"
                  style={{ color: charcoal }}
                >
                  India&apos;s Most Loved Italian Comfort-Food QSR
                </h3>

                <p className="text-base md:text-lg leading-relaxed" style={{ color: mutedCharcoal }}>
                  Becoming India&apos;s most loved Italian comfort-food QSR brand. We envision a future where Italian Ecstasy is synonymous with quality, warmth, and unforgettable flavors across the nation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Pillars */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {brandPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.name}
                className="flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold"
                style={{
                  backgroundColor: "rgba(255,255,255,0.85)",
                  border: `1px solid ${luxeGold}`,
                  color: charcoal,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 18px 38px rgba(0,0,0,0.12)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: luxeGold }} />
                {pillar.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import foodTruck from "@/assets/food-truck.jpg";
import timeline from "@/assets/timeline.jpg";
import interior from "@/assets/interior.jpg";

export const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2020",
      title: "The First Bite",
      subtitle: "Italian Embassy On Wheels!",
      description:
        "It all started with a passion for pasta and a trusty food truck. In the bustling streets of Nashik, Italian Ecstasy took its first delicious steps in 2020, serving up different pasta dishes and authentic flavors that quickly became local favorites.",
      image: foodTruck,
    },
    {
      year: "2021",
      title: "A Home for Our Flavors",
      subtitle: "The First Brick-and-Mortar",
      description:
        "The buzz from our food truck grew, and soon, we knew it was time to put down roots. In 2021, we proudly opened the doors to our very first small, humble café near Nirmala Convent School. This cozy space not only allowed us to expand our delicious menu but also significantly boosted our online food delivery presence.",
      image: timeline,
    },
    {
      year: "Today",
      title: "A Culinary Destination",
      subtitle: "Our Latest Chapter!",
      description:
        "Today, we celebrate years of growth, learning, and countless delicious moments. Our newest location at College Road stands as a symbol of our journey—a place where innovation meets timeless favorites, and where every guest feels like family.",
      image: interior,
    },
  ];

  return (
    <section id="story" className="section-padding bg-gradient-to-b from-background to-warm-cream" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-heading italic">
            "From a small food truck to a city favourite — powered by the love of Nashikkars."
          </p>
        </motion.div>

        <div className="space-y-32">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="inline-block">
                  <span className="text-6xl md:text-8xl font-heading font-bold text-primary/20">
                    {milestone.year}
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                  {milestone.title}
                </h3>

                <p className="text-xl md:text-2xl font-heading italic text-primary">
                  {milestone.subtitle}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center bg-card p-8 md:p-12 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-heading italic text-foreground">
            "This would not be possible without the incredible love we received from our fellow Nashikkars."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import pasta1 from "@/assets/pasta-1.jpg";
import pasta2 from "@/assets/pasta-2.jpg";
import pasta3 from "@/assets/pasta-3.jpg";

export const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("bestsellers");

  const categories = [
    { id: "bestsellers", name: "Best Sellers" },
    { id: "pasta", name: "Classic Pastas" },
    { id: "mac", name: "Mac & Cheese" },
    { id: "fusion", name: "Fusion Pasta" },
  ];

  const menuItems = {
    bestsellers: [
      {
        name: "Peri Peri Pasta",
        description: "Creamy yet spicy in house peri peri sauce with crunchy veggies in pasta of your choice",
        price: "₹279",
        image: pasta1,
        badge: "Popular",
      },
      {
        name: "4 Cheese Spaghetti",
        description: "Spaghetti in velvety rich 4 cheese sauce for that ultimate comfort dish",
        price: "₹299",
        image: pasta2,
        badge: "Chef's Special",
      },
      {
        name: "Mix Vegetable Lasagna",
        description: "Layered dish consisting layers of pasta sheet filling & cheese",
        price: "₹279",
        image: pasta3,
        badge: "Trending",
      },
    ],
  };

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Crafted fresh. Served fast. Loved forever.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <motion.div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#contact" className="btn-hero">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

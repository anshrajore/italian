import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Flame, LeafyGreen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedItems, categories } from "@/data/menuData";
import type { MenuItem } from "@/data/menuData";

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden flex flex-col border border-stone-200/90 shadow-lg shadow-stone-200/40 hover:shadow-xl hover:shadow-stone-300/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.6), duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {item.image && (
        <div className="relative h-52 overflow-hidden bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
            {item.isBestseller && (
              <span className="bg-white/95 backdrop-blur-sm text-stone-800 px-2.5 py-1 rounded-full font-semibold text-xs flex items-center gap-1 shadow-sm border border-stone-200/80">
                <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                Bestseller
              </span>
            )}
            {item.spicyLevel && item.spicyLevel > 0 && (
              <span className="bg-white/95 backdrop-blur-sm text-red-600 px-2.5 py-1 rounded-full font-semibold text-xs flex items-center gap-1 shadow-sm border border-red-200/80">
                {[...Array(item.spicyLevel)].map((_, i) => (
                  <Flame key={i} className="w-3 h-3 fill-current" />
                ))}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
          Must Try
        </span>
        <h3 className="text-lg font-heading font-bold text-stone-800 mb-1.5 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-stone-500 leading-snug line-clamp-2 min-h-[2.25rem] mb-4">
          {item.description}
        </p>

        <div className="mt-auto pt-4 border-t border-stone-200/80 space-y-3">
          {item.vegPrice || item.nonVegPrice ? (
            <div className="flex items-center gap-3">
              {item.vegPrice && (
                <div className="flex-1 rounded-lg bg-green-50 border border-green-200/60 px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-2.5 h-2.5 border-2 border-green-600 rounded-sm" />
                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Veg</span>
                  </div>
                  <span className="text-base font-bold text-green-800">{item.vegPrice}</span>
                </div>
              )}
              {item.nonVegPrice && (
                <div className="flex-1 rounded-lg bg-red-50 border border-red-200/60 px-3 py-2 text-right">
                  <div className="flex items-center justify-end gap-1.5 mb-0.5">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider">Non Veg</span>
                    <div className="w-2.5 h-2.5 border-2 border-red-600 rounded-sm flex items-center justify-center">
                      <div className="w-1 h-1 bg-red-600 rounded-full" />
                    </div>
                  </div>
                  <span className="text-base font-bold text-red-800">{item.nonVegPrice}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg bg-stone-100 border border-stone-200/60 px-3 py-2">
              {(item.isVegOnly || item.isNonVegOnly) && (
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className={`w-2.5 h-2.5 border-2 ${item.isVegOnly ? "border-green-600" : "border-red-600"} rounded-sm ${!item.isVegOnly && "flex items-center justify-center"}`}>
                    {!item.isVegOnly && <div className="w-1 h-1 bg-red-600 rounded-full" />}
                  </div>
                  <span className={`text-[10px] font-bold ${item.isVegOnly ? "text-green-700" : "text-red-700"} uppercase tracking-wider`}>
                    {item.isVegOnly ? "Veg" : "Non Veg"}
                  </span>
                </div>
              )}
              <span className="text-base font-bold text-stone-800">{item.price}</span>
            </div>
          )}

          <a
            href="https://zomato.onelink.me/xqzv/jl8m1nah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full font-semibold text-sm text-center border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 block"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Get only the 3 featured items for home page
  const featuredItems = getFeaturedItems();

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Hero Strip */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafted fresh, plated with love, priced for comfort.
          </p>

          {/* Filter Chips - Display only for design, non-functional on home */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: "all", label: "All", icon: null },
              { id: "veg", label: "Veg", icon: <LeafyGreen className="w-3 h-3" /> },
              { id: "nonveg", label: "Non Veg", icon: <div className="w-2 h-2 bg-red-500 rounded-full" /> },
              { id: "bestseller", label: "Bestseller", icon: <Heart className="w-3 h-3" /> },
              { id: "spicy", label: "Spicy", icon: <Flame className="w-3 h-3" /> },
            ].map((filter) => (
              <button
                key={filter.id}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  filter.id === "all"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card border border-border"
                }`}
                disabled
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Navigation - Display only for design, non-functional on home */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-muted border border-border"
              }`}
              disabled
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid - Only 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <MenuCard key={`${item.name}-${index}`} item={item} index={index} />
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

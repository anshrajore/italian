import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Flame, LeafyGreen } from "lucide-react";
import periPeriPasta from "@/assets/pesto-pasta.jpg";
import spaghettiAglioOlio from "@/assets/spaghetti-aglio-olio.jpg";
import macNCheese from "@/assets/pasta-2.jpg";
import meatballSub from "@/assets/meatball-sub.png";
import mozzarellaSticks from "@/assets/mozzarella-sticks.png";
import periPeriMeatballs from "@/assets/peri-peri-meatballs.jpg";
import lemonIcedTea from "@/assets/lemon-iced-tea.jpg";
import peachIcedTea from "@/assets/peach-iced-tea.jpg";
import virginMojito from "@/assets/virgin-mojito.jpg";

type MenuItem = {
  name: string;
  description: string;
  vegPrice?: string;
  nonVegPrice?: string;
  price?: string;
  image?: string;
  isBestseller?: boolean;
  spicyLevel?: number;
  isVegOnly?: boolean;
  isNonVegOnly?: boolean;
};

export const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState<"all" | "veg" | "nonveg" | "bestseller" | "spicy">("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "musttry", name: "Must Try Menu" },
    { id: "classic", name: "Classic Pastas" },
    { id: "mac", name: "Mac & Cheese" },
    { id: "ravioli", name: "Ravioli" },
    { id: "fusion", name: "Fusion Pasta" },
    { id: "lasagna", name: "Lasagna" },
    { id: "meatballs", name: "Meat Balls" },
    { id: "sides", name: "Sides" },
    { id: "bread", name: "Bread Mania" },
    { id: "fries", name: "Fries" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ];

  const menuItems: Record<string, MenuItem[]> = {
    musttry: [
      {
        name: "Peri Peri Pasta",
        description: "Creamy yet spicy in-house peri peri sauce with crunchy veggies in pasta of your choice",
        vegPrice: "₹279",
        nonVegPrice: "₹299",
        image: periPeriPasta,
        isBestseller: true,
        spicyLevel: 2,
      },
      {
        name: "Chilli Aglio e Olio",
        description: "Al dente spaghetti in warm garlicky chilli olive oil & gentle heat",
        vegPrice: "₹289",
        nonVegPrice: "₹309",
        image: spaghettiAglioOlio,
        spicyLevel: 2,
      },
      {
        name: "4 Cheese Spaghetti",
        description: "Spaghetti in velvety rich 4-cheese sauce",
        vegPrice: "₹299",
        nonVegPrice: "₹319",
        isBestseller: true,
      },
      {
        name: "Cheese Blanket Pasta",
        description: "Cheesy blanket poured over your favourite pasta",
        price: "₹99 (add-on)",
        isVegOnly: true,
      },
    ],
    classic: [
      {
        name: "Arrabbiata (Red Sauce)",
        description: "Basic tomato sauce in penne pasta",
        vegPrice: "₹199",
        nonVegPrice: "₹219",
      },
      {
        name: "Alfredo (White Sauce)",
        description: "Creamy white sauce in penne pasta",
        vegPrice: "₹219",
        nonVegPrice: "₹239",
        isBestseller: true,
      },
      {
        name: "Mix Sauce (Pink Sauce)",
        description: "Pink sauce in penne pasta",
        vegPrice: "₹219",
        nonVegPrice: "₹239",
      },
      {
        name: "Pesto",
        description: "Basil-based green sauce in spaghetti pasta",
        vegPrice: "₹239",
        nonVegPrice: "₹259",
      },
      {
        name: "Creamy Pesto",
        description: "Creamy basil green sauce in spaghetti pasta",
        vegPrice: "₹249",
        nonVegPrice: "₹269",
      },
      {
        name: "Aglio e Olio",
        description: "Spaghetti with garlic, olive oil & chilli flakes",
        vegPrice: "₹239",
        nonVegPrice: "₹259",
        spicyLevel: 2,
      },
      {
        name: "Chicken Bolognese",
        description: "Ground chicken-based red sauce in spaghetti",
        price: "₹279",
        isNonVegOnly: true,
      },
      {
        name: "Spaghetti & Meat Balls",
        description: "Chicken meatballs served with tomato sauce",
        price: "₹289",
        isNonVegOnly: true,
        isBestseller: true,
      },
    ],
    mac: [
      {
        name: "Classic Mac N Cheese",
        description: "Macaroni served in cheese sauce",
        vegPrice: "₹239",
        nonVegPrice: "₹259",
        image: macNCheese,
        isBestseller: true,
      },
      {
        name: "Chilli Mac N Cheese",
        description: "Spicy macaroni in cheese sauce",
        vegPrice: "₹249",
        nonVegPrice: "₹269",
        spicyLevel: 1,
      },
      {
        name: "Tandoori Mac N Cheese",
        description: "Tandoori spiced mac n cheese",
        vegPrice: "₹259",
        nonVegPrice: "₹279",
        spicyLevel: 2,
      },
      {
        name: "4 Cheese Baked Mac N Cheese",
        description: "Baked mac n cheese with 4 cheese blend",
        vegPrice: "₹289",
        nonVegPrice: "₹309",
        isBestseller: true,
      },
    ],
    ravioli: [
      {
        name: "Cottage Cheese Ravioli",
        description: "Square stuffed pasta in mix sauce",
        price: "₹229",
        isVegOnly: true,
      },
      {
        name: "Chicken Ravioli",
        description: "Square stuffed pasta in mix sauce",
        price: "₹229",
        isNonVegOnly: true,
      },
    ],
    fusion: [
      {
        name: "Tandoori Pasta",
        description: "Spicy pasta for Indian palate with tandoori flavors",
        vegPrice: "₹249",
        nonVegPrice: "₹249",
        spicyLevel: 2,
      },
      {
        name: "Schezwan Pasta",
        description: "Spicy pasta with Schezwan sauce",
        vegPrice: "₹279",
        nonVegPrice: "₹279",
        spicyLevel: 2,
      },
    ],
    lasagna: [
      {
        name: "Mix Vegetable Lasagna",
        description: "Layered dish with pasta sheets, filling & cheese",
        price: "₹279",
        isVegOnly: true,
      },
      {
        name: "Paneer Tikka Lasagna",
        description: "Lasagna with paneer tikka filling",
        price: "₹289",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Chicken Lasagna",
        description: "Classic chicken lasagna",
        price: "₹289",
        isNonVegOnly: true,
      },
      {
        name: "Chicken Tikka Lasagna",
        description: "Lasagna with chicken tikka filling",
        price: "₹299",
        isNonVegOnly: true,
      },
      {
        name: "Overload Chicken Lasagna",
        description: "Extra chicken loaded lasagna",
        price: "₹329",
        isNonVegOnly: true,
        isBestseller: true,
      },
    ],
    meatballs: [
      {
        name: "Meat Ball Sub",
        description: "Tender & juicy chicken meatballs in sub",
        price: "₹189",
        isNonVegOnly: true,
        image: meatballSub,
        isBestseller: true,
      },
      {
        name: "Meat Balls (Pan Seared) - 5 pcs",
        description: "Pan seared chicken meatballs",
        price: "₹139",
        isNonVegOnly: true,
      },
      {
        name: "Peri Peri Meat Balls - 5 pcs",
        description: "Spicy peri peri chicken meatballs",
        price: "₹159",
        isNonVegOnly: true,
        image: periPeriMeatballs,
        spicyLevel: 2,
      },
      {
        name: "Cheesy Saucy Meat Ball - 5 pcs",
        description: "Meatballs in cheesy sauce",
        price: "₹179",
        isNonVegOnly: true,
      },
    ],
    sides: [
      {
        name: "Jalapeno Poppers (8 pcs)",
        description: "Fried jalapeno poppers",
        price: "₹109",
        isVegOnly: true,
        spicyLevel: 1,
      },
      {
        name: "Pizza Sticks (6 pcs)",
        description: "Crispy pizza sticks",
        price: "₹109",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Mozzarella Sticks (5 pcs)",
        description: "Golden fried mozzarella sticks",
        price: "₹149",
        isVegOnly: true,
        image: mozzarellaSticks,
        isBestseller: true,
      },
      {
        name: "Fried Ravioli (4 pcs)",
        description: "Crispy fried ravioli",
        price: "₹159",
        isVegOnly: true,
      },
      {
        name: "Veg Fried Platter",
        description: "2 Jalapeno poppers + 2 Pizza sticks + 2 Mozzarella fingers + 2 Fried ravioli",
        price: "₹189",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Chicken Nuggets (6 pcs)",
        description: "Crispy chicken nuggets",
        price: "₹139",
        isNonVegOnly: true,
      },
      {
        name: "Peri Peri Chicken Sticks (6 pcs)",
        description: "Spicy peri peri chicken sticks",
        price: "₹159",
        isNonVegOnly: true,
        isBestseller: true,
        spicyLevel: 2,
      },
      {
        name: "Fiery Nuggets (6 pcs)",
        description: "Extra spicy chicken nuggets",
        price: "₹159",
        isNonVegOnly: true,
        spicyLevel: 2,
      },
      {
        name: "Chicken Popcorn (12 pcs)",
        description: "Bite-sized chicken popcorn",
        price: "₹109",
        isNonVegOnly: true,
      },
      {
        name: "Non Veg Fried Platter",
        description: "4 Chicken popcorn + 4 Chicken fries + 2 Peri Peri sticks + 2 Nuggets",
        price: "₹209",
        isNonVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert",
        price: "₹169",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Pesto Paneer Sub",
        description: "Paneer sub with pesto sauce",
        price: "₹189",
        isVegOnly: true,
      },
      {
        name: "Paneer Tikka Bruschetta",
        description: "Toasted bread with paneer tikka",
        price: "₹199",
        isVegOnly: true,
      },
      {
        name: "Chicken Tikka Bruschetta",
        description: "Toasted bread with chicken tikka",
        price: "₹199",
        isNonVegOnly: true,
      },
      {
        name: "Honey Chilli Fries",
        description: "Sweet and spicy honey chilli fries",
        price: "₹179",
        isVegOnly: true,
        spicyLevel: 1,
      },
    ],
    bread: [
      {
        name: "Garlic Bread",
        description: "Classic garlic bread",
        price: "₹119",
        isVegOnly: true,
      },
      {
        name: "Cheese Garlic Bread",
        description: "Garlic bread with cheese",
        price: "₹149",
        isVegOnly: true,
      },
      {
        name: "Cheese Chilli Toast",
        description: "Spicy cheese toast",
        price: "₹159",
        isVegOnly: true,
        spicyLevel: 1,
      },
      {
        name: "Pizza Garlic Bread",
        description: "Garlic bread with pizza toppings",
        price: "₹169",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Pull Apart Cheese Garlic Bread",
        description: "Shareable pull-apart bread",
        price: "₹199",
        isVegOnly: true,
        isBestseller: true,
      },
    ],
    fries: [
      {
        name: "Salted Fries",
        description: "Classic salted fries",
        price: "₹109",
        isVegOnly: true,
      },
      {
        name: "Peri Peri Fries",
        description: "Spicy peri peri fries",
        price: "₹129",
        isVegOnly: true,
        spicyLevel: 1,
      },
      {
        name: "Cheesy Fries",
        description: "Fries loaded with cheese",
        price: "₹149",
        isVegOnly: true,
      },
      {
        name: "Cheesy Jalapeno Fries",
        description: "Cheese fries with jalapenos",
        price: "₹159",
        isVegOnly: true,
        spicyLevel: 1,
      },
      {
        name: "Chicken Fries (8 pcs)",
        description: "Crispy chicken fries",
        price: "₹139",
        isNonVegOnly: true,
      },
      {
        name: "Peri Peri Chicken Fries (8 pcs)",
        description: "Spicy peri peri chicken fries",
        price: "₹149",
        isNonVegOnly: true,
        spicyLevel: 2,
      },
    ],
    desserts: [
      {
        name: "Choco Lava Cake",
        description: "Warm chocolate lava cake",
        price: "₹99",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Chocolate Mousse Cake",
        description: "Rich chocolate mousse",
        price: "₹139",
        isVegOnly: true,
        isBestseller: true,
      },
      {
        name: "Brownie",
        description: "Fudgy chocolate brownie",
        price: "₹99",
        isVegOnly: true,
      },
    ],
    beverages: [
      {
        name: "Cold Coffee",
        description: "Classic cold coffee",
        price: "₹89",
      },
      {
        name: "Hazelnut Cold Coffee",
        description: "Cold coffee with hazelnut",
        price: "₹109",
      },
      {
        name: "Kit Kat / Oreo Coffee",
        description: "Cold coffee with Kit Kat or Oreo",
        price: "₹129",
      },
      {
        name: "Lemon Ice Tea",
        description: "Refreshing lemon iced tea",
        price: "₹79",
        image: lemonIcedTea,
        isBestseller: true,
      },
      {
        name: "Peach Ice Tea",
        description: "Sweet peach iced tea",
        price: "₹89",
        image: peachIcedTea,
      },
      {
        name: "Masala Lemonade",
        description: "Spicy masala lemonade",
        price: "₹129",
        spicyLevel: 1,
      },
      {
        name: "Mint Mojito",
        description: "Virgin mint mojito",
        price: "₹129",
        image: virginMojito,
        isBestseller: true,
      },
      {
        name: "Spicy Mango Mojito",
        description: "Spicy twist on mango mojito",
        price: "₹129",
        isBestseller: true,
        spicyLevel: 1,
      },
      {
        name: "Coolers (Berry/Green Apple/Kiwi)",
        description: "Choice of fruit coolers",
        price: "₹109",
      },
    ],
  };

  // Get all items if "all" is selected
  const getAllItems = () => {
    const allItems: MenuItem[] = [];
    Object.values(menuItems).forEach((items) => allItems.push(...items));
    return allItems;
  };

  const getFilteredItems = (items: MenuItem[]) => {
    return items.filter((item) => {
      if (activeFilter === "veg") return item.isVegOnly || item.vegPrice;
      if (activeFilter === "nonveg") return item.isNonVegOnly || item.nonVegPrice;
      if (activeFilter === "bestseller") return item.isBestseller;
      if (activeFilter === "spicy") return item.spicyLevel && item.spicyLevel > 0;
      return true;
    });
  };

  const displayItems = activeCategory === "all" ? getAllItems() : menuItems[activeCategory] || [];
  const filteredItems = getFilteredItems(displayItems);

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

          {/* Filter Chips */}
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
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card border border-border hover:border-primary hover:bg-card/80"
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card hover:bg-muted border border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name + index}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(index * 0.05, 0.6), duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badges on Image */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {item.isBestseller && (
                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full font-semibold text-xs flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-current" />
                        Bestseller
                      </div>
                    )}
                    {item.spicyLevel && item.spicyLevel > 0 && (
                      <div className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-semibold text-xs flex items-center gap-1">
                        {[...Array(item.spicyLevel)].map((_, i) => (
                          <Flame key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="p-5">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Price Section */}
                <div className="space-y-3">
                  {item.vegPrice || item.nonVegPrice ? (
                    <div className="flex items-center justify-between gap-4">
                      {item.vegPrice && (
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-3 h-3 border-2 border-green-600 rounded-sm" />
                            <span className="text-xs font-medium text-green-600">VEG</span>
                          </div>
                          <span className="text-lg font-bold text-primary">{item.vegPrice}</span>
                        </div>
                      )}
                      {item.nonVegPrice && (
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-3 h-3 border-2 border-red-600 rounded-sm flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            </div>
                            <span className="text-xs font-medium text-red-600">NON VEG</span>
                          </div>
                          <span className="text-lg font-bold text-primary">{item.nonVegPrice}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        {(item.isVegOnly || item.isNonVegOnly) && (
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className={`w-3 h-3 border-2 ${item.isVegOnly ? 'border-green-600' : 'border-red-600'} rounded-sm ${!item.isVegOnly && 'flex items-center justify-center'}`}>
                              {!item.isVegOnly && <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />}
                            </div>
                            <span className={`text-xs font-medium ${item.isVegOnly ? 'text-green-600' : 'text-red-600'}`}>
                              {item.isVegOnly ? 'VEG' : 'NON VEG'}
                            </span>
                          </div>
                        )}
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                    </div>
                  )}

                  <button className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combo Banner - Surprise Feature */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Create Your Perfect Combo
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-foreground">
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="font-semibold">Add Choco Lava Cake</span> <span className="text-primary font-bold">+₹79</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="font-semibold">Add Lemon Ice Tea</span> <span className="text-primary font-bold">+₹59</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="font-semibold">Add Ice Cream Scoop</span> <span className="text-primary font-bold">+₹40</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notes Section */}
        <motion.div
          className="mt-12 text-center text-sm text-muted-foreground space-y-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="font-medium">Please Note:</p>
          <p>We use durum wheat pasta & lasagna sheet. We prepare our own sauces.</p>
          <p>10% merchant payment charges levied on all Dineout platforms.</p>
          <p className="text-xs mt-4">Extras: Extra Veggie +₹30 • Extra Cheese +₹30 • Extra Chicken +₹30 • Spaghetti Upgrade +₹30</p>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="#contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105">
            Visit Our Outlet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

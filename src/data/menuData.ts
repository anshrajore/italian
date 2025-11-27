import periPeriPasta from "@/assets/pesto-pasta.jpg";
import spaghettiAglioOlio from "@/assets/spaghetti-aglio-olio.jpg";
import macNCheese from "@/assets/pasta-2.jpg";
import meatballSub from "@/assets/meatball-sub.png";
import mozzarellaSticks from "@/assets/mozzarella-sticks.png";
import periPeriMeatballs from "@/assets/peri-peri-meatballs.jpg";
import lemonIcedTea from "@/assets/lemon-iced-tea.jpg";
import peachIcedTea from "@/assets/peach-iced-tea.jpg";
import virginMojito from "@/assets/virgin-mojito.jpg";

export type MenuItem = {
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
  category?: string;
};

export const categories = [
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

export const menuItems: Record<string, MenuItem[]> = {
  musttry: [
    {
      name: "Peri Peri Pasta",
      description: "Creamy yet spicy in-house peri peri sauce with crunchy veggies in pasta of your choice",
      vegPrice: "₹279",
      nonVegPrice: "₹299",
      image: periPeriPasta,
      isBestseller: true,
      spicyLevel: 2,
      category: "musttry",
    },
    {
      name: "Chilli Aglio e Olio",
      description: "Al dente spaghetti in warm garlicky chilli olive oil & gentle heat",
      vegPrice: "₹289",
      nonVegPrice: "₹309",
      image: spaghettiAglioOlio,
      spicyLevel: 3,
      category: "musttry",
    },
    {
      name: "4 Cheese Spaghetti",
      description: "Spaghetti in velvety rich 4-cheese sauce",
      vegPrice: "₹299",
      nonVegPrice: "₹319",
      isBestseller: true,
      category: "musttry",
    },
    {
      name: "Cheese Blanket Pasta",
      description: "Cheesy blanket poured over your favourite pasta",
      price: "₹99 (add-on)",
      isVegOnly: true,
      category: "musttry",
    },
  ],
  classic: [
    {
      name: "Arrabbiata (Red Sauce)",
      description: "Basic tomato sauce in penne pasta",
      vegPrice: "₹199",
      nonVegPrice: "₹219",
      category: "classic",
    },
    {
      name: "Alfredo (White Sauce)",
      description: "Creamy white sauce in penne pasta",
      vegPrice: "₹219",
      nonVegPrice: "₹239",
      isBestseller: true,
      category: "classic",
    },
    {
      name: "Mix Sauce (Pink Sauce)",
      description: "Pink sauce in penne pasta",
      vegPrice: "₹219",
      nonVegPrice: "₹239",
      category: "classic",
    },
    {
      name: "Pesto",
      description: "Basil-based green sauce in spaghetti pasta",
      vegPrice: "₹239",
      nonVegPrice: "₹259",
      category: "classic",
    },
    {
      name: "Creamy Pesto",
      description: "Creamy basil green sauce in spaghetti pasta",
      vegPrice: "₹249",
      nonVegPrice: "₹269",
      category: "classic",
    },
    {
      name: "Aglio e Olio",
      description: "Spaghetti with garlic, olive oil & chilli flakes",
      vegPrice: "₹239",
      nonVegPrice: "₹259",
      spicyLevel: 2,
      category: "classic",
    },
    {
      name: "Chicken Bolognese",
      description: "Ground chicken-based red sauce in spaghetti",
      price: "₹279",
      isNonVegOnly: true,
      category: "classic",
    },
    {
      name: "Spaghetti & Meat Balls",
      description: "Chicken meatballs served with tomato sauce",
      price: "₹289",
      isNonVegOnly: true,
      isBestseller: true,
      category: "classic",
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
      category: "mac",
    },
    {
      name: "Chilli Mac N Cheese",
      description: "Spicy macaroni in cheese sauce",
      vegPrice: "₹249",
      nonVegPrice: "₹269",
      spicyLevel: 1,
      category: "mac",
    },
    {
      name: "Tandoori Mac N Cheese",
      description: "Tandoori spiced mac n cheese",
      vegPrice: "₹259",
      nonVegPrice: "₹279",
      spicyLevel: 2,
      category: "mac",
    },
    {
      name: "4 Cheese Baked Mac N Cheese",
      description: "Baked mac n cheese with 4 cheese blend",
      vegPrice: "₹289",
      nonVegPrice: "₹309",
      isBestseller: true,
      category: "mac",
    },
  ],
  ravioli: [
    {
      name: "Cottage Cheese Ravioli",
      description: "Square stuffed pasta in mix sauce",
      price: "₹229",
      isVegOnly: true,
      category: "ravioli",
    },
    {
      name: "Chicken Ravioli",
      description: "Square stuffed pasta in mix sauce",
      price: "₹229",
      isNonVegOnly: true,
      category: "ravioli",
    },
  ],
  fusion: [
    {
      name: "Tandoori Pasta",
      description: "Spicy pasta for Indian palate with tandoori flavors",
      vegPrice: "₹249",
      nonVegPrice: "₹249",
      spicyLevel: 2,
      category: "fusion",
    },
    {
      name: "Schezwan Pasta",
      description: "Spicy pasta with Schezwan sauce",
      vegPrice: "₹279",
      nonVegPrice: "₹279",
      spicyLevel: 2,
      category: "fusion",
    },
  ],
  lasagna: [
    {
      name: "Mix Vegetable Lasagna",
      description: "Layered dish with pasta sheets, filling & cheese",
      price: "₹279",
      isVegOnly: true,
      category: "lasagna",
    },
    {
      name: "Paneer Tikka Lasagna",
      description: "Lasagna with paneer tikka filling",
      price: "₹289",
      isVegOnly: true,
      isBestseller: true,
      category: "lasagna",
    },
    {
      name: "Chicken Lasagna",
      description: "Classic chicken lasagna",
      price: "₹289",
      isNonVegOnly: true,
      category: "lasagna",
    },
    {
      name: "Chicken Tikka Lasagna",
      description: "Lasagna with chicken tikka filling",
      price: "₹299",
      isNonVegOnly: true,
      category: "lasagna",
    },
    {
      name: "Overload Chicken Lasagna",
      description: "Extra chicken loaded lasagna",
      price: "₹329",
      isNonVegOnly: true,
      isBestseller: true,
      category: "lasagna",
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
      category: "meatballs",
    },
    {
      name: "Meat Balls (Pan Seared) - 5 pcs",
      description: "Pan seared chicken meatballs",
      price: "₹139",
      isNonVegOnly: true,
      category: "meatballs",
    },
    {
      name: "Peri Peri Meat Balls - 5 pcs",
      description: "Spicy peri peri chicken meatballs",
      price: "₹159",
      isNonVegOnly: true,
      image: periPeriMeatballs,
      spicyLevel: 2,
      category: "meatballs",
    },
    {
      name: "Cheesy Saucy Meat Ball - 5 pcs",
      description: "Meatballs in cheesy sauce",
      price: "₹179",
      isNonVegOnly: true,
      category: "meatballs",
    },
  ],
  sides: [
    {
      name: "Jalapeno Poppers (8 pcs)",
      description: "Fried jalapeno poppers",
      price: "₹109",
      isVegOnly: true,
      spicyLevel: 1,
      category: "sides",
    },
    {
      name: "Pizza Sticks (6 pcs)",
      description: "Crispy pizza sticks",
      price: "₹109",
      isVegOnly: true,
      isBestseller: true,
      category: "sides",
    },
    {
      name: "Mozzarella Sticks (5 pcs)",
      description: "Golden fried mozzarella sticks",
      price: "₹149",
      isVegOnly: true,
      image: mozzarellaSticks,
      isBestseller: true,
      category: "sides",
    },
    {
      name: "Fried Ravioli (4 pcs)",
      description: "Crispy fried ravioli",
      price: "₹159",
      isVegOnly: true,
      category: "sides",
    },
    {
      name: "Veg Fried Platter",
      description: "2 Jalapeno poppers + 2 Pizza sticks + 2 Mozzarella fingers + 2 Fried ravioli",
      price: "₹189",
      isVegOnly: true,
      isBestseller: true,
      category: "sides",
    },
    {
      name: "Chicken Nuggets (6 pcs)",
      description: "Crispy chicken nuggets",
      price: "₹139",
      isNonVegOnly: true,
      category: "sides",
    },
    {
      name: "Peri Peri Chicken Sticks (6 pcs)",
      description: "Spicy peri peri chicken sticks",
      price: "₹159",
      isNonVegOnly: true,
      isBestseller: true,
      spicyLevel: 2,
      category: "sides",
    },
    {
      name: "Fiery Nuggets (6 pcs)",
      description: "Extra spicy chicken nuggets",
      price: "₹159",
      isNonVegOnly: true,
      spicyLevel: 2,
      category: "sides",
    },
    {
      name: "Chicken Popcorn (12 pcs)",
      description: "Bite-sized chicken popcorn",
      price: "₹109",
      isNonVegOnly: true,
      category: "sides",
    },
    {
      name: "Non Veg Fried Platter",
      description: "4 Chicken popcorn + 4 Chicken fries + 2 Peri Peri sticks + 2 Nuggets",
      price: "₹209",
      isNonVegOnly: true,
      isBestseller: true,
      category: "sides",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert",
      price: "₹169",
      isVegOnly: true,
      isBestseller: true,
      category: "sides",
    },
    {
      name: "Pesto Paneer Sub",
      description: "Paneer sub with pesto sauce",
      price: "₹189",
      isVegOnly: true,
      category: "sides",
    },
    {
      name: "Paneer Tikka Bruschetta",
      description: "Toasted bread with paneer tikka",
      price: "₹199",
      isVegOnly: true,
      category: "sides",
    },
    {
      name: "Chicken Tikka Bruschetta",
      description: "Toasted bread with chicken tikka",
      price: "₹199",
      isNonVegOnly: true,
      category: "sides",
    },
    {
      name: "Honey Chilli Fries",
      description: "Sweet and spicy honey chilli fries",
      price: "₹179",
      isVegOnly: true,
      spicyLevel: 1,
      category: "sides",
    },
  ],
  bread: [
    {
      name: "Garlic Bread",
      description: "Classic garlic bread",
      price: "₹119",
      isVegOnly: true,
      category: "bread",
    },
    {
      name: "Cheese Garlic Bread",
      description: "Garlic bread with cheese",
      price: "₹149",
      isVegOnly: true,
      category: "bread",
    },
    {
      name: "Cheese Chilli Toast",
      description: "Spicy cheese toast",
      price: "₹159",
      isVegOnly: true,
      spicyLevel: 1,
      category: "bread",
    },
    {
      name: "Pizza Garlic Bread",
      description: "Garlic bread with pizza toppings",
      price: "₹169",
      isVegOnly: true,
      isBestseller: true,
      category: "bread",
    },
    {
      name: "Pull Apart Cheese Garlic Bread",
      description: "Shareable pull-apart bread",
      price: "₹199",
      isVegOnly: true,
      isBestseller: true,
      category: "bread",
    },
  ],
  fries: [
    {
      name: "Salted Fries",
      description: "Classic salted fries",
      price: "₹109",
      isVegOnly: true,
      category: "fries",
    },
    {
      name: "Peri Peri Fries",
      description: "Spicy peri peri fries",
      price: "₹129",
      isVegOnly: true,
      spicyLevel: 1,
      category: "fries",
    },
    {
      name: "Cheesy Fries",
      description: "Fries loaded with cheese",
      price: "₹149",
      isVegOnly: true,
      category: "fries",
    },
    {
      name: "Cheesy Jalapeno Fries",
      description: "Cheese fries with jalapenos",
      price: "₹159",
      isVegOnly: true,
      spicyLevel: 1,
      category: "fries",
    },
    {
      name: "Chicken Fries (8 pcs)",
      description: "Crispy chicken fries",
      price: "₹139",
      isNonVegOnly: true,
      category: "fries",
    },
    {
      name: "Peri Peri Chicken Fries (8 pcs)",
      description: "Spicy peri peri chicken fries",
      price: "₹149",
      isNonVegOnly: true,
      spicyLevel: 2,
      category: "fries",
    },
  ],
  desserts: [
    {
      name: "Choco Lava Cake",
      description: "Warm chocolate lava cake",
      price: "₹99",
      isVegOnly: true,
      isBestseller: true,
      category: "desserts",
    },
    {
      name: "Chocolate Mousse Cake",
      description: "Rich chocolate mousse",
      price: "₹139",
      isVegOnly: true,
      isBestseller: true,
      category: "desserts",
    },
    {
      name: "Brownie",
      description: "Fudgy chocolate brownie",
      price: "₹99",
      isVegOnly: true,
      category: "desserts",
    },
  ],
  beverages: [
    {
      name: "Cold Coffee",
      description: "Classic cold coffee",
      price: "₹89",
      category: "beverages",
    },
    {
      name: "Hazelnut Cold Coffee",
      description: "Cold coffee with hazelnut",
      price: "₹109",
      category: "beverages",
    },
    {
      name: "Kit Kat / Oreo Coffee",
      description: "Cold coffee with Kit Kat or Oreo",
      price: "₹129",
      category: "beverages",
    },
    {
      name: "Lemon Ice Tea",
      description: "Refreshing lemon iced tea",
      price: "₹79",
      image: lemonIcedTea,
      isBestseller: true,
      category: "beverages",
    },
    {
      name: "Peach Ice Tea",
      description: "Sweet peach iced tea",
      price: "₹89",
      image: peachIcedTea,
      category: "beverages",
    },
    {
      name: "Masala Lemonade",
      description: "Spicy masala lemonade",
      price: "₹129",
      spicyLevel: 1,
      category: "beverages",
    },
    {
      name: "Mint Mojito",
      description: "Virgin mint mojito",
      price: "₹129",
      image: virginMojito,
      isBestseller: true,
      category: "beverages",
    },
    {
      name: "Spicy Mango Mojito",
      description: "Spicy twist on mango mojito",
      price: "₹129",
      isBestseller: true,
      spicyLevel: 1,
      category: "beverages",
    },
    {
      name: "Coolers (Berry/Green Apple/Kiwi)",
      description: "Choice of fruit coolers",
      price: "₹109",
      category: "beverages",
    },
  ],
};

// Get all items
export const getAllItems = (): MenuItem[] => {
  const allItems: MenuItem[] = [];
  Object.values(menuItems).forEach((items) => allItems.push(...items));
  return allItems;
};

// Get featured items for home page (first 3 from musttry)
export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.musttry.slice(0, 3);
};


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

type NavigationProps = {
  transparentOnHero?: boolean;
};

export const Navigation = ({ transparentOnHero = false }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      // Route navigation
      setIsMobileMenuOpen(false);
    } else {
      // Hash navigation
      setIsMobileMenuOpen(false);
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first
        window.location.href = `/${href}`;
      }
    }
  };

  const navLinks = [
    { name: "Story", href: "#story", isRoute: false },
    { name: "Menu", href: "/menu", isRoute: true },
    { name: "Gallery", href: "#gallery", isRoute: false },
    { name: "Reviews", href: "#reviews", isRoute: false },
    { name: "Franchise", href: "#franchise", isRoute: false, accent: true },
  ];

  const isHeroOverlay = transparentOnHero && !isScrolled && location.pathname === "/";
  const desktopLinkClass = isHeroOverlay
    ? "text-white/90 hover:text-white transition-colors font-heading tracking-wide"
    : "text-foreground hover:text-primary transition-colors font-heading tracking-wide";
  const franchiseLinkClass = isHeroOverlay
    ? "px-5 py-2 rounded-full border border-white/60 text-white font-heading tracking-wide hover:bg-white/10 transition-colors"
    : "px-5 py-2 rounded-full border border-primary text-primary font-heading tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm";
  const buttonClass = isHeroOverlay
    ? "px-6 py-2 rounded-full border border-white/50 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
    : "btn-hero";
  const logoFilter = isHeroOverlay ? "brightness-0 invert" : "";
  const mobileButtonClass = "btn-hero text-center";
  const mobileLinkClass = "text-foreground hover:text-primary transition-colors font-medium py-2";
  const mobileFranchiseClass =
    "px-4 py-2 rounded-full border border-primary text-primary font-semibold text-center";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isHeroOverlay
          ? "bg-transparent"
          : isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Italian Ecstasy"
              className={`h-14 md:h-20 transition-all duration-300 ${logoFilter}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.accent ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={franchiseLinkClass}
                >
                  {link.name}
                </a>
              ) : link.isRoute ? (
                <Link key={link.name} to={link.href} className={desktopLinkClass}>
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={desktopLinkClass}
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href={location.pathname === "/" ? "#contact" : "/#contact"}
              className={buttonClass}
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.accent ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={mobileFranchiseClass}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              ) : link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={mobileLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={mobileLinkClass}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href={location.pathname === "/" ? "#contact" : "/#contact"}
              className={mobileButtonClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

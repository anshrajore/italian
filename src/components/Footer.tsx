import logo from "@/assets/logo.png";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img src={logo} alt="Italian Ecstasy" className="h-20 mb-6" />
            <p className="text-cream/80 mb-6 text-lg">
              Ecstasy in Every Bite. Nashik's most loved Italian comfort-food destination.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold text-cream mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#story" className="text-cream/70 hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-cream/70 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#franchise" className="text-cream/70 hover:text-primary transition-colors">
                  Franchise
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold text-cream mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-cream/70">
                  College Road, Nashik, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-cream/70">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-cream/70">hello@italianecstasy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/20 text-center">
          <p className="text-cream/60">
            © 2025 Italian Ecstasy | A NINIOM Food Works Brand | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

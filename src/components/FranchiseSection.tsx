import { motion } from "framer-motion";
import { PhoneCall, Instagram, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/c/917972355203";
const instagramUrl = "https://www.instagram.com/italian_ecstasy?igsh=NW55c3Fya2luamk4";
const phoneNumber = "+91 79723 55203";

export const FranchiseSection = () => {
  const quickFacts = [
    "Established QSR-format with award-winning Italian comfort food.",
    "Multi-format menu engineered for dine-in, takeaway, and delivery.",
    "Hands-on onboarding, chef training, and marketing playbooks.",
    "Proven vendor network for sauces, ingredients, and kitchen gear.",
  ];

  return (
    <section id="franchise" className="section-padding bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-[0.4em] text-xs mb-4">
            Franchise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Grow with Italian Ecstasy
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Join India’s favourite Italian comfort-food kitchen and bring soulful pasta, lasagna,
            and quick-serve classics to your city.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="bg-card rounded-3xl border border-border/60 p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Why partner with us?
            </h3>
            <div className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl border border-border/60 p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Talk to our franchise desk
            </h3>
            <p className="text-muted-foreground mb-8">
              We’re available on WhatsApp, Instagram DM, or a quick call. Share your city, kitchen
              format, and investment range—we’ll guide you through footprint planning, menu
              localization, and launch marketing.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-border bg-card text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                DM on Instagram
              </a>

              <a
                href={`tel:${phoneNumber.replace(/\\s+/g, "")}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Call {phoneNumber}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


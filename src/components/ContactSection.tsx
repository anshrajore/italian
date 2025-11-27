import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Google Maps embed URL
  // 
  // TO UPDATE WITH YOUR EXACT LOCATION:
  // Option 1 - From your share link (https://share.google/yMPRd4RDr5k3qrm1u):
  //   1. Open the share link in your browser
  //   2. Once the map loads, click the three dots (⋮) menu in the top right
  //   3. Select "Share or embed map"
  //   4. Click the "Embed a map" tab
  //   5. Copy the entire iframe src URL (starts with https://www.google.com/maps/embed?pb=)
  //   6. Replace the URL below with your copied URL
  //
  // Option 2 - Direct from Google Maps:
  //   1. Go to https://www.google.com/maps
  //   2. Search for your exact location
  //   3. Click the "Share" button
  //   4. Click "Embed a map" tab
  //   5. Copy the iframe src URL and paste it below
  //
  // ⚠️ IMPORTANT: Replace this URL with your actual Google Maps embed URL
  // 
  // Your share link: https://share.google/yMPRd4RDr5k3qrm1u
  // 
  // Quick Steps:
  // 1. Open your share link in browser
  // 2. Click three dots (⋮) → "Share or embed map" → "Embed a map" tab
  // 3. Copy the iframe src URL and paste it below
  // 
  // See GOOGLE_MAPS_SETUP.md for detailed instructions
  // 
  // Current placeholder URL (replace with your actual embed URL):
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890!2d73.78901234567890!3d19.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwNDcrMjAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience the authentic taste of Italy at our cozy location in Nashik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      College Road, Nashik,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a 
                      href="tel:+91XXXXXXXXXX" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:hello@italianecstasy.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@italianecstasy.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <a
                  href="https://maps.google.com/?q=College+Road+Nashik+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-2 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src={googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890!2d73.78901234567890!3d19.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwNDcrMjAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Italian Ecstasy Location"
                />
                {/* Overlay for better visual integration */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/5 rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Banner */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              We're Here to Serve You
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're dining in, taking out, or ordering for delivery, we're committed to bringing you the finest Italian flavors. 
              Visit us today and discover why we're Nashik's favorite Italian destination!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


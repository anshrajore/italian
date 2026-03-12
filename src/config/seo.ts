/**
 * SEO configuration for Italian Ecstasy.
 * Set VITE_SITE_URL in .env (e.g. https://www.italianecstasy.com) for production.
 */
const SITE_URL =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  "https://www.italianecstasy.com";

export const seoConfig = {
  siteUrl: SITE_URL.replace(/\/$/, ""),
  defaultTitle: "Italian Ecstasy - Best Italian Restaurant in Nashik | Pasta, Pizza & More",
  defaultDescription:
    "Italian Ecstasy is Nashik's best Italian restaurant. Authentic pasta, lasagna, mac n cheese & Indian-Italian fusion. Dine-in & delivery. College Road, Nashik.",
  brand: {
    name: "Italian Ecstasy",
    tagline: "Ecstasy in Every Bite",
    legalName: "NINIOM Food Works",
  },
  location: {
    address: {
      streetAddress: "Shop No 1, Rushiraj Enclave, College Rd, opp. Liquor Embassy, D'souza Colony",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      latitude: 19.9975,
      longitude: 73.7898,
    },
    phone: ["+917972355203", "+917972282992"],
    email: "niniomfoodworks@gmail.com",
    openingHours: "Mo-Su 11:00-23:00",
    mapUrl: "https://maps.app.goo.gl/wZPsY5Rq4qXk33Wi9",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  /** Full URL to default OG image (1200x630 recommended). Host in public/ or use CDN. */
  defaultOgImage: `${SITE_URL.replace(/\/$/, "")}/og-image.jpg`,
  locale: "en_IN",
  twitterHandle: "@ItalianEcstasy",
} as const;

/** JSON-LD structured data for Restaurant + LocalBusiness (homepage & general). */
export function getRestaurantJsonLd() {
  const { siteUrl, brand, location, defaultDescription, social } = seoConfig;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#restaurant`,
        name: brand.name,
        description: defaultDescription,
        url: siteUrl,
        image: `${siteUrl}/og-image.jpg`,
        slogan: brand.tagline,
        telephone: location.phone,
        email: location.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address.streetAddress,
          addressLocality: location.address.addressLocality,
          addressRegion: location.address.addressRegion,
          addressCountry: location.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.geo.latitude,
          longitude: location.geo.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "11:00",
          closes: "23:00",
        },
        sameAs: [social.facebook, social.instagram].filter(Boolean),
        potentialAction: {
          "@type": "OrderAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://zomato.onelink.me/xqzv/jl8m1nah",
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: brand.name,
        image: `${siteUrl}/og-image.jpg`,
        url: siteUrl,
        telephone: location.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address.streetAddress,
          addressLocality: location.address.addressLocality,
          addressRegion: location.address.addressRegion,
          addressCountry: location.address.addressCountry,
        },
        openingHours: location.openingHours,
        priceRange: "₹₹",
      },
    ],
  };
}

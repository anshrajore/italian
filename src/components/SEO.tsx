import { Helmet } from "react-helmet-async";
import { seoConfig, getRestaurantJsonLd } from "@/config/seo";

export type SEOProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  /** Set false to skip Restaurant/LocalBusiness JSON-LD (e.g. 404 page). */
  includeJsonLd?: boolean;
  jsonLd?: object | object[];
};

/**
 * Page-level SEO: title, description, canonical, Open Graph, Twitter Card, optional JSON-LD.
 * Use on every page for unique titles/descriptions.
 */
export const SEO = ({
  title,
  description,
  canonicalPath = "",
  ogImage,
  ogType = "website",
  noindex = false,
  includeJsonLd = true,
  jsonLd,
}: SEOProps) => {
  const siteUrl = seoConfig.siteUrl;
  const canonical = canonicalPath ? `${siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}` : siteUrl;
  const fullTitle = title ? `${title} | ${seoConfig.brand.name}` : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const image = ogImage || seoConfig.defaultOgImage;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  const ld = jsonLd ?? (includeJsonLd ? getRestaurantJsonLd() : null);
  const jsonLdScript = ld == null ? [] : Array.isArray(ld) ? ld : [ld];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:site_name" content={seoConfig.brand.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {seoConfig.twitterHandle && <meta name="twitter:site" content={seoConfig.twitterHandle} />}
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />

      {/* JSON-LD */}
      {jsonLdScript.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};

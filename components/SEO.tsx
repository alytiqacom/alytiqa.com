import Script from "next/script";

export function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Alytiqa",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "AI-powered web analyst that helps you save time and get better results with automated insights, competitor analysis, and actionable recommendations for your website.",
    featureList: [
      "Automated website analytics",
      "Competitor analysis",
      "Actionable insights",
      "Performance tracking",
      "Conversion optimization",
    ],
    publisher: {
      "@type": "Organization",
      name: "Alytiqa",
      url: "https://alytiqa.com",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

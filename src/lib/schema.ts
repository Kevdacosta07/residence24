import { faqs, services } from "./content";
import { toCdnAsset } from "./cdn";

const siteUrl = "https://residence24.ch";

export const residence24Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Residence24",
      inLanguage: "fr-CH",
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Residence24 — Intendance privée à Genève",
      description: "Service confidentiel d’intendance privée pour résidences haut de gamme à Genève.",
      inLanguage: "fr-CH",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${siteUrl}/#breadcrumb` },
      about: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl }],
    },
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${siteUrl}/#business`,
      name: "Residence24",
      url: siteUrl,
      image: toCdnAsset("/images/residence-interior.jpg"),
      logo: toCdnAsset("/logo-black.svg"),
      email: "contact@residence24.ch",
      telephone: "+41 76 553 41 54",
      description: "Intendance privée pour villas, appartements et résidences secondaires à Genève : visites, coordination des prestataires et préparation des retours.",
      priceRange: "Sur mesure",
      areaServed: ["Genève", "Cologny", "Collonge-Bellerive", "Vandoeuvres", "Chêne-Bougeries", "Bellevue", "Pregny-Chambésy"],
      address: { "@type": "PostalAddress", addressLocality: "Genève", addressCountry: "CH" },
      knowsLanguage: ["fr", "en"],
      knowsAbout: ["intendance privée", "gestion de résidence", "home sitting", "coordination de prestataires", "résidence secondaire"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "service client",
        telephone: "+41 76 553 41 54",
        email: "contact@residence24.ch",
        availableLanguage: ["fr", "en"],
        areaServed: "CH-GE",
      },
      employee: {
        "@type": "Person",
        name: "Votre intendant Residence24",
        jobTitle: "Intendant privé de résidence",
        worksFor: { "@id": `${siteUrl}/#business` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services d’intendance privée",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            serviceType: "Intendance privée de résidence",
            areaServed: { "@type": "AdministrativeArea", name: "Canton de Genève" },
            provider: { "@id": `${siteUrl}/#business` },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

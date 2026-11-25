import { MACHINES_LIST } from "@/data/static/machines";
import { SERVICES_LIST } from "@/data/static/services";
import { SOCIALTOKENS } from "@/data/tokens/socials.token";
import { toKebabCase } from "@/utils/case-converter";

export const ORGANIZATIONSCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Swaraj Automations",
  url: "https://gundrillingswaraj.com",
  logo: "https://weareneonanthem.com/assets/neon-anthem/logo-brandmark.svg",
  description: "CNC machining and automation solutions",
  foundingYear: "1996",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 15,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
  ],
  //
  knowsAbout: [
    "Web Design",
    "Conversion Rate Optimisation",
    "CRO Strategy",
    "Landing Page Design",
    "B2B Web Development",
    "Market Intelligence",
    "SaaS Website Design",
    "Growth Engineering",
    "Enterprise Google Business Profile",
  ],
  //
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Swaraj automations machines & services",
    itemListElement: [
      ...MACHINES_LIST?.map((machine) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: machine.name,
          url: `https://gundrillingswaraj.com/machines/${toKebabCase(machine.key)}`,
        },
      })),
      ...SERVICES_LIST?.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `https://gundrillingswaraj.com/services/${toKebabCase(service.key)}`,
        },
      })),
    ],
  },
  sameAs: [SOCIALTOKENS.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://gundrillingswaraj.com/contact",
    availableLanguage: "English",
  },
};

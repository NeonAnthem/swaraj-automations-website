import NAVMENUS from "./nav.data";

const getNavigationMenus = async () => {
  /**
   * Apply in-definite cache on navigation menu
   */

  // 'use cache'
  return { menus: MOCK_NAV, cta: MOCK_NAV_CTA };
};

export default getNavigationMenus;

const MOCK_NAV = NAVMENUS;
const MOCK_NAV_CTA = {
  primaryCTA: {
    label: "Contact Sales",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Career",
    href: "/careers",
  },
};

const serviceNavigationSetup = async () => {
  // const services = await getServicesByCategories("website");
  const services: { name: string; slug: string }[] = [];
  return {
    heading: "Development Services",
    children: services?.map((service) => ({
      label: service.name,
      href: service.slug,
    })),
  };
};

const brandingNavigationSetup = async () => {
  return {
    heading: "Branding & Positioning Services",
    children: [],
  };
};

const infrastructureNavigationSetup = async () => {
  return {
    heading: "Infrastructure",
    children: [],
  };
};

const marketingNavigationSetup = async () => {
  return {
    heading: "Marketing",
    children: [],
  };
};

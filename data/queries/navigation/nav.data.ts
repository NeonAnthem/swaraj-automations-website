import { INavbarItems } from "@/components/features/navigation/types/navbar.types";
import { MACHINES_LIST } from "@/data/static/machines";
import { SERVICES_LIST } from "@/data/static/services";
import { SOLUTIONS_LIST } from "@/data/static/solutions";
import { toKebabCase } from "@/utils/case-converter";

const NAVMENUS: INavbarItems[] = [
  {
    id: "home",
    position: "a",
    label: "Home",
    href: "/",
  },
  {
    id: "machines",
    position: "a",
    label: "Machines",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "Category A",
        children: MACHINES_LIST.slice(0, 8).map((m) => ({
          label: m.name,
          href: `/machines/${toKebabCase(m.key)}`,
        })),
      },
      {
        contentType: "list",
        heading: "Category B",
        position: "b",
        span: 1,
        children: MACHINES_LIST.slice(8, 16).map((m) => ({
          label: m.name,
          href: `/machines/${toKebabCase(m.key)}`,
        })),
      },
      // Image Content For services
      // {
      //   contentType: "news",
      //   position: "d",
      //   span: 1,
      //   title: "Website Redesign",
      //   description:
      //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fugit nisi atque veritatis modi totam corrupti est consectetur explicabo cum natus inventore deleniti, obcaecati quia odit laborum? Eos ipsa vero consequuntur qui?",
      //   logo: null,
      //   cta: {
      //     label: "Check it out",
      //     href: "/website-redesign",
      //   },
      // },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    position: "b",
    child: [
      {
        contentType: "list",
        heading: "All Solutions",
        position: "b",
        span: 1,
        children: SOLUTIONS_LIST.slice(0, 8).map((solution) => ({
          label: solution.title,
          href: `/solutions/${toKebabCase(solution.key)}`,
        })),
      },
      {
        contentType: "list",
        heading: "",
        position: "b",
        span: 1,
        children: SOLUTIONS_LIST.slice(8, 16).map((solution) => ({
          label: solution.title,
          href: `/solutions/${toKebabCase(solution.key)}`,
        })),
      },
    ],
  },
  {
    id: "services",
    position: "b",
    label: "Service",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 2,
        heading: "Core Services",
        children: SERVICES_LIST?.map((service) => ({
          label: service.name,
          href: `/services/${toKebabCase(service.key)}`,
        })),
      },
    ],
  },
];

export default NAVMENUS;

import { INavbarContentList } from "@/components/features/navigation/types/navbar.types";
import NAVMENUS from "../queries/navigation/nav.data";

export interface IFooterLink {
  label: string;
  href: string;
  tag?: string;
}

export interface IFooterColumn {
  id: string;
  heading: string;
  links: IFooterLink[];
}

/** Flattens every "list" content block under a nav.data group into one link list, dropping its sub-headings. */
function flattenNavGroupLinks(groupId: string): IFooterLink[] {
  const group = NAVMENUS.find((item) => item.id === groupId);
  if (!group?.child) return [];

  return group.child
    .filter(
      (content): content is INavbarContentList =>
        content.contentType === "list",
    )
    .flatMap((list) =>
      list.children.map(({ label, href }) => ({ label, href })),
    );
}

export const FOOTER_LINK_COLUMNS: IFooterColumn[] = [
  {
    id: "machines",
    heading: "Machines",
    links: flattenNavGroupLinks("machines"),
  },
  {
    id: "services",
    heading: "Services",
    links: flattenNavGroupLinks("services"),
  },
  {
    id: "solutions",
    heading: "Solutions",
    links: flattenNavGroupLinks("solutions"),
  },
  {
    id: "company",
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      // { label: "About Us", href: "/about" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers", tag: "We're hiring" },
    ],
  },
];

export const FOOTER_BOTTOM_LINKS: IFooterLink[] = [
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Policy", href: "/policy" },
];

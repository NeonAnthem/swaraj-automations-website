export interface INavbarItems {
  id: string;
  // For position on Navigation Bar
  position: string;
  // Visible only on specified paths
  visibilityPaths?: string[];

  label: string;
  href?: string;
  child?: INavbarContent[];
}

export interface INavbarContentBase {
  position: string;
  span: 1 | 2 | 3;
  tag?: string;
}

export type INavbarContent =
  | INavbarContentList
  | INavbarContentImage
  | INavbarContentNews
  | INavbarContentBanner;

export interface INavbarContentList extends INavbarContentBase {
  contentType: "list";
  heading: string;
  children: {
    label: string;
    href: string;
    description?: string;
    triggerImage?: Omit<INavbarContentImage, "contentType">;
  }[];
  banner?: {
    title: string;
    subheading: string;
    cta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  cta?: { label: string; href?: string };
}

export interface INavbarContentNews extends INavbarContentBase {
  contentType: "news";
  logo: React.JSX.Element | null;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface INavbarContentBanner extends INavbarContentBase {
  contentType: "banner";
  tag: string;
}

export interface INavbarContentImage extends INavbarContentBase {
  contentType: "image";
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: 75 | 100;
  className?: string;
}

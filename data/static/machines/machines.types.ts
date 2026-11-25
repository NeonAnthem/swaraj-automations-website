import { SOLUTIONS_MAP } from "../solutions/solutions";

export interface IMachineImage {
  url: string;
  alt: string;
}

export interface IMachineTableRow {
  /** Parameter name shown in the fixed left column */
  label: string;
  /** One value per column in `IMachineTable.columns` */
  values: string[];
}

export interface IMachineTable {
  title?: string;
  /** Optional custom header for the fixed first column */
  rowHeader?: string;
  /** Model/variant headers, e.g. GDSA-01 */
  columns: string[];
  rows: IMachineTableRow[];
}

export type MachineAssetType = "image" | "video" | "youtube";

export interface IMachineAsset {
  type: MachineAssetType;
  url: string;
  alt: string;
  isFeatured?: boolean;
  /** Optional custom thumbnail. If omitted, YouTube thumbnails are auto-generated. */
  thumbnailUrl?: string;
}

export interface IMachine {
  key: string;
  name: string;
  tagline: string;
  operationsPerformed?: string[];
  description: string;
  tags: string[];
  /** @deprecated Use assets array instead */
  videoUrl?: string;
  /** @deprecated Use assets array instead */
  images?: unknown[];
  /** New mixed-media assets field */
  assets?: IMachineAsset[];
  features: string[];
  applications: string[];
  tables?: IMachineTable[];
  category?: string;
  /**
   * Solutions link
   */
  solutions: (keyof typeof SOLUTIONS_MAP)[];
  industries: string[];
  ogImageUrl: string;
  /**
   * Featured on home
   */
  isFeatured?: boolean;
}

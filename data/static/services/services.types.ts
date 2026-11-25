export interface IServiceImage {
  url: string;
  alt: string;
}

export interface IServiceTableRow {
  /** Parameter name shown in the fixed left column */
  label: string;
  /** One value per column in `IMachineTable.columns` */
  values: string[];
}

export interface IServiceTable {
  title?: string;
  /** Optional custom header for the fixed first column */
  rowHeader?: string;
  /** Model/variant headers, e.g. GDSA-01 */
  columns: string[];
  rows: IServiceTableRow[];
}

export type ServicesAssetType = "image" | "video" | "youtube";

export interface IMachineAsset {
  type: ServicesAssetType;
  url: string;
  alt: string;
  isFeatured?: boolean;
  /** Optional custom thumbnail. If omitted, YouTube thumbnails are auto-generated. */
  thumbnailUrl?: string;
}

export interface IService {
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
  tables?: IServiceTable[];
  category?: string;
  solutions: string[];
  industries: string[];
  ogImageUrl: string;
  /**
   * Featured on Home
   */
  isFeatured?: boolean;
}

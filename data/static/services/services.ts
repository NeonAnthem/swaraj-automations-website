import { IService } from "./services.types";

const RETROFITTING_AND_RECONDITIONING: IService = {
  key: "retrofitting_and_reconditioning",
  name: "Retrofitting & Reconditioning",
  tagline:
    "Machine retrofitting, reconditioning and CNC upgradation to restore performance and extend productive life.",
  description:
    "Swaraj Automation provides Machine Retrofitting, Reconditioning and CNC Upgradation Services to restore machine performance, modernize existing equipment and extend its productive life.\n\nOur services cover a wide range of machine tools, including VTLs, plano millers, horizontal borers, lathes, milling machines and CNC machining systems. From mechanical reconditioning and worn-component replacement to CNC control upgrades, electrical rewiring and automation improvements, we help manufacturers enhance the capability of their existing machines.",
  features: [
    "Cost-Effective Modernization: Upgrade existing machinery as an alternative to investing in a new machine, where technically and economically suitable.",
    "Restored Machining Accuracy: Recondition mechanical components and verify machine geometry to improve accuracy and repeatability.",
    "CNC System Upgradation: Replace outdated CNC controls, drives and electrical systems with modern technology as required.",
    "Improved Productivity: Optimize machine performance and machining cycles through suitable mechanical and control-system upgrades.",
    "Reduced Downtime: Improve reliability by addressing worn components, obsolete controls and recurring machine issues.",
    "Extended Machine Life: Preserve valuable machine structures and extend their useful operating life.",
    "Enhanced Operational Reliability: Improve electrical systems, lubrication, hydraulics and automation where required.",
    "Application-Specific Solutions: Customize retrofitting and reconditioning work to suit individual machine conditions and production requirements.",
  ],
  industries: [],
  ogImageUrl: "",
  solutions: [],
  category: "Services",
  assets: [
    {
      type: "image",
      url: "/assets/machines/RR_1.webp",
      alt: "Retrofitting and Reconditioning / CNC Upgradation",
    },
    {
      type: "image",
      url: "/assets/machines/RR_2.webp",
      alt: "Retrofitting and Reconditioning / CNC Upgradation",
    },
    {
      type: "image",
      url: "/assets/machines/RR_3.webp",
      alt: "Retrofitting and Reconditioning / CNC Upgradation",
    },
    {
      type: "image",
      url: "/assets/machines/RR_4.webp",
      alt: "Retrofitting and Reconditioning / CNC Upgradation",
    },
    {
      type: "image",
      url: "/assets/machines/RR_5.webp",
      alt: "Retrofitting and Reconditioning / CNC Upgradation",
    },
  ],
  tags: [
    "Machine Retrofitting",
    "CNC Machine Retrofitting",
    "Machine Reconditioning",
    "CNC Upgradation",
    "CNC Control Retrofit",
    "Industrial Machine Overhauling",
    "Machine Tool Reconditioning",
    "VTL Retrofitting",
    "Plano Miller Reconditioning",
    "Horizontal Boring Machine Retrofitting",
    "CNC Lathe Retrofitting",
    "Milling Machine Reconditioning",
    "Machine Tool Modernization",
    "Industrial Automation Upgradation",
    "Machine Accuracy Restoration",
    "Swaraj Automation",
  ],
  applications: [
    "TOS KURIM BED MILLING MACHINE",
    "GORATU LATHE MACHINE - 11 meter Bed",
    "Friedreich Schmaltz Cylindrical Grinding Machine - 9 meters bed",
    "VTL's - Various (GREY, W&B)",
    "Moriseiki",
  ],
};

const CNC_UPGRADATION: IService = {
  ...RETROFITTING_AND_RECONDITIONING,
  key: "cnc_upgradation",
  name: "CNC Upgradation",
};

const GUN_DRILLING_SERVICES: IService = {
  key: "gun_drilling_services",
  name: "Gun Drilling Services",
  tagline:
    "Precision gun drilling for accurate, deep and straight holes across a wide range of industrial applications.",
  description:
    "Swaraj Automation offers precision Gun Drilling Services for components requiring accurate, deep and straight holes. We cater to a wide range of materials, component geometries and industrial applications, with a focus on hole accuracy, consistency and reliable machining quality.\n\nHave a component that requires deep-hole drilling? Contact Swaraj Automation to discuss your drawing, machining requirements and project specifications. Our team will help you find the right solution for your application.\n\nCall to Action: Enquire Now for Gun Drilling Services",
  features: [],
  industries: [],
  ogImageUrl: "",
  solutions: [],
  category: "Services",
  tags: [],
  applications: [],
  tables: [
    {
      title: "Gun Drilling Capability",
      rowHeader: "Parameter",
      columns: ["Specification"],
      rows: [
        {
          label: "Drilling Diameter",
          values: ["Dia 2 mm - Dia 40 mm"],
        },
        {
          label: "Drilling Depth",
          values: ["Up to 2000 mm"],
        },
      ],
    },
  ],
};

export const SERVICES_MAP: Record<string, IService> = {
  retrofitting_and_reconditioning: RETROFITTING_AND_RECONDITIONING,
  cnc_upgradation: CNC_UPGRADATION,
  gun_drilling_services: GUN_DRILLING_SERVICES,
};

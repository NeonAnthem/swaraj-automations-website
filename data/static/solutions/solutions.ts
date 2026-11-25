import { ISolution } from "./solutions.types";

const PLACEHOLDER_IMAGE = "/assets/images/autom.jpg";

/**
 * List of solutions offered by the company
 * 1. Medical
 * 2. Die Mould
 * 3. Aerospace,
 * 4. Precision Engineering
 * 5. Automotive
 * 6. Defence
 * 8. General Engineering
 * 9. Tool & Die
 * 10. Gun Drill Job work
 * 11. Pellet Die
 * 12. Ring Die
 * 13. Mass Production Components
 * 14. Gas Cylinders
 * 15. Core Pins
 * 16. Implants & Instruments
 * 17. Gas Cylinder Neck Machining
 * 20. Textile Spindles
 */

const IMAGE_PATH = "/assets/solutions";

const GAS_CYLINDER_NECK_MACHINING: ISolution = {
  key: "gas_cylinder_neck_machining",
  title: "Gas Cylinder Neck Machining",
  image: "/assets/solutions/gas-cylinder-neck-machine.webp",
  href: "/gas-cylinder-neck-machining",
};

const AUTOMOTIVE_SHAFTS: ISolution = {
  key: "automotive_shafts",
  title: "Automotive Shafts",
  image: `${IMAGE_PATH}/automotive-shafts.webp`,
  href: "#",
};

const CORE_PINS: ISolution = {
  key: "core_pins",
  title: "Core Pins",
  image: `${IMAGE_PATH}/core-pins.webp`,
  href: "#",
};

const IMPLANTS_AND_INSTRUMENTS: ISolution = {
  key: "implants_and_instruments",
  title: "Implants & Instruments",
  image: `${IMAGE_PATH}/instrument.webp`,
  href: "#",
};

const TEXTILE_SPINDLES: ISolution = {
  key: "textile_spindles",
  title: "Textile Spindles",
  image: `${IMAGE_PATH}/textile-spindles.webp`,
  href: "#",
};

const PELLET_DIE: ISolution = {
  key: "pellet_die",
  title: "Pellet Die",
  image: `${IMAGE_PATH}/pellet-die.webp`,
  href: "#",
};

const DEFENCE: ISolution = {
  key: "defence",
  title: "Defence",
  image: `${IMAGE_PATH}/defence.webp`,
  href: "#",
};

const AEROSPACE: ISolution = {
  key: "aerospace",
  title: "Aerospace",
  image: `${IMAGE_PATH}/aerospace.webp`,
  href: "#",
};

const MEDICAL: ISolution = {
  key: "medical",
  title: "Medical",
  href: "/solutions/medical",
  image: `${IMAGE_PATH}/medical.webp`,
};

const DIE_MOULD: ISolution = {
  key: "die_mould",
  title: "Die Mould",
  image: `${IMAGE_PATH}/die-mould.webp`,
  href: "#",
};

const PRECISION_ENGINEERING: ISolution = {
  key: "precision_engineering",
  title: "Precision Engineering",
  href: "#",
  image: `${IMAGE_PATH}/precision-engineering.webp`,
};

const GENERAL_ENGINEERING: ISolution = {
  key: "general_engineering",
  title: "General Engineering",
  image: `${IMAGE_PATH}/general-engineering.webp`,
  href: "#",
};

const TOOL_AND_DIE: ISolution = {
  key: "tool_and_die",
  title: "Tool & Die",
  image: `${IMAGE_PATH}/die-mould.webp`,
  href: "#",
};

const GUN_DRILL_JOB_WORK: ISolution = {
  key: "gun_drill_job_work",
  title: "Gun Drill Job work",
  image: `${IMAGE_PATH}/gun-drilling-job-work.webp`,
  href: "#",
};

const RING_DIE: ISolution = {
  key: "ring_die",
  title: "Ring Die",
  image: `${IMAGE_PATH}/pellet-die.webp`,
  href: "#",
};

const MASS_PRODUCTION_COMPONENTS: ISolution = {
  key: "mass_production_components",
  title: "Mass Production Components",
  image: `${IMAGE_PATH}/mechanical.webp`,
  href: "#",
};

export const SOLUTIONS_MAP = {
  gas_cylinder_neck_machining: GAS_CYLINDER_NECK_MACHINING,
  automotive_shafts: AUTOMOTIVE_SHAFTS,
  core_pins: CORE_PINS,
  implants_and_instruments: IMPLANTS_AND_INSTRUMENTS,
  textile_spindles: TEXTILE_SPINDLES,
  pellet_die: PELLET_DIE,
  defence: DEFENCE,
  aerospace: AEROSPACE,
  medical: MEDICAL,
  die_mould: DIE_MOULD,
  precision_engineering: PRECISION_ENGINEERING,
  general_engineering: GENERAL_ENGINEERING,
  tool_and_die: TOOL_AND_DIE,
  gun_drill_job_work: GUN_DRILL_JOB_WORK,
  ring_die: RING_DIE,
  mass_production_components: MASS_PRODUCTION_COMPONENTS,
};

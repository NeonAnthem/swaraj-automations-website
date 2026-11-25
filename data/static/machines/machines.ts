import { IMachine, IMachineAsset } from "./machines.types";

const DRILLING_REAMING_MACHINE: IMachine = {
  key: "drilling_reaming_machine",
  name: "Drilling/Reaming Machine",
  description:
    "Vertical/Horizontal Drilling and Reaming machines to suit the component to be machined. Easily controllable with PLC systems. Efficient Machines designed to suit your purpose. The Job clamping assembly is designed according to the component, so that the operator finds it easy to load and unload. Autoloading will increase the production rate by reducing the lead time.",
  tagline:
    "Drilling Reaming Machine is used for precise drilling and reaming operations.",
  applications: ["Shafts", "Dies", "Plates", "Rods", "Blocks"],
  solutions: ["aerospace"],
  industries: [],
  assets: [
    {
      type: "image",
      url: "/assets/machines/DRM_1.webp",
      alt: "Drilling/Reaming Machine",
    },
    {
      type: "image",
      url: "/assets/machines/DRM_2.webp",
      alt: "Drilling/Reaming Machine",
    },
    {
      type: "video",
      url: "/assets/machines/DRM_3.mp4",
      alt: "Drilling/Reaming Machine",
    },
  ],
  tags: ["Drilling", "Reaming"],
  videoUrl: "",
  category: "Drilling Machines",
  ogImageUrl: "",
  features: [
    "High precision drilling",
    "Efficient reaming operations",
    "Robust construction",
  ],
};

// Micro Gun Drilling Machines

const MICRO_GUN_DRILLING_MACHINE: IMachine = {
  key: "micro_gun_drilling_machine",
  name: "Micro Gun Drilling Machine",
  description:
    "Swaraj manufactures precision Micro Gun Drilling Machines designed for drilling small-diameter, deep and accurate holes in a wide range of industrial components with drill diameter range starting from Ø1mm. Engineered for applications requiring high hole straightness, dimensional consistency and reliable machining performance, these machines are ideal for micro-drilling operations in demanding manufacturing environments.",
  tagline: "High precision micro drilling.",
  applications: [
    "Implants & Instruments",
    "Core Pins",
    "Guages",
    "Spindles",
    "Micro gun drilling components",
    "Electronic components",
  ],
  solutions: ["medical", "die_mould", "aerospace", "precision_engineering"],
  industries: [],
  tags: [
    "Micro Gun Drilling Machine",
    "CNC Micro Drilling Machine",
    "Small Diameter Gun Drilling",
    "Precision Deep Hole Drilling Machine",
    "Micro Hole Drilling",
    "High-Pressure Coolant Drilling",
    "Micro Drilling Machine Manufacturer India",
    "Single Spindle Gun Drilling Machine",
    "Multi-Spindle Micro Drilling Machine",
    "Precision Engineering Machinery",
    "Swaraj Automation",
    "Small-Diameter Drilling",
    "CNC Controlled",
    "High-Precision Machining",
    "Deep Hole Drilling Solutions",
  ],
  videoUrl: "https://www.youtube.com/watch?v=tm8GCjhXScE",
  category: "Gun Drilling Machines",
  assets: [
    {
      type: "image",
      url: "/assets/machines/GDM_M_2.webp",
      alt: "Micro Gun Drilling machine",
    },
    {
      type: "video",
      url: "/assets/machines/GDM_M_1.webp",
      alt: "Micro Gun Drilling machine",
    },

    {
      type: "video",
      url: "/assets/machines/GDM_M_3.mp4",
      alt: "Micro Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_M_4.webp",
      alt: "Micro Gun Drilling machine",
    },
  ],
  ogImageUrl: "",
  operationsPerformed: ["Solid Carbide Gun Drills", "Brazed Tipped Gun Drills"],
  features: [
    "CNC-Controlled Feed: Precise control over drilling feed and positioning.",
    "High-Pressure Coolant System: Supports effective pressure for chip evacuation.",
    "Precision Spindle System: Designed for stable, high-speed drilling operations.",
    "Consistent Hole Quality: Supports accurate hole dimensions and straightness.",
    "Flexible Configurations: Available in single-spindle and multi-spindle options, subject to requirements.",
    "Programmable Operations: CNC-based control for repeatable machining cycles.",
    "Compact Sized Machine: Less Floor Area Occupied",
    "Customized Solutions: Configurable to suit specific materials, hole depths and production needs, Customized workholding solutions",
    "Precision spindle system for small-diameter drilling",
  ],
  tables: [
    {
      columns: ["GDSA-M-01", "GDSA-M-02"],
      rows: [
        { label: "Drill Diameter Range", values: ["Ø1- Ø4 mm", "Ø2- Ø6 mm"] },
        { label: "Spindles", values: ["1 or 2", "1 or 2"] },
        {
          label: "Spindle Type",
          values: [
            "Motorised / High Speed Spindles HSK Tapered",
            "Motorised / High Speed Spindles HSK Tapered",
          ],
        },
        {
          label: "Part Details",
          values: [
            "OD Range Ø4 - Ø24mm, Max Length - 300mm",
            "OD Range Ø4 - Ø24mm, Max Length - 300mm",
          ],
        },
        {
          label: "Spindle Speed",
          values: ["Upto 18000 RPM", "Upto 10000 RPM"],
        },
        {
          label: "Component Rotation",
          values: ["Upto 1800 RPM", "Upto 1000 RPM"],
        },
        { label: "Max Pressure", values: ["160 bar", "140 bar"] },
        { label: "Control System", values: ["FANUC CNC", "FANUC CNC"] },
      ],
    },
  ],
  isFeatured: true,
};

const SINGLE_AXIS_GUN_DRILLING_MACHINE: IMachine = {
  key: "single_axis_gun_drilling_machine",
  name: "Single Axis Gun Drilling Machine",
  description:
    "Swaraj Single Axis Gun Drilling Machines designed for precision deep-hole drilling with excellent hole straightness and dimensional accuracy. Equipped with CNC-controlled feed and high-pressure coolant systems, these machines deliver reliable performance across a wide range of industrial applications.",
  tagline: "Compact, repeatable gun drilling.",
  applications: [
    "Automotive Components: Crankshafts, camshafts, shafts and precision automotive parts.",
    "Mould & Die Manufacturing: Deep-hole drilling for mould cooling channels.",
    "Hydraulic Components: Hydraulic cylinders, valve bodies and manifolds.",
    "Aerospace Components: Precision deep-hole drilling in specialized engineering components.",
    "General Engineering: Shafts, rods, tubes and other components requiring deep, accurate holes.",
    "Oil & Gas Industry: Drilling applications in specialized valves and fluid-handling components.",
    "Tool & Die Industry: Precision drilling in dies, tooling and machine components.",
    "Industrial Machinery: Deep-hole drilling in custom-engineered components.",
  ],
  solutions: [
    "automotive_shafts",
    "medical",
    "die_mould",
    "defence",
    "aerospace",
    "textile_spindles",
    "general_engineering",
  ],

  assets: [
    {
      type: "image",
      url: "/assets/machines/GDM_NR_1.webp",
      alt: "Single Axis Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_NR_2.webp",
      alt: "Single Axis Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_NR_3.webp",
      alt: "Single Axis Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_NR_4.webp",
      alt: "Single Axis Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_NR_5.webp",
      alt: "Single Axis Gun Drilling machine",
    },
  ],
  industries: [],
  tags: ["Gun Drilling", "CNC Controlled", "Single Axis"],
  videoUrl: "https://www.youtube.com/watch?v=nbsU0v_BU04",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drills"],
  features: [
    "Precision spindle system for small-diameter drilling.",
    "CNC-controlled drilling cycles for repeatability.",
    "High-pressure coolant delivery through the gun drill.",
    "Configurable spindle speed and feed parameters.",
    "Customized workholding solutions.",
    "Compact Sized Machine - Less Floor Area Occupied.",
  ],
  tables: [
    {
      columns: ["GDSA-01", "GDSA-02", "GDSA-03", "GDSA-04"],
      rows: [
        {
          label: "Drill Diameter Range",
          values: ["Ø3- Ø8 mm", "Ø4- Ø15 mm", "Ø5- Ø25 mm", "Ø10- Ø32 mm"],
        },
        {
          label: "Spindles",
          values: ["1 / 2", "1 / 2 / 4", "1 / 2 / 4", "1 / 2"],
        },
        {
          label: "Spindle Type",
          values: [
            "BT30 Belt Driven Spindles",
            "BT30 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
          ],
        },
        {
          label: "Component OD Range",
          values: ["Ø10- Ø35 mm", "Ø15- Ø50 mm", "Ø15- Ø75 mm", "Ø15- Ø100 mm"],
        },
        {
          label: "Spindle Speed",
          values: [
            "Upto 7000 RPM",
            "Upto 5500 RPM",
            "Upto 5000 RPM",
            "Upto 3000 RPM",
          ],
        },
        {
          label: "Component Rotation",
          values: ["300 RPM", "200 RPM", "200 RPM", "100 RPM"],
        },
        {
          label: "Max Pressure",
          values: ["140 bar", "100 bar", "100 bar", "60 bar"],
        },
        {
          label: "Control System",
          values: [
            "DELTA / FANUC",
            "DELTA / FANUC",
            "DELTA / FANUC",
            "DELTA / FANUC",
          ],
        },
      ],
    },
  ],
};

const KNEE_TYPE_GUN_DRILLING_MACHINE: IMachine = {
  key: "knee_type_gun_drilling_machine",
  name: "Knee Type Gun Drilling Machine",
  tagline:
    "Precision deep-hole drilling in large and complex components, including moulds and die blocks.",
  category: "Gun Drilling Machines",
  description:
    "Swaraj manufactures Knee-Type CNC Gun Drilling Machines designed for precision deep-hole drilling in large and complex components, including moulds and die blocks. With a flexible knee-type machine structure, CNC-controlled axes and high-pressure coolant systems, these machines enable accurate horizontal and vertical drilling operations with excellent hole straightness and repeatability.",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drill"],
  solutions: ["die_mould", "automotive_shafts", "tool_and_die"],
  assets: [
    {
      type: "image",
      url: "/assets/machines/GDM_KT_1.webp",
      alt: "Micro Gun Drilling machine Knee type",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_KT_2.webp",
      alt: "Micro Gun Drilling machine Knee type",
    },
  ],
  industries: [
    "Die Mould",
    "Automotive",
    "Tool & Die",
    "General Engineering",
    "Industrial Machinery",
  ],
  tags: [
    "Knee Type",
    "Gun Drilling Machine",
    "CNC",
    "Deep Hole Drilling",
    "Die Mould",
    "Mould Cooling Channels",
  ],
  videoUrl: "",
  ogImageUrl: "",
  images: [],
  features: [
    "Knee-Type Machine Construction: Rigid machine structure designed for machining large and heavy components.",
    "Flexible Drilling Orientation: Supports drilling at different positions and orientations on moulds and die blocks.",
    "Precision Feed System: Servo-driven feed axes for accurate positioning and controlled drilling.",
    "High-Pressure Coolant System: Efficient tool cooling and chip evacuation during deep-hole drilling.",
    "Wide Component Capacity: Suitable for machining large moulds, dies and complex engineering components.",
    "Flexible Workholding: T-slot table for convenient component mounting and positioning.",
    "Programmable Drilling Cycles: CNC-controlled operations for repeatability and reduced operator intervention.",
    "Precision Spindle Assembly: Designed for stable drilling performance and consistent hole quality.",
    "Customized Configurations: Adaptable to different drill diameters, drilling depths, component sizes and production requirements.",
  ],
  applications: [
    "Mould & Die Manufacturing: Deep-hole drilling of cooling channels in moulds and die blocks.",
    "Plastic Injection Moulds: Drilling horizontal and vertical cooling passages.",
    "Die Casting Moulds: Deep-hole drilling for temperature-control and cooling circuits.",
    "Automotive Tooling: Drilling deep holes in large tooling and fixture components.",
    "Large Engineering Components: Precision drilling in heavy and complex workpieces.",
    "Industrial Moulds: Drilling intersecting and angled cooling holes.",
    "General Engineering: Deep-hole drilling in large blocks and machine components.",
    "Tool & Die Industry: Precision drilling of cooling and lubrication passages in dies and tooling.",
  ],
  tables: [],
  isFeatured: true,
};

const MULTI_SPINDLE_GUN_DRILLING_MACHINE: IMachine = {
  key: "multi_spindle_gun_drilling_machine",
  name: "Multi Spindle Gun Drilling Machine",
  description:
    "Swaraj manufactures Multi-Spindle Gun Drilling Machines designed for simultaneous deep-hole drilling of multiple holes with high precision and productivity. Available in 2-spindle, 4-spindle and customized configurations, these machines are ideal for batch production and applications requiring consistent hole accuracy and reduced cycle time.",
  tagline: "Accurate, straight drilling with multiple spindles.",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drill"],
  applications: [
    "Automotive Shafts - Input Output Shafts, Crankshafts, Gear Shafts",
    "Hydraulic Components",
    "Drill Collars, Connectors & Adapters, Oil Drill pipes",
    "Instruments & Implants",
    "General Engineering",
  ],
  solutions: [
    "automotive_shafts",
    "medical",
    "die_mould",
    "defence",
    "aerospace",
    "textile_spindles",
    "general_engineering",
  ],
  assets: [
    {
      type: "image",
      url: "/assets/machines/GDM_MS_1.webp",
      alt: "Multi Spindle Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_MS_2.webp",
      alt: "Multi Spindle Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_MS_3.webp",
      alt: "Multi Spindle Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_MS_4.webp",
      alt: "Multi Spindle Gun Drilling machine",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_MS_5.webp",
      alt: "Multi Spindle Gun Drilling machine",
    },
  ],
  industries: [],
  tags: ["Gun Drilling", "Multi-Spindle", "Deep Hole Drilling"],
  videoUrl: "https://www.youtube.com/watch?v=UwujHcN4kCw",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Component counter rotation to ensure excellent straightness.",
    "Rotating cone / self-centering chuck for proper part clamping.",
    "High pressure coolant filtration system.",
    "Tool life monitoring",
    "Reduced Cycle Time",
    "Application specific design",
  ],
  tables: [
    {
      columns: ["GDSA-01", "GDSA-02", "GDSA-03"],
      rows: [
        {
          label: "Drill Diameter Range",
          values: ["Ø3- Ø8 mm", "Ø4- Ø15 mm", "Ø5- Ø25 mm"],
        },
        { label: "Spindles", values: ["2 / 4", "2 / 4", "2 / 4"] },
        {
          label: "Spindle Type",
          values: [
            "BT30 Belt Driven Spindles",
            "BT30 Belt Driven Spindles",
            "BT40 Belt Driven Spindles",
          ],
        },
        {
          label: "Component OD Range",
          values: ["Ø10- Ø35 mm", "Ø15- Ø50 mm", "Ø15- Ø75 mm"],
        },
        {
          label: "Spindle Speed",
          values: ["Upto 7000 RPM", "Upto 5500 RPM", "Upto 5000 RPM"],
        },
        {
          label: "Component Rotation",
          values: ["300 RPM", "200 RPM", "200 RPM"],
        },
        { label: "Max Pressure", values: ["140 bar", "100 bar", "100 bar"] },
        {
          label: "Control System",
          values: ["DELTA / FANUC", "DELTA / FANUC", "DELTA / FANUC"],
        },
      ],
    },
  ],
};

// Gas Cylinder Neck Machining

const GAS_CYLINDER_APPLICATIONS = [
  "Gas cylinders Ø232 mm",
  "Gas cylinders Ø316 mm",
  "Gas cylinders Ø356 mm",
  "Gas cylinders Ø406 mm",
  "Cylinder lengths from 600 mm to 2000 mm",
];

const HMC_ASSETS: IMachineAsset[] = [
  {
    type: "image",
    alt: "Special Purpose Machine",
    url: "/assets/machines/GGNM_1.webp",
  },
  {
    type: "image",
    alt: "Special Purpose Machine",
    url: "/assets/machines/GGNM_2.webp",
  },
  {
    type: "image",
    alt: "Special Purpose Machine",
    url: "/assets/machines/GGNM_3.webp",
  },
  {
    type: "image",
    alt: "Special Purpose Machine",
    url: "/assets/machines/GGNM_4.webp",
  },
  {
    type: "image",
    alt: "Special Purpose Machine",
    url: "/assets/machines/GGNM_5.webp",
  },
];

const GAS_CYLINDER_HMC_MACHINE: IMachine = {
  key: "gas_cylinder_hmc_machine",
  name: "HMC Type Complete Machining Solution",
  description:
    "A Horizontal Machining Center based complete solution for gas cylinder neck machining. The cylinder is held in a fixture and clamped from the back side, and remains stationary while different tools stored in the tool magazine (Automatic Tool Changer) are called as per requirement.",
  tagline:
    "Complete gas cylinder neck machining on a Horizontal Machining Center.",
  applications: GAS_CYLINDER_APPLICATIONS,
  assets: [
    ...HMC_ASSETS,
    {
      type: "image",
      url: "/assets/machines/HMC_1.webp",
      alt: "HMC Type Complete Machine",
    },
    {
      type: "image",
      url: "/assets/machines/HMC_2.webp",
      alt: "HMC Type Complete Machine",
    },
  ],
  solutions: ["gas_cylinder_neck_machining"],
  industries: [],
  tags: ["Turning", "Facing", "Drilling", "Reaming", "Threading"],
  videoUrl: "https://www.youtube.com/embed/ApWrepox1uY",
  category: "Gas cylinder solutions",
  ogImageUrl: "",
  features: [
    "Cylinder held in a fixture and clamped from the back side; the cylinder is stationary.",
    "Tools stored in a tool magazine (Automatic Tool Changer) and called as per requirement.",
    "Auto offset measurement with a probe to measure the bore center point exactly before carrying out operations.",
    "Latest FANUC CNC control with ATC, probe and fixture for auto loading.",
    "Auto loading & unloading of cylinders.",
    "Horizontal Machining Center with X, Y and Z axis strokes of 500 mm each and BT 50 spindle.",
    "Conveyor for chip collection and coolant tank at the back side of the machine.",
  ],
  isFeatured: true,
};

const GAS_CYLINDER_TURNING_SPM: IMachine = {
  key: "gas_cylinder_turning_spm",
  name: "Turning Type Special Purpose Machine",
  description:
    "A special purpose machine for gas cylinder neck machining where the cylinder is held in a special bearing journal and clamped from the back side. The job rotates while the tools remain stationary.",
  tagline: "Turning, facing and drilling of gas cylinder necks.",
  applications: GAS_CYLINDER_APPLICATIONS,
  assets: [
    {
      type: "image",
      url: "/assets/machines/HMC_1.webp",
      alt: "Turning type SPM",
    },
    {
      type: "image",
      url: "/assets/machines/HMC_2.webp",
      alt: "Turning type SPM",
    },
  ],
  solutions: ["gas_cylinder_neck_machining"],
  industries: [],
  tags: ["Turning", "Facing", "Drilling"],
  videoUrl: "https://www.youtube.com/embed/RGFsdCiJveU",
  category: "Gas cylinder",
  ogImageUrl: "",
  features: [
    "Cylinder held in a special bearing journal and clamped from the back side.",
    "Job rotates and tools are stationary.",
    "Linear tooling used for different operations.",
    "Auto offset measurement for neck face sensing.",
    "FANUC CNC system with servo controlled feed axis and spindle servo motor.",
    "Auto loading & unloading of cylinders.",
  ],
  isFeatured: true,
};

const GAS_CYLINDER_DRILLING_SPM: IMachine = {
  key: "gas_cylinder_drilling_spm",
  name: "Drilling Special Purpose Machine",
  description:
    "A special purpose drilling machine for gas cylinder necks. The job is held in a fixture and does not rotate, while the tool held in a spindle taper moves forward for drilling.",
  tagline: "Hydraulic drilling of gas cylinder necks.",
  applications: GAS_CYLINDER_APPLICATIONS,
  solutions: ["gas_cylinder_neck_machining"],
  assets: [
    {
      type: "image",
      url: "/assets/machines/SPM_1.webp",
      alt: "Drilling Special Purpose Machine",
    },
    {
      type: "image",
      url: "/assets/machines/SPM_2.webp",
      alt: "Drilling Special Purpose Machine",
    },
  ],
  industries: [],
  tags: ["Drilling"],
  videoUrl: "",
  category: "Gas cylinder",
  ogImageUrl: "",
  features: [
    "Job held in a fixture and not rotating.",
    "Tool held in a spindle taper and moves forward for drilling.",
    "Hydraulic drilling slide.",
    "PLC control with hydraulic feed for drilling.",
    "Auto loading & unloading of cylinders.",
  ],
};

const THREE_AXIS_GUN_DRILLING_MACHINE: IMachine = {
  key: "three_axis_gun_drilling_machine",
  name: "Three Axis Gun Drilling Machine",
  tagline: "",
  description:
    "Swaraj manufactures Three-Axis CNC Gun Drilling Machines designed for precision deep-hole drilling in complex components requiring flexible positioning and multiple drilling orientations. Equipped with CNC-controlled X, Y and Z axes, these machines provide accurate positioning, excellent hole straightness and efficient machining of moulds, dies and large engineering components.",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drill"],
  applications: [
    "Mould & Die Manufacturing: Deep-hole drilling of cooling channels in injection moulds and die blocks.",
    "Plastic Injection Moulds: Drilling horizontal, vertical and inclined cooling passages.",
    "Die Casting Moulds: Precision drilling of cooling and temperature-control channels.",
    "Automotive Components: Deep-hole drilling in complex automotive tooling and fixtures.",
    "Large Engineering Components: Drilling multiple holes at different positions on large workpieces.",
    "Tool & Die Industry: Precision drilling of cooling and lubrication passages.",
    "Industrial Machinery: Deep-hole drilling in machine structures and specialized components.",
    "General Engineering: Machining components requiring flexible three-axis positioning and deep-hole drilling.",
  ],
  solutions: [
    "die_mould",
    "automotive_shafts",
    "tool_and_die",
    "gun_drill_job_work",
  ],
  assets: [
    {
      type: "image",
      url: "/assets/machines/GDM_KT_1.webp",
      alt: "Micro Gun Drilling machine Three Axis",
    },
    {
      type: "image",
      url: "/assets/machines/GDM_KT_2.webp",
      alt: "Micro Gun Drilling machine Three Axis",
    },
  ],
  industries: [],
  tags: [],
  videoUrl: "",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Three-Axis CNC Control: Independent X, Y and Z axis movements for flexible positioning and machining.",
    "Precision Drilling: Designed for accurate deep-hole drilling with consistent hole straightness.",
    "Flexible Hole Positioning: Enables drilling at multiple locations across large workpieces.",
    "Servo-Driven Feed System: Provides controlled drilling feed and precise axis movement.",
    "High-Pressure Coolant System: Ensures effective tool cooling and chip evacuation.",
    "Rigid Machine Construction: Designed for stability during deep-hole drilling operations.",
    "Programmable Machining Cycles: CNC-controlled drilling operations for repeatability.",
    "Flexible Workholding: Suitable for different component sizes and geometries.",
    "Application-Specific Configuration: Customizable drill diameter, depth, spindle arrangement and workpiece capacity.",
  ],
  isFeatured: true,
};

const PELLET_DIE_GUN_DRILLING_MACHINE: IMachine = {
  key: "pellet_die_gun_drilling_machine",
  name: "Pellet Die Gun Drilling Machine",
  isFeatured: true,
  tagline: "",
  description:
    "Swaraj Automation manufactures high-precision Pellet Die Gun Drilling Machines designed for accurate and consistent deep-hole drilling in pellet mill dies. Engineered to meet the demands of pellet die manufacturing, these machines deliver reliable drilling performance, excellent hole straightness and consistent quality across multiple drilling cycles. Our machines are designed to accommodate different pellet die sizes and drilling requirements, with CNC-controlled feed systems, high-pressure coolant delivery and efficient chip evacuation. Available in single-spindle and multi-spindle configurations, they help improve productivity, reduce machining time and maintain precision in pellet die hole patterns.",
  operationsPerformed: ["Brazed Tipped Gun Drills", "Insert Type Gun Drill"],
  applications: ["Pellet Die", "Ring Die", "Flat Die", "Rollers"],
  assets: [
    {
      type: "image",
      url: "/assets/machines/PD_GD_2.webp",
      alt: "Pellet Die Gun Drilling Machine",
    },
    {
      type: "image",
      url: "/assets/machines/PD_GD_8.webp",
      alt: "Pellet Die Gun Drilling Machine",
    },
    {
      type: "image",
      url: "/assets/machines/PD_GD_9.webp",
      alt: "Pellet Die Gun Drilling Machine",
    },
    {
      type: "image",
      url: "/assets/machines/PD_GD_10.webp",
      alt: "Pellet Die Gun Drilling Machine",
    },
  ],
  solutions: ["pellet_die", "ring_die"],
  industries: [],
  tags: [
    "Gun Drilling",
    "pellet die",
    "Pellet mill spares",
    "Pellet die gun drilling",
    "Ring Die",
    "Ring Die Manufacturing",
  ],
  videoUrl: "https://www.youtube.com/watch?v=Bnsp-p8_ioY",
  category: "Gun Drilling Machines",
  ogImageUrl: "",
  features: [
    "Job Program:- Auto generation of part program after entering pellet die data. Automatically calculates the distance of vertical & rotary movement and remembers even after machine is switched off, in case of wrong data message appears.",
    "Hydraulic Coolant:- Solenoid valve, Pressure switches, Rotary union for each axis. Steel piping of coolant with proper termination on machine base.",
    "Control System:- FANUC CNC controller with AC Servo motors and drives with operator panel and indicators. Motors are with absolute position feedback. CNC system is of 4/6/8/10 axis control.",
    "Tool Holders:- Tool holders ISO or HSK.",
    "Drill Feed:- Drill Feed - Drill Feed units complete with beds / slides, Ball screw nut assembly, AC Servo motors for each individual drill head. Feed rate 0-1000 mm/min, Rapid 10,000 mm/min.",
    "Electrical:- Standalone type Control Panel with AC unit switch gears and cables of reputed make. CNC control will be mounted on one side of panel or pendant for CNC control can be provided.",
  ],
  tables: [
    {
      columns: ["GDPE-01", "GDPE-02", "GDPE-03"],
      rows: [
        {
          label: "Drill Diameter Range",
          values: ["Ø1- Ø2.5 mm", "Ø2.5- Ø5 mm", "Ø4- Ø15 mm"],
        },
        {
          label: "Number of Spindles",
          values: [
            "1 / 2 / 4 / 6 / 8",
            "1 / 2 / 4 / 6 / 8",
            "1 / 2 / 4 / 6 / 8",
          ],
        },
        {
          label: "Spindle Type",
          values: [
            "Special Spindles according to drill Diameter Range BT / HSK tapered, both Belt driven & Motorised Spindle Configuration available",
            "Special Spindles according to drill Diameter Range BT / HSK tapered, both Belt driven & Motorised Spindle Configuration available",
            "Special Spindles according to drill Diameter Range BT / HSK tapered, both Belt driven & Motorised Spindle Configuration available",
          ],
        },
        {
          label: "Pellet Die Range",
          values: [
            "Customised Ranges from Ø300 to Ø1500mm Pellet die Width: Up to 450mm",
            "Customised Ranges from Ø300 to Ø1500mm Pellet die Width: Up to 450mm",
            "Customised Ranges from Ø300 to Ø1500mm Pellet die Width: Up to 450mm",
          ],
        },
        {
          label: "Spindle Speed",
          values: ["Up to 1800 RPM", "Up to 1000RPM", "Up to 7000 RPM"],
        },
        {
          label: "Die Indexing",
          values: [
            "Pellet Die Placed on high indexing accuracy rotary table",
            "Pellet Die Placed on high indexing accuracy rotary table",
            "Pellet Die Placed on high indexing accuracy rotary table",
          ],
        },
        { label: "Max Pressure", values: ["180 bar", "140 bar", "110 bar"] },
        { label: "Control System", values: ["FANUC", "FANUC", "FANUC"] },
      ],
    },
  ],
};

const COUNTERSINKING_MACHINE_FOR_PELLET_DIE: IMachine = {
  key: "countersinking_machine_for_pellet_die",
  name: "Countersinking machine for Pellet Die",
  tagline: "",
  description:
    "Swaraj Automation manufactures CNC Pellet Die Countersinking Machines designed for precise and consistent chamfering, countersinking and counterboring of holes in pellet mill ring dies. Developed for pellet die manufacturing and refurbishment applications, the machine enables controlled machining of hole entrances and pressure-relief openings to achieve uniform geometry and consistent finishing. CNC-controlled movement and adjustable machining depth help maintain repeatability across large numbers of holes. Designed to improve productivity and reduce manual intervention, Swaraj Automation's pellet die countersinking solutions can be customized to suit different ring die dimensions, hole diameters, hole patterns and production requirements.",
  operationsPerformed: [],
  applications: ["PELLET DIE", "RING DIE"],
  solutions: ["pellet_die", "ring_die"],
  assets: [
    {
      type: "image",
      url: "/assets/machines/PD_CM_1.webp",
      alt: "Countersinking machine for pellet die",
    },
    {
      type: "image",
      url: "/assets/machines/PD_CM_2.webp",
      alt: "Countersinking machine for pellet die",
    },
  ],
  industries: [],
  tags: [
    "CNC Pellet Die Countersinking Machine",
    "Pellet Ring Die Countersinking Machine",
    "Automatic Ring Die Chamfering Machine",
    "Pellet Die Refurbishment Machine",
    "CNC Ring Die Machining",
    "Pellet Mill Die Finishing Machine",
    "Ring Die Counterboring Machine",
    "Pellet Die Manufacturing Machinery",
    "Biomass Pellet Die Machine",
    "Feed Pellet Mill Machinery",
    "Ring Die Hole Chamfering",
    "Swaraj Automation",
  ],
  videoUrl: "",
  category: "Pellet Die Machines",
  ogImageUrl: "",
  features: [
    "CNC-Controlled Machining: Accurate and repeatable countersinking operations.",
    "Automatic Hole Positioning: Programmed machining of holes arranged in circular patterns.",
    "Consistent Chamfering: Uniform hole entrance geometry across the ring die.",
    "Adjustable Machining Depth: Controlled countersinking depth to suit application requirements.",
    "Multiple Machining Operations: Chamfering, countersinking and counterboring, depending on configuration.",
    "Flexible Die Compatibility: Designed for different ring die sizes and hole patterns.",
    "Improved Productivity: Reduced manual intervention and consistent machining cycles.",
    "Application-Specific Design: Customizable machine configurations to meet individual production requirements.",
  ],
};

const DEEP_DRILLING_MACHINE_FOR_PELLET_DIE: IMachine = {
  key: "deep_drilling_machine_for_pellet_die",
  name: "Deep Drilling machine for pellet die",
  tagline: "",
  description:
    "Swaraj Automation manufactures CNC Pellet Die Deep Drilling Machines designed for secondary drilling and hole-enlargement operations in pellet mill ring dies. These machines are used to enlarge or relieve existing gun-drilled holes from the outer surface of the die to achieve the required hole geometry and depth. Equipped with CNC-controlled axes and precision rotary indexing, the machine enables accurate positioning of individual holes and consistent machining across the die. Available in duplex configurations, it can accommodate two pellet dies simultaneously, helping improve productivity and reduce operator intervention. Designed for pellet die manufacturing and refurbishment applications, Swaraj Automation offers customized deep drilling solutions to suit different ring die diameters, hole sizes and machining requirements.",
  operationsPerformed: [],
  applications: ["PELLET DIE", "RING DIE"],
  solutions: ["pellet_die", "ring_die"],
  industries: [],
  assets: [
    {
      type: "image",
      url: "/assets/machines/ODDM_1.webp",
      alt: "Deep Drilling Machine for pellet die",
    },
    {
      type: "video",
      url: "/assets/machines/ODDM_2.mp4",
      alt: "Deep Drilling Machine for pellet die",
    },
    {
      type: "image",
      url: "/assets/machines/ODDM_3.webp",
      alt: "Deep Drilling Machine for pellet die",
    },
    {
      type: "image",
      url: "/assets/machines/ODDM_5.webp",
      alt: "Deep Drilling Machine for pellet die",
    },
  ],
  tags: [
    "Pellet Die Deep Drilling Machine",
    "CNC Pellet Die Drilling Machine",
    "Pellet Ring Die Deep Drilling",
    "Pellet Die Hole Enlargement Machine",
    "Pellet Die Relief Drilling Machine",
    "Duplex Deep Drilling Machine",
    "Ring Die Machining Machine",
    "Pellet Mill Die Manufacturing Machinery",
    "CNC Ring Die Drilling",
    "Pellet Die Hole Relief",
    "Pellet Die Production Equipment",
    "Special Purpose Drilling Machine",
    "Swaraj Automation",
  ],
  videoUrl: "",
  category: "Pellet Die Machines",
  ogImageUrl: "",
  features: [
    "CNC-Controlled Machining: Accurate and repeatable hole positioning.",
    "Precision Rotary Indexing: Controlled rotation for machining holes around the ring die.",
    "Hole Enlargement and Relief: Enlarges existing gun-drilled holes to the specified diameter and depth.",
    "Duplex Configuration: Option to machine two pellet dies simultaneously, depending on machine configuration.",
    "Programmable Machining Cycles: CNC-based positioning and movement control.",
    "Flexible Workpiece Capacity: Configurable for different ring die diameters and heights.",
    "Reduced Manual Intervention: Automated positioning helps improve operational efficiency.",
    "Custom-Built Solutions: Machine configurations tailored to specific pellet die requirements.",
  ],
};

const SPECIAL_PURPOSE_MACHINE: IMachine = {
  key: "special_purpose_machine",
  name: "Special purpose machine",
  tagline: "",
  description:
    "To suit the high end production needs, Swaraj Automation indigenously designs Special Purpose machines for components that have mass production. These machine are a combination of automatic job clamping, autoloaders and unloaders, limit switches, sensors, logic controls, rotary tables, etc. For customers efficient and easy to use purpose the machines are very much customizable. Our SPM's are suitable for components which have operations like facing, milling, turning, boring, chamfer, spot facing, thread milling, tapping, reaming. Our team of designers design the fixtures, special tooling and help the machine to give best performance.",
  operationsPerformed: [],
  applications: ["Mass production Components for Metal Cutting Operations"],
  solutions: ["mass_production_components", "automotive_shafts"],
  industries: [],
  assets: [
    {
      type: "image",
      url: "/assets/machines/SPM_1.webp",
      alt: "Special Purpose Machine",
    },
    {
      type: "image",
      url: "/assets/machines/SPM_2.webp",
      alt: "Special Purpose Machine",
    },
  ],
  tags: [
    "Special Purpose Machines",
    "SPM Manufacturer India",
    "CNC Special Purpose Machine",
    "Automatic Drilling Machine",
    "Customized Industrial Machinery",
    "Industrial Automation Solutions",
    "Multi-Operation Machining Machine",
    "Hydraulic Drilling SPM",
    "CNC Machining Solutions",
    "Automatic Loading Unloading Machine",
    "Automotive SPM",
    "Gas Cylinder Neck Machining Machine",
    "Dedicated Production Machine",
    "Custom Machine Design",
    "Precision Engineering",
    "Swaraj Automation",
  ],
  videoUrl: "",
  category: "Special Purpose Machines",
  ogImageUrl: "",
  features: [
    "Customized Machine Design: Engineered to meet specific component and process requirements.",
    "Multi-Operation Capability: Integration of drilling, tapping, milling, reaming and other machining operations as required.",
    "CNC and PLC Automation: Programmable control for accurate and repeatable operations.",
    "Automatic Loading and Unloading: Optional material handling to reduce manual intervention.",
    "Dedicated Fixtures and Clamping: Component-specific workholding for reliable positioning.",
    "Hydraulic and Pneumatic Systems: Integrated actuation and clamping solutions where required.",
    "Production Efficiency: Designed to reduce cycle time and improve output.",
    "Quality and Repeatability: Consistent machining through controlled processes.",
    "Flexible Integration: Solutions adaptable to existing production lines and manufacturing layouts.",
  ],
};

const GANTRY_AND_PLANO_MACHINE: IMachine = {
  key: "gantry_and_plano_machine",
  name: "Gantry and Plano Machine",
  description:
    "3 Axis High Speed Plano-Millers and Gantry-Millers of different capacity for machining of both metallic and non-metallic materials The machines are designed for large parts wherein floor space required is to be minimised. The machines comprise of job fix on non moving table and the spindle head travelling along the crossrail (Y Axis) on the sides bedways (X Axis).The Y axis that is the cross rail has machining unit which travels across the width of the table and vertical slide (Z Axis) which approaches the tools to the job. There are various configurations and the specifications of the machine are tailored by us depending upon the size, shape, material of the job.",
  applications: [],
  solutions: [],
  industries: [],
  tags: ["Gantry", "Plano", "Milling"],
  assets: [
    {
      type: "image",
      url: "/assets/machines/GPMM_1.webp",
      alt: "Gantry and Plano Machine",
    },
    {
      type: "image",
      url: "/assets/machines/GPMM_2.jpg",
      alt: "Gantry and Plano Machine",
    },
    {
      type: "image",
      url: "/assets/machines/GPMM_3.webp",
      alt: "Gantry and Plano Machine",
    },
    {
      type: "image",
      url: "/assets/machines/GPMM_4.webp",
      alt: "Gantry and Plano Machine",
    },
  ],
  videoUrl: "",
  category: "Milling Machines",
  ogImageUrl: "",
  features: [],
  tagline: "",
  tables: [
    {
      rowHeader: "Specifications",
      columns: ["Plano Drill", "Plano Miller"],
      rows: [
        {
          label:
            "Travels:\nX Axis (to Gantry)\nY Axis (crossrail)\nZ Axis (Spindle Head)",
          values: ["4000mm\n4000mm\n500mm", "4500mm\n3500mm\n400mm"],
        },
        {
          label: "Spindle Head",
          values: ["Max100CO Suhner", "Swaraj Make"],
        },
        { label: "Spindle Speed", values: ["6000rpm", "8000rpm"] },
        {
          label: "Spindle Nose",
          values: ["ISO40 (option HSK63)", "ISO40 (option HSK63)"],
        },
        { label: "Spindle Power", values: ["11Kw", "7.5Kw"] },
        { label: "Tool Clamp/Unclamp", values: ["Pneumatic", "Pneumatic"] },
        {
          label: "Job Material",
          values: ["Metallic", "Metallic/Nonmetallic"],
        },
        {
          label: "Operation",
          values: ["Drilling, Thread Milling", "Milling (five Sides)"],
        },
        {
          label: "CNC Controller",
          values: ["FANUC/SIEMENS", "FANUC/SIEMENS"],
        },
        { label: "Feed Rate", values: ["", ""] },
        { label: "Rapid Rate", values: ["", ""] },
        { label: "Through Tool Coolant", values: ["Yes", "Yes"] },
        {
          label: "Drilling Capacity",
          values: ["ø35", "All milling cutters"],
        },
        {
          label: "Tapping Capacity",
          values: ["M27x2", "All milling cutters"],
        },
        {
          label: "Measuring Means",
          values: [
            "0.01mm least count\nHeidenhain (X, Y Z Axis)",
            "0.01mm least count\nHeidenhain (X, Y Z Axis)",
          ],
        },
      ],
    },
  ],
};

export const MACHINES_MAP = {
  drilling_reaming_machine: DRILLING_REAMING_MACHINE,
  micro_gun_drilling_machine: MICRO_GUN_DRILLING_MACHINE,
  knee_type_gun_drilling_machine: KNEE_TYPE_GUN_DRILLING_MACHINE,
  single_axis_gun_drilling_machine: SINGLE_AXIS_GUN_DRILLING_MACHINE,
  multi_spindle_gun_drilling_machine: MULTI_SPINDLE_GUN_DRILLING_MACHINE,
  gas_cylinder_hmc_machine: GAS_CYLINDER_HMC_MACHINE,
  gas_cylinder_turning_spm: GAS_CYLINDER_TURNING_SPM,
  gas_cylinder_drilling_spm: GAS_CYLINDER_DRILLING_SPM,
  three_axis_gun_drilling_machine: THREE_AXIS_GUN_DRILLING_MACHINE,
  pellet_die_gun_drilling_machine: PELLET_DIE_GUN_DRILLING_MACHINE,
  countersinking_machine_for_pellet_die: COUNTERSINKING_MACHINE_FOR_PELLET_DIE,
  deep_drilling_machine_for_pellet_die: DEEP_DRILLING_MACHINE_FOR_PELLET_DIE,
  gantry_and_plano_machine: GANTRY_AND_PLANO_MACHINE,
  special_purpose_machine: SPECIAL_PURPOSE_MACHINE,
};

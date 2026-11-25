import { MACHINES_MAP } from "@/data/static/machines/machines";

export const getMachine = (machineKey: keyof typeof MACHINES_MAP) => {
  const machine = MACHINES_MAP?.[machineKey] ?? null;
  return machine;
};

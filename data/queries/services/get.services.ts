import { SERVICES_MAP } from "@/data/static/services/services";

export const getService = (serviceKey: keyof typeof SERVICES_MAP) => {
  return SERVICES_MAP?.[serviceKey] ?? null;
};

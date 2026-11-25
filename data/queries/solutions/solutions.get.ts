import { SOLUTIONS_MAP } from "@/data/static/solutions/solutions";

export const getSolution = (solutionKey: keyof typeof SOLUTIONS_MAP) => {
  const solution = SOLUTIONS_MAP?.[solutionKey] ?? null;
  return solution;
};

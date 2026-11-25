import SolutionPageComponent from "@/components/templates/solution-page";
import { getSolution } from "@/data/queries/solutions/solutions.get";
import { SOLUTIONS_MAP } from "@/data/static/solutions/solutions";
import { slugToSnakeCase, toKebabCase } from "@/utils/case-converter";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const instant = false;

/**
 * Props for the Next.js page component representing a machine based on its slug.
 */
interface INextPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const solutions: { slug: string }[] = Object.keys(SOLUTIONS_MAP).map(
    (key) => ({
      slug: toKebabCase(key),
    }),
  );
  return solutions?.map((solution) => ({
    slug: solution.slug,
  }));
}

/**
 * Dynamic metadata generator
 */
export async function generateMetadata({
  params,
}: INextPageProps): Promise<Metadata> {
  const solutionSlug = (await params).slug;

  return {
    title: solutionSlug, // TODO: Replace with the actual machine name once available
  };
}

/**
 *
 * @param params The props object containing the route parameters.
 * @param searchParams The props object containing the search parameters.
 * @returns The JSX element representing the machine page.
 */
export default async function SolutionsPage({ params }: INextPageProps) {
  const { slug: solutionSlug } = await params;

  const solution = getSolution(
    slugToSnakeCase(solutionSlug) as keyof typeof SOLUTIONS_MAP,
  );

  if (!solution) {
    return notFound();
  }

  return <SolutionPageComponent solution={solution} />;
}

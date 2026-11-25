import { MachinePageComponent } from "@/components/templates/machine-page-component";
import { getMachine } from "@/data/queries/machines/machines.get";
import { MACHINES_MAP } from "@/data/static/machines/machines";
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
  const machines: { slug: string }[] = Object.keys(MACHINES_MAP).map((key) => ({
    slug: toKebabCase(key),
  }));
  return machines?.map((machine) => ({
    slug: machine.slug,
  }));
}

/**
 * Dynamic metadata generator
 */
export async function generateMetadata({
  params,
}: INextPageProps): Promise<Metadata> {
  const machineSlug = (await params).slug;

  return {
    title: machineSlug, // TODO: Replace with the actual machine name once available
  };
}

/**
 *
 * @param params The props object containing the route parameters.
 * @param searchParams The props object containing the search parameters.
 * @returns The JSX element representing the machine page.
 */
export default async function MachinesSlugPage({ params }: INextPageProps) {
  const { slug: machineSlug } = await params;

  const machineKey = slugToSnakeCase(machineSlug);

  // Find Machine
  const machine = getMachine(machineKey as keyof typeof MACHINES_MAP);

  if (!machine) {
    return notFound(); // or handle the case when the machine is not found
  }

  return <MachinePageComponent machine={machine} type="machine" />;
}

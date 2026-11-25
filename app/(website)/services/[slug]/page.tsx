import { MachinePageComponent } from "@/components/templates/machine-page-component";
import { getService } from "@/data/queries/services/get.services";
import { SERVICES_MAP } from "@/data/static/services/services";
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
  const services: { slug: string }[] = Object.keys(SERVICES_MAP).map((key) => ({
    slug: toKebabCase(key),
  }));
  return services?.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Dynamic metadata generator
 */
export async function generateMetadata({
  params,
}: INextPageProps): Promise<Metadata> {
  const serviceSlug = (await params).slug;
  const service = getService(
    slugToSnakeCase(serviceSlug) as keyof typeof SERVICES_MAP,
  );

  return {
    title: service?.name ?? serviceSlug,
    description: service?.tagline,
  };
}

/**
 *
 * @param params The props object containing the route parameters.
 * @param searchParams The props object containing the search parameters.
 * @returns The JSX element representing the machine page.
 */
export default async function ServiceSlugPage({ params }: INextPageProps) {
  const { slug: serviceSlug } = await params;
  console.log(serviceSlug);
  const serviceKey = slugToSnakeCase(serviceSlug);

  // Find Machine
  const service = getService(serviceKey as keyof typeof SERVICES_MAP);

  if (!service) {
    return notFound(); // or handle the case when the machine is not found
  }

  return <MachinePageComponent machine={service} type="service" />;
}

import MetricsSection from "@/components/cards/metrics-section";
import { ProductSlider } from "@/components/cards/product.slider";
import {
  IShowcaseSliderItem,
  ShowcaseSlider,
} from "@/components/cards/showcase.slider";
import Timeline from "@/components/cards/timeline";
import { CinematicLogoCloud } from "@/components/cinematic-logo-cloud";
import TransparentNavigation from "@/components/features/navigation/hooks/use-transparent-navigation";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/features/section/index.section";
import { Button } from "@/components/ui/button";
import { MACHINES_LIST } from "@/data/static/machines";
import { toKebabCase } from "@/utils/case-converter";
import { getDefaultImage } from "@/utils/get-default-image";
import Link from "next/link";

export default function Home() {
  const demoIndustries: IShowcaseSliderItem[] = [
    {
      id: "cta",
      image: "",
      type: "cta",
      title: "Talk to us on how we can help your business",
      description:
        "Reach out to us for inquiries, quotes, or any assistance you may need.",
      href: "#",
    },
    {
      id: "hydraulic-valves-connectors",
      title: "Hydraulic Valves, Connectors",
      description:
        "Precision-machined hydraulic valves and connectors engineered for reliable, high-pressure performance.",
      href: "#",
      image: "/assets/solutions/hydro.webp",
    },
    {
      id: "food-processing-pellet-dies",
      title: "Food Processing & Pellet Dies",
      description:
        "Durable pellet dies and food processing components built to withstand demanding production environments.",
      href: "#",
      image: "/assets/solutions/food.webp",
    },
    {
      id: "gear-manufacturers",
      title: "Gear Manufacturers",
      description:
        "Tight-tolerance components supporting gear manufacturers with consistent, repeatable precision.",
      href: "#",
      image: "/assets/solutions/general-engineering.webp",
    },
    {
      id: "healthcare",
      title: "Implants and Instruments",
      description:
        "Precision parts manufactured to strict quality standards for critical healthcare applications.",
      href: "#",

      image: "/assets/solutions/healthcare.webp",
    },
    {
      id: "general-engineering",
      title: "General Engineering",
      description:
        "Versatile machining solutions supporting a wide range of general engineering projects.",
      href: "#",
      image: "/assets/solutions/precision-engineering.webp",
    },
    {
      id: "machinery-and-fixtures",
      title: "Machinery and Fixtures",
      description:
        "Custom fixtures and machinery components designed for durability and precise fit.",
      href: "#",
      image: "/assets/solutions/mach.webp",
    },
    {
      id: "automotive",
      title: "Automotive",
      description:
        "High-precision automotive components manufactured to meet rigorous industry standards.",
      href: "#",
      image: "/assets/solutions/automotive.webp",
    },
    {
      id: "pneumatics",
      title: "Pneumatics",
      description:
        "Precision pneumatic components engineered for consistent, leak-free performance.",
      href: "#",
      image: "/assets/solutions/pen.webp",
    },
    {
      id: "mechanical-industry",
      title: "Mechanical Industry",
      description:
        "Reliable mechanical components manufactured to exacting tolerances for diverse industrial needs.",
      href: "#",
      image: "/assets/solutions/mechanical.webp",
    },
    {
      id: "instrumentation",
      title: "Instrumentation",
      description:
        "Precision-engineered parts for instrumentation applications requiring exceptional accuracy.",
      href: "#",
      image: "/assets/solutions/instrument.webp",
    },
  ];

  return (
    <>
      <TransparentNavigation />
      <Section spacing="none" className={"relative min-h-screen z-10"}>
        {/* Video */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover object-left"
            playsInline
            src="/assets/videos/hero.webm"
          />

          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        </div>
        {/* end Video */}

        {/* Hero Content */}
        <SectionContent className={"z-100"}>
          <div className="text-start flex flex-col justify-center min-h-screen space-y-12">
            <div>
              <h1 className="text-white text-[clamp(2.25rem,12vw,4.5rem)] sm:text-7xl font-semibold tracking-tighter leading-[0.98]">
                Built on Experiences.
                <br />
                Designed around <br />
                your requirements.
              </h1>
              <p className="text-muted-foreground text-md mt-4 ">
                We provide top-notch automation solutions to streamline your
                business processes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                size={"lg"}
                variant={"default"}
                className="capitalize"
                render={<Link href={"/contact"}>Request a quote</Link>}
                nativeButton={false}
              />
              {/* Secondary Button */}
              <Button
                size={"lg"}
                variant={"secondary"}
                className="capitalize"
                render={<Link href={"/contact"}>Contact Sales</Link>}
                nativeButton={false}
              />
              {/* end Secondary Button */}
            </div>
          </div>
        </SectionContent>
        {/* end Hero Content */}
      </Section>

      {/* Trusted Teams */}

      <Section className="bg-zinc-50/50 dark:bg-zinc-950">
        <SectionContent>
          <CinematicLogoCloud
            eyebrow="Trusted by teams at"
            variant="marquee"
            clients={[
              {
                name: "Phoenix Engineering",
                logo: "/assets/clients/phoenix-engineering.webp",
              },
              {
                name: "R K Feed Equipments",
                logo: "/assets/clients/rkb-feed-equipments.webp",
              },
              {
                name: "Meta Forge Engineering",
                logo: "/assets/clients/meta-forge-engineering.webp",
              },
              {
                name: "JAL Precision",
                logo: "/assets/clients/jal-precision.webp",
              },
              {
                name: "Thermax",
                logo: "/assets/clients/thermax.webp",
              },
              {
                name: "Elecon Engineering",
                logo: "/assets/clients/elecon-engineering.webp",
              },
              {
                name: "TD Williamson",
                logo: "/assets/clients/td-williamson.webp",
              },
              {
                name: "Sai Feed Equipments",
                logo: "/assets/clients/sai-feed-equipments.webp",
              },
              {
                name: "Kimako Industries",
                logo: "/assets/clients/kimako-industries.webp",
              },
              {
                name: "Jay Fe Cylinders Limited",
                logo: "/assets/clients/jay-fe-cylinders.webp",
              },
              {
                name: "Orion Engineering",
                logo: "/assets/clients/orion-engineering.webp",
              },
              {
                name: "Starways",
                logo: "/assets/clients/starways.webp",
              },
              {
                name: "Pradip Polyfils",
                logo: "/assets/clients/pradip-polyfils.webp",
              },
              {
                name: "Kirloskar Pneumatic Company Limited",
                logo: "/assets/clients/kirloskar-pneumatic-company-limited.webp",
              },
            ]}
          />
        </SectionContent>
      </Section>
      {/* end Trusted Teams */}

      {/* Industries We Serve */}
      <Section>
        <SectionHeader className={"mb-10!"}>
          <SectionTitle className="font-medium tracking-tighter">
            Industries We Serve
          </SectionTitle>
          <SectionDescription className="text-muted-foreground tracking-tight">
            We Design Solutions for a Wide Range of Industries & Sectors across
            the fastest growing markets
          </SectionDescription>
        </SectionHeader>

        {/*  */}
        <ShowcaseSlider items={demoIndustries} loop={true} />
        {/*  */}
      </Section>
      {/* end Industries We Serve */}
      {/* Stats */}
      <Section spacing={"sm"}>
        <SectionHeader alignment={"center"}>
          {/* <SectionTitle className="font-medium tracking-tighter">
            Our Core Values
          </SectionTitle> */}
          {/* <SectionDescription className="text-muted-foreground">
            We are committed to delivering excellence through our core values
            that drive our innovation and customer satisfaction.
          </SectionDescription> */}
        </SectionHeader>
        <SectionContent>
          <MetricsSection />
        </SectionContent>
        {/* <FeaturedSectionStats /> */}
      </Section>
      {/* end Stats */}

      {/* Featured Products */}
      <Section className={""}>
        <SectionHeader className={"mb-10!"}>
          <SectionTitle className="font-medium tracking-tighter">
            Featured Products
          </SectionTitle>
          <SectionDescription className="text-muted-foreground">
            Explore our range of featured products that exemplify our commitment
            to quality and innovation.
          </SectionDescription>
        </SectionHeader>
        <ProductSlider
          items={[
            ...MACHINES_LIST?.filter((m) => m.isFeatured)?.map((machine) => {
              const defaultImage = getDefaultImage(machine.assets);
              return {
                id: machine?.key,
                title: machine?.name,
                description: machine?.description,
                href: `/machines/${toKebabCase(machine.key)}`,
                image: {
                  url: defaultImage?.url ?? "",
                  alt: defaultImage?.alt ?? "",
                },
              };
            }),
            {
              id: "explore-more-products",
              title: "Explore More Products",
              type: "cta",
              description:
                "Discover our full range of high-precision machining solutions for various industries.",
              href: "#",
              image: {
                url: "/assets/solutions/explore-more-products.webp",
                alt: "Static background image",
              },
            },
          ]}
        />
      </Section>
      {/* end Featured Products */}

      {/* Image Thumbnails Section */}
      {/* <Section>
        <SectionHeader>
          <SectionTitle className="tracking-tighter">
            Machines Gallery
          </SectionTitle>
          <SectionDescription className="text-muted-foreground">
            Browse through our collection of machines and equipment.
          </SectionDescription>
        </SectionHeader>
        <SectionContent>
          <ThumbnailsCarousal />
        </SectionContent>
      </Section> */}
      {/* end Image Thumbnails Section */}

      {/* Teams Section */}
      {/* <Section>
        <TeamSection />
      </Section> */}
      {/* end Teams Section */}

      {/* Timeline Section */}
      <Section>
        <Timeline
          imageUrl="/assets/images/place.webp"
          title="Swaraj's Story"
          activeColor="#9f1f24"
          periodLabel="1990-Present"
        />
      </Section>
      {/* end Timeline Section */}

      {/* CTA section */}
      <Section spacing={"none"} className={""}>
        <div className="relative w-full bg-[url(/assets/backgrounds/background.webp)] bg-cover bg-center h-96">
          {/* CTA Content */}
          <div className="container mx-auto flex flex-col justify-center h-full space-y-4">
            <div className="space-y-1">
              <h2 className="text-6xl font-medium text-white max-w-130">
                Serving our clients with Precision
              </h2>
              <p className="text-white/80 w-84">
                Reach out to us for any inquiries or to learn more about our
                products and services.
              </p>
            </div>
            <Button variant="secondary" className="w-max">
              Contact Sales
            </Button>
          </div>
          {/* end CTA Content */}
        </div>
      </Section>
      {/* end CTA Section */}
    </>
  );
}

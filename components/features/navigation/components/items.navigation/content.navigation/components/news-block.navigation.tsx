import CTALink from "@/components/cta/link.cta";
import { IAnnouncement } from "@/components/features/navigation/types/announcement.types";
import {
  IconArrowUpRight,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export function NewsBlock() {
  const announcement: IAnnouncement = {
    id: "IMTX_banglore",
    title: "Exhibiting at IMTEX 2027 Banglore, India",
    description:
      "Come and meet us at the 2027 IMTEX expo in Banglore, India. We will be showcasing our latest innovations and products. Swaraj is a leading manufacturers of CNC machines and related technologies.",
    isActive: true,
    message: "",
  };

  // const news = use();
  return (
    <div className="flex flex-col cols-span-1 p-2 h-full sm:-m-4">
      {/* Title */}
      {/* <NavigationContentBlockTitle heading={"Featured"} /> */}
      {/* end Title */}
      {/* News Block */}
      <div className="h-full flex flex-col space-y-4">
        {/* Image */}
        <div>
          <Image
            src={"/assets/announcements/imtex-2027.webp"}
            alt={"test image"}
            width={400}
            height={400}
            className="object-cover h-48"
          />
        </div>
        {/* end Image */}

        <div className="flex flex-col items-start justify-between h-full">
          {/* Content */}
          <div className={cn("space-y-2")}>
            <p
              className={cn(
                "text-primary text-xl tracking-tighter font-medium line-clamp-1",
              )}
            >
              {announcement.title}
            </p>
            <p className="text-accent-foreground/70! line-clamp-3 tracking-tighter leading-[1.2] text-sm">
              {announcement.description}
            </p>

            {/* Dates */}
            <div className={"mt-6"}>
              <NewsPill label="21st to 27th January" icon={<IconCalendar />} />
              <NewsPill label="Banglore" icon={<IconMapPin />} />
              <NewsPill label="Hall 4" icon={<IconMapPin />} />
              <NewsPill label="Stall C117" icon={<IconMapPin />} />
            </div>
            {/* end Dates */}
          </div>
          {/* end Content */}

          {/* CTA */}
          {announcement.link ? (
            <div className="mt-auto h-max">
              <Link href={announcement.link} target="_blank">
                <CTALink className="text-lg">
                  Learn More
                  <IconArrowUpRight />
                </CTALink>
              </Link>
            </div>
          ) : null}
          {/* end CTA */}
        </div>
      </div>
      {/* end News Block */}
    </div>
  );
}

function NavigationContentBlockTitle({ heading }: { heading: string }) {
  return (
    <div className="mb-4 dark ">
      <p className="text-white/40!">{heading}</p>
    </div>
  );
}

function NewsPill({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className={"w-max py-1 flex items-center gap-1.5 [&>svg]:size-4"}>
      {icon}
      <p className={"text-md font-medium"}>{label}</p>
    </div>
  );
}

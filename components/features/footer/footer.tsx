import { Button } from "@/components/ui/button";
import CompanyLogo from "@/components/vectors/company.logo";
import {
  FOOTER_BOTTOM_LINKS,
  FOOTER_LINK_COLUMNS,
} from "@/data/static/footer.data";
import { SOCIALTOKENS } from "@/data/tokens/socials.token";
import { cn } from "@/lib/utils";
import { cacheLifeFor } from "@/utils/cache-profile";
import {
  IconBrandGoogleFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandYoutubeFilled,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const socials: {
  label: string;
  icon: JSX.Element;
  href: string;
}[] = [
  {
    label: "Google",
    href: "https://www.google.com/",
    icon: <IconBrandGoogleFilled />,
  },
  {
    label: "Linkedin",
    href: SOCIALTOKENS.linkedin,
    icon: <IconBrandLinkedinFilled />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/neonanthem/",
    icon: <IconBrandInstagramFilled />,
  },
  {
    label: "Youtube",
    href: "#",
    icon: <IconBrandYoutubeFilled />,
  },
];

/**
 * The copyright year. Reading the clock is non-deterministic, so under Cache
 * Components it has to be handled explicitly or the page can't prerender.
 * Caching it (rather than deferring to request time via `connection()`) keeps
 * the footer in the static shell; `days` means it rolls over on Jan 1 without
 * making every page dynamic.
 */
async function CopyrightYear() {
  "use cache";
  cacheLifeFor("days");
  return <>{new Date().getFullYear()}</>;
}

function BrandMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link href="/" aria-label="Neon Anthem" className="inline-flex">
        <CompanyLogo className="h-auto w-20 fill-foreground" />
      </Link>
      <p className="mt-3 text-sm text-foreground">
        © <CopyrightYear /> Swaraj Automations.
      </p>

      {/* Location */}
      <div className="mt-3">
        <p className="text-sm">
          Plot no. 13, Gat no. 281/1, Kasar Amboli, near HDFC Bank, Pirangut,
          412108
        </p>
      </div>
      {/* End Location */}
      {/* GST */}
      <div className="mt-3">
        <p className="text-sm">GSTIN: 27ADTPD0929M1Z4</p>
      </div>
      {/* end GST */}
      {/* Get in Touch */}
      <div className="mt-4">
        <Button
          nativeButton={false}
          render={<Link href="/contact">Contact us</Link>}
        />
      </div>
      {/* end Get in Touch */}
      {/* Contact Details */}
      <div className={"mt-6"}>
        <ContactInfo
          icon={IconPhone}
          label="Phone"
          href={"tel:+918087016320"}
          value="+91 80870 16320"
        />
        <ContactInfo
          icon={IconMail}
          label="Email"
          href="mailto:sales@swarajautomation.in"
          value="sales@swarajautomation.in"
        />
      </div>
      {/* end Contact Details */}
      {/* Make in india logo */}
      <div className={""}>
        <Image
          src={"/assets/images/make-in-india-logo.webp"}
          alt={"Make in india logo"}
          width={600}
          height={600}
        />
      </div>
      {/* Make in india Logo */}
    </div>
  );
}

type ContactInfoProps = React.ComponentProps<"div"> & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
};

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div
      className={cn("flex items-center gap-1.5 py-1 text-start", className)}
      {...props}
    >
      <div className="bg-muted/20 rounded-sm p-1.5">
        <Icon className="size-4" />
      </div>
      <div>
        <Link href={props.href ?? "#"}>
          <p className={"text-foreground text-xs"}>{value}</p>
        </Link>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="dark w-full border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Link columns */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <BrandMark className="col-span-full hidden lg:col-span-1 lg:block" />

          {FOOTER_LINK_COLUMNS.map((column) => (
            <div key={column.id}>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">
                {column.heading}
              </h3>
              <ul className="mt-3 grid gap-1">
                {column.links.map((link, index) => (
                  <li key={link.href + index}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {link.label}
                      {link.tag && (
                        <span className="ml-2 text-xs text-foreground uppercase">
                          - {link.tag}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* End link columns */}

        {/* Bottom utility bar */}
        <div className="mt-5 border-t border-border pt-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {FOOTER_BOTTOM_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <BrandMark className="mt-3 sm:hidden" />
          </div>

          {/* Neon Anthem follow link */}
          <NeonAnthemWidget />
          {/* end Neon Anthem follow link */}

          <div className="mt-4 flex items-center gap-3 *:[&>svg]:size-4 sm:mt-0">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="inline-block text-foreground transition-colors hover:text-foreground"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* End bottom utility bar */}
      </div>
      {/* Neon Anthem Footer Bleed logo */}
      <div className="container relative mx-auto overflow-hidden pt-8">
        {/* Defines the gradient referenced by the logo's fill below; the svg itself renders nothing */}
        <svg
          width="0"
          height="0"
          className="absolute"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient
              id="footer-logo-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0" />
              <stop
                offset="55%"
                stopColor="var(--foreground)"
                stopOpacity="0.04"
              />
              <stop
                offset="82%"
                stopColor="var(--foreground)"
                stopOpacity="0.28"
              />
              <stop
                offset="100%"
                stopColor="var(--foreground)"
                stopOpacity="0.65"
              />
            </linearGradient>
          </defs>
        </svg>
        {/* <LogoLetter
          // className={"h-auto w-full *:fill-[url(#footer-logo-gradient)]"}
          className={"h-auto w-full *:fill-white/80"}
        /> */}
        {/* <div className="flex items-center justify-center w-full">
          <p className="tracking-tighter leading-[0.1.2] text-6xl w-max font-inter">
            Since 1997
          </p>
        </div> */}
      </div>
      {/* end Neon Anthem Footer Bleed Logo */}
    </footer>
  );
}

function NeonAnthemWidget() {
  return (
    <div className="">
      {/* Replace this with the actual Neon Anthem follow link widget */}
      <Link
        href="https://neonanthem.com/follow"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-foreground/80 transition-colors"
      >
        <p className={"text-xs text-muted-foreground"}>
          Designed & Engineered by{" "}
          <span className="font-semibold text-foreground">Neon Anthem</span>
        </p>
      </Link>
    </div>
  );
}

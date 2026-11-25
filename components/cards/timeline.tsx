// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { type CSSProperties, useRef, useSyncExternalStore } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type JourneyItem = {
  id: string;
  year: string;
  title: string;
  content: string;
};

type PositionRange = readonly [number, number];
type SplitTextInstance = InstanceType<typeof SplitText>;

type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const topJourneyData: JourneyItem[] = [
  {
    id: "1990",
    year: "1990",
    title: "Where It All Began",
    content:
      "Our journey began with CONUCO Machines, specialising in SPM manufacturing",
  },
  {
    id: "2003",
    year: "2003",
    title: "Our First Step into Gun Drilling",
    content:
      "Combining our expertise, we developed our first Pellet Die Gun Drilling Machine",
  },
  {
    id: "2012",
    year: "2012",
    title: "Expanding Across Industires",
    content:
      "We expanded our SPM solutions to serve the automotive, pellet die, and oil & gas industries",
  },
  {
    id: "2018",
    year: "2018",
    title: "Strengthning Our Manufacturing Capabilities",
    content:
      "Established a 12,000 sq. ft. manufacturing facility with dedicated tool room and quality inspection infrastructure.",
  },
  {
    id: "2023",
    year: "2023",
    title: "Showcasing Our Capabilities",
    content:
      "Presented our gun drilling solutions for automotive, medical, and die & mould industries at Engimech Expo.",
  },
];

const bottomJourneyData: JourneyItem[] = [
  {
    id: "1997",
    year: "1997",
    title: "Building Our Expertise",
    content:
      "We established Swaraj Automation, focusing on machine retrofitting and reconditioning",
  },
  {
    id: "2008",
    year: "2008",
    title: "Growing Stronger Togeather",
    content:
      "CONUCO Machines and Swaraj Automation merged under one identity: Swaraj Automation",
  },
  {
    id: "2015",
    year: "2015",
    title: "Taking Our Expertise Global",
    content:
      "Entered international markets with our first Pellet Die Gun Drilling Machine export to South Korea.",
  },
  {
    id: "2020-2021",
    year: "2020-2021",
    title: "Standardising Our Capabilities",
    content:
      "We developed standardised gun drilling machines to serve a wider range of industries.",
  },
  {
    id: "2025",
    year: "2025",
    title: "Advancing Precision Engineering",
    content: "Showcased our 1.2 mm gun drilling capability at IMTEX Bengaluru.",
  },
];

const allJourneyItems: JourneyItem[] = [
  ...topJourneyData,
  ...bottomJourneyData,
].sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));

export default function Timeline({
  title = "Product Storyline",
  periodLabel = "2020-2026",
  textColor = "#000000",
  mutedTextColor = "#3f3f46",
  activeColor = "#ff5f00",
  backgroundColor = "#ffffff",
  imageUrl = "https://pub-8abee449136941f5b0a1cd2c014534e9.r2.dev/vault-listing-images/assets-images/h-15.jpg",
  imageAlt = "Modern office workspace",

  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);
  const sectionStyle = {
    color: textColor,
    backgroundImage: `linear-gradient(to bottom, transparent var(--pull), ${backgroundColor} var(--pull))`,
  } satisfies CSSProperties;
  const activeStyle = {
    backgroundColor: activeColor,
  } satisfies CSSProperties;
  const yearStyle = {
    color: activeColor,
  } satisfies CSSProperties;
  const mutedTextStyle = {
    color: mutedTextColor,
  } satisfies CSSProperties;

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const isTablet = window.innerWidth >= 642 && window.innerWidth <= 1024;
      const isMobile = window.innerWidth < 642;
      const slidePercent = isTablet ? -88 : isMobile ? -99 : -72;
      const lineWidth = isTablet ? "75%" : isMobile ? "80%" : "98%";
      const lineStart = isTablet ? "top 20%" : isMobile ? "top 30%" : "top 25%";
      const slideEnd = isMobile ? "82% 50%" : "92% bottom";
      const lineEnd = isMobile
        ? "80% 50%"
        : isTablet
          ? "90% bottom"
          : "92% bottom";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "2% top",
          end: slideEnd,
          scrub: true,
        },
        defaults: {
          ease: "none",
        },
      });

      tl.fromTo(
        wholeSliderRef.current,
        { xPercent: 0 },
        { xPercent: slidePercent },
      );

      if (reducedMotion) {
        gsap.set(".journey-line", { width: lineWidth });
        return;
      }

      gsap.to(".journey-line", {
        width: lineWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: lineStart,
          end: lineEnd,
          scrub: true,
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  );

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const items = allJourneyItems;

      if (reducedMotion) {
        items.forEach((item) => {
          gsap.set(`.jl-${item.id}`, { scaleY: 1 });
          gsap.set(`.jd-${item.id}`, { scale: 1 });
          gsap.set(`.title-${item.id}`, {
            opacity: 1,
            clearProps: "transform",
          });
          gsap.set(`.description-${item.id}`, {
            opacity: 1,
            clearProps: "transform",
          });
        });
        return;
      }

      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: "bottom bottom",
        });
        gsap.set(`.jd-${item.id}`, { scale: 0 });
        gsap.set(`.title-${item.id}`, { opacity: 1 });
        gsap.set(`.description-${item.id}`, { opacity: 1 });
      });

      const titleSplits: Partial<Record<string, SplitTextInstance>> = {};
      const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

      items.forEach((item) => {
        titleSplits[item.id] = new SplitText(`.title-${item.id}`, {
          type: "chars, words, lines",
          mask: "lines",
        });

        descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
          type: "chars, words, lines",
          mask: "lines",
        });
      });

      const createItemTimeline = (
        item: JourneyItem,
        startPos: number,
        endPos: number,
      ) => {
        const lineSelector = `.jl-${item.id}`;
        const dotSelector = `.jd-${item.id}`;
        const titleLines = titleSplits[item.id]?.lines || [];
        const descriptionLines = descriptionSplits[item.id]?.lines || [];

        const isTop = topJourneyData.some((topItem) => topItem.id === item.id);

        if (!isTop) {
          gsap.set(lineSelector, { transformOrigin: "top top" });
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `${startPos}% 38%`,
            end: `${endPos}% 50%`,
            scrub: true,
          },
        });

        timeline
          .to(lineSelector, {
            scaleY: 1,
            duration: normalizedDuration * 0.4,
          })
          .to(
            dotSelector,
            {
              scale: 1,
              duration: normalizedDuration * 0.4,
            },
            "<",
          )
          .fromTo(
            titleLines,
            { y: 100 },
            {
              y: 0,
              delay: -0.8 * normalizedDuration,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            },
          )
          .fromTo(
            descriptionLines,
            { y: 100 },
            {
              y: 0,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: "power2.out",
            },
            "<",
          );

        return timeline;
      };

      const positions: PositionRange[] =
        window.innerWidth < 642
          ? [
              [20, 28],
              [24, 32],
              [29, 37],
              [34, 42],
              [39, 47],
              [44, 52],
              [49, 57],
              [54, 62],
              [59, 67],
              [64, 72],
            ]
          : window.innerWidth >= 642 && window.innerWidth <= 1024
            ? [
                [16, 26],
                [21, 31],
                [26, 36],
                [31, 41],
                [36, 46],
                [41, 51],
                [46, 56],
                [51, 61],
                [56, 66],
                [61, 71],
              ]
            : [
                [5, 22],
                [12, 29],
                [19, 36],
                [26, 43],
                [33, 50],
                [40, 57],
                [47, 64],
                [54, 71],
                [61, 78],
                [68, 85],
              ];

      items.forEach((item, index) => {
        const [startPos, endPos] = positions[index];
        createItemTimeline(item, startPos, endPos);
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        Object.values(titleSplits).forEach((split) => split?.revert?.());
        Object.values(descriptionSplits).forEach((split) => split?.revert?.());
        window.removeEventListener("resize", handleResize);
      };
    },
    { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef },
  );

  const content = (
    <section
      ref={sectionRef}
      id="journey"
      className="h-[230vw] max-[1025px]:h-[380vh] max-md:h-[380vh] w-full relative pointer-events-none [--pull:18vh] max-md:[--pull:30vh] -mt-(--pull)"
      style={sectionStyle}
    >
      <div className="h-screen w-screen sticky top-0 flex items-center overflow-hidden">
        <div
          ref={wholeSliderRef}
          className="relative mr-[2vw] flex h-[34vw] w-[300vw] items-center gap-[5vw] px-[5vw] max-[1025px]:h-[70vh] max-[1025px]:w-[500vw] max-[1025px]:flex-col max-[1025px]:items-start max-[1025px]:gap-[2vw] max-[1025px]:px-[5vw] max-md:h-[64vh] max-md:w-[800vw] max-md:px-[7vw]"
        >
          <div className="h-full w-[30vw] overflow-hidden rounded-xs max-[1025px]:absolute max-[1025px]:left-[5vw] max-[1025px]:top-1/2 max-[1025px]:-translate-y-1/2 max-md:left-[7vw] max-[1025px]:h-[40vw] max-[1025px]:w-[15%] max-md:h-[65vw] max-md:w-[85vw]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative h-full w-full max-[1025px]:ml-[80vw] max-md:ml-[92vw]">
            <div className="w-full absolute left-0 top-[49%] translate-y-[-50%] flex items-center h-fit">
              <div
                className="h-[.8vw] max-md:h-[2vw] max-md:w-[2vw] w-[.8vw] rounded-full max-[1025px]:w-[1.5vw] max-[1025px]:h-[1.5vw]"
                style={activeStyle}
              ></div>
              <div
                className="h-px w-[0%] rounded-full journey-line"
                style={activeStyle}
              ></div>
              <div
                className="h-[.8vw] max-md:h-[2vw] max-md:w-[2vw] w-[.8vw] rounded-full max-[1025px]:w-[1.5vw] max-[1025px]:h-[1.5vw]"
                style={activeStyle}
              ></div>
            </div>

            <div className="flex h-1/2 w-full items-center justify-start gap-[.5vw]">
              <div className="h-full w-[20%] pt-[2vw] max-md:h-fit max-md:pt-[5vw]">
                <h2 className="w-[65%] font-medium text-[3vw] leading-[0.95] max-[1025px]:w-[75%] max-[1025px]:text-[7vw] max-md:text-[8.5vw]">
                  {title}
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[15vw] max-md:gap-x-[40vw]">
                {topJourneyData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] px-[3vw]  max-[1025px]:w-[50vw] max-[1025px]:px-[5vw] max-md:flex max-md:w-[70vw] max-md:flex-col max-md:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`size-[1vw] max-md:size-[2.5vw] max-[1025px]:size-[2vw] translate-x-[-50%] relative aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`h-[94%] w-px origin-bottom rounded-full jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    <div className="mt-[-1vw] space-y-[0.8vw] max-[1025px]:mt-[-1.5vw] max-md:mt-[-2vw]">
                      <span
                        className="block text-[1vw] font-medium uppercase tracking-[0.2em] max-[1025px]:text-[2vw] max-md:text-[3vw]"
                        style={yearStyle}
                      >
                        {item.year}
                      </span>
                      <h4
                        className={`title-${item.id} pt-[0.4vw] text-[1.8vw] font-medium leading-[1.1] max-[1025px]:text-[3.8vw] max-md:text-[4.8vw]`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`description-${item.id} w-full text-[1.25vw] leading-[1.15] max-[1025px]:w-full max-[1025px]:text-[2.2vw] max-md:w-full max-md:text-[3.3vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[20%] pt-[2vw] max-md:pt-[5vw] max-md:w-[30%] h-full max-[1025px]:pt-[5vw]">
                <p
                  className=" text-[1.65vw] leading-none max-[1025px]:text-[3vw] max-md:text-[4.2vw]"
                  style={mutedTextStyle}
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[20vw] ml-[23vw] max-md:gap-x-[40vw] max-[1025px]:ml-[38vw] max-[1025px]:gap-x-[15vw] max-md:ml-[7vw]">
                {bottomJourneyData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] px-[3vw]  max-[1025px]:flex max-[1025px]:w-[50vw] max-[1025px]:flex-col max-[1025px]:justify-center max-[1025px]:px-[5vw] max-md:w-[70vw] max-md:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-[-1%] h-full">
                      <div
                        className={`h-[94%] origin-top w-px rounded-full max-md:h-full jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`size-[1vw] max-md:size-[2.5vw] max-[1025px]:size-[2vw] translate-x-[-50%] relative w-auto aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    <div className="flex h-full w-full flex-col justify-end space-y-[0.8vw]">
                      <span
                        className="block text-[1vw] font-medium uppercase tracking-[0.2em] max-[1025px]:text-[2vw] max-md:text-[3vw]"
                        style={yearStyle}
                      >
                        {item.year}
                      </span>
                      <h4
                        className={`title-${item.id} pt-[0.4vw] text-[1.8vw] font-medium leading-[1.1] max-[1025px]:text-[3.8vw] max-md:text-[4.8vw]`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`description-${item.id} w-full text-[1.25vw] leading-[1.15] max-[1025px]:w-full max-[1025px]:text-[2.2vw] max-md:w-full max-md:text-[3.3vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ReactLenis
      root
      options={{
        duration: reducedMotion
          ? Math.min(normalizedDuration, 0.6)
          : normalizedDuration,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1,
        wheelMultiplier: 1,
      }}
    >
      {content}
    </ReactLenis>
  );
}

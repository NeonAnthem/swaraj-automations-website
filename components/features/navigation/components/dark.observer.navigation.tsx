"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";

/** Height of the fixed navbar (h-12) — the trigger line sits at its bottom edge. */
const NAV_HEIGHT = 48;

/**
 * Flips the navbar's dark state whenever a `main section.dark` overlaps the
 * navbar. Uses a single IntersectionObserver whose root is collapsed to a 1px
 * band at the navbar's bottom edge, so nothing runs per scroll frame.
 */
export default function NavigationDarkObserver() {
  const setIsDark = useNavigationStore((s) => s._system.setIsDark);
  const isAnnouncementOpen = useNavigationStore(
    (s) => s._system.isAnnouncementOpen,
  );
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const intersecting = new Set<Element>();

    const connect = () => {
      observer?.disconnect();
      intersecting.clear();

      const sections = document.querySelectorAll("main section.dark");
      if (sections.length === 0) {
        setIsDark(false);
        return;
      }

      // The navbar sits below the announcement banner (0 when absent/hidden).
      const bannerHeight =
        document
          .querySelector("[data-announcement-banner]")
          ?.getBoundingClientRect().height ?? 0;
      const navBottom = NAV_HEIGHT + bannerHeight;

      // rootMargin shrinks the viewport root to [navBottom, navBottom + 1].
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) intersecting.add(entry.target);
            else intersecting.delete(entry.target);
          }
          setIsDark(intersecting.size > 0);
        },
        {
          rootMargin: `-${navBottom}px 0px ${
            navBottom + 1 - window.innerHeight
          }px 0px`,
        },
      );
      sections.forEach((section) => observer?.observe(section));
    };

    // rootMargin is resolved in px, so rebuild the observer after resizes.
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(connect, 150);
    };

    connect();
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [pathname, setIsDark, isAnnouncementOpen]);

  return null;
}

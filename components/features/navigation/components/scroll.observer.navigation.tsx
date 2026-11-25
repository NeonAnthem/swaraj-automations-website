"use client";

import { useEffect, useRef } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";

/**
 * Tracks whether the page has scrolled away from the top. A 1px sentinel
 * sits at the top of the document and a single IntersectionObserver reports
 * when it leaves/enters the viewport, so nothing runs per scroll frame.
 */
export default function NavigationScrollObserver() {
  const setIsScrolled = useNavigationStore((s) => s._system.setIsScrolled);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    });
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [setIsScrolled]);

  return (
    <div
      ref={sentinelRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 h-px w-px"
    />
  );
}

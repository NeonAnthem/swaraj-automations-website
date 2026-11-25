"use client";

import { useEffect } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";

/** Opts the current page into the transparent, scroll-aware navbar. */
export function useTransparentNavigation() {
  const setIsTransparent = useNavigationStore(
    (s) => s._system.setIsTransparent,
  );

  useEffect(() => {
    setIsTransparent(true);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);
}

/** Server-component friendly wrapper around `useTransparentNavigation`. */
export default function TransparentNavigation() {
  useTransparentNavigation();
  return null;
}

import { sortByPosition } from "@/lib/positioner";
import { useMemo } from "react";
import { useNavigationStore } from "../../providers/navigation.store.provider";
import { NavigationDesktopAdapter } from "./desktop.navigation";
import { NavigationMobileAdapter } from "./mobile.navigation/mobile.navigation";

/**
 * Composes the desktop and mobile navigation adapters. Menus are sorted
 * once here so both adapters always render the same order; viewport
 * switching is Tailwind-only (`hidden md:block` / `md:hidden`).
 */
export default function NavigationItems() {
  const menus = useNavigationStore((s) => s.menus);
  const sortedMenus = useMemo(() => sortByPosition(menus ?? []), [menus]);

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationDesktopAdapter menus={sortedMenus} />
      {/* End Desktop Navigation */}

      {/* Mobile Navigation */}
      <NavigationMobileAdapter menus={sortedMenus} />
      {/* End Mobile Navigation */}
    </>
  );
}

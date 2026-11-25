"use client";

import { NavBar, NavGroup } from "@/components/ui/nav-items";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";
import NavigationDarkObserver from "./dark.observer.navigation";
import AnnouncementBanner from "./announcement.navigation";
import NavigationCTA from "./items.navigation/cta.navigation";
import NavigationItems from "./items.navigation/items.navigation";
import NavigationLogo from "./logo.navigation";
import NavigationScrollObserver from "./scroll.observer.navigation";

export default function NavigationBar() {
  const isDark = useNavigationStore((s) => s._system.isDark);
  const activeChildId = useNavigationStore((s) => s._system.activeChildId);
  const isMobileOpen = useNavigationStore((s) => s._system.isMobileOpen);
  const isScrolled = useNavigationStore((s) => s._system.isScrolled);
  const isTransparent = useNavigationStore((s) => s._system.isTransparent);
  const isSolid = !isTransparent || isScrolled || !!activeChildId;

  return (
    <>
      {isTransparent && (
        <>
          <Suspense fallback={null}>
            <NavigationDarkObserver />
          </Suspense>
          <NavigationScrollObserver />
        </>
      )}
      <AnnouncementBanner />
      {/* Placeholder Navigation bar */}
      {/* <div className={"h-12 bg-transparent"}></div> */}
      {/* end Placeholder Navigation bar */}
      <NavBar
        data-solid={isSolid}
        className={cn("group/nav", {
          "bg-transparent": !isSolid,
          dark: (isTransparent && isDark) || activeChildId || isMobileOpen,
          "bg-background": isSolid,
        })}
      >
        <NavigationLogo />
        {/* Nav Links Group */}
        <NavGroup className="max-sm:gap-1">
          {/* Navigation Items Desktop & Mobile */}
          <NavigationItems />
          {/* end Navigation Items Desktop & Mobile */}

          {/* CTA Group */}
          <NavGroup className="gap-4">
            <NavigationCTA />
          </NavGroup>
          {/* End CTA Group */}
        </NavGroup>
        {/* end Nav Links Group */}
      </NavBar>
    </>
  );
}

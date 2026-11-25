import { useCallback, useEffect } from "react";
import { useNavigationStore } from "../../../providers/navigation.store.provider";
import { INavigationItemsAdapterProps } from "../items.navigation.types";
import { MobileNavigationPanel } from "./components/panel.mobile.navigation";
import { MobileNavigationTrigger } from "./components/trigger.mobile.navigation";

/**
 * Mobile Navigation adapter — structural mirror of the desktop side
 * (root composer + trigger + panel), visible only below `md`.
 */
function NavigationMobileAdapter({ menus }: INavigationItemsAdapterProps) {
  const setIsMobileOpen = useNavigationStore((s) => s._system.setIsMobileOpen);

  const handleClose = useCallback(() => {
    setIsMobileOpen(false);
    document.documentElement.style.overflow = "";
  }, [setIsMobileOpen]);

  // Restore page scroll if the panel is open when the adapter unmounts

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        document.documentElement.style.overflow = "";
        setIsMobileOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      document.documentElement.style.overflow = "";
    };
  }, [setIsMobileOpen]);

  return (
    <>
      {/* Mobile Nav Toggle */}
      <MobileNavigationTrigger />
      {/* End Mobile Nav Toggle */}

      {/* Mobile Nav Panel */}
      <MobileNavigationPanel menus={menus} onClose={handleClose} />
      {/* End Mobile Nav Panel */}
    </>
  );
}

export { NavigationMobileAdapter };

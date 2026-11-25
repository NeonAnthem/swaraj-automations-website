import { Button } from "@/components/ui/button";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useCallback } from "react";
import { useNavigationStore } from "../../../../providers/navigation.store.provider";

/**
 * Mobile hamburger / close trigger — toggles the full-screen panel and
 * locks page scroll while it is open. Visible only below `md`.
 */
function MobileNavigationTrigger() {
  const isMobileOpen = useNavigationStore((s) => s._system.isMobileOpen);
  const setIsMobileOpen = useNavigationStore((s) => s._system.setIsMobileOpen);

  const toggleMobileNav = useCallback(() => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    document.documentElement.style.overflow = next ? "hidden" : "";
  }, [isMobileOpen, setIsMobileOpen]);

  return (
    <Button
      size={"icon-sm"}
      className={"rounded-none md:hidden"}
      variant={"ghost"}
      aria-label={isMobileOpen ? "Close Menu" : "Navigation Menu"}
      onClick={toggleMobileNav}
    >
      {isMobileOpen ? <IconX /> : <IconMenu2 />}
    </Button>
  );
}

export { MobileNavigationTrigger };

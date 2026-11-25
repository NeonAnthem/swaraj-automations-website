import { INavbarItems } from "@/components/features/navigation/types/navbar.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { useNavigationStore } from "../../../../providers/navigation.store.provider";
import { MobileNavigationAccordion } from "./accordion.mobile.navigation";

interface IMobileNavigationPanelProps {
  menus: INavbarItems[];
  onClose: () => void;
}

/**
 * Full-screen sliding panel anchored under the nav bar — mobile
 * counterpart of the desktop content portal. `menus` arrives pre-sorted
 * from the composer.
 */
function MobileNavigationPanel({
  menus,
  onClose,
}: IMobileNavigationPanelProps) {
  const isMobileOpen = useNavigationStore((s) => s._system.isMobileOpen);
  const primaryCTA = useNavigationStore((s) => s.cta.primaryCTA);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div
      aria-hidden={!isMobileOpen}
      className={cn(
        "fixed inset-x-0 top-[calc(3rem+var(--announcement-height,0px))] bottom-0 dark bg-background text-primary z-90 overflow-y-auto transition-[opacity,transform] duration-300 md:hidden",
        isMobileOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-2 opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col min-h-full px-4 py-4 font-heading text-primary">
        {/* Top level Navigation items */}
        <nav className="flex-1">
          {menus.map((item) =>
            item.child ? (
              <MobileNavigationAccordion
                key={item.id}
                item={item}
                isExpanded={expandedItem === item.id}
                onToggle={() =>
                  setExpandedItem((prev) => (prev === item.id ? null : item.id))
                }
                onClose={onClose}
              />
            ) : (
              <Link
                key={item.id}
                href={item.href ?? "#"}
                className="flex items-center justify-between py-4 border-b border-primary/10 text-2xl font-medium"
                onClick={onClose}
                aria-label={item.label}
              >
                {item.label}
                <IconArrowUpRight className="size-5 text-primary/40" />
              </Link>
            ),
          )}
        </nav>
        {/* end Top Level Navigation items */}

        {/* Primary CTA */}
        <div className="pt-8 pb-4" onClick={onClose}>
          <Link href={primaryCTA.href}>
            <Button
              className="w-full text-base justify-center"
              aria-label={primaryCTA.label}
            >
              {primaryCTA.label}
            </Button>
          </Link>
        </div>
        {/* end Primary CTA */}
      </div>
    </div>
  );
}

export { MobileNavigationPanel };

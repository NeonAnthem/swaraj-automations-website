import {
  INavbarContent,
  INavbarItems,
} from "@/components/features/navigation/types/navbar.types";
import { sortByPosition } from "@/lib/positioner";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useMemo } from "react";

interface IMobileNavigationAccordionProps {
  item: INavbarItems;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * Per top-level item accordion inside the mobile panel — expand/collapse
 * counterpart of the desktop trigger + dropdown content pair.
 */
function MobileNavigationAccordion({
  item,
  isExpanded,
  onToggle,
  onClose,
}: IMobileNavigationAccordionProps) {
  const listSections = useMemo(
    () =>
      sortByPosition(item.child ?? []).filter(
        (c): c is Extract<INavbarContent, { contentType: "list" }> =>
          c.contentType === "list",
      ),
    [item.child],
  );

  return (
    <div className="border-b border-primary/10">
      {/* Accordion Trigger */}
      <button
        className="flex items-center justify-between w-full py-4 text-2xl font-medium text-left"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {item.label}
        <IconChevronDown
          className={cn(
            "size-5 text-primary/40 transition-transform duration-200",
            { "rotate-180": isExpanded },
          )}
        />
      </button>
      {/* End Accordion Trigger */}

      {/* Accordion Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-500 pb-4" : "max-h-0",
        )}
      >
        {listSections.map((section, si) => (
          <div key={si} className={cn({ "mt-4": si > 0 })}>
            <p className="text-xs uppercase tracking-widest text-primary/40 font-body mb-2 px-1">
              {section.heading}
            </p>
            <div className="flex flex-col">
              {section.children?.map((link, li) => (
                <Link
                  key={li}
                  href={link.href}
                  className="flex items-start gap-3 py-2 px-1 group"
                  onClick={onClose}
                  aria-label={link.label}
                >
                  <span className="text-primary/30 text-sm font-body w-6 shrink-0 pt-0.5">
                    {new Intl.NumberFormat("en-In", {
                      minimumIntegerDigits: 2,
                    }).format(li + 1)}
                  </span>
                  <div>
                    <p className="text-base font-medium text-primary/80 group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    {link.description && (
                      <p className="text-sm text-primary/40 font-body leading-snug">
                        {link.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* End Accordion Content */}
    </div>
  );
}

export { MobileNavigationAccordion };

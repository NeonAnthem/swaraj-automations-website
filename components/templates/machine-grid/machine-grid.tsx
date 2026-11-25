import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/**
 * Layout shell for the machine page.
 * Single column below `lg` (the machines list is hidden there),
 * 14 columns from `lg` up.
 */
export function MachinePageGrid({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-14 gap-8 lg:gap-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

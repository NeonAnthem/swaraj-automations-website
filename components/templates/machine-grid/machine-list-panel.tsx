import { Button } from "@/components/ui/button";
import { MACHINES_LIST } from "@/data/static/machines";
import { SERVICES_LIST } from "@/data/static/services";
import { cn } from "@/lib/utils";
import { toKebabCase } from "@/utils/case-converter";
import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

interface IMachineListPanelProps {
  currentKey: string;
  type: "machine" | "service";
}

/** All machines list. Hidden below `lg`. */
export function MachineListPanel({ currentKey, type }: IMachineListPanelProps) {
  const productsList = type === "machine" ? MACHINES_LIST : SERVICES_LIST;

  return (
    <nav
      aria-label="All machines"
      className="hidden lg:flex lg:col-start-11 lg:col-end-15 lg:sticky lg:top-24 lg:self-start flex-col bg-background text-start border"
    >
      <header className="flex items-center justify-between gap-3 border-b px-5 py-5">
        <h2 className="text-sm font-semibold uppercase tracking-tight text-foreground">
          Machines we offer
        </h2>
        <span className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-xs font-medium tabular-nums text-muted-foreground">
          {productsList.length}
        </span>
      </header>

      <ul className="flex flex-col divide-y divide-border px-3 py-3">
        {productsList.map((machineItem) => {
          const isActive = machineItem.key === currentKey;
          return (
            <li key={machineItem.key} className="py-0.5">
              <Link
                href={`/${type === "machine" ? "machines" : "services"}/${toKebabCase(machineItem.key)}`}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex items-center justify-between gap-2 rounded-sm px-3 py-2.5 text-md leading-snug transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "bg-primary/10 font-semibold text-primary before:absolute before:inset-y-2 before:left-0 before:w-0.75 before:rounded-full before:bg-primary"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                )}
              >
                <span>{machineItem.name}</span>
                <IconChevronRight
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 transition-all",
                    isActive
                      ? "opacity-100"
                      : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-3 border-t px-5 py-5">
        <p className="text-sm text-muted-foreground">
          Can&apos;t find what you need?
        </p>
        <Button
          nativeButton={false}
          className="w-full"
          size="lg"
          render={
            <Link href="/contact">
              Custom Requirement?
              <IconArrowUpRight />
            </Link>
          }
        />
      </div>
    </nav>
  );
}

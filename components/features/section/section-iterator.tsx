import { cn } from "@/lib/utils";
import { Fragment, type Key, type ReactNode } from "react";

/**
 * How the iterated items are laid out.
 * - `grid` — column based. Pass the column count through `className`
 *   (`sm:grid-cols-2 lg:grid-cols-3`); the base is a single column.
 * - `flex` — a wrapping row, for items that size to their own content.
 */
export type SectionIteratorType = "grid" | "flex";

export interface ISectionIteratorProps<T> {
  /**
   * The array to iterate. Nullable because CMS arrays project as `null` when the
   * editor leaves them empty — an empty list renders nothing at all rather than
   * an empty wrapper.
   */
  contents: readonly T[] | null | undefined;
  /** Renders one item. */
  children: (item: T, index: number) => ReactNode;
  type?: SectionIteratorType;
  /**
   * Separator drawn between items.
   *
   * NOT IMPLEMENTED YET — the prop is part of the contract so call sites can
   * declare their intent, but nothing is rendered for it today.
   */
  divider?: ReactNode | boolean;
  /** React key for an item. Defaults to the item's index. */
  keyOf?: (item: T, index: number) => Key | undefined;
  className?: string;
}

const LAYOUT: Record<SectionIteratorType, string> = {
  grid: "grid grid-cols-1 gap-8",
  flex: "flex flex-wrap gap-8 bg-blue-600",
};

/**
 * Iterates a section's content array into a laid-out list.
 *
 * Blocks differ in what a single item looks like, not in how the list around it
 * is built — so the item stays a render prop and everything else (empty list,
 * keys, layout, and later the divider) lives here once.
 */
export default function SectionIterator<T>({
  contents,
  children,
  type = "grid",
  divider,
  keyOf,
  className,
}: ISectionIteratorProps<T>) {
  // TODO: draw `divider` between items once the separator design lands.
  void divider;

  if (!contents?.length) return null;

  const MAX_ITEMS = contents.length;

  return (
    <div
      data-iterator={type}
      className={cn("", className, {
        "grid grid-cols-1 gap-8": type === "grid",
        "flex flex-wrap gap-2 items-center justify-around": type === "flex",
      })}
    >
      {contents.map((item, index) => (
        <Fragment key={keyOf?.(item, index) ?? index}>
          {children(item, index)}
          {index !== MAX_ITEMS - 1 ? (
            <div className="w-px h-[480px] -bg-linear-180 from-primary/30 to-accent/20">
              x
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

//* --- Section Title --------------------------------------------------------- */
const titleVariant = cva(
  cn(
    "", // Component Wrapper Class
    "*:leading-none *:text-foreground *:font-medium", // Child Text Class
  ),
  {
    variants: {
      size: {
        base: "text-[20px] md:text-[36px]",
        sm: "",
        xl: "md:text-5xl",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  },
);

interface ISectionTitleProps
  extends ComponentProps<"h2">, VariantProps<typeof titleVariant> {}

/**
 * Title Block For Section Title
 * @returns JSX
 */
function SectionTitle({
  children,
  size,
  className,
  ...props
}: ISectionTitleProps) {
  return (
    <div className={cn(titleVariant({ className, size }))}>
      <h2 {...props}>{children}</h2>
    </div>
  );
}

//* --- Section Headline --------------------------------------------------------- */

const headlineVariant = cva("w-max", {
  variants: {
    size: {
      base: "",
      sm: "",
      xl: "",
    },
  },
});

interface ISectionHeadlineProps
  extends ComponentProps<"p">, VariantProps<typeof headlineVariant> {
  blockType?: "default" | "tag";
}

/**
 * Headline Block for Section Title
 * @returns ReactComponent
 */
function SectionHeadline({
  children,
  blockType = "default",
  className,
  size,
  ...props
}: ISectionHeadlineProps) {
  const Comp = blockType === "default" ? HeadlineDefault : HeadlineTag;

  return (
    <div {...props} className={cn(headlineVariant({ className, size }))}>
      <Comp>{children}</Comp>
    </div>
  );
}

// Headline contents

function HeadlineDefault({ children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm md:text-[1rem] text-foreground-muted uppercase font-medium tracking-wider",
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function HeadlineTag({ children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex gap-1.5 uppercase font-medium items-center px-2 pr-3.5 py-0.5 bg-linear-135 from-base dark:from-background to-background dark:to-muted-accent border rounded-full text-foreground-muted tracking-wide",
        "[&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-foreground",
      )}
      {...props}
    >
      {children}
    </div>
  );
}

//* --- Section Description --------------------------------------------------------- */

const descriptionVariant = cva("", {
  variants: {
    size: {
      base: "",
      sm: "",
      xl: "",
    },
  },
});

interface ISectionDescriptionProps
  extends ComponentProps<"p">, VariantProps<typeof descriptionVariant> {}

/**
 * Description Block for Section Title
 * @returns ReactComponent
 */
function SectionDescription({
  children,
  size,
  className,
  ...props
}: ISectionDescriptionProps) {
  return (
    <div
      className={cn(
        "font-medium",
        "max-sm:text-sm text-foreground-muted",
        descriptionVariant({ className, size }),
      )}
    >
      <p {...props}>{children}</p>
    </div>
  );
}

//* --- Section Header Content --------------------------------------------------------- */

const sectionHeaderContentVariants = cva("flex", {
  variants: {
    direction: {
      horizontal: "flex-col max-md:gap-2 md:flex-row",
      vertical: "flex-col gap-2",
    },
    alignment: {
      start: "items-start !text-start",
      center: "items-center !text-center",
      end: "items-end !text-end",
    },
  },
  defaultVariants: {
    direction: "vertical",
    alignment: "start",
  },
});

interface ISectionHeaderProps
  extends
    ComponentProps<"div">,
    VariantProps<typeof sectionHeaderContentVariants> {}

function SectionHeader({
  children,
  className,
  alignment,
  direction,
  ...props
}: ISectionHeaderProps) {
  return (
    <div
      data-block="contain"
      {...props}
      className={cn(
        "mb-8 md:mb-16 xl:mb-20",
        sectionHeaderContentVariants({ className, direction, alignment }),
      )}
    >
      {children}
    </div>
  );
}

//* --- Section Group --------------------------------------------------------- */

/**
 * Section Header group inherits variance from the SectionHeader Content
 */

interface ISectionHeaderGroupProps
  extends
    ComponentProps<"div">,
    VariantProps<typeof sectionHeaderContentVariants> {}

function SectionHeaderGroup({
  children,
  className,
  direction = "horizontal",
  alignment,
  ...props
}: ISectionHeaderGroupProps) {
  return (
    <div
      className={cn(
        "",
        sectionHeaderContentVariants({ className, direction, alignment }),
      )}
      {...props}
    >
      {children}
    </div>
  );
}

//* --- Exports ----------------------------------------------------------------------- */

export {
  SectionDescription,
  SectionHeader,
  SectionHeaderGroup,
  SectionHeadline,
  SectionTitle,
};

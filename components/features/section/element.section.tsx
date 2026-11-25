"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

/**
 * Section Variants
 */
const sectionVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      sm: "py-4",
      md: "py-8",
      lg: "py-12",
      xl: "py-16",
    },
  },
  defaultVariants: {
    spacing: "xl",
  },
});

/**
 * Section Props interface
 */
interface ISectionProps
  extends ComponentProps<"section">, VariantProps<typeof sectionVariants> {
  isDark?: boolean;
}

/**
 *
 * Section Component
 * ---
 * Extends the HTML section element with additional props for spacing and dark mode.
 *
 * @param children ReactNode | ReactNode[]
 * @param className string
 * @param isDark boolean
 * @param spacing string
 * @param props ComponentProps<"section">
 * @returns  ReactElement
 */
function Section({
  children,
  className,
  isDark,
  spacing,
  ...props
}: ISectionProps) {
  // Replace prop injected to store managed sections

  return (
    <section
      {...props}
      className={cn(
        "bg-background",
        "**:data-[block=contain]:container **:data-[block=contain]:mx-auto",
        "**:data-[block=contain]:px-4 **:data-[block=contain]:text-center", // Mobile Viewport
        "", // Tablet Viewport
        "", // Desktop Viewport
        sectionVariants({ spacing, className }),
        {
          dark: isDark,
        },
      )}
    >
      {children}
    </section>
  );
}

export { Section };

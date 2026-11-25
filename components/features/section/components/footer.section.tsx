import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const sectionFooterVariants = cva(
  "flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-8 items-center",
  {
    variants: {
      alignment: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      },
    },
    defaultVariants: {
      alignment: "center",
    },
  },
);

interface ISectionFooterProps
  extends ComponentProps<"div">, VariantProps<typeof sectionFooterVariants> {
  isContainer?: boolean;
}

function SectionFooter({
  children,
  className,
  alignment,
  isContainer = true,
  ...props
}: ISectionFooterProps) {
  return (
    <div
      data-block={isContainer ? "contain" : undefined}
      className={cn(sectionFooterVariants({ alignment, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export { SectionFooter };

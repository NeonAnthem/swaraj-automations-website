import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ISectionContentProps extends ComponentProps<"div"> {
  /**
   * Section content can be a container or not. If it is a container, it will have a max-width and padding. If it is not a container, it will take the full width of the parent.
   * @default true
   */
  isContainer?: boolean;
}

function SectionContent({
  children,
  className,
  isContainer = true,
  ...props
}: ISectionContentProps) {
  return (
    <div
      data-block={isContainer ? "contain" : undefined}
      {...props}
      className={cn("", className)}
    >
      {children}
    </div>
  );
}

export { SectionContent };

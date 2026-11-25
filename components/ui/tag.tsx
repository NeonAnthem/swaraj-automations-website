import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const tagVariants = cva("flex flex-row items-center", {
  variants: {
    variant: {
      default: "",
      pill: "rounded-full [&>div]:rounded-full border",
    },
    size: {
      none: "[&>div]:size-1.5 text-base [&>p]:tracking-wider gap-1",
      xs: "px-2 py-0.5 text-xs [&>div]:size-1 gap-2.5",
      sm: "px-3 py-1 text-sm [&>div]:size-1.5 gap-2.5",
      md: "px-4 py-2 text-base [&>div]:size-2 gap-2.5",
      lg: "px-5 py-3 text-lg [&>div]:size-2.5 gap-2.5",
      xl: "px-6 py-4 text-xl [&>div]:size-3 gap-2.5",
    },
    textCase: {
      default: "",
      upper: "uppercase",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    textCase: "default",
  },
});

interface ITagProps
  extends VariantProps<typeof tagVariants>, ComponentProps<"div"> {
  hasTag?: boolean;
}

export default function Tag({
  variant,
  size,
  textCase,
  className,
  children,
  hasTag = true,
  ...props
}: ITagProps) {
  return (
    <div
      className={tagVariants({ variant, size, textCase, className })}
      {...props}
    >
      {/* Tag Identifier */}
      {hasTag && <div className={"bg-primary size-2"}></div>}
      {/* end Tag Identifier */}

      {/* Content */}
      <p className={"text-foreground"}>{children}</p>
      {/* end Content */}
    </div>
  );
}

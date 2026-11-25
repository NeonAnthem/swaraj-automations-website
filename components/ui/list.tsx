import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function ListCard({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("space-y-2 my-2 py-3", className)} {...props}>
      {children}
    </div>
  );
}

function ListCardHeader({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("mt-2 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

function List({ className, children, ...props }: ComponentProps<"ul">) {
  return (
    <ul className={cn("list-none space-y-3", className)} {...props}>
      {children}
    </ul>
  );
}

function ListCardTitle({
  className,
  children,
  ...props
}: ComponentProps<"h4">) {
  return (
    <h4
      className={cn("text-2xl tracking-tighter text-foreground", className)}
      {...props}
    >
      {children}
    </h4>
  );
}

function ListCardDescription({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

function ListItem({ className, children, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex items-center gap-1 text-base md:text-lg text-foreground/60 ml-1",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}

function ListItemMarker({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn("size-1.5 bg-foreground/60 rounded-full", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export {
  List,
  ListCard,
  ListCardDescription,
  ListCardHeader,
  ListCardTitle,
  ListItem,
  ListItemMarker,
};

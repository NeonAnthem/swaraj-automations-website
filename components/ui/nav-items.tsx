"use client";

import { cn } from "@/lib/utils";
import { INavbarState, NavbarStoreProvider } from "@/store/navbar-store";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

function NavbarProvider({
  children,
  initState,
  className,
}: PropsWithChildren & { className?: string; initState: INavbarState }) {
  return <NavbarStoreProvider init={initState}>{children}</NavbarStoreProvider>;
}

function Nav({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className={cn("dark", className)}>
      <div className={cn("z-100", className)}>{children}</div>
    </div>
  );
}

function NavBar({
  children,
  className,
  ...props
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center mx-auto justify-between fixed top-(--announcement-height,0px) w-full h-12 z-100 px-2 md:px-12 transition-[color,background-color,top] duration-300 text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function NavGroup({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-8", className)}>
      {children}
    </div>
  );
}

function NavBrand({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <Link href={"/"} aria-label="Home Page">
        {children}
      </Link>
    </div>
  );
}

function NavContent({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center gap-6">{children}</div>
  );
}

function NavItem({ children }: PropsWithChildren) {
  return (
    <div className="list-none font-medium text-sm text-navbar-item">
      {children}
    </div>
  );
}

function NavItemSubTrigger({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

function NavItemSub({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function NavDropdown({
  children,
  label,
}: PropsWithChildren & {
  label: string;
}) {
  return (
    <div className="relative">
      <div className="bg-black w-screen h-screen sm:h-[50vh]">{children}</div>
    </div>
  );
}

function NavCTA({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <button
      className={cn(
        "px-3 py-1.5 rounded-full bg-foreground text-background text-sm font-medium flex items-center gap-2 [&>svg]:size-4",
        className,
      )}
    >
      {children}
    </button>
  );
}

export {
  Nav,
  NavBar,
  NavbarProvider,
  NavBrand,
  NavContent,
  NavCTA,
  NavGroup,
  NavItem,
};

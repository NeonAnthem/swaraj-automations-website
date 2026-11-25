"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { ComponentProps, useState } from "react";

interface ICTALinkProps extends ComponentProps<"button"> {
  onHover?: () => void;
  onLeave?: () => void;
  /**
   * Lets an ancestor (a card wrapping the whole CTA, say) play the underline
   * from its own hover. The CTA's own hover still works on top of it.
   */
  isHovered?: boolean;
  icon?: React.ReactElement;
  className?: string;
  href?: string;
}

/** Underline sweep, left to right. */
const UNDERLINE_VARIANTS = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

export default function CTALink({
  onHover,
  onLeave,
  isHovered,
  className,
  children,
  href,
  ...props
}: ICTALinkProps) {
  // Own hover, so the CTA still animates when nothing upstream drives it.
  const [selfHovered, setSelfHovered] = useState<boolean>(false);
  const active = isHovered || selfHovered;

  const redirect = useRouter();

  return (
    <button
      className={cn(
        `relative flex items-center gap-1 w-max text-foreground text-nowrap [&>svg]:text-foreground [&>svg]:size-4 cursor-pointer font-medium`,
        className,
      )}
      onMouseEnter={() => {
        setSelfHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setSelfHovered(false);
        onLeave?.();
      }}
      onClick={() => {
        if (href) redirect.push(href);
      }}
      {...props}
    >
      {children}

      <motion.div
        variants={UNDERLINE_VARIANTS}
        initial="rest"
        animate={active ? "hover" : "rest"}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 w-full h-px bg-primary origin-left"
      ></motion.div>
    </button>
  );
}

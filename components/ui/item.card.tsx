"use client";

import { toKebabCase } from "@/utils/case-converter";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

function ItemCardGridWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-4 gap-2", className)}>
      {children}
    </div>
  );
}

function ItemCardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-96 w-full rounded-sm", className)}>
      {children}
    </div>
  );
}

export interface IItem {
  key: string;
  image: string;
  title: string;
  href?: string;
}

function ItemImageBleedCard({
  item,
  fullBleed,
}: {
  item: IItem;
  fullBleed?: boolean;
}) {
  return (
    <Link href={`/solutions/${toKebabCase(item.key)}`}>
      <div
        role="link"
        tabIndex={0}
        className={cn(
          "group relative h-full min-h-130 max-w-full overflow-hidden rounded-[inherit] md:aspect-5/4 lg:aspect-video shadow",
          {
            "min-h-130": fullBleed,
          },
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={640}
          height={360}
          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 h-full bg-linear-to-b from-black/80 to-black/20" />
        {/* Block */}
        <div className="absolute top-0 left-0 p-4 text-start">
          <p className="text-3xl font-medium text-white">{item.title}</p>
        </div>
        {/* end Block */}
      </div>
    </Link>
  );
}

interface IProductItem extends Omit<IItem, "href"> {
  description: string;
  tags?: string[];
  href: string;
  // Non Functional properties
  category?: string;
  manufacturer?: string;
  model?: string;
  year?: string;
}

function ItemProductCard({ item }: { item: IProductItem }) {
  return (
    <div
      className={cn(
        "group relative h-full min-h-130 w-full max-w-120 overflow-hidden rounded-[inherit] md:aspect-5/4 lg:aspect-video shadow mx-auto",
      )}
    >
      <div className="relative rounded-sm overflow-hidden z-20">
        <Image
          src={item.image}
          alt={item.title}
          width={640}
          height={360}
          className="-z-20 w-full h-full max-h-58 object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-[inherit]"
        />
        <div className="absolute inset-0 h-full bg-linear from-black to-transparent rounded-[inherit] z-20" />
        {/* Tags */}
        {item?.tags ? (
          <div className={"absolute bottom-2 left-2 z-30"}>
            {item.tags.map((tag, index) => (
              <span
                key={tag}
                className="inline-block bg-black/50 text-white text-xs px-2 py-1 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {/* end Tags */}
      </div>
      {/* Block */}
      {/* Content area */}
      <div className="px-3 space-y-6 flex flex-col h-full">
        {/* Text Area */}
        <div className="py-4 space-y-2 text-start">
          {/* title */}
          <h3 className="text-2xl font-medium text-foreground tracking-tighter">
            {item.title}
          </h3>
          {/* end Title */}
          {/* Description */}
          <p className="text-base tracking-tight leading-[1.2] text-muted-foreground line-clamp-2 max-w-[95%] lg:max-w-[80%]">
            {item.description}
          </p>
          {/* end Description */}
        </div>
        {/* end Text Area */}
        {/* CTA */}
        <div className="text-start">
          <Button
            className="rounded-full"
            nativeButton={false}
            render={
              <Link href={item.href}>
                Visit
                <IconArrowUpRight />
              </Link>
            }
          ></Button>
        </div>
        {/* end CTA */}
      </div>
      {/* end Content area */}
    </div>
  );
}

export {
  ItemCardGridWrapper,
  ItemCardWrapper,
  ItemImageBleedCard,
  ItemProductCard,
};

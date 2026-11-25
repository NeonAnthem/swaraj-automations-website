"use client";

import type { IMachineAsset } from "@/data/static/machines/machines.types";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FULL_WIDTH_PX = 200;
const COLLAPSED_WIDTH_PX = 96;

const GAP_PX = 2;
const MARGIN_PX = 2;

// Utility to extract YouTube ID for auto-thumbnails and clean embeds
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getThumbnailUrl(asset: IMachineAsset) {
  if (asset.thumbnailUrl) return asset.thumbnailUrl;
  if (asset.type === "youtube") {
    const id = getYouTubeId(asset.url);
    return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : asset.url;
  }
  return asset.url;
}

interface IThumbnailsProps {
  assets: IMachineAsset[];
  index: number;
  setIndex: (index: number) => void;
}

function Thumbnails({ assets, index, setIndex }: IThumbnailsProps) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="mx-auto overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex h-32 w-fit gap-0.5 pb-2 max-md:hidden">
        {assets.map((asset, i) => {
          const isVideo = asset.type === "video" || asset.type === "youtube";
          return (
            <motion.button
              key={`${asset.url}-${i}`}
              type="button"
              aria-label={`Show asset ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              initial={false}
              animate={i === index ? "active" : "inactive"}
              variants={{
                active: {
                  width: FULL_WIDTH_PX,
                  marginLeft: MARGIN_PX,
                  marginRight: MARGIN_PX,
                },
                inactive: {
                  width: COLLAPSED_WIDTH_PX,
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative h-full shrink-0 overflow-hidden rounded-md transition-opacity ${
                i === index ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={getThumbnailUrl(asset)}
                alt={asset.alt}
                fill
                sizes={`${FULL_WIDTH_PX}px`}
                className="pointer-events-none select-none object-cover"
                draggable={false}
              />
              {/* Play Icon Overlay for Videos */}
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <svg
                    className="h-8 w-8 text-white drop-shadow-md"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

interface IThumbnailsCarouselProps {
  assets?: IMachineAsset[];
}

export default function ThumbnailsCarousel({
  assets = [],
}: IThumbnailsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  if (assets.length === 0) return null;

  return (
    <div className="w-full mt-12">
      <div className="flex flex-col gap-3">
        {/* Main Carousel */}
        <div
          className="relative overflow-hidden rounded-sm border border-border bg-black"
          ref={containerRef}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(assets.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {assets.map((asset, i) => (
              <div
                key={`${asset.url}-${i}`}
                className="relative aspect-4/3 w-full shrink-0"
              >
                {asset.type === "image" && (
                  <Image
                    src={asset.url}
                    alt={asset.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="pointer-events-none select-none object-contain"
                    draggable={false}
                  />
                )}
                {asset.type === "video" && (
                  <video
                    src={asset.url}
                    controls
                    controlsList="nodownload"
                    className={`h-full w-full object-contain ${isDragging ? "pointer-events-none" : "pointer-events-auto"}`}
                  />
                )}
                {asset.type === "youtube" && (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(asset.url)}?rel=0`}
                    title={asset.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`h-full w-full border-0 ${isDragging ? "pointer-events-none" : "pointer-events-auto"}`}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <motion.button
            type="button"
            aria-label="Previous asset"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-md transition-transform
              ${
                index === 0
                  ? "cursor-not-allowed bg-white/50 opacity-40"
                  : "bg-white opacity-80 hover:scale-110 hover:opacity-100"
              }`}
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            type="button"
            aria-label="Next asset"
            disabled={index === assets.length - 1}
            onClick={() => setIndex((i) => Math.min(assets.length - 1, i + 1))}
            className={`absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-md transition-transform
              ${
                index === assets.length - 1
                  ? "cursor-not-allowed bg-white/50 opacity-40"
                  : "bg-white opacity-80 hover:scale-110 hover:opacity-100"
              }`}
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Asset Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {index + 1} / {assets.length}
          </div>
        </div>

        <Thumbnails assets={assets} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

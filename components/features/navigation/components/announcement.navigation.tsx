"use client";

import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { IconArrowUpRight, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { useNavigationStore } from "../providers/navigation.store.provider";
import {
  ANNOUNCEMENT_DISMISSED_ATTR,
  ANNOUNCEMENT_STORAGE_KEY,
} from "./announcement.constants.navigation";

/** Message copies per marquee half — enough to overflow wide screens. */
const MARQUEE_REPEAT = 8;

/**
 * Slim announcement bar fixed above the navbar. The message scrolls in a
 * marquee while the CTA and close button stay pinned on the right, so they
 * remain visible on mobile. Dismissal is kept in sessionStorage, so it only
 * lasts for the current tab.
 */
export default function AnnouncementBanner() {
  const announcement = useNavigationStore((s) => s.announcement);
  const isOpen = useNavigationStore((s) => s._system.isAnnouncementOpen);
  const setIsOpen = useNavigationStore((s) => s._system.setIsAnnouncementOpen);

  // Sync the store with the tab's stored dismissal (the head script already
  // hid the banner visually before paint).
  useLayoutEffect(() => {
    if (!announcement) return;
    try {
      if (
        sessionStorage.getItem(ANNOUNCEMENT_STORAGE_KEY) === announcement.id
      ) {
        setIsOpen(false);
      }
    } catch {
      // sessionStorage unavailable — keep the banner visible
    }
  }, [announcement, setIsOpen]);

  if (!announcement || !isOpen) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, announcement.id);
    } catch {
      // ignore — dismissal just won't persist
    }
    document.documentElement.setAttribute(ANNOUNCEMENT_DISMISSED_ATTR, "");
    setIsOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Announcement"
      data-announcement-banner
      className="fixed inset-x-0 top-0 z-110 flex h-(--announcement-height) items-center gap-2 bg-background pr-2 pl-3 text-sm text-foreground border-b"
    >
      <Marquee className="min-w-0 flex-1" speed={80}>
        {Array.from({ length: MARQUEE_REPEAT }, (_, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="flex items-center gap-4 whitespace-nowrap"
          >
            {announcement.message}
            <span aria-hidden="true">•</span>
          </span>
        ))}
      </Marquee>

      <div className="flex shrink-0 items-center gap-1">
        {announcement.link && (
          <Button
            variant="secondary"
            size="xs"
            nativeButton={false}
            className={"rounded-sm"}
            render={
              <Link href={announcement.link.href}>
                {announcement.link.label}
                <IconArrowUpRight />
              </Link>
            }
          />
        )}
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Dismiss announcement"
          onClick={dismiss}
          className="hover:bg-primary-foreground/15 hover:text-primary-foreground dark:hover:bg-primary-foreground/15"
        >
          <IconX />
        </Button>
      </div>
    </div>
  );
}

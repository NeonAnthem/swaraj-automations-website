import { IAnnouncement } from "../types/announcement.types";
import {
  ANNOUNCEMENT_DISMISSED_ATTR,
  ANNOUNCEMENT_HEIGHT,
  ANNOUNCEMENT_STORAGE_KEY,
} from "./announcement.constants.navigation";

/**
 * Server-rendered companion of the AnnouncementBanner.
 *
 * - Reserves the banner height through `--announcement-height` so the navbar
 *   and the mobile panel are offset from the very first paint.
 * - Restores the per-tab dismissed state before paint, so a dismissed banner
 *   never flashes in and the offset resets to zero.
 */
export default function AnnouncementHead({
  announcement,
}: {
  announcement: IAnnouncement | null;
}) {
  if (!announcement) return null;

  const css = `:root{--announcement-height:${ANNOUNCEMENT_HEIGHT}}html[${ANNOUNCEMENT_DISMISSED_ATTR}]{--announcement-height:0px}html[${ANNOUNCEMENT_DISMISSED_ATTR}] [data-announcement-banner]{display:none}`;

  // JSON.stringify output is made safe for inline <script> by escaping "<".
  const id = JSON.stringify(announcement.id).replace(/</g, "\\u003c");
  const script = `try{if(sessionStorage.getItem(${JSON.stringify(
    ANNOUNCEMENT_STORAGE_KEY,
  )})===${id})document.documentElement.setAttribute(${JSON.stringify(
    ANNOUNCEMENT_DISMISSED_ATTR,
  )},"")}catch(e){}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}

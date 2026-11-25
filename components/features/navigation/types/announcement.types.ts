export interface IAnnouncementLink {
  href: string;
  label: string;
}

/**
 * Announcement banner content. Mirrors the shape of the future Sanity document.
 */
export interface IAnnouncement {
  id: string;
  isActive: boolean;
  message: string;
  title: string;
  description?: string;
  link?: IAnnouncementLink;
}

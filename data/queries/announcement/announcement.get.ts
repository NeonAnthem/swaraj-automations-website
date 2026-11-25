import { IAnnouncement } from "@/components/features/navigation/types/announcement.types";

/**
 * Returns the active announcement, or null when there is none.
 * Mock source for now — swap the body for a Sanity query later.
 */
const getAnnouncement = async (): Promise<IAnnouncement | null> => {
  // 'use cache'
  return MOCK_ANNOUNCEMENT.isActive ? MOCK_ANNOUNCEMENT : null;
};

export default getAnnouncement;

const MOCK_ANNOUNCEMENT: IAnnouncement = {
  id: "imtex-2027",
  isActive: true,
  message:
    "Swaraj Automations is exhibiting at the upcoming IMTEX 2027 trade show in Bangalore, January 21st to 27th",

  title: "Exhibiting at IMTEX 2027 Bangalore, India",
  description: "Join us at the largest machine tool exhibition in South Asia!",
  link: { href: "/contact", label: "Visit us" },
};

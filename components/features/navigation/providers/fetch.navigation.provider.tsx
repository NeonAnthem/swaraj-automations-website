import getAnnouncement from "@/data/queries/announcement/announcement.get";
import getNavigationMenus from "@/data/queries/navigation/navigation.get";
import { PropsWithChildren } from "react";
import AnnouncementHead from "../components/announcement.head.navigation";
import NavigationStoreProvider from "./navigation.store.provider";

/**
 * Fetch Navigation content from getNavigationMenus and pass it to the store
 *
 * @param children
 * @returns
 */
export async function NavigationFetchProvider({ children }: PropsWithChildren) {
  const [{ menus, cta }, announcement] = await Promise.all([
    getNavigationMenus(),
    getAnnouncement(),
  ]);

  // Pass Fetched navigation data to store
  return (
    <NavigationStoreProvider
      menus={menus}
      cta={cta}
      announcement={announcement}
    >
      <AnnouncementHead announcement={announcement} />
      {children}
    </NavigationStoreProvider>
  );
}

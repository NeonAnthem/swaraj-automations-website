// -- Navigation Context Store ----

import { IAnnouncement } from "../types/announcement.types";
import { INavbarItems } from "../types/navbar.types";

/**
 * Navigation Root Store type
 */
type INavigationStore = INavigationState &
  INavigationAction & {
    _system: INavigationSystemStore;
  };

interface INavigationState {
  menus: INavbarItems[];
  cta: INavigationCTA;
  announcement: IAnnouncement | null;
}

interface INavigationCTA {
  primaryCTA: { href: string; label: string };
  secondaryCTA: { href: string; label: string };
}

//* Navigation Actions
interface INavigationAction {
  updateMenus: (value: INavbarItems[]) => void;
  updatePrimaryCTA: (value: INavigationCTA["primaryCTA"]) => void;
  updateSecondaryCTA: (value: INavigationCTA["secondaryCTA"]) => void;
}

// -- Navigation System Store ----

/**
 * Navigation System Store type
 */
type INavigationSystemStore = INavigationSystemState & INavigationSystemAction;

interface INavigationSystemState {
  isDark: boolean;
  isTransparent: boolean;
  isScrolled: boolean;
  isOpen: boolean;
  isMobileOpen: boolean;
  isAnnouncementOpen: boolean;
  activeChildId: string | null;
}
interface INavigationSystemAction {
  setIsDark: (value: boolean) => void;
  setIsTransparent: (value: boolean) => void;
  setIsScrolled: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
  setIsMobileOpen: (value: boolean) => void;
  setIsAnnouncementOpen: (value: boolean) => void;
  setActiveChildId: (id: string | null) => void;
}

export {
  // -- Root navigation export
  type INavigationAction,
  type INavigationState,
  type INavigationStore,
  // -- System navigation export
  type INavigationSystemAction,
  type INavigationSystemState,
  type INavigationSystemStore,
};

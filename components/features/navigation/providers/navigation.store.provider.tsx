"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useStore } from "zustand";
import { createNavigationStore } from "../store/navigation.store";
import {
  INavigationState,
  INavigationStore,
} from "../store/navigation.types.store";
import { INavbarItems } from "../types/navbar.types";

export type NavigationStoreApi = ReturnType<typeof createNavigationStore>;

/**
 * Navigation React Context
 */
export const NAVIGATIONSTORECONTEXT = createContext<
  NavigationStoreApi | undefined
>(undefined);

interface INavigationStoreProviderProps extends PropsWithChildren {
  menus: INavbarItems[];
  cta: INavigationState["cta"];
  announcement: INavigationState["announcement"];
}

/**
 * Context Store Provider
 */
function NavigationStoreProvider({
  menus,
  cta,
  announcement,
  children,
}: INavigationStoreProviderProps) {
  const defaultValue = {
    menus: menus,
    cta: cta,
    announcement: announcement,
  };
  const _systemDefaultValue = {
    activeChildId: null,
    isDark: false,
    isTransparent: false,
    isScrolled: false,
    isOpen: false,
    isMobileOpen: false,
    isAnnouncementOpen: true,
  };

  const [store] = useState(() =>
    createNavigationStore(defaultValue, _systemDefaultValue),
  );

  return (
    <NAVIGATIONSTORECONTEXT.Provider value={store}>
      {children}
    </NAVIGATIONSTORECONTEXT.Provider>
  );
}

/**
 * State hook for Navigation Store
 */

const useNavigationStore = <T,>(
  selector: (store: INavigationStore) => T,
): T => {
  const navigationStoreContext = useContext(NAVIGATIONSTORECONTEXT);
  if (!navigationStoreContext) {
    throw new Error(
      "useNavigationStore must be used within NavigationStoreContext",
    );
  }
  return useStore(navigationStoreContext, selector);
};

export default NavigationStoreProvider;

export { useNavigationStore };

import { NavContent } from "@/components/ui/nav-items";

import { NavigationMenu } from "@base-ui/react/navigation-menu";

import { INavbarItems } from "../../types/navbar.types";
import { INavigationItemsAdapterProps } from "./items.navigation.types";
import { NavigationPortal } from "./portal.navigation";
import { NavigationRoot } from "./root.navigation";
import { NavigationItemTrigger } from "./trigger.navigation";

/**
 * Desktop Navigation adapter — Base UI mega-menu, hidden below `md`.
 */
function NavigationDesktopAdapter({ menus }: INavigationItemsAdapterProps) {
  return (
    <div className="hidden md:block">
      <NavContent>
        {/* Navigation Menu */}

        <NavigationRoot>
          {/* Navigation Root Item list */}
          <NavigationMenu.List
            className={
              "relative group/list flex flex-1 gap-8 list-none items-center justify-center"
            }
          >
            {/* Top level Navigation items */}
            {menus?.map((topItem: INavbarItems, index) => {
              return (
                <NavigationItemTrigger {...topItem} key={topItem.id + index} />
              );
            })}

            {/* end Top Level Navigation items */}
          </NavigationMenu.List>
          {/* End Navigation Root Item list */}

          {/* Content Portal */}
          <NavigationPortal />
          {/* end Content Portal */}
        </NavigationRoot>

        {/* End Navigation Menu */}
      </NavContent>
    </div>
  );
}

export { NavigationDesktopAdapter };

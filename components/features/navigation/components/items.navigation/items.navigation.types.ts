import { INavbarItems } from "../../types/navbar.types";

/**
 * Shared prop contract both the desktop and mobile navigation adapters
 * conform to. `items.navigation.tsx` composes between them purely via
 * Tailwind responsive classes — neither adapter is aware of the other.
 */
interface INavigationItemsAdapterProps {
  menus: INavbarItems[];
}

export { type INavigationItemsAdapterProps };

import { PropsWithChildren } from "react";
import { NavigationFetchProvider } from "./fetch.navigation.provider";

/**
 * Root Navigation Store installer
 *
 * @param children
 * @returns
 */
export default function NavigationProvider({ children }: PropsWithChildren) {
  return <NavigationFetchProvider>{children}</NavigationFetchProvider>;
}

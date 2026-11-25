import { cn } from "@/lib/utils";
import { NavigationMenu } from "@base-ui/react";
import { PropsWithChildren } from "react";
import { useNavigationStore } from "../../providers/navigation.store.provider";

function NavigationRoot({ children }: PropsWithChildren) {
  const activeChildId = useNavigationStore((s) => s._system.activeChildId);
  const isDark = useNavigationStore((s) => s._system.isDark);

  const setActiveChildId = useNavigationStore(
    (s) => s._system.setActiveChildId,
  );

  return (
    <NavigationMenu.Root
      // value={isOpen === true ? isOpen : null}
      value={activeChildId}
      orientation="horizontal"
      className={cn("min-w-max", {
        dark: isDark,
      })}
      onValueChange={(value) => {
        setActiveChildId(value);
      }}
      onOpenChangeComplete={() => {
        setActiveChildId(null);
      }}
    >
      {children}
    </NavigationMenu.Root>
  );
}

export { NavigationRoot };

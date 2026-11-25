import { cn } from "@/lib/utils";
import { NavigationMenu } from "@base-ui/react";

function NavigationPortal() {
  return (
    <NavigationMenu.Portal>
      <NavigationMenu.Backdrop
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-lg",
          // Base UI only watches the popup to delay unmount, so the exit here
          // must finish within the popup's 300ms exit or it gets cut off.
          "transition-[background-color,backdrop-filter] duration-700 ease-out",
          "data-starting-style:bg-transparent data-starting-style:backdrop-blur-[0px]",
          "data-ending-style:bg-transparent data-ending-style:backdrop-blur-[0px] data-ending-style:duration-300",
          "motion-reduce:transition-none",
        )}
      />
      <NavigationMenu.Positioner
        sideOffset={10}
        align="center"
        sticky={true}
        collisionPadding={{ top: 5, bottom: 5, left: 0, right: 0 }}
        collisionAvoidance={{ side: "none" }}
        className="z-100 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
        style={{
          ["--duration" as string]: "0.35s",
          ["--easing" as string]: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <NavigationMenu.Popup
          className={cn(
            "dark *:bg-background **:text-primary text-primary *:border-y",
            // Runs on open/close only: switching items swaps content inside
            // the viewport without remounting the popup, so hovering between
            // triggers never re-fires this entrance.
            "transition-[opacity,translate,filter] duration-450 ease-(--easing)",
            "data-starting-style:opacity-0 data-starting-style:-translate-y-3 data-starting-style:blur-xs",
            "data-ending-style:opacity-0 data-ending-style:-translate-y-2 data-ending-style:duration-300 data-ending-style:ease-out",
            "motion-reduce:transition-none",
          )}
        >
          {/* <NavigationMenu.Arrow className="relative block h-1.5 w-3 overflow-clip transition-[left,right] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:bottom-0 before:left-1/2 before:block before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:-translate-x-1/2 before:translate-y-1/2 before:rotate-45 before:border before:border-neutral-950 before:bg-white before:content-[''] data-[side=bottom]:top-[-6px] data-[side=left]:right-[-9px] data-[side=left]:rotate-90 data-[side=right]:left-[-9px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180 dark:before:border-white dark:before:bg-neutral-950" /> */}
          <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
        </NavigationMenu.Popup>
      </NavigationMenu.Positioner>
    </NavigationMenu.Portal>
  );
}

export { NavigationPortal };

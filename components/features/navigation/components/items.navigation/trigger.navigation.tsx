import CTALink from "@/components/cta/link.cta";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@base-ui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigationStore } from "../../providers/navigation.store.provider";
import { INavbarItems } from "../../types/navbar.types";
import { NavigationContent } from "./content.navigation/content.navigation";

function NavigationItemTrigger({ ...item }: INavbarItems) {
  const activeChildId = useNavigationStore((s) => s._system.activeChildId);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  if (item?.href)
    return (
      <NavigationMenu.Link
        href={item?.href}
        className={
          "pr-8 relative text-xl flex items-center gap-1 w-max text-white group-data-[solid=true]/nav:text-foreground text-nowrap [&>svg]:text-foreground [&>svg]:size-4 cursor-pointer font-medium"
        }
      >
        {item.label}
      </NavigationMenu.Link>
    );

  return (
    <NavigationMenu.Item
      data-slot={"navigation-menu-item"}
      value={item.id}
      className={cn("", {
        "opacity-40 transition-all ease-in-out duration-300":
          activeChildId && activeChildId !== item.id,
      })}
      aria-label={item.label}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <NavigationMenu.Trigger
        data-slot={"navigation-menu-trigger"}
        className={cn("pr-8 font-medium group/navigation-menu-trigger")}
        nativeButton={false}
        render={
          <div className="relative">
            <CTALink
              isHovered={isHovered}
              className="cursor-default! text-white [&>svg]:text-white group-data-[solid=true]/nav:text-foreground group-data-[solid=true]/nav:[&>svg]:text-foreground text-xl!"
            >
              {item.label}
              <NavigationMenu.Icon
                className="transition-transform duration-200 ease-[ease] data-popup-open:rotate-180"
                render={
                  <IconChevronDown aria-hidden={true} className={cn("")} />
                }
              />
            </CTALink>
          </div>
        }
      />
      {/* Dropdown Content */}

      <NavigationContent child={item.child} />

      {/* End Dropdown Content */}
    </NavigationMenu.Item>
  );
}

export { NavigationItemTrigger };

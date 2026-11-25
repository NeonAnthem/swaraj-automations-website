import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { useNavigationStore } from "../../providers/navigation.store.provider";

export default function NavigationCTA() {
  const { primaryCTA, secondaryCTA } = useNavigationStore((s) => s.cta);

  return (
    <>
      {/* Secondary Navigation */}

      <Link href={secondaryCTA.href} className="max-sm:hidden">
        <Button className="font-medium" variant={"ghost"}>
          {secondaryCTA.label}
          <IconArrowUpRight />
        </Button>
      </Link>

      {/* End Secondary Navigation */}

      {/* Primary Navigation */}
      <Link href={primaryCTA.href}>
        <Button className="">{primaryCTA.label}</Button>
      </Link>
      {/* end Primary Navigation */}
    </>
  );
}

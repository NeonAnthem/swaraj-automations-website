import { NavBrand } from "@/components/ui/nav-items";
import CompanyLogo from "@/components/vectors/company.logo";
import { cn } from "@/lib/utils";

export default function NavigationLogo() {
  return (
    <NavBrand>
      <CompanyLogo className={cn("max-sm:h-5! h-6! w-auto fill-primary")} />
    </NavBrand>
  );
}

import CategorizedLandingPage from "@/components/templates/categorized-landing-page";
import {
  ItemCardGridWrapper,
  ItemProductCard,
} from "@/components/ui/item.card";
import { MACHINES_LIST } from "@/data/static/machines";
import { getDefaultImage } from "@/utils/get-default-image";

export default function MachinesPage() {
  return (
    <CategorizedLandingPage
      heading={{
        title: "Our Machines",
        tagline: "We aim to provide innovative solutions",
        tags: [],
      }}
    >
      {/* Item Wrapper */}
      <ItemCardGridWrapper>
        {MACHINES_LIST?.map((machine, index) => (
          <ItemProductCard
            key={index}
            item={{
              key: machine.key,
              image: getDefaultImage(machine.assets)?.url ?? "",
              title: machine.name,
              description: machine.description,
              href: "#",
            }}
          />
        ))}
      </ItemCardGridWrapper>
      {/* end Item Wrapper */}
    </CategorizedLandingPage>
  );
}

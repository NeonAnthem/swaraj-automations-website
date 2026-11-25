import CategorizedLandingPage from "@/components/templates/categorized-landing-page";
import {
  ItemCardGridWrapper,
  ItemCardWrapper,
  ItemImageBleedCard,
} from "@/components/ui/item.card";
import { SOLUTIONS_LIST } from "@/data/static/solutions";

export default function SolutionsLandingPage() {
  return (
    <CategorizedLandingPage
      heading={{
        title: "Solutions we provide",
        tagline: "Industries we serve",
        tags: [],
      }}
    >
      <ItemCardGridWrapper>
        {SOLUTIONS_LIST.map((solution) => {
          return (
            <ItemCardWrapper key={solution.key}>
              <ItemImageBleedCard item={solution} />
            </ItemCardWrapper>
          );
        })}
      </ItemCardGridWrapper>
    </CategorizedLandingPage>
  );
}

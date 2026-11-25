import { PropsWithChildren } from "react";
import { Section, SectionContent } from "../features/section/index.section";
import PageHeading, { IPageHeadingProps } from "./page-heading";

interface ICategorizedLandingPageProps extends PropsWithChildren {
  heading: IPageHeadingProps; // Page Heading Props
}

export default function CategorizedLandingPage({
  heading,
  children,
}: ICategorizedLandingPageProps) {
  return (
    <>
      <Section className={"border-b"}>
        <SectionContent>
          <PageHeading {...heading} />
        </SectionContent>
      </Section>
      {/* Cards Slot */}
      <Section>
        <SectionContent>{children}</SectionContent>
      </Section>
      {/* end Cards Slot */}
    </>
  );
}

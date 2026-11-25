import TransparentNavigation from "@/components/features/navigation/hooks/use-transparent-navigation";
import CareersPageSection from "@/components/cards/careers-page";
import { Section } from "@/components/features/section/index.section";

export default function CareersPage() {
  return (
    <>
      <TransparentNavigation />
      <Section spacing={"none"} className={""}>
        <CareersPageSection />
      </Section>
    </>
  );
}

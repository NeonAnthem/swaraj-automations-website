import { ContactCard } from "@/components/cards/contact-card";
import WelcomeBanner from "@/components/cards/welcome-card";
import TransparentNavigation from "@/components/features/navigation/hooks/use-transparent-navigation";
import { Section } from "@/components/features/section/element.section";
import { SectionContent } from "@/components/features/section/index.section";
import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <>
      <TransparentNavigation />
      <Section
        className={"relative min-h-[80vh] flex items-center justify-center"}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/cnc-machine.webp')" }}
        ></div>
        {/* end Background Image */}
        <SectionContent className={""}>
          <ContactCard
            title="Contact Sales"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: IconMail,
                label: "Email",
                value: "sales@swarajautomation.in",
              },
              {
                icon: IconPhone,
                label: "Phone",
                value: "+91 (808)-701-6320",
              },
              {
                icon: IconMapPin,
                label: "Address",
                value: "Pirangut Maharashtra, India",
                className: "col-span-2",
              },
            ]}
          >
            <ContactInquiryForm />
          </ContactCard>
        </SectionContent>
      </Section>

      {/* Careers Card */}
      <Section spacing={"none"}>
        <WelcomeBanner />
      </Section>
      {/* end Careers Card */}
    </>
  );
}

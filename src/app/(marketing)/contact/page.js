import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { CONTACT_DATA } from "@/data/contact";
import {
  ContactHero,
  ContactInfo,
  ConsultationForm,
  ShowroomSection,
  WhyChooseUs,
  FAQ,
  ContactCTA,
} from "@/components/contact";

export const metadata = {
  title: "Contact Us | Veloura Living",
  description: "Get in touch with our design concierge to curate your perfect living space.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white pt-[90px]">
        <ContactHero data={CONTACT_DATA.hero} />
        
        <Container className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-4 lg:col-start-2">
              <ContactInfo data={CONTACT_DATA.info} />
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-6">
              <ConsultationForm options={CONTACT_DATA.formOptions} />
            </div>
          </div>
        </Container>

        <ShowroomSection data={CONTACT_DATA.showroom} />
        <WhyChooseUs features={CONTACT_DATA.features} />
        <FAQ faqs={CONTACT_DATA.faqs} />
        <ContactCTA />
      </main>
    </PageTransition>
  );
}

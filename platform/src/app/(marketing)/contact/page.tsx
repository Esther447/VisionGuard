import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Contact Us — VisionGuard",
  description: "Get in touch with VisionGuard. Let's talk about your project and how we can help you grow online.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <CTA />
    </>
  );
}

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: 'Contact | Shipyards Web Studio',
  description: 'Contact the team at Shipyards Web Studio and let\'s chat about how we can build you a fast & modern website.',
};

export default function ContactPage() {
  return (
    <>
      <ContactDetails />
      <ContactForm />
    </>
  );
}
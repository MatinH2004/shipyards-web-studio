import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactDetails />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
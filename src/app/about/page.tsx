import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import AboutUs from "@/components/about/AboutUs";
import Process from "@/components/about/Process";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutUs />
        <Process />
      </main>
      <Footer />
    </>
  );
}
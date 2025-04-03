import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Offer />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
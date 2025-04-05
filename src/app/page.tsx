import Hero from "@/components/home/Hero";
import Navbar from "@/components/global/Navbar";
import Features from "@/components/home/Features";
import Offer from "@/components/home/Offer";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/global/Pricing";
import Footer from "@/components/global/Footer";

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
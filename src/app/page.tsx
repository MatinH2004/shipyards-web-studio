import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Offer from "@/components/home/Offer";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/global/Pricing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Offer />
      <Portfolio />
      <Pricing />
    </>
  );
}
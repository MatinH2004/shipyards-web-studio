import AboutUs from "@/components/about/AboutUs";
import Process from "@/components/about/Process";

export const metadata = {
  title: 'About | Shipyards Web Studio',
  description: 'Learn more about the team behind Shipyards Web Studio and our mission to help small businesses succeed online.',
};

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <Process />
    </>
  );
}
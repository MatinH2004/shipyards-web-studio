import Link from 'next/link';
import { CheckCircle } from "lucide-react";

const offerItems = [
  {
    title: "100% SECURE",
    description: "We prioritize security and performance, ensuring your website stays fast and protected.",
  },
  {
    title: "CUSTOM DESIGNED",
    description: "Our designs are made by an in-house design team, which allows us to make anything we want.",
  },
  {
    title: "100 PAGESPEED SCORES",
    description: "Our sites have zero bloat, zero waste, and built with purpose so we get perfect 98-100/100 speed scores with Google.",
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "If we can’t design something you like, you get your money back and the contract is cancelled. We stand by our work.",
  },
  {
    title: "UNMATCHED SUPPORT",
    description: "Call or text us anytime, no phone trees or robots. When you call us you get me - the owner and developer.",
  },
  {
    title: "WE KNOW SEO",
    description: "No snake oil, no tricks, no lies. We explain very clearly what SEO is, how it works, and what we can do to get you ranking.",
  },
];

export default function Offer() {
  return (
    <section className="pt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400">What We Offer</h2>
        
        <p className="text-4xl md:text-5xl font-bold text-white mt-2 max-w-3xl mx-auto ">Websites starting at $0 down and $199 per month</p>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          We offer $0 down for a standard 5-page small business website. If you need more than that, we have custom pricing based on the scope of work, number of additional pages, and time involved. 12-month minimum contract. Includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {offerItems.map((item, index) => (
            <div key={index} className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-start mb-4">
                <CheckCircle size={40} className="text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold text-white whitespace-nowrap">{item.title}</h3>
              </div>
              <p className="text-gray-400 mt-2 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl">
          Schedule A Call
        </Link>
      </div>
    </section>
  );
}


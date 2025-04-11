import Link from "next/link";
import { CheckCircle } from "lucide-react";

const pricingPackages = [
  {
    type: "Lump Sum",
    services: [
      "Design & Development",
      "SEO & Google Ranking",
      "100/100 Page Speed",
      "+$150 Fee Per Page After 5",
      "+$30/mo Hosting",
      "+$50/mo Unlimited Edits Add-on",
    ],
    price: "$2499",
    extra: "+ $30/mo Hosting",
  },
  {
    type: "Monthly",
    services: [
      "Design & Development",
      "SEO & Google Ranking",
      "100/100 Page Speed",
      "Includes Hosting",
      "$100 Fee Per Page After 5",
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
    price: "$199",
    extra: "Per Month",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">Our Pricing</p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mx-auto max-w-3xl">
          Pricing Packages For Every Budget
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-gray-400">
          We have worked with clients all over Canada for home service contractors, fitness coaches, startups, trainers, wellness centers, and more.
          No matter what your business is, we can build a website that is effective, beautiful, performant, and tailored to your industry.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className="p-8 border border-gray-700 rounded-xl shadow-lg shadow-blue-500 text-left flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-3xl font-bold text-white">{pkg.type}</h3>
                <ul className="mt-6 space-y-4">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex justify-between items-center text-lg text-gray-300">
                      {service}
                      <CheckCircle size={20} className="text-green-400" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Section - Always at Bottom */}
              <div className="flex justify-between items-center mt-auto pt-6">
                <div>
                  <p className="text-4xl font-bold text-white">{pkg.price}</p>
                  <p className="text-gray-400 text-sm">{pkg.extra}</p>
                </div>
                <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/lib/data/portfolio";

export default function Portfolio() {
  return (
    <section className="pt-20 mb-10 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">All businesses, All happy clients</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 max-w-3xl mx-auto">Portfolio</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">{item.name}</h3>
              <p className="text-gray-400 mt-2 px-4">{item.description}</p>
              <div className="flex flex-col gap-2 px-6">
                <Link
                  href={item.link}
                  target="_blank"
                  className="mt-4 inline-block border border-gray-600 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition hover:border-gray-100"
                >
                  Visit Website
                </Link>
                <Link
                  href={item.caseStudyLink}
                  className="inline-block border border-gray-600 bg-gray-600 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition hover:border-gray-100"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
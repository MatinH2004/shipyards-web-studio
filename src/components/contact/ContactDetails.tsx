import Link from 'next/link';
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-white space-y-10">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Image and contact details side by side */}
      <div className="flex flex-col md:flex-row gap-12 mt-10 items-center justify-center">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2">
          <Image 
            src="/images/contact.svg" 
            alt="Web design landscape" 
            width={600} 
            height={300}
            className="mx-auto"
          />
        </div>

        {/* Contact details on the right */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="group flex items-center gap-6 cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-colors duration-200 group-hover:bg-white">
              <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg uppercase">Phone</h3>
              <Link href="tel:778-323-4696" className="text-gray-300 text-md">(778) 323-4696</Link>
            </div>
          </div>

          <div className="group flex items-center gap-6 cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-colors duration-200 group-hover:bg-white">
              <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg uppercase">Email</h3>
              <Link href="mailto:info.shipyardswebstudio@gmail.com" className="text-gray-300 text-md">info.shipyardswebstudio@gmail.com</Link>
            </div>
          </div>

          <div className="group flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-colors duration-200 group-hover:bg-white">
              <MapPin className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg uppercase">Areas Served</h3>
              <p className="text-gray-300 text-md">Canada &amp; USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";
import { navItems } from "@/lib/data/navItems";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-10 md:justify-between">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3">
          <Link href="/" className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <Anchor size={24} className="text-white" />
            Shipyards Web Studio
          </Link>
          <p className="text-gray-400 mt-2">
            We believe small businesses deserve better.
            Just because you&apos;re small, doesn&apos;t mean your site needs to be.
            Let us make you something amazing.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10">
          <ul>
            {navItems.map((item) => 
              <li key={item.label}>
                <Link href={item.href} className="text-gray-400 hover:text-white transition">
                  {item.label}
                </Link>
              </li> 
            )}
          </ul>

          {/* Contact Info */}
          <ul>
            <li className="font-bold uppercase mb-2 text-gray-300">Contact</li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-gray-400" />
              <Link href="tel:778-323-4696" className="text-gray-400 hover:text-white transition">
                (778) 323-4696
              </Link>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <Mail size={20} className="text-gray-400" />
              <Link href="mailto:info.shipyardswebstudio@gmail.com" className="text-gray-400 hover:text-white transition">
                info.shipyardswebstudio@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <MapPin size={20} className="text-gray-400" />
              <span className="text-gray-400 hover:text-white transition">
                North Vancouver, BC, Canada
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <span className="text-gray-400">
          © {new Date().getFullYear()} Shipyards Web Studio. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

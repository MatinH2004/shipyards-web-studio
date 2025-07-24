import Link from 'next/link';
import { Hammer, Rocket, Trophy, MessageSquare, Globe } from 'lucide-react';

export default function JackieMitchellPhysioCaseStudy() {
  return (
    <div className="pt-20 pb-10 text-white max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
      {/* Back to Portfolio Link */}
      <Link href="/portfolio" className="text-gray-400 hover:underline mb-8 block text-lg transition-colors duration-200">
        &larr; Back to Portfolio
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Transforming Jackie Mitchell Physio&apos;s Online Presence
      </h1>

      {/* Client & Services Info */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <p className="text-lg text-gray-300 mb-2"><strong className="text-white">Client:</strong> Jackie Mitchell Physio</p>
        <p className="text-lg text-gray-300 mb-2"><strong className="text-white">Services Provided:</strong> Website Redesign, Performance Optimization, SEO</p>
        <p className="text-lg text-gray-300"><strong className="text-white">Tech Stack:</strong> Next.js, Tailwind CSS, EmailJS, Vercel</p>
      </div>

      {/* The Problem Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        {/* Replaced 🚧 with Hammer icon */}
        <Hammer className="text-orange-400 mr-3 w-10 h-10" /> The Problem
      </h2>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Jackie Mitchell, a registered physiotherapist, was running an outdated WordPress website that wasn’t mobile-friendly, loaded slowly, and ranked poorly on Google. The design didn’t reflect her professionalism, and it was costing her over $250/year in unnecessary hosting and plugin expenses.
      </p>

      {/* The Solution Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        {/* Replaced 🚀 with Rocket icon */}
        <Rocket className="text-green-400 mr-3 w-10 h-10" /> The Solution
      </h2>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        After a strategic consultation to understand Jackie’s workflows and goals, I designed and developed a custom-built website using Next.js—a modern web framework that delivers speed, performance, and SEO advantages.
      </p>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        Key improvements included:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-8 space-y-2 pl-4">
        <li><strong className="text-white">Mobile-optimized design</strong> for an excellent user experience across all devices</li>
        <li><strong className="text-white">Blazing-fast load times</strong> thanks to performance-focused development and hosting on Vercel</li>
        <li><strong className="text-white">SEO-optimized pages</strong> with clean structure and metadata for better search visibility</li>
        <li><strong className="text-white">Integrated contact form</strong> using EmailJS for instant lead capture</li>
        <li><strong className="text-white">Streamlined costs</strong> by eliminating bulky WordPress hosting and unused tools</li>
      </ul>

      {/* The Results Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        {/* Replaced ✅ with Trophy icon */}
        <Trophy className="text-yellow-400 mr-3 w-10 h-10" /> The Results
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-8 space-y-2 pl-4">
        <li><strong className="text-white">$250+ in annual savings</strong> on web hosting and maintenance</li>
        <li><strong className="text-white">Significant boost in Google rankings</strong> for local physiotherapy-related searches</li>
        <li><strong className="text-white">A polished, professional web presence</strong> that builds trust with new clients</li>
        <li><strong className="text-white">4 new clients</strong> in just the first few weeks after launching the new site</li>
        <li><strong className="text-white">Peace of mind</strong> knowing the website is fast, secure, easy to update, plus 24/7 support</li>
      </ul>

      {/* Testimonial Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        {/* Replaced 💬 with MessageSquare icon */}
        <MessageSquare className="text-purple-400 mr-3 w-10 h-10" /> What Jackie Said
      </h2>
      <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 italic text-gray-200 mb-8">
        &quot;Matin helped me redo my website recently and I was very impressed! He was kind, patient and very professional.

        He even helped me save money by recommending that I cancel unnecessary services I no longer needed.
        I would highly recommend his services to anyone looking for help with their website!&quot;
      </blockquote>

      {/* Live Site Link */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        {/* Replaced 📍 with MapPin icon (or ExternalLink could be an alternative) */}
        <Globe className="text-gray-400 mr-3 w-10 h-10" /> Live Site
      </h2>
      <p className="text-lg mb-8">
        <Link
          href="https://jackiemitchellphysio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline font-semibold transition-colors duration-200"
        >
          🔗 jackiemitchellphysio.com
        </Link>
      </p>
    </div>
  );
}

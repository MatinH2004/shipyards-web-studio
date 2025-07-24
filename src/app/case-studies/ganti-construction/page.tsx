import Link from 'next/link';
import { BrickWall, Wrench, Trophy, Hammer, MessageSquare, Globe } from 'lucide-react';

export default function GantiConstructionCaseStudy() {
  return (
    <div className="pt-20 pb-10 text-white max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
      {/* Back to Portfolio Link */}
      <Link href="/portfolio" className="text-gray-400 hover:underline mb-8 block text-lg transition-colors duration-200">
        &larr; Back to Portfolio
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Building Ganti Construction&apos;s Digital Foundation
      </h1>

      {/* Client & Services Info */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <p className="text-lg text-gray-300 mb-2"><strong className="text-white">Client:</strong> Ganti Construction</p>
        <p className="text-lg text-gray-300 mb-2"><strong className="text-white">Services Provided:</strong> Website Design & Development, SEO Optimization, Copywriting</p>
        <p className="text-lg text-gray-300"><strong className="text-white">Tech Stack:</strong> Next.js, Tailwind CSS, Vercel</p>
      </div>

      {/* The Problem Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <BrickWall className="text-orange-400 mr-3 w-10 h-10" /> The Problem
      </h2>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Ganti Construction—a skilled team specializing in home rebuilds, interior renovations, and outdoor construction projects like fences and patios—had no online presence. Without a website, they were missing out on showcasing their craftsmanship, credibility, and team to potential clients searching online.
      </p>

      {/* The Solution Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <Wrench className="text-green-400 mr-3 w-10 h-10" /> The Solution
      </h2>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        I partnered with Ganti Construction to create their very first website, carefully designed to reflect the quality of their work and the trustworthiness of their team.
      </p>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        Key deliverables included:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-8 space-y-2 pl-4">
        <li><strong className="text-white">A custom-built, modern website</strong> tailored to highlight their services and project portfolio</li>
        <li><strong className="text-white">Professional copywriting</strong> throughout the site to clearly communicate their offerings and brand voice</li>
        <li><strong className="text-white">Optimized SEO structure and metadata</strong> to boost visibility on Google</li>
        <li><strong className="text-white">A responsive design</strong> that looks great on desktop, tablet, and mobile</li>
        <li><strong className="text-white">An intuitive layout</strong> that makes it easy for potential clients to explore their work and reach out</li>
      </ul>

      {/* The Results Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <Trophy className="text-blue-400 mr-3 w-10 h-10" /> The Results
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-8 space-y-2 pl-4">
        <li><strong className="text-white">Established a strong online presence</strong> from scratch, helping Ganti Construction appear in local search results</li>
        <li><strong className="text-white">Increased credibility and trust</strong>, with a polished, professional digital home</li>
        <li><strong className="text-white">New client acquisition</strong> directly from the website after launch</li>
        <li><strong className="text-white">Persuasive and clear messaging</strong>, thanks to compelling on-brand copy</li>
        <li><strong className="text-white">Optimized project showcase</strong>, making it easy to highlight past builds and attract qualified leads</li>
      </ul>

      {/* What Ganti Construction Can Do Now Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <Hammer className="text-yellow-400 mr-3 w-10 h-10" /> What Ganti Construction Can Do Now
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-300 mb-8 space-y-2 pl-4">
        <li><strong className="text-white">Confidently share their work and services</strong> online & on social media</li>
        <li><strong className="text-white">Get discovered</strong> by homeowners looking for renovations and rebuilds on Google</li>
        <li><strong className="text-white">Build stronger trust</strong> with potential clients before the first call</li>
        <li><strong className="text-white">Grow their business</strong> through inbound leads, easily being reachable</li>
      </ul>

      {/* Testimonial Section */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <MessageSquare className="text-purple-400 mr-3 w-10 h-10" /> What Luke Said
      </h2>
      <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 italic text-gray-200 mb-8">
        &quot;Shipyards Web Studio helped us set up our business website and we could not have had a better experience. Matin was thorough and took great care to ensure every element of my website reflected not just what I wanted but who we are as a company. We would not hesitate to recommend Shipyards and Matin to anyone looking for help creating their website.&quot;
      </blockquote>

      {/* Live Site Link */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 flex items-center">
        <Globe className="text-blue-400 mr-3 w-10 h-10" /> Live Site
      </h2>
      <p className="text-lg mb-8">
        <Link
          href="https://ganticonstruction.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline font-semibold transition-colors duration-200"
        >
          🔗 ganticonstruction.com
        </Link>
      </p>
    </div>
  );
}

import Link from 'next/link';

export default function GantiConstructionCaseStudy() {
  return (
    <div className="pt-20 pb-10 text-white max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
      {/* Back to Portfolio Link */}
      <Link href="/portfolio" className="text-gray-400 hover:underline mb-8 block text-lg transition-colors duration-200">
        &larr; Back to Portfolio
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Case study is not available yet... Check again later.
      </h1>
    </div>
  );
}

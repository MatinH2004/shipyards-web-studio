import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-16 text-center md:text-left pt-20 md:pt-0">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Website is Costing You Customers — Let&apos;s Fix That.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-lg text-gray-400 mx-auto md:mx-0">
          Your website should bring in leads, build trust, and make you money—not turn customers away.
          We design modern, high-converting websites that make your business look professional and easy to hire.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500">
            Get Started
          </Link>
          <Link href="#features" className="border border-gray-600 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-white">
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src="/images/building-web.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

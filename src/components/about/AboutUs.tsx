import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section>
      <h1 className="text-center text-white text-5xl font-bold pt-20">About Us</h1>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-2/3 lg:w-1/2 relative flex justify-center">
        <Image
          src="/images/sunset.jpg"
          alt="Sunset at Shipyards"
          width={800}
          height={800}
          className="hidden md:block absolute top-[-170px] left-[-150px] w-64 md:w-80 lg:w-96 rounded-lg z-0"
        />

        <Image
          src="/images/twinfalls.jpg"
          alt="Twin Falls | Lynn Canyon"
          width={800}
          height={800}
          className="hidden md:block absolute bottom-[-200px] left-[-100px] w-64 md:w-80 lg:w-96 rounded-lg z-0"
        />

        <Image
          src="/images/matin.jpg"
          alt="Matin Hassan Pour | #1 Web Designer | North Vancouver, BC, Canada"
          width={800}
          height={500}
          className="relative z-10 rounded-3xl shadow-xl"
          priority
        />
      </div>


        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 font-semibold tracking-wide">
            Shipyards Web Studio
          </h2>
          <div className="mx-auto md:mx-0">
            <p className="text-4xl font-bold mt-2 leading-tight text-white max-w-lg">
              We Make Websites With Purpose & Intent
            </p>
          </div>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            My name is Matin, and I am the owner and lead developer of Shipyards Web Studio. 
            I got into programming after graduating from high school. Over the course of three years, I enrolled in&nbsp;
            <Link
              href="https://launchschool.com" 
              className="underline hover:text-red-400" 
              target="_blank"
            >
              Launch School&apos;s
            </Link>
            &nbsp;software engineering program and learned everything from creating databases, DSA, 
            the internet and its protocols, back-end servers, front-end design, and building full-stack
            applications from scratch. With these skills, I started reaching out to small businesses to 
            offer my help, and I have been growing every year since 2023.
          </p>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            What I found was that a lot of small businesses don&apos;t have the funds to spend 
            thousands of dollars upfront on a new website. And the ones that did, got taken 
            advantage of and ended up with a terrible website. They either couldn&apos;t afford 
            a good website, or if they could, they didn&apos;t know who to trust. So I tweaked 
            my business model to fit their needs. That&apos;s how I came up with my $0 down and 
            $199 a month model—more manageable for a small business and easier on their budget.
          </p>
        </div>
      </div>
    </section>
  );
}

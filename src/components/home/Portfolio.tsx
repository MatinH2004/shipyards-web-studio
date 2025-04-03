import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    name: 'Ganti Construction',
    description: 'Local construction company based in North Vancouver, specializing in residential and commercial projects.',
    image: '/images/ganticonstruction.png',
    link: 'https://www.ganticonstruction.com', 
  },
  {
    name: 'Tyron Piteau Fitness',
    description: 'Fat loss coach for middle-aged women, helping clients achieve sustainable weight loss and better health.',
    image: '/images/tyronpiteaufitness.png',
    link: 'http://tyron-coaching-web.vercel.app', 
  },
  {
    name: 'Jackie Mitchell Physio',
    description: 'Expert physiotherapist in North Vancouver, offering personalized treatments for pain relief and recovery.',
    image: '/images/jackiemitchellphysio.png',
    link: 'http://jackie-mitchell-physio.vercel.app', 
  },
];

export default function Portfolio() {
  return (
    <section className="pt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400">Portfolio</h2>
        <p className="text-4xl md:text-5xl font-bold text-white mt-2 mx-auto max-w-3xl">
          Some of the work we&apos;ve done
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-400">
          We have worked with clients all over Canada for home service contractors, fitness coaches, startups, trainers, wellness centers, and more.
          No matter what your business is, we can build a website that is effective, beautiful, performant, and tailored to your industry.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
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
              <Link
                href={item.link}
                target="_blank"
                className="mt-4 inline-block bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl"
              >
                Visit Website
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

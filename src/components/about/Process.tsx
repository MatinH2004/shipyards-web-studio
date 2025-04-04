import Link from 'next/link';
import Image from 'next/image';

const steps = [
  {
    name: 'Step 1',
    title: 'Complete Questionnaire',
    text: 'We send you an email with less than 10 questions about your business, services, what sets you apart, etc and we do all the rest.',
  },
  {
    name: 'Step 2',
    title: 'Design Approval',
    text: 'We then do a video screen share showing you the first draft and make any changes you want to make sure you’re 100% satisfied.',
  },
  {
    name: 'Step 3',
    title: 'Development',
    text: 'Once approved, we can start coding the site out and setting everything up. We will send a demo link to view before we launch and go live.',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-black">
      <div>
        <Image 
          src="/images/progress.svg" 
          alt="Ship Your Website" 
          width={600} 
          height={300}
          className="mx-auto my-10"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400">
              Our Working Process
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-white mt-2 max-w-xl">
              We Take Care of Everything
            </p>
          </div>

          <p className="max-w-xl text-gray-400 md:pl-16 text-lg">
            After a contract is signed we send a small questionnaire about your business and what you offer, 
            then we expand on that content and write the entire site&apos;s content for you, create the design, 
            get approval, then we build. Generally takes 2-3 weeks from start to finish.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-blue-500/20 transition-transform duration-300 transform hover:-translate-y-4"
          >
            <p className="text-blue-500 font-semibold mb-2">{step.name}</p>
            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl">
          Call Us Today
        </Link>
      </div>
    </section>
  );
}

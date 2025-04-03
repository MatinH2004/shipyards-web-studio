import { Smartphone, Code, Rocket, ShieldCheck, Search, PenTool } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Smartphone size={40} className="text-white" />, 
    title: "Mobile-Friendly Design",
    description: "Your website will look great on any device, ensuring a seamless experience for all users.",
  },
  {
    icon: <Code size={40} className="text-white" />, 
    title: "Clean & Optimized Code",
    description: "Built with performance and SEO in mind for the best user experience and rankings.",
  },
  {
    icon: <Rocket size={40} className="text-white" />, 
    title: "Fast Load Times",
    description: "Optimized to load quickly, reducing bounce rates and improving engagement.",
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />, 
    title: "Secure & Reliable",
    description: "Using best security practices to protect your business and customers.",
  },
  {
    icon: <Search size={40} className="text-white" />, 
    title: "SEO Services",
    description: "Boost your website’s ranking with our expert search engine optimization strategies.",
  },
  {
    icon: <PenTool size={40} className="text-white" />, 
    title: "Copywriting",
    description: "Engaging and persuasive content to help your business connect with customers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="pb-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400">What We Do</h2>
        
        <p className="text-4xl md:text-5xl max-w-xl mx-auto font-bold text-white mt-2">Never worry about your website again</p>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Every line of code is written by hand to ensure the best performance and make Google happy, which helps bring in more customers to your site and bring more revenue to your business.
          We also manage the edits for you and will never leave you high and dry. Our goal is to create long term relationships with our clients and see them grow over time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-900 shadow-lg rounded-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl">
            Call Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}

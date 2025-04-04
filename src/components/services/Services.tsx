import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-10 text-white space-y-12">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">We do it all</p>
        <h1 className="text-4xl md:text-5xl max-w-2xl mx-auto font-bold mt-2">
          Professional Web Design &amp; Development Services
        </h1>
      </div>

      <div>
        <Image 
          src="/images/landscape.svg" 
          alt="Web design landscape" 
          width={800} 
          height={400}
          className="mx-auto"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Custom Code - No Page Builders or Wordpress
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          At Shipyards Web Studio, we do things a little differently. Instead of using page builders or Wordpress, 
          we hand write all the code for our sites from top to bottom. This allows us to make very custom designs, 
          have absolutely ZERO bloat or wasted code to slow us down, they load instantly, score perfect marks on 
          Google Page Speed Insights, are more secure and actually impossible to hack, and we don&apos;t need to constantly 
          update plugins or WordPress versions to prevent hacking.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white capitalize">Why It Matters</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 text-lg">
          <li>Faster load times</li>
          <li>Better conversions</li>
          <li>Better performing ads</li>
          <li>More secure</li>
          <li>Better ranking on Google</li>
          <li>Boosts your Google Business Profile in the Maps Listings</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Better Load Times Leads to Higher Conversions
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          It&apos;s very competitive online, and you need every edge you can get to stand out and overtake your competition. 
          When everyone else is using a page builder and getting poor load times, you could be getting something 
          different - something custom coded and loading instantly. This is important because if your website 
          takes more than 3 seconds to load, you could lose up to 50% of your traffic because they leave before 
          the site can load. They just don&apos;t want to wait that long. Our sites load so fast they don&apos;t have any 
          chance to leave, allowing us to capture more leads than your old one did.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Better Ads Performance
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          The faster your website loads, the better your conversions are for the ads to send them to. 
          And Google prefers websites that load fast. Faster loading websites actually have a lower cost-per-click 
          which can save you hundreds or more a month depending on how much you&apos;re spending on ad clicks.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Custom Coded Websites Are More Secure
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          WordPress and other builders have lots of vulnerabilities and points of entry into the site that can 
          be compromised. Like with WordPress, if you aren&apos;t constantly updating your plugins and WordPress version 
          then you are increasing the chances of getting hacked every day you don&apos;t. Hackers target WordPress more 
          than any other platform because they are easier to get into (especially if you aren&apos;t doing your updates!).
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          With our custom code, we don&apos;t have any databases or server-side requests being made that hackers can intercept 
          and hijack to insert their own code to redirect a site to a spam site. It&apos;s just static HTML and CSS files. 
          There&apos;s nothing TO hack. We can leave our sites alone for 10 years and nothing will happen to them. 
          They are as secure as you can get.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Improve Your Search Ranking
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Better load times can improve your ranking on Google in a number of ways. The most common way is by just being faster. 
          If there are two similar sites with similar content and domain authority, Google has stated that the one with the 
          better Page Speed Scores and Core Vitals will win.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          The other method is more indirect. When your site loads faster, more people reach it. And the more people you have 
          going to your site can increase your ranking. By focusing on Google&apos;s Core Vitals Metrics we can create a better 
          user experience to keep them on the site with higher session times and more clicks to other pages. 
          With more traffic, higher session times, and better click-through rates, we show Google we are solving 
          users&apos; search queries — signaling authority and relevance.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white capitalize">
          Boost Your Google Business Profile
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          A faster loading website can also give an extra boost to your Google Business Profile and help increase your visibility 
          in Maps searches. Couple that with LOTS of 5-star reviews, images, and a fully completed profile, and you&apos;ll start seeing 
          more leads coming from that profile than before. The more visible your profile, the more traffic — and the more conversions.
        </p>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link href="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg text-lg transition hover:shadow-2xl hover:shadow-blue-500 hover:text-xl">
          Get Started
        </Link>
      </div>
    </section>
  );
}

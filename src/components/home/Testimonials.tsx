'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="pt-16 px-4 sm:px-8 lg:px-24 border-red-400">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">Testimonials</p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mx-auto max-w-3xl">
          What Our Clients Say
        </h2>

        <blockquote className="bg-gray-900 p-6 mt-10 rounded-2xl shadow-md shadow-blue-500/50 border-l-4 border-blue-500 text-left italic">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            &quot;Matin helped me redo my website recently and I was very impressed! He was kind, patient and very professional.
            <br /><br />
            He even helped me save money by recommending that I cancel unnecessary services I no longer needed.
            <br /><br />
            I would highly recommend his services to anyone looking for help with their website!&quot;
          </p>
          <footer className="text-sm font-semibold text-gray-700 dark:text-gray-400 mt-2">
            &mdash; Jackie Mitchell
          </footer>
        </blockquote>

        <a
          href="https://g.co/kgs/Y1DHJ7A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-black text-white font-medium rounded-xl shadow hover:bg-gray-800 transition"
        >
          Read More Reviews on Google
        </a>
      </div>
    </section>
  );
}

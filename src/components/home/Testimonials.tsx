'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="pt-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-400">Testimonials</p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mx-auto max-w-3xl">
          What Our Clients Say
        </h2>

        <div className="relative mt-10 px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <blockquote className="bg-gray-900 py-8 px-6 rounded-2xl shadow-md shadow-blue-500/50 border-l-4 border-blue-500 text-left italic min-h-[250px] flex flex-col justify-between max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              &quot;{currentTestimonial.text}&quot;
            </p>
            <footer className="text-sm font-semibold text-gray-400 mt-auto">
              &mdash; {currentTestimonial.author}
            </footer>
          </blockquote>
        </div>

        <a
          href="https://g.co/kgs/Y1DHJ7A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Read More Reviews on Google
        </a>
      </div>
    </section>
  );
}

// src/components/TestimonialSection.jsx
import React from 'react';

const testimonials = [
  {
    content: "Legal Invest made it easy for me to get the loan I needed to start my business. The process was transparent and I felt secure throughout.",
    author: "Priya Sharma",
    role: "Small Business Owner"
  },
  {
    content: "As an investor, I appreciate the legal oversight Legal Invest provides. It gives me confidence in my investments.",
    author: "Rahul Mehta",
    role: "Individual Investor"
  },
  {
    content: "The AI-powered matching system found me the perfect loan terms. I've already recommended Legal Invest to my friends.",
    author: "Anita Desai",
    role: "Homeowner"
  }
];

const TestimonialSection = () => (
  <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>&ldquo;{testimonial.content}&rdquo;</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
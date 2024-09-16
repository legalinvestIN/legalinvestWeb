// src/components/FAQSection.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: "How does Legal Invest ensure the security of my investments?",
    answer: "Legal Invest uses blockchain technology and smart contracts to secure all transactions. Additionally, our legal team reviews and verifies each loan agreement."
  },
  {
    question: "What are the interest rates for borrowers?",
    answer: "Interest rates vary based on the borrower's credit score, loan amount, and term. Our AI-powered system matches borrowers with competitive rates, typically ranging from 6% to 15% APR."
  },
  {
    question: "How quickly can I get a loan?",
    answer: "Once your application is complete and verified, you can receive funds in as little as 24 hours. The exact time depends on the loan amount and the completion of all necessary checks."
  },
  {
    question: "What's the minimum amount I can invest as a lender?",
    answer: "The minimum investment amount is $500. This allows for diversification across multiple loans to minimize risk."
  },
  {
    question: "How does Legal Invest handle defaults?",
    answer: "We have a rigorous collection process in place. In case of defaults, we work with the borrower to restructure the loan. If necessary, we involve our legal team to ensure lenders' interests are protected."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="text-left w-full flex justify-between items-start text-gray-400"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`${
                          activeIndex === index ? '-rotate-180' : 'rotate-0'
                        } h-6 w-6 transform`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                {activeIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
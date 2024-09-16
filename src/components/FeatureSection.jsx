// src/components/FeatureSection.jsx
import React from 'react';

const features = [
  {
    name: 'Legal Oversight',
    description: 'Every transaction is verified by legal professionals to ensure compliance and protect your interests.',
  },
  {
    name: 'Blockchain Security',
    description: 'Our platform utilizes blockchain technology to provide unparalleled security and transparency for all transactions.',
  },
  {
    name: 'Smart Contracts',
    description: 'Automated, self-executing contracts ensure that all parties adhere to the agreed-upon terms.',
  },
  {
    name: 'Transparent Pricing',
    description: 'Clear, upfront fee structure with no hidden costs or surprises.',
  },
  {
    name: 'AI-Powered Risk Assessment',
    description: 'Advanced algorithms analyze multiple data points to provide accurate risk profiles for borrowers.',
  },
  {
    name: 'Instant Matching',
    description: 'Our platform quickly matches lenders with suitable borrowers based on their criteria and risk tolerance.',
  },
];

const FeatureSection = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to lend and borrow
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Legal Invest combines cutting-edge technology with legal expertise to create a secure and transparent lending environment.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default FeatureSection;
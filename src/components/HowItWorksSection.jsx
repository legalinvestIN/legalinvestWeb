// src/components/HowItWorksSection.jsx
import React from 'react';

const steps = [
  { name: 'Sign Up', description: 'Create an account and complete the KYC process.' },
  { name: 'Set Your Profile', description: 'Borrowers: Provide financial details. Lenders: Set investment preferences.' },
  { name: 'Get Matched', description: 'Our AI matches borrowers with suitable lenders based on criteria.' },
  { name: 'Review & Accept', description: 'Both parties review the terms and accept the smart contract.' },
  { name: 'Secure Transfer', description: 'Funds are transferred securely using blockchain technology.' },
  { name: 'Repayment', description: 'Automated repayments according to the agreed schedule.' },
];

const HowItWorksSection = () => (
  <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How Legal Invest Works
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Our streamlined process ensures a smooth experience for both borrowers and lenders.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {steps.map((step, index) => (
            <div key={step.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <span className="text-lg font-medium">{index + 1}</span>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;
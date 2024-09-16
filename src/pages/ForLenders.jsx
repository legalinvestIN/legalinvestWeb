import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from '../components/TestimonialSection';

const LendersPage = () => {
  const investmentPlans = [
    { name: 'Conservative', expectedReturn: '5-8%', risk: 'Low' },
    { name: 'Balanced', expectedReturn: '8-12%', risk: 'Medium' },
    { name: 'Aggressive', expectedReturn: '12-15%', risk: 'High' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Invest with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Legal Invest offers secure, transparent, and potentially high-yield investment opportunities.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Process</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>Determine your investment criteria</li>
            <li>Create an account or sign in</li>
            <li>Choose an investment plan</li>
            <li>Make a deposit</li>
            <li>Start investing and track your returns</li>
          </ol>
          <div className="mt-8">
            <Link
              to="/lenders/investment-criteria"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Determine Investment Criteria
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Investment Plans</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {investmentPlans.map((plan) => (
              <div key={plan.name} className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold">{plan.name}</h4>
                <p>Expected Return: {plan.expectedReturn}</p>
                <p>Risk Level: {plan.risk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Risk Management Strategies</h3>
          <ul className="list-disc list-inside space-y-4">
            <li>Diversification across multiple loans</li>
            <li>Thorough vetting of borrowers</li>
            <li>Legal oversight and smart contracts</li>
            <li>Loan loss provision fund</li>
          </ul>
        </div>

        <TestimonialSection />
      </div>
    </div>
  );
};

export default LendersPage;
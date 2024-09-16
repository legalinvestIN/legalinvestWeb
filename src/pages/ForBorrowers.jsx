import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from '../components/TestimonialSection';

const BorrowersPage = () => {
  const loanTypes = [
    { name: 'Personal Loan', rate: '8-15%', term: '1-5 years' },
    { name: 'Business Loan', rate: '10-18%', term: '1-7 years' },
    { name: 'Education Loan', rate: '7-12%', term: '5-15 years' },
    { name: 'Home Improvement Loan', rate: '9-14%', term: '1-10 years' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Borrow with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Legal Invest offers competitive rates and flexible terms for various loan types.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Loan Application Process</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li>Check your eligibility using our quick form</li>
            <li>Create an account or sign in</li>
            <li>Complete the detailed application form</li>
            <li>Submit your application for review</li>
            <li>Track your application status</li>
          </ol>
          <div className="mt-8">
            <Link
              to="/borrowers/check-eligibility"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Check Eligibility
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Loan Types and Terms</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {loanTypes.map((loan) => (
              <div key={loan.name} className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold">{loan.name}</h4>
                <p>Interest Rate: {loan.rate}</p>
                <p>Repayment Term: {loan.term}</p>
              </div>
            ))}
          </div>
        </div>

        <TestimonialSection />
      </div>
    </div>
  );
};

export default BorrowersPage;
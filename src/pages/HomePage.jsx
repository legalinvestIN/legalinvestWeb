// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

function HomePage() {
  return (
    <>
      <HeroSection>
        <div className="flex justify-center space-x-4 mt-8">
          <Link
            to="/borrowers/apply"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Apply for a Loan
          </Link>
          <Link
            to="/lenders/invest"
            className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            Start Investing
          </Link>
        </div>
      </HeroSection>
      <FeatureSection />
      <HowItWorksSection />
      <StatisticsSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default HomePage;
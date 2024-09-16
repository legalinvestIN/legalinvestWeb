// src/pages/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Legal Invest
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Revolutionizing peer-to-peer lending with legal oversight and blockchain technology.
          </p>
        </div>
        <div className="mt-12 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Legal Invest was founded in 2022 with a mission to make peer-to-peer lending more secure, transparent, and accessible. Our platform combines cutting-edge technology with legal expertise to create a lending environment that benefits both borrowers and lenders.
          </p>
          <h3>Our Vision</h3>
          <p>
            We envision a world where individuals and businesses can access fair and transparent financial services, free from the constraints of traditional banking systems. By leveraging blockchain technology and legal oversight, we're building a future of decentralized finance that's secure, efficient, and inclusive.
          </p>
          <h3>Our Team</h3>
          <p>
            Legal Invest is led by a team of experts in finance, technology, and law. Our diverse backgrounds and shared passion for innovation drive us to constantly improve our platform and deliver the best possible experience for our users.
          </p>
          <h3>Our Commitment</h3>
          <p>
            We're committed to:
          </p>
          <ul>
            <li>Maintaining the highest standards of security and compliance</li>
            <li>Providing transparent and fair services to all our users</li>
            <li>Continuously innovating to improve the lending experience</li>
            <li>Promoting financial inclusion and literacy</li>
          </ul>
          <p>
            Join us in reshaping the future of lending and investing. Whether you're looking to borrow or invest, Legal Invest is here to support your financial journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
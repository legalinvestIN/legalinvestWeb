import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Legal Invest
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link to="/borrowers" className="text-base font-medium text-white hover:text-indigo-50">
                For Borrowers
              </Link>
              <Link to="/lenders" className="text-base font-medium text-white hover:text-indigo-50">
                For Lenders
              </Link>
              <Link to="/about" className="text-base font-medium text-white hover:text-indigo-50">
                About Us
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/signin"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
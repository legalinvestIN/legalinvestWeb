// components/Navigation.js
import React from "react";

const Navigation = () => (
  <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
    <a
      href="/"
      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Home
    </a>
    <a
      href="/how-it-works"
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      How It Works
    </a>
    <a
      href="/borrowers"
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Borrowers
    </a>
    <a
      href="/lenders"
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Lenders
    </a>
  </nav>
);

export default Navigation;

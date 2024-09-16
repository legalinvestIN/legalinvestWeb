// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with image */}
      <div className="hidden lg:flex w-1/2 bg-purple-600 justify-center items-center">
        <div className="max-w-md text-white">
          <h1 className="text-4xl font-bold mb-4">Legal Invest</h1>
          <p className="text-xl">Welcome back to secure P2P lending</p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-bold mb-6">Log in to your account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded font-bold mb-4"
            >
              Log In
            </button>
          </form>
          <button className="w-full bg-blue-500 text-white p-3 rounded font-bold mb-4">
            Login with OTP
          </button>
          <Link to="/forgot-password" className="block text-center text-purple-600 mb-4">
            Forgot password?
          </Link>
          <p className="text-center">
            Don't have an account? <Link to="/signup" className="text-purple-600">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
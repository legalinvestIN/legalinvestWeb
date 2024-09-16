// src/components/FormStep.jsx
import React, { useState } from 'react';

const FormStep = ({ step, currentStep, totalSteps, onNext }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="w-full max-w-4xl px-8 py-12 backdrop-blur-sm bg-white/30 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-2">Let's get you started</h1>
      <p className="text-center text-gray-600 mb-12">Enter the details to get going</p>
      
      <div className="flex justify-between items-center mb-12">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              index + 1 <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </div>
            {index + 1 < totalSteps && (
              <div className={`h-1 flex-grow mx-2 ${
                index + 1 < currentStep ? 'bg-indigo-600' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-8">{step.title}</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {step.fields.map((field) => (
          <div key={field.name} className={field.name === 'email' ? 'col-span-2' : ''}>
            <label htmlFor={field.name} className="block text-sm font-light text-gray-700 mb-1">
              {field.label}{field.required && '*'}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={`Enter your ${field.label.toLowerCase()}`}
              />
            )}
          </div>
        ))}
        <div className="col-span-2 mt-8">
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep;
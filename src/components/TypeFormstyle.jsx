// src/components/TypeformStyle.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypeformStyle = ({
  currentStep,
  totalSteps,
  question,
  inputType,
  inputName,
  options,
  onComplete,
  isLastStep
}) => {
  const [answer, setAnswer] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({ [inputName]: answer });
    setAnswer('');
  };

  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 bg-blue-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8">{question}</h2>
          <form onSubmit={handleSubmit}>
            {inputType === 'select' ? (
              <select
                ref={inputRef}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-4 text-xl border-b-2 border-gray-300 focus:border-blue-500 bg-transparent"
              >
                <option value="">Select an option</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                ref={inputRef}
                type={inputType}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-4 text-xl border-b-2 border-gray-300 focus:border-blue-500 bg-transparent"
                placeholder="Type your answer here..."
              />
            )}
            <button
              type="submit"
              className="mt-8 w-full p-4 text-xl text-white bg-blue-500 hover:bg-blue-600 rounded transition-colors"
            >
              {isLastStep ? 'Submit' : 'OK'}
            </button>
          </form>
        </div>
      </div>

      {/* Step counter */}
      <div className="p-4 text-center text-gray-500">
        {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default TypeformStyle;
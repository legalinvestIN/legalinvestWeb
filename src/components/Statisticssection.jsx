import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            setCount(Math.min(Math.round(start), end));
            if (start >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const StatisticsSection = () => (
  <div className="bg-indigo-800 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-base text-indigo-300 font-semibold tracking-wide uppercase">Our Impact</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Legal Invest by the Numbers
        </p>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Active Users', stat: 20000, prefix: '', suffix: '+' },
          { name: 'Total Loans Funded', stat: 50, prefix: '$', suffix: 'M+' },
          { name: 'Average Return for Lenders', stat: 8.5, suffix: '%' },
          { name: 'Successful Repayments', stat: 99.2, suffix: '%' },
        ].map((item) => (
          <div key={item.name} className="bg-indigo-900 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-indigo-300 truncate">{item.name}</dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-semibold text-white">
                {item.prefix}<AnimatedCounter end={item.stat} duration={2000} />{item.suffix}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default StatisticsSection;
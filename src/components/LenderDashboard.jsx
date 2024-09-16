import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LenderDashboard = () => {
  const portfolioData = [
    { name: 'Real Estate', value: 400 },
    { name: 'Small Business', value: 300 },
    { name: 'Personal Loans', value: 300 },
    { name: 'Education', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const performanceData = [
    { month: 'Jan', returns: 5 },
    { month: 'Feb', returns: 7 },
    { month: 'Mar', returns: 6 },
    { month: 'Apr', returns: 8 },
    { month: 'May', returns: 9 },
    { month: 'Jun', returns: 8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={portfolioData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {portfolioData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Investment Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="returns" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <p>Total Invested: $100,000</p>
        <p>Current Returns: 8.5%</p>
        <p>Active Loans: 25</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Actions</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Invest More</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Withdraw Funds</button>
      </div>
    </div>
  );
};

export default LenderDashboard;
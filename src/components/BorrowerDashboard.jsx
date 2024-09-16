import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BorrowerDashboard = () => {
  const loanData = [
    { month: 'Jan', balance: 10000 },
    { month: 'Feb', balance: 9500 },
    { month: 'Mar', balance: 9000 },
    { month: 'Apr', balance: 8500 },
    { month: 'May', balance: 8000 },
    { month: 'Jun', balance: 7500 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Loan Overview</h2>
        <p>Current Balance: $7,500</p>
        <p>Next Payment Due: July 15, 2023</p>
        <p>Interest Rate: 5.5%</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={loanData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Actions</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Make a Payment</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Request Increase</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul>
          <li>June 15, 2023 - Payment: $500</li>
          <li>May 15, 2023 - Payment: $500</li>
          <li>April 15, 2023 - Payment: $500</li>
        </ul>
      </div>
    </div>
  );
};

export default BorrowerDashboard;
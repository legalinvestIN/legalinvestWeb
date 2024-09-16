import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import BorrowerDashboard from './BorrowerDashboard';
import LenderDashboard from './LenderDashboard';

const UserDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      {user.role === 'borrower' ? <BorrowerDashboard /> : <LenderDashboard />}
    </div>
  );
};

export default UserDashboard;
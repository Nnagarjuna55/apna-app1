import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p className="text-gray-600">Loading dashboard...</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-black">
        Welcome {user ? user.name : 'Guest'}
      </h1>
    </div>
  );
};

export default Dashboard;

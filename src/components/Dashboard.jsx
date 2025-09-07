import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Welcome {user ? user.name : 'Guest'}
      </h1>
    </div>
  );
};

export default Dashboard;

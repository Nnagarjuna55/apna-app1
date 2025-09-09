import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p className="text-gray-600">Loading profile...</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black">Profile</h1>
      {user ? (
        <div className="space-y-2 text-black">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user._id}</p>
          <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
        </div>
      ) : (
        <p className="text-red-600">No user data</p>
      )}
    </div>
  );
};

export default Profile;

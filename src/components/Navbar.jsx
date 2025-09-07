import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate('/login');
  };


  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="space-x-6">
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <Link to="/profile">Profile</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/progress">Progress</Link>

        {user && (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
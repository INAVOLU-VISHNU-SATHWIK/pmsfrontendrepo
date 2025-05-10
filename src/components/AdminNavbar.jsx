import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const fullName = localStorage.getItem('fullName');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
    
    toast.success('Logout successful');
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/admin" className="text-2xl font-bold text-white">
            RevoStay <span className="text-blue-400">Admin</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-300">
            Welcome, <span className="font-semibold">{fullName || username}</span>
          </span>
          
          <Link to="/admin" className="text-white hover:text-blue-400 transition">
            Dashboard
          </Link>
          
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
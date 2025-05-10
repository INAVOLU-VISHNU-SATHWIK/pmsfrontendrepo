import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import SellerNavbar
import SellerNavbar from './../../components/SellerNavbar';

const SellerHome = () => {
  const navigate = useNavigate();
  
  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (!token || role !== 'SELLER') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerNavbar />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Seller Dashboard
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Manage your property listings in Tenali and Vijayawada
          </p>
        </div>
        
        <div className="mt-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700">
              Your seller dashboard is ready. Here you can list new properties, manage existing listings, and view inquiries from potential buyers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
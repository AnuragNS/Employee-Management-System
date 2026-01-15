import React from 'react';
import { useAuth } from '../context/authContext';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import Navbar from '../components/dashboard/Navbar';
import AdminSummery from '../components/dashboard/AdminSummery';
import { Outlet } from 'react-router-dom';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main area */}
      <div className="flex-1 ml-64">
        
        {/* Fixed Navbar */}
        <Navbar />

        {/* CONTENT STARTS BELOW NAVBAR */}
        <div className="mt-20 p-6">
         <Outlet/>
        </div>

      </div>
    </div>
  );
}

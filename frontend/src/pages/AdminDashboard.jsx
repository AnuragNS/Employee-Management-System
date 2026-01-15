import React from 'react'
import { useAuth } from '../context/authContext'  // <-- correct import

export default function AdminDashboard() {

  const { user } = useAuth();   // get user from context

  return (
    <div>
      <h1>Admin here</h1>
      <p>Welcome, {user?.name}</p>
    </div>
  );
}

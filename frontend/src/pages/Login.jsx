import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { 
          email: email.trim().toLowerCase(), 
          password 
        }
      );

      console.log("Login response:", response.data);

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate('/admin-dashboard');
        } else {
          navigate('/employee-dashboard');
        }
      }

    } catch (error) {
      console.log("Full login error:", error);

      // Show actual backend error message
      setError(error.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">

        <h2 className="text-2xl font-bold text-center mb-6">
          Employee Management System
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-gray-700">Login</h3>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
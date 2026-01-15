import React from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div
      className="
        fixed
        top-0
        left-64
        right-0
        h-19
        bg-slate-800
        text-white
        flex
        items-center
        justify-between
        px-6
        border-b
        border-slate-700
        z-20
      "
    >
      <p className="font-medium">
        Welcome <span className="font-semibold">{user?.name}</span>
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-1.5 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;

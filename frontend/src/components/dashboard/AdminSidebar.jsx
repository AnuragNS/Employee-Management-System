import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBuilding,
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCog
} from 'react-icons/fa';

export default class AdminSidebar extends PureComponent {
  render() {
    const linkClass = ({ isActive }) =>
      `flex items-center gap-3 hover:text-blue-400 ${
        isActive ? 'text-blue-400 font-semibold' : ''
      }`;

    return (
      <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white flex flex-col">

        {/* Header */}
        <div className="h-16 flex items-center justify-center text-xl font-semibold bg-gray-900 border-b border-gray-700">
          Employee MS
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-5 px-6 mt-6">

          {/* Dashboard (index route) */}
          <NavLink to="/admin-dashboard" end className={linkClass}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>

          {/* Employees */}
          <NavLink to="/admin-dashboard/employees" className={linkClass}>
            <FaUsers />
            <span>Employee</span>
          </NavLink>

          {/* Departments */}
          <NavLink to="/admin-dashboard/departments" className={linkClass}>
            <FaBuilding />
            <span>Department</span>
          </NavLink>

          {/* Leave */}
          <NavLink to="/admin-dashboard/leaves" className={linkClass}>
            <FaCalendarAlt />
            <span>Leave</span>
          </NavLink>

          {/* Salary */}
          <NavLink to="/admin-dashboard/salary" className={linkClass}>
            <FaMoneyBillWave />
            <span>Salary</span>
          </NavLink>

          {/* Settings */}
          <NavLink to="/admin-dashboard/settings" className={linkClass}>
            <FaCog />
            <span>Settings</span>
          </NavLink>

        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentList = () => {
  return (
    <div className="bg-white p-6 rounded shadow">

      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Manage Departments
        </h3>
      </div>

      {/* Search + Add button */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Department Name"
          className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Add Department */}
        <Link
          to="/admin-dashboard/add-department"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add New Department
        </Link>

      </div>

    </div>
  );
};

export default DepartmentList;

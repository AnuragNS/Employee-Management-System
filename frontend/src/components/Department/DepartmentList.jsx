import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns } from "../../utils/DepartmentHelper";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/departments",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        // Backend returns array directly
        const data = response.data.map((dep) => ({
          ...dep
        }));

        setDepartments(data);

      } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to fetch departments");
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow">

      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Manage Departments
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <input
          type="text"
          placeholder="Search by Department Name"
          className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link
          to="/admin-dashboard/add-department"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add New Department
        </Link>
      </div>

      <div className="mt-4">
        <DataTable
          columns={columns}
          data={departments}
          pagination
          highlightOnHover
          responsive
        />
      </div>

    </div>
  );
};

export default DepartmentList;
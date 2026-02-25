import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    name: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/departments',
        department
      );

      if (response.status === 201) {
        alert("Department Added Successfully");
        navigate('/admin-dashboard/departments');
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Server not responding');
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">

        <h3 className="text-xl font-semibold text-center mb-6">
          Add Department
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Department Name */}
          <div>
            <label className="block text-gray-600 mb-1">
              Department Name
            </label>
            <input
              type="text"
              name="name"
              value={department.name}
              onChange={handleChange}
              placeholder="Enter Department Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={department.description}
              onChange={handleChange}
              placeholder="Enter Description"
              rows="3"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Department
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
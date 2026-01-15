import React from 'react';
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle
} from 'react-icons/fa';
import SummaryCard from './SummeryCard';

const AdminSummery = () => {
  return (
    <div className="space-y-10">

      {/* Dashboard Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            icon={<FaUsers />}
            label="Total Employees"
            value="5"
            bg="bg-teal-600"
          />

          <SummaryCard
            icon={<FaBuilding />}
            label="Total Departments"
            value="3"
            bg="bg-yellow-500"
          />

          <SummaryCard
            icon={<FaMoneyBillWave />}
            label="Monthly Pay"
            value="$2500"
            bg="bg-red-500"
          />
        </div>
      </div>

      {/* Leave Details */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Leave Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SummaryCard
            icon={<FaFileAlt />}
            label="Leave Applied"
            value="2"
            bg="bg-teal-600"
          />

          <SummaryCard
            icon={<FaCheckCircle />}
            label="Leave Approved"
            value="2"
            bg="bg-green-500"
          />

          <SummaryCard
            icon={<FaHourglassHalf />}
            label="Leave Pending"
            value="1"
            bg="bg-yellow-500"
          />

          <SummaryCard
            icon={<FaTimesCircle />}
            label="Leave Rejected"
            value="2"
            bg="bg-red-500"
          />
        </div>
      </div>

    </div>
  );
};

export default AdminSummery;

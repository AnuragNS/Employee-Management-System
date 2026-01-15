import React from 'react';

function SummaryCard({ icon, label, value, bg }) {
  return (
    <div className="bg-white shadow rounded-lg flex items-center overflow-hidden">

      {/* Icon box */}
      <div className={`${bg} text-white p-4 text-3xl`}>
        {icon}
      </div>

      {/* Text */}
      <div className="px-4 py-3">
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>

    </div>
  );
}

export default SummaryCard;

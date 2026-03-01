import React from "react";
import { useNavigate } from "react-router-dom";

/* ===========================
   Department Action Buttons
=========================== */
export const DepartmentButtons = ({ row }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin-dashboard/department/${row._id}`);
  };

  const handleDelete = () => {
    console.log("Delete department:", row);
    // Later you can call delete API here
  };

  return (
     <div className="flex gap-3">
      <button
        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap"
        onClick={() =>
          navigate(`/admin-dashboard/department/${row._id}`)
        }
      >
        Edit
      </button>

      <button
        className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition whitespace-nowrap"
        onClick={() => console.log("Delete:", row)}
      >
        Delete
      </button>
    </div>
  );
};

/* ===========================
   DataTable Columns
=========================== */
export const columns = [
  {
    name: "S No",
    cell: (row, index) => index + 1,
    width: "80px"
  },
  {
    name: "Department Name",
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: "Action",
    cell: (row) => <DepartmentButtons row={row} />,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }
];
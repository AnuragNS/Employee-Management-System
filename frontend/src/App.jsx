import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import AdminSummery from './components/dashboard/AdminSummery';
import DepartmentList from './components/Department/DepartmentList';

function App() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin dashboard with nested routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        {/* DEFAULT ADMIN PAGE */}
        <Route index element={<AdminSummery />} />
        <Route path="/admin-dashboard/departments" element={<DepartmentList/>} />
      </Route>

      {/* Employee dashboard */}
      <Route
        path="/employee-dashboard"
        element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
  );
}

export default App;

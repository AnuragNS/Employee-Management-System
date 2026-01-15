import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If user is NOT logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If logged in, allow access
  return children;
}

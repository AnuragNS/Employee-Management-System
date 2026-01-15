import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// Provider component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook (MUST BE OUTSIDE component)
export const useAuth = () => {
  return useContext(AuthContext);
};

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogin, role, allowedRole, children }) => {
  if (!isLogin) {
    return <Navigate to="/" />;
  }

  if (allowedRole && !allowedRole.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;

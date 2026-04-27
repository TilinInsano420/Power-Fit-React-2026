import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const userId = localStorage.getItem("userId");
  const userRol = localStorage.getItem("userRol");

  if (!userId || !userRol) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRol)) {
    if (userRol === "admin" || userRol === "coach") {
      return <Navigate to="/coach/panel" replace />;
    }
    return <Navigate to="/user/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  //   console.log(user && user.app_metadata.roles.includes("editor", "admin"));
  if (user && user.app_metadata.roles.includes("admin")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

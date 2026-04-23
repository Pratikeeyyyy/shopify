
 import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext.jsx";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/productcatalog" /> : children;
};

export const SemiProtected = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/landingpage" /> : children;
};
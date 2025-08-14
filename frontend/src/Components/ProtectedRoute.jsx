import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { jwt } = useSelector((state) => state.auth);
  const token = jwt || localStorage.getItem("jwt");

  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;




// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("user");
//   return isAuthenticated ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;

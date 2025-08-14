import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/Auth/Action";
import Navbar from "./Components/Navbar";
import ProjectsList from "./Pages/ProjectsList";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
import SubScriptionPage from "./Pages/SubScriptionPage";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projectslist"
          element={
            <ProtectedRoute>
              <ProjectsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projectlist/:projectid"
          element={
            <ProtectedRoute>
              <ProjectDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upgradeplan"
          element={
            <ProtectedRoute>
              <SubScriptionPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;










// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import ProjectsList from "./Pages/ProjectsList";
// import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
// import SubScriptionPage from "./Pages/SubScriptionPage";
// import HomePage from "./Pages/HomePage";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/projectslist"
//           element={
//             <ProtectedRoute>
//               <ProjectsList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/projectlist/:projectid"
//           element={
//             <ProtectedRoute>
//               <ProjectDetailsPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/upgradeplan"
//           element={
//             <ProtectedRoute>
//               <SubScriptionPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//       <Toaster position="top-center" />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import ProjectsList from "./Pages/ProjectsList";
// import Navbar from "./Components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import { Toaster } from "react-hot-toast";
// import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
// import SubScriptionPage from "./Pages/SubScriptionPage";
// import Login from "./Pages/Login"
// import Signup from "./Pages/Signup";

// function App() {
//   return (
//     <div>
//        <Navbar></Navbar>

//       <Routes>
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/projectslist" element={<ProjectsList/>} />
//         <Route
//           path="/projectlist/:projectid"
//           element={<ProjectDetailsPage/>}
//         />

//         <Route path="/upgradeplan" element={<SubScriptionPage/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>

//       <Toaster position="top-center" />

//     </div>
//   );
// }

// export default App;

// import { Link, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const HomePage = () => {
//   const { jwt } = useSelector((state) => state.auth);
//   const token = jwt || localStorage.getItem("jwt");

//   if (token) {
//     return <Navigate to="/projectslist" />;
//   }

//   return (
//     <div className="text-center mt-20">
//       <h1 className="text-3xl font-bold">Welcome to CollabSphere</h1>
//       <p className="mt-4">Please login or sign up to continue</p>
//       <div className="mt-6 flex justify-center gap-4">
//         <Link to="/login" className="bg-blue-600 px-4 py-2 rounded text-white">Login</Link>
//         <Link to="/signup" className="bg-green-600 px-4 py-2 rounded text-white">Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaTasks, FaProjectDiagram, FaRocket } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">CollabSphere</h1>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Manage Projects. Collaborate. Succeed.
          </h2>
          <p className="text-lg md:text-xl mb-8">
            CollabSphere helps teams organize work, track progress, and collaborate efficiently.
          </p>
          <Link
            to="/signup"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose CollabSphere?
          </h3>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaProjectDiagram className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Project Management</h4>
              <p className="text-gray-600">
                Create and organize projects with ease and track their progress.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaUsers className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Team Collaboration</h4>
              <p className="text-gray-600">
                Invite your team members to collaborate in real-time.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaTasks className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Task Tracking</h4>
              <p className="text-gray-600">
                Assign, prioritize, and track tasks with a clear overview.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
              <FaRocket className="text-indigo-600 text-4xl mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Boost Productivity</h4>
              <p className="text-gray-600">
                Keep your projects moving forward efficiently and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to get started?
        </h3>
        <Link
          to="/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Join CollabSphere Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} CollabSphere. All rights reserved.</p>
           <p>developed with Spring Boot and ReactJs with ❤️</p>
      </footer>
    </div>
  );
};

export default Homepage;













// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function HomePage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem("jwt");
//     if (isAuthenticated) {
//       toast.success("login success ")
//       navigate("/projectslist");
//     }
//   }, [navigate]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
//       <h1 className="text-4xl font-bold mb-6">Welcome to Project Manager</h1>
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/login")}
//           className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
//         >
//           Log In
//         </button>
//         <button
//           onClick={() => navigate("/signup")}
//           className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// }



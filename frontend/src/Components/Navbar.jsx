import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createProjects } from ".././Redux/Project/Action"; // Assuming the action is in this file
import axios from "axios";
import { getUser } from "../Redux/Auth/Action";
import toast from "react-hot-toast";

export default function Navbar() {
  const token= localStorage.getItem.token;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // for profile dropdown
  const [project, setProject] = useState({
    name: "",
    description: "",
    type: "Full Stack",
    tags: [],
  });


  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

   

  const user  = useSelector((state) => state.auth); // or whatever you named your reducer
  console.log("the user in the navbar is :", user );

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    setProject((prev) => ({
      ...prev,
      tags: prev.tags.includes(value)
        ? prev.tags.filter((tag) => tag !== value)
        : [...prev.tags, value],
    }));
  };

  const handleSubmit = async () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      const projectData = {
        ...project,
        category: project.type, // You can map the type to category here if needed
      };

      dispatch(createProjects(projectData, jwt)); // Dispatch the action to create a project
      setIsOpen(false); // Close modal after submitting
    } else {
      // Handle case where token is not available (user might not be logged in)
      alert("Please log in first!");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setShowDropdown(false); // close dropdown
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border border-b-gray-400 shadow-md dark:border-none">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-500 dark:to-red-500">
              CollabSphere
            </span>
          </a>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <button onClick={() => setIsOpen(true)} className="nav-link">
                  New Project
                </button>
              </li>
              <li>
                <NavLink to="/projectslist" className="nav-link">
                  Your Projects
                
                </NavLink>
              </li>
              <li>
                <NavLink to="/upgradeplan" className="nav-link">
                  Upgrade Plan
                </NavLink>
              </li>
              {/* <ThemeToggle /> */}
              <li className="relative">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center gap-2 ml-4 text-white dark:text-white font-semibold focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                      />
                    </svg>
                  </div>
                
 
                 

               <span className="text-black font-bold">
                
                  </span> 
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-96 space-y-4 shadow-lg">
            <h2 className="text-xl font-bold">Create New Project</h2>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Project Name"
              className="w-full p-2 border rounded"
            />
            <input
              name="description"
              onChange={handleChange}
              placeholder="Project Description"
              className="w-full p-2 border rounded"
            />
            <select
              name="type"
              value={project.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Full Stack</option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
            <div className="flex flex-wrap gap-2">
              {[
                "javascript",
                "react",
                "spring boot",
                "mysql",
                "mongodb",
                "nodejs",
                "machine learning",
              ].map((tag) => (
                <label key={tag} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    value={tag}
                    checked={project.tags.includes(tag)}
                    onChange={handleTagChange}
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-blue-500 text-white rounded"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";
// import "../App.css";
// import axios from "axios";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // for profile dropdown
//   const [project, setProject] = useState({
//     name: "",
//     description: "",
//     type: "Full Stack",
//     tags: [],
//   });

//   const handleChange = (e) => {
//     setProject({ ...project, [e.target.name]: e.target.value });
//   };

//   const handleTagChange = (e) => {
//     const value = e.target.value;
//     setProject((prev) => ({
//       ...prev,
//       tags: prev.tags.includes(value)
//         ? prev.tags.filter((tag) => tag !== value)
//         : [...prev.tags, value],
//     }));
//   };

//   const handleSubmit = async () => {
//     // await axios.post("http://localhost:8080/api/projects", project, {
//     //   headers: {
//     //     Authorization: "Bearer " + localStorage.getItem("token"),
//     //   },
//     // });
//     // setIsOpen(false);
//   };

//   const handleLogout = () => {
//     // localStorage.removeItem("token");
//     localStorage.clear();
//     setShowDropdown(false); // close dropdown
//     navigate("/");
//   };

//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900 border border-b-gray-400 shadow-md dark:border-none">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <span className="self-center text-2xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-500 dark:to-red-500">
//               CollabSphere
//             </span>
//           </a>

//           <div className="hidden md:block">
//             <ul className="flex items-center gap-6">
//               <li>
//                 <button onClick={() => setIsOpen(true)} className="nav-link">
//                   New Project
//                 </button>
//               </li>
//               <li>
//                 <NavLink to="/projectslist" className="nav-link">
//                   Your Projects
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/upgradeplan" className="nav-link">
//                   Upgrade Plan
//                 </NavLink>
//               </li>
//               <ThemeToggle />
//               <li className="relative">
//                 <button
//                   onClick={() => setShowDropdown((prev) => !prev)}
//                   className="flex items-center gap-2 ml-4 text-white dark:text-white font-semibold focus:outline-none"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-sm">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-black font-bold">k</span>
//                 </button>

//                 {/* Dropdown */}
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-96 space-y-4 shadow-lg">
//             <h2 className="text-xl font-bold">Create New Project</h2>
//             <input
//               name="name"
//               onChange={handleChange}
//               placeholder="Project Name"
//               className="w-full p-2 border rounded"
//             />
//             <input
//               name="description"
//               onChange={handleChange}
//               placeholder="Project Description"
//               className="w-full p-2 border rounded"
//             />
//             <select
//               name="type"
//               value={project.type}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//             >
//               <option>Full Stack</option>
//               <option>Frontend</option>
//               <option>Backend</option>
//             </select>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "javascript",
//                 "react",
//                 "spring boot",
//                 "mysql",
//                 "mongodb",
//                 "nodejs",
//                 "machine learning",
//               ].map((tag) => (
//                 <label key={tag} className="flex items-center space-x-1">
//                   <input
//                     type="checkbox"
//                     value={tag}
//                     checked={project.tags.includes(tag)}
//                     onChange={handleTagChange}
//                   />
//                   <span>{tag}</span>
//                 </label>
//               ))}
//             </div>
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-1 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="px-4 py-1 bg-blue-500 text-white rounded"
//               >
//                 Create Project
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

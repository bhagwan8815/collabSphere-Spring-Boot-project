import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, deleteProject } from "../Redux/Project/Action"; // Adjust the path as needed
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProjectsList() {
  const [project, setProjects] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projects, loading } = useSelector((state) => state.project); // adjust if your reducer key is different

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects({ category: selectedCategory, tag: selectedTag }));
  }, [dispatch, selectedCategory, selectedTag]);

  const clickHandler = (projectId) => {
    navigate(`/projectlist/${projectId}`);
  };

  const handleDelete = (projectId) => {
    dispatch(deleteProject({ projectId }));
  };
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(fetchProjects({ category: "all", tag: "all" }));
    }
  }, []);
  

  const filteredProjects = projects.filter((project) => {
  
   const titleMatch = project.name.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      selectedCategory === "all" ||
      project.category.toLowerCase() === selectedCategory.toLowerCase();

    const tagMatch =
      selectedTag === "all" ||
      project.tags.map((tag) => tag.toLowerCase()).includes(selectedTag.toLowerCase());

    return titleMatch && categoryMatch && tagMatch;
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex p-4">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-6 border-r border-gray-700 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Category</h3>
          <ul className="space-y-2 text-sm">
            {["all", "fullstack", "frontend", "backend"].map((cat) => (
              <li key={cat}>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span>{cat}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Tags</h3>
          <ul className="space-y-2 text-sm">
            {["all", "react", "nextjs", "spring boot", "mysql", "mongodb"].map((tag) => (
              <li key={tag}>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tag"
                    value={tag}
                    checked={selectedTag === tag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span>{tag}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-6 bg-gray-800 text-white rounded border border-gray-600"
        />

        {loading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : (
          <div className="space-y-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="border border-gray-700 p-4 rounded-lg shadow-sm bg-[#1a1a1a] relative cursor-pointer"
                onClick={() => clickHandler(project.id)}
              >
                <div className="flex justify-between items-center">
                  {/* <h3 className="text-lg font-semibold capitalize">{project.title}</h3> */}
                  <h3 className="text-lg font-semibold capitalize">{project.name}</h3>

                  <span className="text-sm text-gray-400 capitalize">{project.category}</span>
                </div>
                <p className="text-sm mt-2 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Three dot menu */}
                <div
                  className="relative flex justify-end mt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)}
                    className="hover:bg-gray-700 p-2 rounded"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openDropdownIndex === idx && (
                    <div className="absolute right-0 top-full mt-2 bg-[#2a2a2a] border border-gray-700 rounded shadow-md w-32 z-10">
                      {/* For now, only keeping Delete as backend integration for Update not shown */}
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}






// import React, { useState } from "react";
// import { MoreVertical } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const initialProjects = [
//   {
//     id: 1,
//     title: "Create Ecommerce Multivendor Project",
//     category: "fullstack",
//     description: "Create a platform for multiple sellers. Sellers can register and sell their products.",
//     tags: ["javascript", "react", "spring boot", "angular", "python"],
//   },
//   {
//     id: 2,
//     title: "Code Reviewer",
//     category: "fullstack",
//     description: "A platform to review and optimize code.",
//     tags: ["javascript", "react", "spring boot", "angular", "python"],
//   },
//   {
//     id: 3,
//     title: "Book Recommendation System",
//     category: "fullstack",
//     description: "Recommends books to users based on their interests.",
//     tags: ["javascript", "react", "spring boot", "angular", "python"],
//   },
//   {
//     id: 4,
//     title: "Create Coffee Shop",
//     category: "backend",
//     description: "Manages backend logic of a coffee shop.",
//     tags: ["react", "angular"],
//   },
//   {
//     id: 5,
//     title: "Create Real Estate Website",
//     category: "fullstack",
//     description: "Users can buy and sell properties online.",
//     tags: ["javascript", "react", "django", "angular", "spring boot"],
//   },
//   {
//     id: 6,
//     title: "zym website",
//     category: "frontend",
//     description: "Users can buy and sell properties online.",
//     tags: ["javascript", "react", ],
//   },
// ];

// export default function ProjectsList() {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedTag, setSelectedTag] = useState("all");
//   const [projects, setProjects] = useState(initialProjects);
//   const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

//   const navigate = useNavigate();

//   const clickHandler = (projectid) => {
//     navigate(`/projectlist/${projectid}`);
//   };

//   const handleDelete = (index) => {
//     const updated = projects.filter((_, i) => i !== index);
//     setProjects(updated);
//   };

//   const handleUpdate = (index) => {
//     const newTitle = prompt("Enter new project title:");
//     if (newTitle) {
//       const updated = [...projects];
//       updated[index].title = newTitle;
//       setProjects(updated);
//     }
//   };

//   const filteredProjects = projects.filter((project) => {
//     const titleMatch = project.title.toLowerCase().includes(search.toLowerCase());

//     const categoryMatch =
//       selectedCategory === "all" || project.category.toLowerCase() === selectedCategory.toLowerCase();

//     const tagMatch =
//       selectedTag === "all" ||
//       project.tags.map((tag) => tag.toLowerCase()).includes(selectedTag.toLowerCase());

//     return titleMatch && categoryMatch && tagMatch;
//   });

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white flex p-4">
//       {/* Sidebar Filters */}
//       <aside className="w-1/4 p-6 border-r border-gray-700 hidden md:block">
//         <h2 className="text-xl font-semibold mb-4">Filters</h2>
//         <div className="mb-4">
//           <h3 className="text-sm font-medium mb-2">Category</h3>
//           <ul className="space-y-2 text-sm">
//             {["all", "fullstack", "frontend", "backend"].map((cat) => (
//               <li key={cat}>
//                 <label className="inline-flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="category"
//                     value={cat}
//                     checked={selectedCategory === cat}
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//                     className="form-radio text-blue-500"
//                   />
//                   <span>{cat}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-sm font-medium mb-2">Tags</h3>
//           <ul className="space-y-2 text-sm">
//             {["all", "react", "nextjs", "spring boot", "mysql", "mongodb"].map((tag) => (
//               <li key={tag}>
//                 <label className="inline-flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="tag"
//                     value={tag}
//                     checked={selectedTag === tag}
//                     onChange={(e) => setSelectedTag(e.target.value)}
//                     className="form-radio text-blue-500"
//                   />
//                   <span>{tag}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <input
//           type="text"
//           placeholder="Search project..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full p-2 mb-6 bg-gray-800 text-white rounded border border-gray-600"
//         />

//         <div className="space-y-6">
//           {filteredProjects.map((project, idx) => (
//             <div
//               key={project.id}
//               className="border border-gray-700 p-4 rounded-lg shadow-sm bg-[#1a1a1a] relative cursor-pointer"
//               onClick={() => clickHandler(project.id)}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold capitalize">{project.title}</h3>
//                 <span className="text-sm text-gray-400 capitalize">{project.category}</span>
//               </div>
//               <p className="text-sm mt-2 text-gray-300">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.tags.map((tag, i) => (
//                   <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Three dot menu */}
//               <div
//                 className="relative flex justify-end mt-4"
//                 onClick={(e) => e.stopPropagation()} // prevent bubbling to parent div
//               >
//                 <button
//                   onClick={() => setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)}
//                   className="hover:bg-gray-700 p-2 rounded"
//                 >
//                   <MoreVertical size={18} />
//                 </button>

//                 {openDropdownIndex === idx && (
//                   <div className="absolute right-0 top-full mt-2 bg-[#2a2a2a] border border-gray-700 rounded shadow-md w-32 z-10">
//                     <button
//                       onClick={() => handleUpdate(idx)}
//                       className="block w-full text-left px-4 py-2 hover:bg-gray-600 text-sm"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDelete(idx)}
//                       className="block w-full text-left px-4 py-2 hover:bg-red-600 text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

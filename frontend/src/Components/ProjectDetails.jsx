import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProjectInfoCard from "./ProjectInfoCard";
import TaskBoard from "./TaskBoard";
import ChatBox from "./ChatBox";
import SendInvitation from "./SendInvitation";
import { fetchProjectsById } from "../Redux/Project/Action";


const ProjectDetails = () => {
  const { projectid :id } = useParams();
  const dispatch = useDispatch();
  const [showInvite, setShowInvite] = useState(false);

  const { projectDetails, loading, error } = useSelector(
    (state) => state.project
  );

  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  useEffect(() => {
    dispatch(fetchProjectsById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (projectDetails?.issues) {
      const taskMap = {
        todo: [],
        inProgress: [],
        done: [],
      };
      projectDetails.issues.forEach((task) => {
        if (taskMap[task.status]) {
          taskMap[task.status].push(task);
        }
      });
      setTasks(taskMap);
    }
  }, [projectDetails]);

  const handleCreateIssue = (status, newTask) => {
    setTasks((prev) => {
      const updatedTasks = { ...prev };
      Object.keys(updatedTasks).forEach((key) => {
        updatedTasks[key] = updatedTasks[key].filter(
          (task) => task.title !== newTask.title || task.assignee !== newTask.assignee
        );
      });
      updatedTasks[status] = [...updatedTasks[status], newTask];
      return updatedTasks;
    });
  };

  if (loading) return <div className="text-white p-6">Loading project details...</div>;
  if (error) return <div className="text-red-500 p-6">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
      {showInvite && <SendInvitation onClose={() => setShowInvite(false)} />}
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 space-y-4">
          <ProjectInfoCard
            project={{
              title: projectDetails?.name,
              description: projectDetails?.description,
              lead: projectDetails?.owner?.fullName,
              members: projectDetails?.team,
              category: projectDetails?.category,
              tags: projectDetails?.tags,
            }}
            onInvite={() => setShowInvite(true)}
          />
          <TaskBoard tasks={tasks} onCreateIssue={handleCreateIssue} />
        </div>
        <div className="col-span-1">
          <ChatBox messages={[]} /> {/* No messages for now */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;








// import React, { useState } from "react";
// import ProjectInfoCard from "./ProjectInfoCard";
// import TaskBoard from "./TaskBoard";
// import ChatBox from "./ChatBox";
// import SendInvitation from "./SendInvitation";

// const ProjectDetails = () => {
//   const [tasks, setTasks] = useState({
//     todo: [
//       { title: "create footer (FBP - 1)", assignee: "R" },
//       { title: "create home page", assignee: "R" },
//     ],
//     inProgress: [
//       { title: "create navbar (FBP - 1)", assignee: "Z" }
//     ],
//     done: []
//   });

//   const handleCreateIssue = (status, newTask) => {
//     setTasks((prev) => {
//       const updatedTasks = { ...prev };
//       // Remove task from all columns (for move)
//       Object.keys(updatedTasks).forEach((key) => {
//         updatedTasks[key] = updatedTasks[key].filter(
//           (task) => task.title !== newTask.title || task.assignee !== newTask.assignee
//         );
//       });
//       updatedTasks[status] = [...updatedTasks[status], newTask];
//       return updatedTasks;
//     });
//   };

//   const [showInvite, setShowInvite] = useState(false);

//   const dummyProject = {
//     id: "1",
//     title: "Create Ecommerce Multivendor Project",
//     description: "Platform for multiple sellers to register and sell products.",
//     lead: "Raam",
//     members: ["R", "Z"],
//     category: "Fullstack",
//     status: "In Progress",
//     messages: [
//       { sender: "R", text: "hy" },
//       { sender: "R", text: "is project done?" },
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       {showInvite && <SendInvitation onClose={() => setShowInvite(false)} />}
//       <div className="grid grid-cols-4 gap-6">
//         <div className="col-span-3 space-y-4">
//           <ProjectInfoCard project={dummyProject} onInvite={() => setShowInvite(true)} />
//           <TaskBoard tasks={tasks} onCreateIssue={handleCreateIssue} />
//         </div>
//         <div className="col-span-1">
//           <ChatBox messages={dummyProject.messages} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;








// import React, { useState } from "react";
// import ProjectInfoCard from "./ProjectInfoCard";
// import TaskBoard from "./TaskBoard";
// import ChatBox from "./ChatBox";
// import SendInvitation from "./SendInvitation";

// const ProjectDetails = () => {

//   const [tasks, setTasks] = useState({
//     todo: [
//       { title: "create footer (FBP - 1)", assignee: "R" },
//       { title: "create home page", assignee: "R" },
//     ],
//     inProgress: [
//       { title: "create navbar (FBP - 1)", assignee: "Z" }
//     ],
//     done: []
//   });
  
//   const handleCreateIssue = (status, newTask) => {
//     setTasks((prev) => ({
//       ...prev,
//       [status]: [...prev[status], newTask],
//     }));
//   };
  
//   const [showInvite, setShowInvite] = useState(false);

//   const dummyProject = { id: "1",
//     title: "Create Ecommerce Multivendor Project",
//     description: "Platform for multiple sellers to register and sell products.",
//     lead: "Raam",
//     members: ["R", "Z"],
//     category: "Fullstack",
//     status: "In Progress",
//     tasks: {
//       todo: [
//         { title: "create footer (FBP - 1)", assignee: "R" },
//         { title: "create home page", assignee: "R" },
//       ],
//       inProgress: [
//         { title: "create navbar (FBP - 1)", assignee: "Z" },
//       ],
//       done: [],
//     },
//     messages: [
//       { sender: "R", text: "hy" },
//       { sender: "R", text: "is project done?" },
//     ]
//    };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       {showInvite && <SendInvitation onClose={() => setShowInvite(false)} />}
//       <div className="grid grid-cols-4 gap-6">
//         <div className="col-span-3 space-y-4">
//           <ProjectInfoCard project={dummyProject} onInvite={() => setShowInvite(true)} />
//           <TaskBoard tasks={dummyProject.tasks} />
//         </div>
//         <div className="col-span-1">
//           <ChatBox messages={dummyProject.messages} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;








// import React, { useState } from "react";
// import SendInvitation from "./SendInvitation"; // Adjust path as per your structure

// const ProjectDetails = () => {
//   const [showInvite, setShowInvite] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       {showInvite && <SendInvitation onClose={() => setShowInvite(false)} />}

//       <div className="grid grid-cols-4 gap-6">
//         <div className="col-span-3 space-y-4">
//           <div className="bg-gray-800 p-6 rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-2">
//               Create Ecommerce Multivendor Project
//             </h2>
//             <p className="text-sm text-gray-300 mb-4">
//               create platform for multiple seller, multiple seller can register
//               them self and sell their project
//             </p>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
//               <div><strong>Project Lead:</strong> Raam</div>
//               <div className="flex items-center space-x-2">
//                 <strong>Members:</strong>
//                 <div className="flex space-x-1">
//                   <div className="w-6 h-6 rounded-full bg-gray-600 text-center">R</div>
//                   <div className="w-6 h-6 rounded-full bg-gray-600 text-center">Z</div>
//                   <button
//                     onClick={() => setShowInvite(true)}
//                     className="text-xs px-2 bg-gray-700 rounded"
//                   >
//                     Invite +
//                   </button>
//                 </div>
//               </div>
//               <div><strong>Category:</strong> Fullstack</div>
//               <div className="flex items-center space-x-2">
//                 <strong>Status:</strong>
//                 <span className="px-2 py-1 bg-yellow-600 rounded text-xs">
//                   In Progress
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Task Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Todo List */}
//             <div className="bg-gray-800 rounded-xl p-4">
//               <h3 className="font-semibold mb-2">Todo List</h3>
//               <div className="space-y-2 text-sm">
//                 <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
//                   <span>create footer (FBP - 1)</span>
//                   <span className="bg-gray-600 rounded-full w-5 h-5 text-center">R</span>
//                 </div>
//                 <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
//                   <span>create home page</span>
//                   <span className="bg-gray-600 rounded-full w-5 h-5 text-center">R</span>
//                 </div>
//               </div>
//             </div>

//             {/* In Progress */}
//             <div className="bg-gray-800 rounded-xl p-4">
//               <h3 className="font-semibold mb-2">In Progress</h3>
//               <div className="bg-gray-700 p-2 rounded flex justify-between items-center text-sm">
//                 <span>create navbar (FBP - 1)</span>
//                 <span className="bg-gray-600 rounded-full w-5 h-5 text-center">Z</span>
//               </div>
//             </div>

//             {/* Done */}
//             <div className="bg-gray-800 rounded-xl p-4">
//               <h3 className="font-semibold mb-2">Done</h3>
//               <button className="text-sm px-3 py-1 bg-gray-700 rounded">+ Create Issue</button>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Chat Box */}
//         <div className="col-span-1 bg-gray-800 p-4 rounded-xl shadow">
//           <h3 className="font-semibold mb-4">Chat Box</h3>
//           <div className="space-y-2 text-sm mb-4">
//             <div className="flex flex-col">
//               <div className="flex space-x-2 items-center">
//                 <span className="bg-gray-600 rounded-full w-6 h-6 text-center">R</span>
//                 <div className="bg-gray-700 px-3 py-1 rounded">hy</div>
//               </div>
//               <div className="flex space-x-2 items-center mt-1">
//                 <span className="bg-gray-600 rounded-full w-6 h-6 text-center">R</span>
//                 <div className="bg-gray-700 px-3 py-1 rounded">is project done?</div>
//               </div>
//             </div>
//           </div>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="type a message..."
//               className="flex-1 px-3 py-1 bg-gray-700 text-white rounded-l"
//             />
//             <button className="bg-blue-600 px-4 py-1 rounded-r">→</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;















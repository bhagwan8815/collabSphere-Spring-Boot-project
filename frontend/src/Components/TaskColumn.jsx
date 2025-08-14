import React, { useState } from "react";
import CreateIssueModal from "./CreateIssueModal";

const TaskColumn = ({ title, tasks, status, onCreateIssue }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCreate = (newTask) => {
    onCreateIssue(status, newTask);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h3 className="font-semibold mb-2">{title}</h3>

      <div className="space-y-2 text-sm">
        {tasks.map((task, i) => (
          <div key={i} className="bg-gray-700 p-2 rounded">
            <div className="flex justify-between items-center">
              <span >{task.title}</span>
              <span className="bg-gray-600 rounded-full w-5 h-5 text-center">{task.assignee}</span>
            </div>
            <select
              className="mt-2 w-full bg-gray-800 text-white border p-1 rounded text-sm"
              value={status}
              onChange={(e) => {
                const newStatus = e.target.value;
                if (newStatus !== status) {
                  onCreateIssue(newStatus, task);
                }
              }}
            >
              <option  value="todo">Todo</option>
              <option  value="inProgress">In Progress</option>
              <option  value="done">Done</option>
            </select>
          </div>
        ))}
        
        <button
          className="text-sm px-3 py-1 bg-gray-700 rounded w-full mt-2"
          onClick={() => setShowModal(true)}
        >
          + Create Issue
        </button>
      </div>

      {showModal && (
        <CreateIssueModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
};

export default TaskColumn;











// import React, { useState } from "react";
// import CreateIssueModal from "./CreateIssueModal";

// const TaskColumn = ({ title, tasks, showCreateButton, status, onCreateIssue }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleCreate = (newTask) => {
//     onCreateIssue(status, newTask);
//   };

//   return (
//     <div className="bg-gray-800 rounded-xl p-4">
//       <h3 className="font-semibold mb-2">{title}</h3>

//       <div className="space-y-2 text-sm">
//         {tasks.map((task, i) => (
//           <div key={i} className="bg-gray-700 p-2 rounded flex justify-between items-center">
//             <span>{task.title}</span>
//             <span className="bg-gray-600 rounded-full w-5 h-5 text-center">{task.assignee}</span>
           
//           </div>
          
//         ))}
//          <button
//             className="text-sm px-3 py-1 bg-gray-700 rounded"
//             onClick={() => setShowModal(true)}
//           >
//             + Create Issue
//           </button>

       
       
    
//       </div>

//       {showModal && (
//         <CreateIssueModal
//           onClose={() => setShowModal(false)}
//           onCreate={handleCreate}
//         />
//       )}
//     </div>
//   );
// };

// export default TaskColumn;









// import React, { useState } from "react";
// import CreateIssueModal from "./CreateIssueModal";

// const TaskColumn = ({ title, tasks, showCreateButton }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [taskList, setTaskList] = useState(tasks);

//   const handleCreate = (newTask) => {
//     setTaskList([...taskList, newTask]);
//   };

//   return (
//     <div className="bg-gray-800 rounded-xl p-4">
//       <h3 className="font-semibold mb-2">{title}</h3>

//       <div className="space-y-2 text-sm">
//         {taskList.map((task, i) => (
//           <div key={i} className="bg-gray-700 p-2 rounded flex justify-between items-center">
//             <span>{task.title}</span>
//             <span className="bg-gray-600 rounded-full w-5 h-5 text-center">{task.assignee}</span>
//           </div>
//         ))}

//         {showCreateButton && (
//           <button
//             className="text-sm px-3 py-1 bg-gray-700 rounded"
//             onClick={() => setShowModal(true)}
//           >
//             + Create Issue
//           </button>
//         )}
//       </div>

//       {showModal && (
//         <CreateIssueModal
//           onClose={() => setShowModal(false)}
//           onCreate={handleCreate}
//         />
//       )}
//     </div>
//   );
// };

// export default TaskColumn;

  
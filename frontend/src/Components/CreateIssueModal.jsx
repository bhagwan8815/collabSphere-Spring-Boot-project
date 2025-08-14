import React, { useState } from "react";

const CreateIssueModal = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleSubmit = () => {
    if (title && assignee) {
      onCreate({ title, assignee });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded w-96 text-black">
        <h2 className="text-lg font-semibold mb-2">Create Issue</h2>
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="w-full border p-2 rounded mb-2"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="">Select Assignee</option>
          <option value="R">R</option>
          <option value="Z">Z</option>
          <option value="Z">S</option>
          <option value="Z">K</option>
        </select>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-3 py-1 bg-blue-500 text-white rounded">Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateIssueModal;









// import React, { useState } from "react";

// const CreateIssueModal = ({ onClose, onCreate }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = () => {
//     if (title.trim()) {
//       onCreate({ title, description, assignee: "R" }); // Default assignee for now
//       onClose();
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-gray-800 p-6 rounded-xl shadow-md w-80 space-y-4">
//         <h2 className="text-lg font-semibold">Create New Issue</h2>
//         <input
//           type="text"
//           placeholder="Issue Name"
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Issue Description"
//           className="w-full px-3 py-2 bg-gray-700 rounded text-white resize-none"
//           rows={4}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <div className="flex justify-end space-x-2">
//           <button onClick={onClose} className="px-3 py-1 bg-red-600 rounded">Cancel</button>
//           <button onClick={handleSubmit} className="px-3 py-1 bg-blue-600 rounded">Create</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateIssueModal;

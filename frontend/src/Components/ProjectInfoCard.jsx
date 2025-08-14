const ProjectInfoCard = ({ project, onInvite }) => {
  if (!project) return null;

  const lead = project.owner?.fullName || "N/A";
  const members = project.team || [];
  const tags = project.tags || [];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-sm text-gray-300 mb-4">{project.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div>
          <strong>Project Lead:</strong> {lead}
        </div>

        <div className="flex items-center space-x-2">
          <strong>Members:</strong>
          <div className="flex space-x-1 flex-wrap">
            {members.map((m, i) => (
              <div
                key={i}
                title={m.fullName}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-600 text-xs"
              >
                {m.fullName?.[0]?.toUpperCase() || "?"}
              </div>
            ))}
            <button onClick={onInvite} className="text-xs px-2 bg-gray-700 rounded ml-1">
              Invite +
            </button>
          </div>
        </div>

        <div>
          <strong>Category:</strong> {project.category || "N/A"}
        </div>
      </div>

      <div className="mt-4">
        <strong>Tags:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag, i) => (
            <span key={i} className="bg-blue-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoCard;





// const ProjectInfoCard = ({ projectDetails, onInvite }) => (
//     <div className="bg-gray-800 p-6 rounded-xl shadow">
//       <h2 className="text-xl font-semibold mb-2">{projectDetails.name}</h2>
//       <p className="text-sm text-gray-300 mb-4">{projectDetails.description}</p>
  
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
//         <div><strong>Project Lead:</strong> {projectDetails.lead}</div>
//         <div className="flex items-center space-x-2">
//           <strong>Members:</strong>
//           <div className="flex space-x-1">
//             {projectDetails.members.map((m, i) => (
//               <div key={i} className="w-6 h-6 rounded-full bg-gray-600 text-center">{m}</div>
//             ))}
//             <button onClick={onInvite} className="text-xs px-2 bg-gray-700 rounded">Invite +</button>
//           </div>
//         </div>
//         <div><strong>Category:</strong> {projectDetails.category}</div>
//         <div className="flex items-center space-x-2">
//           <strong>Status:</strong>
//           <span className="px-2 py-1 bg-yellow-600 rounded text-xs">{projectDetails.status}</span>
//         </div>
//       </div>
//     </div>
//   );
  
//   export default ProjectInfoCard;
  
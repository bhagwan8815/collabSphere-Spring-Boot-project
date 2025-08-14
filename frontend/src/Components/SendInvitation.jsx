
// components/SendInvitation.jsx
import React from "react";

const SendInvitation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Invite User</h2>
          <button onClick={onClose} className="text-white text-lg">×</button>
        </div>
        <input
          type="email"
          placeholder="enter user email"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 mb-4"
        />
        <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition">
          SEND INVITATION
        </button>
      </div>
    </div>
  );
};

export default SendInvitation;
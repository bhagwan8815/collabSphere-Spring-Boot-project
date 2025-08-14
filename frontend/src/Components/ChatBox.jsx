import React, { useState } from "react";

const ChatBox = ({ messages: initialMessages = [], currentUser = "R" }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      sender: currentUser,
      text: newMessage,
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow h-full flex flex-col">
      <h3 className="font-semibold mb-4">Group Chat</h3>
      
      <div className="space-y-2 text-sm mb-4 flex-1 overflow-y-auto max-h-[300px] pr-1">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-start space-x-2 ${msg.sender === currentUser ? "justify-end" : "justify-start"}`}>
            {msg.sender !== currentUser && (
              <span className="bg-gray-600 rounded-full w-6 h-6 text-center">{msg.sender}</span>
            )}
            <div className={`px-3 py-1 rounded ${msg.sender === currentUser ? "bg-blue-600 text-white" : "bg-gray-700"}`}>
              {msg.text}
            </div>
            {msg.sender === currentUser && (
              <span className="bg-gray-600 rounded-full w-6 h-6 text-center">{msg.sender}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-3 py-1 bg-gray-700 text-white rounded-l outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 px-4 py-1 rounded-r hover:bg-blue-700"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ChatBox;

// const ChatBox = ({ messages }) => (
//     <div className="bg-gray-800 p-4 rounded-xl shadow h-full flex flex-col">
//       <h3 className="font-semibold mb-4">Chat Box</h3>
//       <div className="space-y-2 text-sm mb-4 flex-1 overflow-y-auto">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="flex items-center space-x-2">
//             <span className="bg-gray-600 rounded-full w-6 h-6 text-center">{msg.sender}</span>
//             <div className="bg-gray-700 px-3 py-1 rounded">{msg.text}</div>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           type="text"
//           placeholder="type a message..."
//           className="flex-1 px-3 py-1 bg-gray-700 text-white rounded-l"
//         />
//         <button className="bg-blue-600 px-4 py-1 rounded-r">→</button>
//       </div>
//     </div>
//   );
  
//   export default ChatBox;
  
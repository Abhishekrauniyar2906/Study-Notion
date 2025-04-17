
import React from "react";
const Messages = () => {
    const messages = [
      { sender: "Admin", text: "Don’t forget the React session at 4 PM." },
      { sender: "Instructor", text: "Assignment 2 guidelines updated." },
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">✉️ Messages</h2>
        <ul className="space-y-3">
          {messages.map((msg, i) => (
            <li key={i} className="text-sm">
              <span className="font-bold text-blue-300">{msg.sender}:</span> {msg.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Messages;
import React from "react";
const UpcomingDeadlines = () => {
    const deadlines = [
      { task: "Submit Assignment 2", date: "Apr 15" },
      { task: "DSA Quiz", date: "Apr 17" },
      { task: "React Project Review", date: "Apr 20" },
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">📅 Upcoming Deadlines</h2>
        <ul className="space-y-2">
          {deadlines.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.task}</span>
              <span className="text-gray-400">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default UpcomingDeadlines;
import React from "react";


const Leaderboards = () => {
    const topStudents = [
      { name: "Aarav", score: 980 },
      { name: "Meera", score: 950 },
      { name: "Rohan", score: 920 },
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">🏆 Leaderboard</h2>
        <ol className="list-decimal pl-5 space-y-1">
          {topStudents.map((student, index) => (
            <li key={index} className="flex justify-between">
              <span>{student.name}</span>
              <span className="text-gray-400">{student.score} pts</span>
            </li>
          ))}
        </ol>
      </div>
    );
  };
  export default Leaderboards;
  
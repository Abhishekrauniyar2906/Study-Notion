import React from "react";


const CourseSuggestions = () => {
    const suggestions = [
      "Advanced JavaScript",
      "Machine Learning Intro",
      "Fullstack Development Bootcamp",
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">🎯 Recommended Courses</h2>
        <ul className="list-disc pl-5 space-y-2">
          {suggestions.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default CourseSuggestions;
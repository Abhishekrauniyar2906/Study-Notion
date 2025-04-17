const TopCourses = () => {
    const top = [
      { title: "React Mastery", enrolled: 240 },
      { title: "DSA Bootcamp", enrolled: 190 },
      { title: "AI for Beginners", enrolled: 170 },
    ];
  
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
        <h2 className="text-xl font-semibold mb-4">🔥 Top Courses</h2>
        {top.map((course, idx) => (
          <div key={idx} className="flex justify-between py-2 border-b border-gray-700">
            <span>{course.title}</span>
            <span className="text-gray-400">{course.enrolled} students</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default TopCourses;
  
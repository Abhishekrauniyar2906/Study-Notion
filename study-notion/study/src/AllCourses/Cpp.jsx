// import React, { useState } from "react";
// import { FaVideo, FaStar } from "react-icons/fa";
// import { TbWorld } from "react-icons/tb";
// import { SiTicktick } from "react-icons/si";
// import { IoIosArrowDown } from "react-icons/io";
// import cpp from '../assets/courses_img/cpp.webp';  // Ensure the image path is correct
// import modules from '../AllCourses/CourseInfor/CppData';  // Ensure the modules data is correctly imported

// const Cpp = () => {
//   const [openModule, setOpenModule] = useState(null);

//   const toggleModule = (index) => {
//     setOpenModule(openModule === index ? null : index);
//   };

//   return (
//     <div className="dark:bg-black min-h-screen px-4 text-white">
//       <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-8">
//         {/* Left Section */}
//         <div className="w-full md:w-2/3">
//           <p className="text-gray-400 text-xl mb-2">
//             Welcome to <span className="text-blue-500 font-semibold">@study-notion</span>
//           </p>
//           <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
//             C++ Programming
//           </h1>

//           <div className="flex flex-wrap items-center gap-4 text-xl text-gray-300">
//             <div className="flex items-center gap-1">
//               <FaVideo className="text-green-400" />
//               <span>50+ Lectures</span>
//             </div>
//             <span className="text-gray-500">|</span>
//             <div className="flex items-center gap-1">
//               <TbWorld className="text-blue-400" />
//               <span>English</span>
//             </div>
//             <span className="text-gray-500">|</span>
//             <div className="flex items-center gap-1">
//               <span className="text-yellow-400 font-semibold">4.7</span>
//               {[...Array(4)].map((_, i) => (
//                 <FaStar key={i} className="text-yellow-400" />
//               ))}
//               <FaStar className="text-yellow-400 opacity-50" />
//             </div>
//           </div>

//           {/* Course Overview Section */}
//           <div className="ml-[-15px] p-4 mt-8">
//             <p className="text-2xl font-semibold text-white mb-4">Course Overview</p>
//             <p className="text-medium leading-relaxed text-[#a8a29e] font-bold mb-6">
//             This course covers the core concepts of C++ programming, including object-oriented programming, memory management, exception handling, file I/O, and much more. Whether you're a beginner or looking to enhance your skills, this course will help you master C++ and prepare for interviews and professional roles.
//            </p>
//           </div>
//         </div>

//         {/* Right Section (Course Card) */}
//         <div className="w-full md:w-1/3 bg-zinc-950 border border-zinc-800 p-5 rounded-xl">
//           <img
//             src={cpp}
//             alt="C++ Course"
//             className="w-full h-40 object-cover rounded-lg mb-4 shadow-md border border-zinc-800"
//           />

//           <div className="flex items-center space-x-4 text-2xl font-bold mb-4">
//             <span className="text-[#38bdf8]">₹3200</span>
//             <del className="text-gray-400 mt-1 text-lg">₹6400</del>
//           </div>

//           <p className="text-white font-semibold mb-3">This Course Includes:</p>
//           <ul className="text-gray-300 text-medium font-semibold space-y-2 mb-4">
//             <li className="flex items-center">
//               <SiTicktick className="text-green-400 mr-2" />
//               No Pre-requisite Required
//             </li>
//             <li className="flex items-center">
//               <SiTicktick className="text-green-400 mr-2" />
//               50+ hours of Video Content
//             </li>
//             <li className="flex items-center">
//               <SiTicktick className="text-green-400 mr-2" />
//               Beginner to Advanced Curriculum
//             </li>
//             <li className="flex items-center">
//               <SiTicktick className="text-green-400 mr-2" />
//               Course Completion Certificate
//             </li>
//           </ul>

//           <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
//             Buy Now
//           </button>
//         </div>
//       </div>

//       {/* Course Modules Section */}
//       <div className="max-w-6xl mx-auto mt-10">
//         <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg shadow-lg bg-opacity-50 backdrop-blur-lg">
//           <p className="text-2xl font-semibold text-white">Course Modules</p>
//           <ul className="mt-4 space-y-4">
//             {modules.map((module, idx) => (
//               <li key={idx} className="border-b pb-2">
//                 <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleModule(idx)}>
//                   <p className="text-white font-semibold">{module.title}</p>
//                   <IoIosArrowDown className={`transition-transform ${openModule === idx ? "rotate-180" : ""}`} />
//                 </div>
//                 {openModule === idx && (
//                   <ul className="mt-2 ml-4 text-gray-300 list-disc space-y-1">
//                     {module.topics.map((topic, i) => (
//                       <li key={i}>{topic}</li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cpp;

import React, { useState } from "react";
import { FaVideo, FaStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import cpp from '../assets/courses_img/cpp.webp';  // Ensure the image path is correct
import modules from '../AllCourses/CourseInfor/CppData';  // Ensure the modules data is correctly imported
import { motion } from "framer-motion";

const Cpp = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="dark:bg-black min-h-screen px-4 text-white">
      <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Trigger animation when it comes into view
        >
          <p className="text-gray-400 text-xl mb-2">
            Welcome to <span className="text-blue-500 font-semibold">@study-notion</span>
          </p>
          <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
            C++ Programming
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xl text-gray-300">
            <div className="flex items-center gap-1">
              <FaVideo className="text-green-400" />
              <span>50+ Lectures</span>
            </div>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-1">
              <TbWorld className="text-blue-400" />
              <span>English</span>
            </div>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 font-semibold">4.7</span>
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <FaStar className="text-yellow-400 opacity-50" />
            </div>
          </div>

          {/* Course Overview Section */}
          <motion.div
            className="ml-[-15px] p-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-semibold text-white mb-4">Course Overview</p>
            <p className="text-medium leading-relaxed text-[#a8a29e] font-bold mb-6">
              This course covers the core concepts of C++ programming, including object-oriented programming, memory management, exception handling, file I/O, and much more. Whether you're a beginner or looking to enhance your skills, this course will help you master C++ and prepare for interviews and professional roles.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section (Course Card) */}
        <motion.div
          className="w-full md:w-1/3 bg-zinc-950 border border-zinc-800 p-5 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={cpp}
            alt="C++ Course"
            className="w-full h-40 object-cover rounded-lg mb-4 shadow-md border border-zinc-800"
          />

          <div className="flex items-center space-x-4 text-2xl font-bold mb-4">
            <span className="text-[#38bdf8]">₹3200</span>
            <del className="text-gray-400 mt-1 text-lg">₹6400</del>
          </div>

          <p className="text-white font-semibold mb-3">This Course Includes:</p>
          <ul className="text-gray-300 text-medium font-semibold space-y-2 mb-4">
            <li className="flex items-center">
              <SiTicktick className="text-green-400 mr-2" />
              No Pre-requisite Required
            </li>
            <li className="flex items-center">
              <SiTicktick className="text-green-400 mr-2" />
              50+ hours of Video Content
            </li>
            <li className="flex items-center">
              <SiTicktick className="text-green-400 mr-2" />
              Beginner to Advanced Curriculum
            </li>
            <li className="flex items-center">
              <SiTicktick className="text-green-400 mr-2" />
              Course Completion Certificate
            </li>
          </ul>

          <button className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </motion.div>
      </div>

      {/* Course Modules Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg shadow-lg bg-opacity-50 backdrop-blur-lg">
          <p className="text-2xl font-semibold text-white">Course Modules</p>
          <ul className="mt-4 space-y-4">
            {modules.map((module, idx) => (
              <motion.li
                key={idx}
                className="border-b pb-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleModule(idx)}>
                  <p className="text-white font-semibold">{module.title}</p>
                  <IoIosArrowDown className={`transition-transform ${openModule === idx ? "rotate-180" : ""}`} />
                </div>
                {openModule === idx && (
                  <ul className="mt-2 ml-4 text-gray-300 list-disc space-y-1">
                    {module.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Cpp;


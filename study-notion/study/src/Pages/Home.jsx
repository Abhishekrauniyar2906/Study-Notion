import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Homes from '../assets/Homes.png';
import im from '../assets/im.jpg';
import bg1 from '../assets/bg1.png';
import Courses from './Courses';
import { RiGraduationCapFill } from 'react-icons/ri';
import { IoDiamond } from 'react-icons/io5';
import { TbBulbFilled } from 'react-icons/tb';
import { MdGroups2 } from 'react-icons/md';
import Know_your_progress from '../assets/Know_your_progress.png';
import Compare_with_others from '../assets/Compare_with_others.png';
import Plan_your_lessons from '../assets/Plan_your_lessons.png';
import Instructor from '../assets/Instructor.png';
import Footer from './Footer';

import Tilt from 'react-parallax-tilt';


const Home = () => {
  
  const navigate = useNavigate();
  return (
     
  
    <div className="dark:bg-black px-4 relative">
    {/* Hero Section Container */}
    <div className="relative w-full min-h-[calc(100vh-230px)] md:min-h-screen flex flex-col justify-center items-center text-white text-center px-4 mt-[-30px]">
  
      {/* Overlay Content */}
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
      >
        {/* Top Button */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="flex justify-center items-center cursor-pointer bg-zinc-950 border-zinc-800 px-4 py-2 md:px-6 md:py-2.5 text-[#a8a29e] rounded-3xl font-semibold border-2 hover:bg-zinc-900"
          >
            Become an Instructor <FaArrowRight className="ml-2" />
          </button>
        </div>
  
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Empower Your Future with{" "}
          <span className="text-[#06b6d4]">Coding Skills</span>
        </motion.h1>
  
        {/* Subheading */}
        <motion.p
          className="max-w-xl mx-auto text-sm sm:text-base md:text-base text-[#a8a29e] font-bold mt-2 md:mt-4 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </motion.p>
  
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
          >
            Learn More
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white hover:bg-yellow-600 font-semibold rounded-lg"
          >
            Demo
          </button>
        </div>
      </motion.div>
    </div>
    

  {/* Section 1: Text Left, Image Right */}
  <motion.div
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 py-6 md:py-16"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration:0.5,
      delay: 0.2,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
  >
    <div className="w-full md:w-1/2 text-center md:text-left">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration:0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        Unlock Your <span className="text-[#06b6d4]">coding potential</span>
      </motion.h2>
      <p className="text-sm md:text-base text-[#a8a29e] font-bold mt-2 md:mt-4">
        Our courses are designed by industry experts passionate about teaching.
      </p>
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row  cursor-pointer items-center gap-3 md:gap-4 justify-center md:justify-start">
        <button
          onClick={() => navigate('/signup')}
          className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 cursor-pointer rounded-lg border-2 border-gray-600 hover:bg-gray-600 font-semibold"
        >
          Try it Yourself <FaArrowRight className="ml-2" />
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500  cursor-pointer text-white rounded-lg hover:bg-blue-600 font-semibold"
        >
          Learn More
        </button>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
      <motion.img
        src={Homes}
        alt="Home Illustration"
        className="block w-auto max-w-full h-auto rounded-xl object-contain max-h-[400px]"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration:0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>

  {/* Section 2: Image Left, Text Right */}
  <motion.div
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-6 py-12 md:py-16"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration:0.5,
      delay: 0.2,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
  >
    <div className="w-full md:w-1/2 flex justify-center">
      <motion.img
        src={im}
        alt="Coding Start"
        className="block w-auto max-w-full h-auto rounded-xl object-contain max-h-[400px]"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration:0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration:0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        Start <span className="text-[#06b6d4]">coding</span> in seconds
      </motion.h2>
      <p className="text-sm md:text-base text-[#a8a29e] font-bold mt-2 md:mt-4">
        Our hands-on environment lets you write real code from the start.
      </p>
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center cursor-pointer gap-3 md:gap-4 justify-center md:justify-start">
        <button
          onClick={() => navigate('/signup')}
          className="flex items-center px-4 py-2 cursor-pointer bg-gray-700 text-gray-300 rounded-lg border-2 border-gray-600 hover:bg-gray-600 font-semibold"
        >
          Try it Yourself <FaArrowRight className="ml-2" />
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
        >
          Learn More
        </button>
      </div>
    </div>
  </motion.div>
    


   
     {/* Section Divider */}
<div className="border-t border-gray-700 my-6 md:my-8 lg:my-12 w-full" />

{/* Courses Section */}
<motion.div
  className="max-w-6xl mx-auto text-center mb-0"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5}}
  viewport={{ once: false }}
>
  <div className="flex flex-wrap justify-center gap-6 px-4">
    <Courses />
  </div>
</motion.div>

{/* Section Divider */}
<div className="border-t border-gray-700 my-6 md:my-8 lg:my-12 w-full" />

{/* Skills Demand Section */}
<motion.div
  className="max-w-6xl mx-auto px-4 mt-0 py-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: false }}
>
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl font-bold text-white">
        Get the skills you need for a <span className="text-[#06b6d4]">job that is in demand</span>
      </h1>
    </div>
    <div className="w-full md:w-1/2 mt-4 md:mt-0">
      <p className="text-base text-[#a8a29e] font-bold mb-5">
        Today, to be a competitive specialist requires more than just professional skills.
      </p>
      <button onClick={() => navigate('/signup')} className="px-6 py-3  cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</motion.div>

{/* Leadership Section */}
<Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      gyroscope={true}
      className="w-full"
    >
      <motion.div
        className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center rounded-xl bg-zinc-950 border border-zinc-800 p-6 mb-8 mt-0 shadow-lg shadow-gray-400/25"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {/* Left content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <MdGroups2 className="text-[#06b6d4] text-3xl mt-1" />
            <div>
              <p className="text-white font-bold text-lg">Leadership</p>
              <p className="text-[#a8a29e] text-sm font-semibold">Fully committed to success</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <RiGraduationCapFill className="text-[#06b6d4] text-3xl mt-1" />
            <div>
              <p className="text-white font-bold text-lg">Responsibility</p>
              <p className="text-[#a8a29e] text-sm font-semibold">Students are our priority</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IoDiamond className="text-[#06b6d4] text-3xl mt-1" />
            <div>
              <p className="text-white font-bold text-lg">Flexibility</p>
              <p className="text-[#a8a29e] text-sm font-semibold">Adaptable learning experience</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TbBulbFilled className="text-[#06b6d4] text-3xl mt-1" />
            <div>
              <p className="text-white font-bold text-lg">Solve the problem</p>
              <p className="text-[#a8a29e] text-sm font-semibold">Code your way to solutions</p>
            </div>
          </div>
        </div>

        {/* Right image block */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <img
            src={bg1}
            alt="Leadership"
            className="w-full h-auto rounded-xl shadow-lg border-l-4 border-blue-500"
          />
          <div className="absolute bottom-[-52px] left-1/2 transform -translate-x-1/2 px-6 py-4 w-[80%] bg-zinc-950 border border-zinc-800 rounded-xl flex justify-between items-center gap-4 shadow-lg">
            <div className="text-center">
              <p className="text-xl font-extrabold text-white">10+</p>
              <p className="text-[#a8a29e] text-sm">YEARS EXPERIENCE</p>
            </div>
            <div className="hidden sm:block border-l border-gray-600 h-8"></div>
            <div className="text-center">
              <p className="text-xl font-extrabold text-white">200+</p>
              <p className="text-[#a8a29e] text-sm">TYPES OF COURSES</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>

{/* 3 Cards Section */}
<motion.div
  className="w-full max-w-6xl mx-auto flex flex-col items-center text-center px-4 py-16 gap-8"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: false }}
>
  <div className="max-w-2xl">
    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
      Your Swiss Knife for <span className="text-blue-400">learning any language</span>
    </p>
    <p className="text-sm sm:text-base text-[#a8a29e] font-medium">
      Using Spin, learning multiple languages is easy. 20+ languages, voice-over, progress tracking, and more.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
    <motion.img
      src={Know_your_progress}
      alt="Progress"
      className="w-80 rounded-xl transition-transform hover:scale-105"
      whileInView={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    />
    <motion.img
      src={Compare_with_others}
      alt="Compare"
      className="w-80 rounded-xl transition-transform hover:scale-105"
      whileInView={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
    />
    <motion.img
      src={Plan_your_lessons}
      alt="Plan"
      className="w-80 rounded-xl transition-transform hover:scale-105"
      whileInView={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    />
  </div>
</motion.div>

{/* Section Divider */}
<div className="border-t border-gray-700 my-6 md:my-8 lg:my-12 w-full" />

{/* Instructor Section */}
<motion.div
  className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-10 w-full"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: false }}
>
  {/* Left side - Image with shadow */}
  <div className="w-full sm:w-1/2 flex justify-start">
    <motion.img
      src={Instructor} // Replace with the correct image path
      alt="Instructor"
      className="w-full sm:w-[500px] h-auto rounded-4xl border border-gray-400 object-cover"
      whileInView={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    />
  </div>

  {/* Right side - Text and Button */}
  <div className="w-full sm:w-1/2 flex flex-col justify-center text-white">
    <div className="text-4xl font-semibold mb-4">
      Become an <span className="text-blue-500">Instructor</span>
    </div>
    <p className="text-[#a8a29e] text-medium font-semibold mb-6">
      Instructors from around the world teach millions of students on StudyNotion.
      We provide the tools and skills to teach what you love.<br /> Share your knowledge and grow with us!
    </p>

    {/* Button */}
    <button
      onClick={() => navigate('/signup')}
      className="px-8 py-4 bg-blue-500 text-white rounded-lg  cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold flex items-center justify-center gap-3 transition-all duration-300 mt-4 w-fit"
    >
      Start Teaching Today <FaArrowRight className="mt-[1px]" />
    </button>
  </div>
</motion.div>

{/* Section Divider */}
<div className="border-t border-gray-700 my-6 md:my-10 lg:my-12 w-full" />

{/* Footer */}
<Footer />
</div>
);
};



export default Home;
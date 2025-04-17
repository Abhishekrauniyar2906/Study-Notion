import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import image from '../assets/image.png';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import ReviewCard from './ReviewCard';
import Footer from './Footer';
import {  useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  return (
    <div className="dark:bg-black px-4 relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="dark:bg-black py-24 px-8"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-4xl md:text-5xl text-gray-50 font-extrabold">
            Driving Innovation in Online Education for a
            <span className="text-[#06b6d4]"> Brighter Future</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base sm:text-sm md:text-base [word-spacing:0.5px] text-[#a8a29e] font-bold mt-4">
            Studynotion is at the forefront of driving innovation in online education.
            We're passionate about creating a brighter future by offering cutting-edge
            courses, leveraging emerging technologies, and nurturing a vibrant learning community.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center gap-8 mb-16 flex-wrap"
        >
          {[img1, img2, img3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img${index + 1}`}
              className="h-64 w-72 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 drop-shadow-lg mb-4 sm:w-64 sm:h-48 md:w-72 md:h-64 lg:w-80 lg:h-72 xl:w-96 xl:h-80" />
          ))}
        </motion.div>

        {/* Highlight Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl sm:text-lg md:text-xl text-[#a8a29e] font-bold">
            We are passionate about revolutionizing the way we learn. Our innovative platform
            <span className="text-[#06b6d4] font-semibold"> combines technology</span>,
            <span className="text-[#34d399] font-semibold"> expertise </span>, and
            <span className="text-[#a3e635] font-semibold"> unparalleled educational experience&nbsp;
            </span>
            to create a transformative learning environment.
          </p>
          <div className="border-t border-gray-700 my-4 w-full"></div>
        </div>

        {/* Story Section with Tilt + Scroll */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={700}
          scale={1.02}
          gyroscope={true}
          className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center rounded-xl p-3 sm:p-6 mb-8 mt-30 bg-zinc-950 border border-zinc-800 shadow-lg shadow-gray-400/25"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-3xl md:text-4xl font-semibold text-[#5eead4]"
            >
              Our Founding Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-base sm:text-sm md:text-base [word-spacing:1px] text-[#a8a29e] font-bold mt-4"
            >
              Our e-learning platform was born out of a shared vision and passion for transforming education.
              It all began with a group of educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
              <br /><br />
              As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems.
              <br />We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries.
              We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
            </motion.p>
          </div>

          <div className="md:w-1/2 mb-6 md:mb-0">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={image}
              className="h-72 w-full rounded-lg shadow-lg shadow-zinc-900/40"
              alt="founding story"
            />
          </div>
        </Tilt>

        {/* Vision & Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-30 grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Vision */}
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg hover:bg-zinc-950">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-semibold text-[#60a5fa]">Our Vision</h2>
            <p className="text-base sm:text-sm md:text-base [word-spacing:1px] text-[#a8a29e] font-bold mt-4">
              With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and interactive learning experience.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg hover:bg-zinc-950">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-semibold text-[#10b981]">Our Mission</h2>
            <p className="text-base sm:text-sm md:text-base [word-spacing:1px] text-[#a8a29e] font-bold mt-4">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners,
              where individuals can connect, collaborate, and learn from one another.
              We believe that knowledge thrives in an environment of sharing and dialogue,
              and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration:1 }}
          viewport={{ once: true }}
          className="max-w-6xl mt-30 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[ 
            { value: '5K+', label: 'Active Students', color: '#06b6d4' },
            { value: '10+', label: 'Mentors', color: '#22c55e' },
            { value: '100+', label: 'Courses', color: '#c084fc' },
            { value: '30+', label: 'Awards', color: '#f43f5e' },
          ].map((stat, index) => (
            <Tilt key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg hover:bg-zinc-950 transition duration-300"
              >
                <h1 className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</h1>
                <p className="text-xl text-[#a8a29e] font-bold">{stat.label}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>


       {/* Additional Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration:1 }}
  viewport={{ once: true }}
  className="max-w-6xl py-16 px-8 mx-auto mb-16 mt-18"
>
  <div className="mb-8">
    <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold">
      World-Class Learning for&nbsp;
      <span className="text-yellow-500">Anyone, Anywhere</span>
    </h1>
    <p className="mt-6 text-base sm:text-sm md:text-base [word-spacing-1px] text-[#a8a29e] font-bold">
      Studynotion partners with more than 275+ leading universities and companies to
      bring flexible, affordable, job-relevant online learning to individuals and
      organizations worldwide.
    </p>
    <button  onClick={() =>{
        navigate('/signup')
    }}
    className="mt-10 bg-yellow-500 cursor-pointer text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
      Learn More
    </button>
  </div>

  {/* Tilt Cards Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 mt-17 gap-8"
  >
    {[
      {
        title: 'Curriculum Based on Industry Needs',
        desc: 'Designed for clarity and relevance, ensuring practical skills that match industry demands.',
      },
      {
        title: 'Our Learning Methods',
        desc: 'Interactive courses, hands-on projects, and expert-led sessions for effective learning.',
      },
      {
        title: 'Certification',
        desc: 'Get industry-recognized credentials to showcase your expertise and advance your career.',
      },
      {
        title: 'Rating "Auto-grading"',
        desc: 'Instant feedback on assignments, quizzes, and coding exercises for efficient learning.',
      },
      {
        title: 'Ready to Work',
        desc: 'Gain job-ready skills with industry-aligned training and real-world projects.',
      },
      {
        title: 'Community & Support',
        desc: 'Join a supportive learning community, connect with mentors, and get your doubts resolved anytime.',
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Fixed Image inside the card */}
        <Tilt>
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-lg hover:bg-zinc-950 hover:border-2 hover:border-yellow-500 transition duration-300 relative z-10">
            <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-[#e4e4e7]">{item.title}</h3>
            <p className="mt-2 text-[#a8a29e] font-bold">{item.desc}</p>
          </div>
        </Tilt>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

        {/* Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration:1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-30 px-8"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl text-center font-semibold mb-8">
            Reviews from Other Learners
          </h2>
          <div className="flex flex-wrap mt-15 justify-center gap-8">
            <ReviewCard />
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-gray-700 my-6 md:my-8 lg:my-12 w-full" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

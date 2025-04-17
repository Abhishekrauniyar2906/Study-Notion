import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import cpp from '../assets/courses_img/cpp.webp';
import python from '../assets/courses_img/python.jpg';
import dsa from '../assets/courses_img/dsa.png';
import java from '../assets/courses_img/java.jpg';
import web from '../assets/courses_img/web.png';

import SD from '../assets/courses_img/SD.png';
import Tilt from 'react-parallax-tilt';

const Courses = () => {
  const navigate = useNavigate();

  // CourseCard component with extra animations
  const CourseCard = ({ img, title, price, originalPrice, discount, onClick, shadowColor }) => (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.05}
      gyroscope={true}
      className="w-full"
    >
      <motion.div
        onClick={onClick}
        className={`cursor-pointer border border-zinc-700 rounded-2xl bg-zinc-900 
        overflow-hidden transition-transform duration-700 
        hover:shadow-[0_8px_30px_4px_${shadowColor}]`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Image and content remain the same */}
        <div className="w-full aspect-video bg-zinc-800 flex items-center justify-center p-2 relative">
          <motion.img
            src={img}
            alt={title}
            className="max-h-full max-w-full object-contain rounded-xl"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300" />
        </div>
        <div className="px-4 py-5 text-center">
          <motion.h3
            className="text-white text-lg font-semibold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {title}
          </motion.h3>
          <div className="flex justify-center items-center gap-2 mb-1">
            <motion.span
              className="text-green-400 text-md font-bold"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              ₹{price}
            </motion.span>
            <motion.del
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              ₹{originalPrice}
            </motion.del>
          </div>
          <motion.p
            className="text-orange-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            {discount} OFF
          </motion.p>
          <motion.div
            className="mt-4 px-6 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl cursor-pointer relative overflow-hidden"
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span className="absolute inset-0 animate-pulse opacity-30" />
            <span className="relative z-10">View Course</span>
          </motion.div>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <div className="dark:bg-black min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Explore Our <span className="text-yellow-400">Courses</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            img={dsa}
            title="Data Structures & Algorithms"
            price="3000"
            originalPrice="6000"
            discount="50%"
            onClick={() => navigate('/courses/dsa')}
            shadowColor="rgba(251, 191, 36, 0.4)"
          />
          <CourseCard
            img={java}
            title="Java"
            price="2400"
            originalPrice="4000"
            discount="40%"
            onClick={() => navigate('/courses/java')}
            shadowColor="rgba(96, 165, 250, 0.4)"
          />
          <CourseCard
            img={cpp}
            title="C++"
            price="3200"
            originalPrice="6400"
            discount="50%"
            onClick={() => navigate('/courses/cpp')}
            shadowColor="rgba(34, 197, 94, 0.4)"
          />
          <CourseCard
            img={python}
            title="Python"
            price="2100"
            originalPrice="2800"
            discount="25%"
            onClick={() => navigate('/courses/python')}
            shadowColor="rgba(244, 114, 182, 0.4)"
          />
          <CourseCard
            img={web}
            title="Full-Stack Web Development"
            price="3500"
            originalPrice="7000"
            discount="50%"
            onClick={() => navigate('/courses/web')}
            shadowColor="rgba(59, 130, 246, 0.4)"
          />
          <CourseCard
            img={SD}
            title="System Design"
            price="960"
            originalPrice="1200"
            discount="20%"
            onClick={() => navigate('/courses/system-design')}
            shadowColor="rgba(59, 130, 246, 0.4)"
          />
        </div>
      </div>

      

      {/* Footer */}
     
    </div>
  );
};

export default Courses;

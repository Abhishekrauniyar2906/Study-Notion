import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import errrors from "../assets/errrors.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
  return (
     <div className="dark:bg-black px-4 relative">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="dark:bg-black py-0 px-8"
              ></motion.div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto"
        >
          <img
            src={errrors}
            alt="404 Not Found"
            className="w-28 sm:w-36 md:w-44 lg:w-48 mx-auto rounded-3xl shadow-xl mb-6 object-cover"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 px-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div onClick={() => navigate('/')}
            
            className="inline-flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-xl transition duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </div>
        </motion.div>
        </div>
       <div className="border-t border-gray-700 my-6 md:my-10 lg:my-12 w-full" />
      
      {/* Footer */}
      <Footer />
           
    </div>
  );
};

export default NotFound;

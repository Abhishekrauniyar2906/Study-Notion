import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { LuMessageCircleMore } from 'react-icons/lu';
import ContactForm from '../ComponentsContainer/ContactForm';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="dark:bg-black px-4 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="dark:bg-black py-0 px-8"
          ></motion.div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-12 sm:py-16">
      
      {/* Left: Contact Info */}
      <motion.div
        className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8 
        shadow-lg w-full h-fit"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5}}
      >
        <div className="space-y-8">
          {/* Chat */}
          <div>
            <div className="flex items-center gap-3 text-yellow-400">
              <LuMessageCircleMore size={24} />
              <p className="font-semibold text-lg">Chat with us</p>
            </div>
            <p className="text-sm text-gray-300">Our friendly team is here to help.</p>
            <p className="text-sm text-gray-100">info@studynotion.com</p>
          </div>

          {/* Visit */}
          <div>
            <div className="flex items-center gap-3 text-yellow-400">
              <FaLocationDot size={24} />
              <p className="font-semibold text-lg">Visit us</p>
            </div>
            <p className="text-sm text-gray-300">
             Greater Noida Uttar Pradesh - 201310<br />
              
            </p>
            <div className="w-full h-60 overflow-hidden rounded-lg border border-zinc-800">
    <iframe
      title="Google Maps Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224407.5770007155!2d77.35118098069412!3d28.498562158422306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1744807399440!5m2!1sen!2sin" 
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
          </div>

          {/* Call */}
          <div>
            <div className="flex items-center gap-3 text-yellow-400">
              <IoCall size={24} />
              <p className="font-semibold text-lg">Call us</p>
            </div>
            <p className="text-sm text-gray-300">Mon - Fri From 10am to 5pm</p>
            <p className="text-sm text-gray-100">+01 1234 567 890</p>
          </div>
        </div>
      </motion.div>

      {/* Right: Contact Form */}
      <motion.div
        className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8 shadow-lg w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration:0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Got an idea? We've got the skills.</h2>
        <p className="text-gray-400 mb-6">Let’s team up and build something great together!</p>
        <ContactForm />
      </motion.div>

    </div>

    
       
     </div>


     
    <div className="border-t border-gray-700 my-6 md:my-10 lg:my-12 w-full" />

{/* Footer */}
<Footer />
     
  </div>


  );
};

export default Contact;
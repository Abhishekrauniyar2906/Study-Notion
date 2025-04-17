import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import { useAuth } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import {  FiX } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const mobileMenuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-gradient-to-r from-[#111115] to-[#0d0e13]
       text-white shadow-md"
    >
      <div className="container mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center
       justify-between ">
        {/* Logo (Centered on small screens) */}
        <Link to="/" className="flex items-center justify-center sm:justify-start
         w-full sm:w-auto">
          <motion.img
            src={logo}
            height={32}
            width={160}
            loading="lazy"
            alt="Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </Link>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="sm:hidden absolute top-1/2 right-4 transform -translate-y-1/2">
          <motion.button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md p-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <TfiMenuAlt className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Navigation Links (Hidden on small screens, visible on medium and large) */}
        <nav className="hidden sm:block">
          <ul className="flex gap-x-6 text-medium  text-gray-50">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="relative">
              <button
                onClick={toggleCoursesDropdown}
                className="flex items-center hover:text-yellow-400 transition duration-200 focus:outline-none"
              >
                Courses <BiChevronDown className="ml-1" />
              </button>
              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-full left-0 shadow-3xl bg-[#171717] backdrop-blur-3xl  rounded-2xl overflow-hidden mt-1 py-2 min-w-[100px]"
                  >
                    <li>
                      <NavLink
                        to="/courses/dsa"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        DSA
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/cpp"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        C++
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/development"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/system-design"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        System Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/java"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Java
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/python"
                        className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        Python
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                }
              >
                Contact Us
              </NavLink>
            </li>
            
          </ul>
        </nav>

        {/* Auth Buttons (Hidden on small screens, visible on medium and large) */}
        <div className="hidden sm:flex items-center gap-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-600  cursor-pointer text-white py-1.5 px-5 rounded-lg transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
              </Link>
              <Link to="/signup">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-1.5 px-5 rounded-lg transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <motion.button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600  cursor-pointer text-white py-1.5 px-5 rounded-lg transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Log Out
                </motion.button>
              </Link>
              <Link to="/dashboard">
                <motion.button
                  className="bg-green-500 hover:bg-green-600  cursor-pointer text-white py-1.5 px-5 
                  rounded-lg transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    
                  Dashboard
                </motion.button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="sm:hidden absolute top-full right-0 w-50
             shadow-2xl backdrop-blur-3xl  rounded-b-2xl py-4 flex flex-col items-center"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="text-center">
              <li className="py-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                  }
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="py-2 relative">
                <button
                  onClick={toggleCoursesDropdown}
                  className="flex items-center justify-center hover:text-yellow-400 transition duration-200 focus:outline-none"
                >
                  Courses <BiChevronDown className="ml-1" />
                </button>
                <AnimatePresence>
                  {isCoursesOpen && (
                    <motion.ul
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="drop-shadow-3xl border border-zinc-800 shadow-md rounded-md overflow-hidden mt-1 py-2"
                    >
                      <li>
                        <NavLink
                          to="/courses/dsa"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          DSA
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses/cpp"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          C++
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses/web"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses/system-design"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          System Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses/java"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          Java
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses/python"
                          className="block px-4 py-2 text-gray-50 hover:bg-zinc-700 hover:text-yellow-400 transition duration-200"
                          onClick={toggleMobileMenu}
                        >
                          Python
                        </NavLink>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li className="py-2">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                  }
                  onClick={toggleMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400 transition duration-200"
                  }
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="mt-4">
              {!isLoggedIn ? (
                <div className="flex flex-col gap-y-2 items-center">
                  <Link to="/login" onClick={toggleMobileMenu}>
                    <motion.button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6
                       rounded-3xl transition duration-200 w-30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link to="/signup" onClick={toggleMobileMenu}>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6
                       rounded-3xl transition duration-200 w-30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-y-2 items-center">
                  <Link to="/" onClick={toggleMobileMenu}>
                    <motion.button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 
                      rounded-3xl transition duration-200 w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Log Out
                    </motion.button>
                  </Link>
                  <Link to="/dashboard" onClick={toggleMobileMenu}>
  <motion.button
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:px-6 
    rounded-3xl transition duration-200 w-full md:w-auto flex items-center 
    justify-center gap-2 text-medium md:text-base"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <IoIosRocket className="text-lg md:text-xl" />
    Dashboard
  </motion.button>
</Link>


                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border */}
      <div className="border-b-2
       border-zinc-700 shadow-inner"></div>
    </motion.div>
  );
};

export default Navbar;



import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import "./App.css";
import "./index.css";

import fullLight from "../src/assets/fullLight.png";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/DashBoard";
import PrivateRoute from "./Components/PrivateRoute";
import Dsa from "./AllCourses/Dsa";
import Courses from "./Pages/Courses";
import FullStackWebDevelopment from "./AllCourses/FullStackWebDevelopment";
import SystemDesign from "./AllCourses/SystemDesign";
import Cpp from "./AllCourses/Cpp";
import Java from "./AllCourses/Java";
import Python from "./AllCourses/Python";
import NotFound from "./Pages/NotFound";

// Auth Context
const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => React.useContext(AuthContext);

// Splash Animations
const splashVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
  visible: {
    opacity: 1,
    scale: 1.2,
    rotateY: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotateY: 90,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-br 
            
            from-[#19191c] via-[#2b2b2e] to-[#2c2c2f] flex flex-col items-center justify-center z-50 overflow-hidden"
          >
            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-3xl md:text-5xl ml-6 font-extrabold bg-gradient-to-r
               bg-white bg-clip-text text-transparent 
                mb-6"
            >
              Welcome to
            </motion.p>

            {/* Floating Glowing Logo */}
            <motion.img
              src={fullLight}
              alt="Website Logo"
              variants={splashVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-64 h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] 
              animate-floatingLogo"
            />

            {/* Loading Dots */}
            <motion.div
              className="flex space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[0, 1, 2].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className=" text-white min-h-screen"
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthProvider>
  );
}

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>,
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /></>,
  },
  {
    path: "/courses",
    element: <><Navbar /><Courses /></>,
  },
  {
    path: "/courses/dsa",
    element: <><Navbar /><Dsa /></>,
  },
  {
    path: "/courses/cpp",
    element: <><Navbar /><Cpp /></>,
  },
  {
    path: "/courses/java",
    element: <><Navbar /><Java /></>,
  },
  {
    path: "/courses/python",
    element: <><Navbar /><Python /></>,
  },
  {
    path: "/courses/web",
    element: <><Navbar /><FullStackWebDevelopment /></>,
  },
  {
    path: "/courses/system-design",
    element: <><Navbar /><SystemDesign /></>,
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>,
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>,
  },
  {
    path: "/notfound",
    element: <><Navbar /><NotFound /></>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><><Navbar /><Dashboard /></></PrivateRoute>,
  },
]);

export default App;



import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import frame from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import login from '../assets/login.jpg'
import signup from '../assets/signup.jpg'

const Template = ({ title, desc1, desc2, formType, image, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full py-12 mx-auto 
    gap-y-12 dark:bg-black justify-center items-center lg:gap-x-12">
      {/* Left Section (Form and Content) */}
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-[450px] text-white text-center lg:text-left">
        
        <h1 className="text-richblack-5 font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug">{title}</h1>

        <p className="text-lg mt-4 leading-relaxed">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-[#22d3ee] italic">{desc2}</span>
        </p>

        {formType === "signup" ? 
          <SignupForm setIsLoggedIn={setIsLoggedIn} /> : 
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        }

        <div className="flex w-full items-center my-4 gap-x-2 justify-center lg:justify-start">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="bg-zinc-950 border border-zinc-800 w-full 
        flex items-center justify-center rounded-[8px] font-medium text-richblack-100 
        border-richblack-700 px-[12px] py-[8px] cursor-pointer gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="relative w-full sm:w-10/12 md:w-8/12 lg:w-[450px]">
        <img
          src={frame}
          alt="pattern"
          className="w-full h-auto"
          loading="lazy"
        />
        
        {formType === "login" ? (
          <img
            src={login}
            alt="login"
            className="absolute -top-4  rounded-4xl right-0 w-full max-w-[450px] lg:w-[558px]"
            loading="lazy"
          />
        ) : (
          <img
            src={signup}
            alt="signup"
            className="absolute -top-4 rounded-4xl right-0 w-full 
            max-w-[450px] lg:w-[558px]"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default Template;

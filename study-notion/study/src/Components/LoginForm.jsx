import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App"; // Import the useAuth hook
import { motion } from "framer-motion"; // Import framer-motion

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth(); // Get the login function from the context

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // You can add API calls here
    console.log("Form Data:", data);
    login(); // Call the login function from the AuthContext
    toast.success("Login Success");
    navigate("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center"
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-y-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
       
         

        {/* Email Field */}
        <motion.label
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className=" bg-zinc-950 border border-zinc-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.label>

        {/* Password Field */}
        <motion.label
          className="w-full relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]">
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="
            bg-zinc-950 border border-zinc-800 rounded-[0.75rem]
            w-full p-[12px] text-richblack-5"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}

          <Link to="#" className="block text-xs mt-1 text-blue-100 ml-auto max-w-max">
            Forgot Password
          </Link>
        </motion.label>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className=" bg-zinc-950 border cursor-pointer border-zinc-800  py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sign In
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default LoginForm;

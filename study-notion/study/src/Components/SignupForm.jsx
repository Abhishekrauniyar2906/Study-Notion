import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../App"; // Import the useAuth hook
import { motion } from "framer-motion"; // Import framer-motion

const SignupForm = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("student");
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { login } = useAuth(); // Get the login function from the context

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const accountData = {
      ...data,
      accountType,
    };

    login(); // Call the login function from the AuthContext
    toast.success("Account Created");
    console.log("Submitted Data:", accountData);
    navigate("/dashboard");
  };

  return (
    <div>
      {/* Account Type Switch */}
      <motion.div
        className="flex bg-richblack-900/60 mt-3 cursor-pointer bg-zinc-950 border border-zinc-800 p-1 gap-x-2 rounded-full max-w-max mb-6 transition-all duration-400 shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }} // Trigger the animation when 50% of the element is in view
      >
        {["student", "instructor"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setAccountType(type);
            }}
            className={`py-2 px-6 rounded-full cursor-pointer font-medium text-medium transition-all duration-300
              ${accountType === type
                ? "bg-yellow-500 text-black shadow-sm"
                : "bg-zinc-950 border border-zinc-800 text-white"}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Fields */}
        <div className="flex gap-x-4">
          <motion.label
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-medium text-[#e4e4e7] mb-1">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter First Name"
              {...register("firstName", { required: true, minLength: 2 })}
              className="bg-zinc-950 border border-zinc-800 rounded-lg w-full p-3 text-white placeholder-[#a1a1aa] focus:border-white focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-xs text-red-500">
                First name is required (min 2 chars)
              </p>
            )}
          </motion.label>

          <motion.label
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-medium text-[#e4e4e7] mb-1">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              {...register("lastName", { required: true, minLength: 2 })}
              className="bg-zinc-950 border border-zinc-800 rounded-lg w-full p-3 text-white placeholder-[#a1a1aa] focus:border-white focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-xs text-red-500">
                Last name is required (min 2 chars)
              </p>
            )}
          </motion.label>
        </div>

        {/* Email Field */}
        <motion.label
          className="w-full mt-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-medium text-[#e4e4e7] mb-1">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", { required: true })}
            className="bg-zinc-950 border border-zinc-800 rounded-lg w-full p-3 text-white placeholder-[#a1a1aa] focus:border-white focus:outline-none"
          />
          {errors.email && <p className="text-xs text-red-500">Email is required</p>}
        </motion.label>

        {/* Passwords */}
        <div className="flex gap-x-4 mt-4">
          <motion.label
            className="w-full relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-medium text-[#e4e4e7] mb-1">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showCreatePass ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password", { required: true, minLength: 8 })}
              className="bg-zinc-950 border border-zinc-800 rounded-lg w-full p-3 text-white placeholder-[#a1a1aa] focus:border-white focus:outline-none"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowCreatePass(!showCreatePass)}
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
            {errors.password && (
              <p className="text-xs text-red-500">
                Password must be at least 8 characters
              </p>
            )}
          </motion.label>

          <motion.label
            className="w-full relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-medium text-[#e4e4e7] mb-1">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true, minLength: 8 })}
              className="bg-zinc-950 border border-zinc-800 rounded-lg w-full p-3 text-white placeholder-[#a1a1aa] focus:border-white focus:outline-none"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">Please confirm your password</p>
            )}
          </motion.label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="py-2 px-3 rounded-md cursor-pointer mt-6 font-medium  bg-zinc-950 border border-zinc-800 w-full hover:bg-[#06b6d4]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isSubmitting ? "Submitting..." : "Create Account"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [phone, setPhone] = useState('');

  // onSubmit function for form submission
  async function onSubmit(data) {
    // Simulate API call
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Printing Data:", data, phone);
        resolve(); // Ensure submission completes
      }, 5000);
    });
    toast.success("Message sent successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-950 border border-zinc-800 text-white p-6 rounded-lg space-y-6 w-full max-w-xl mx-auto"
    >
      {/* Name Fields */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="mb-1">First Name</label>
          <input
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name is required (min 2 chars)",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "First name must only contain letters",
              },
            })}
            type="text"
            placeholder="Enter first name"
            className="bg-zinc-900 px-4 py-2 rounded-md outline-none"
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1">Last Name</label>
          <input
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name is required (min 2 chars)",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Last name must only contain letters",
              },
            })}
            type="text"
            placeholder="Enter last name"
            className="bg-zinc-900 px-4 py-2 rounded-md outline-none w-full"
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label className="mb-1">Email Address</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter email address"
          className="bg-zinc-900 px-4 py-2 rounded-md outline-none"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm mb-1 text-white">Phone Number</label>
        <div className="text-zinc-900 border border-zinc-900 rounded-md overflow-hidden">
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={setPhone}
            enableSearch={true}
            inputStyle={{
              width: '100%',
              height: '2.5rem',
              backgroundColor: '#18181b',
              border: 'none',
              color: 'white',
              paddingLeft: '3.2rem',
              fontSize: '0.875rem',
              borderRadius: '0.375rem',
            }}
            buttonStyle={{
              backgroundColor: '#18181b',
              border: 'none',
              borderRight: '1px solid #4b5563',
              borderRadius: '0.375rem 0 0 0.375rem',
            }}
            containerStyle={{ width: '100%' }}
          />
        </div>
        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="mb-1">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Enter your message here"
          rows="5"
          className="bg-zinc-900 px-4 py-2 rounded-md outline-none resize-none"
        />
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md w-full"
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

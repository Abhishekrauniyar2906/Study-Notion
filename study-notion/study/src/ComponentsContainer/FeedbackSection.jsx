import React from "react";



const FeedbackSection = () => {
    return (
      <div className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6  mt-10">
        <h2 className="text-xl font-semibold mb-4">📝 Feedback</h2>
        <form className="space-y-4">
          <textarea
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
            rows="4"
            placeholder="Your feedback..."
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  export default FeedbackSection;
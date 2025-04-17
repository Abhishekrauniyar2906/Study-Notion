import React from "react";
import Template from "../Components/Template" // Make sure this path is correct
  // Correct import
  import signup from '../assets/signup.jpg'

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signup}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;

import React from 'react'

import login from "../assets/login.jpg";
import Template from '../Components/Template';
const Login = ({setIsLoggedIn}) => {
  return (
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={login}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}/>
    
  )
}

export default Login
import React from 'react'

const LogoCircle = ({name}) => {

    const initials = name.split(' ').map(word => word[0].toUpperCase()).join("");
 
  return (
    <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center text-white text-lg font-bold">
    <span>{initials}</span>
     </div>
  )
}

export default LogoCircle;
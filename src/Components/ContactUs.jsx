import React, { useState } from "react";

export default function ContactUs() {
  
   const [showPassword, setShowPassword] = useState(false);
  
   return (
    <>
    <h1 className="text-4xl text-center font-semibold mt-10 text-green-600">Contact Us </h1>
    <div className="flex flex-col justify-center items-center h-[90vh]" >
      <div className="relative cursor-pointer">
      <label htmlFor="password">Enter your password:</label>
        <input type={showPassword ? 'text' : 'password'} 
        className="border border-black ms-2"
        id="password" />
      <span className="absolute right-3"
      onClick={() => setShowPassword(!showPassword)}>👁️</span>
      </div>
     
    </div>
    </>
  );
}
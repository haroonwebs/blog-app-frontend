import React from "react";
import { NavLink } from "react-router-dom";

const UnAuthorized = () => {
  
  

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>You are Not Authorized for this Page </h1>
      <div className="bg-blue-500 mt-5 w-28 h-7 rounded flex justify-center items-center text-white font-bold hover:bg-blue-700">
        <NavLink to="/News">Back</NavLink>
      </div>
    </div>
  );
};

export default UnAuthorized;

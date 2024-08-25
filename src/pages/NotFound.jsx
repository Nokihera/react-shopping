import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <div className="flex-grow-2 container mx-auto flex flex-col justify-center items-center py-4 gap-4">
      <div className="flex gap-2 items-center">
      <p className="text-5xl text-gray-800 font-bold border-r-[1px] border-black pr-2">404</p>
      <p className="text-3xl text-gray-800 font-bold"> Page not found</p>
      </div>
      <p className="text-2xl text-gray-700 font-bold">Go back to Home Page</p>
      <Link to="/" className="text-lg text-gray-300 bg-black px-4 py-1 rounded-lg hover:bg-white hover:text-black border-2 border-black hover:border-black transition-all duration-300">Home</Link>
    </div>
    <div className="w-full h-[1px] mt-auto"></div>
    </>
  );
};

export default NotFound;

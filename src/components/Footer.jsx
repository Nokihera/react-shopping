import React from "react";

const Footer = () => {
  return (
    <div className="bg-black p-6 container mx-auto">
      <p className="text-white text-center">
        {" "}
        Copyright &copy;{new Date().getFullYear()}{" "}
        <a href="https://www.mms-it.com" className="text-gray-300 underline">
          MMS-IT
        </a>{" "}
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-6 md:mx-[70px] mx-[20px] px-[20px]">
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

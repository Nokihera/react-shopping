import React from "react";
import { Link } from "react-router-dom";
import useCart from "../Zustand/useState";

const Header = () => {
  const { cart } = useCart();
  return (
    <>
      <div className="flex justify-between items-center py-5 md:px-[70px] px-[20px]">
        <a href="/" className="text-4xl font-bold text-gray-800">
          Online Shop
        </a>
        <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center">
          <Link to={"/my-cart"}><i className="fa-solid fa-cart-shopping"></i> ({useCart.getState().cart.length})</Link>
        </button>
      </div>
    </>
  );
};

export default Header;

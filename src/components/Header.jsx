import React from "react";
import { Link } from "react-router-dom";
import useCart from "../Zustand/useState";

const Header = () => {
  const { cart } = useCart();
  return (
    <>
      <div className="flex justify-between items-center container mx-auto py-5">
        <a href="/" className="text-4xl font-bold text-gray-800">
          Online Shop
        </a>
        <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
          <Link to={"/my-cart"}>My Cart({useCart.getState().cart.length})</Link>
        </button>
      </div>
    </>
  );
};

export default Header;

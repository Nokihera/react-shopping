import React from "react";
import useCart from "../Zustand/useState";

const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleOnClick = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="flex flex-col items-start justify-center px-[70px]">
      <div className="mb-5">
        {cart.length > 0 ? (
          <h1 className="text-3xl text-gray-700">My Cart</h1>
        ) : (
          <h1>No Item in Cart</h1>
        )}
      </div>
        <div className="flex flex-col w-full ">
        {cart.map((item) => (
          <div key={item.id} className="grid grid-cols-4 grid-flow-row justify-items-center items-center h-14 w-full border-b-2">
            <p className="text-gray-700 line-clamp-1">{item.title}</p>
            <p className="text-gray-700 line-clamp-1">{item.price} USD</p>
            <button
              onClick={() => handleOnClick(item.id)}
              className=" bg-red-500 text-white px-2 py-1 rounded w-2/4"
            >
              Remove
            </button>
            <button className=" bg-blue-500 text-white px-2 py-1 rounded w-2/4">
              Purchase
            </button>
          </div>
        ))}
        </div>
    </div>
  );
};

export default MyCart;

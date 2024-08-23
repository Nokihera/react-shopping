import React from "react";
import useCart from "../Zustand/useState";
import { Link } from "react-router-dom";
import emptyCart from "../assets/emptyCart.svg";
const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleOnClick = (id) => {
    removeFromCart(id);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = total.toFixed(2);
  const integerPrice = parseInt(totalPrice);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = (integerPrice + integerPrice * 0.1).toFixed(2);
  const increaseQuantity = (id) => {
    useCart.getState().increaseQuantity(id);
  };
  const decreaseQuantity = (id) => {
    useCart.getState().decreaseQuantity(id);
  };
  return (
    <>
      <div className="flex flex-col items-start justify-center md:px-[70px] px-[20px] flex-grow-3">
        <div className="flex justify-start w-full select-none items-center mb-6 ">
          <span className="text-gray-700 underline ">
            <Link
              to={"/"}
              className="hover:text-blue-500 transition-all duration-300"
            >
              Home
            </Link>{" "}
            <i className="fa-solid fa-chevron-right"></i>{" "}
            <Link
              to={`/my-cart`}
              className="hover:text-blue-500 transition-all duration-300"
            >
              my-cart
            </Link>
          </span>
        </div>
        <div className="mb-5 w-full">
          {cart.length > 0 ? (
            <h1 className="text-3xl text-gray-700">My Cart</h1>
          ) : (
            <div className="flex flex-col items-center w-full justify-center">
              <img src={emptyCart} alt="" className="h-[350px]" />
              <p className="text-gray-700 text-lg font-bold">
                No items in cart
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 grid-flow-row justify-items-center items-center border-black h-[120px] md:h-[180px] w-full border-b-2 gap-3"
            >
              <img src={item.image} alt="" className="md:h-40 h-24" />
              <p className="text-gray-700 line-clamp-1">{item.title}</p>
              <p className="text-gray-700 line-clamp-1">{item.price} USD</p>
              <div className="flex gap-2">
                <button onClick={() => increaseQuantity(item.id)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => decreaseQuantity(item.id)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end py-5 gap-4 w-full mt-auto md:px-[70px] px-[20px]">
        <div className="grid grid-flow-row grid-cols-4 w-full justify-items-end place-items-center">
          <p className="text-black font-bold md:text-3xl text-2xl">Net Total</p>
        <p className="text-black md:text-xl text-lg font-bold">
          {totalPrice} USD
        </p>
        <p className="text-black md:text-xl text-lg font-bold">Tax 10%</p>
        <p className="text-black md:text-xl text-lg font-bold">
          {grandTotal} USD
        </p>
        </div>
        <button className="border-2 border-black md:px-4 px-2 py-2 md:py-2 font-semibold hover:bg-black hover:text-white transition-all md:text-base text-sm duration-300">
          Order Now
        </button>
      </div>
    </>
  );
};

export default MyCart;

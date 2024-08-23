import React from "react";
import useCart from "../Zustand/useState";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleOnClick = (id) => {
    removeFromCart(id);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalPrice = total.toFixed(2);
  const integerPrice = parseInt(totalPrice);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = (integerPrice + (integerPrice * 0.10)).toFixed(2);
  const increaseQuantity = (id) => {
    useCart.getState().increaseQuantity(id);
  };
  const decreaseQuantity = (id) => {
    useCart.getState().decreaseQuantity(id);
  };
  return (
    <div className="flex flex-col items-start justify-center px-[70px] ">
      <div className="flex justify-start w-full select-none items-center mb-6">
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
      <div className="mb-5">
        {cart.length > 0 ? (
          <h1 className="text-3xl text-gray-700">My Cart</h1>
        ) : (
          <h1>No Item in Cart</h1>
        )}
      </div>
      <div className="flex flex-col w-full gap-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 grid-flow-row justify-items-center items-center border-black h-[170px] w-full border-b-2"
          >
            <img src={item.image} alt="" className="h-40" />
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
        <div className="grid grid-flow-row grid-cols-4 items-center mb-5 gap-4 place-items-center justify-items-center">
          <p className="text=black font-bold text-3xl">Total Net</p>
          <p className="text-black text-xl font-bold">{totalPrice} USD x (Tax 10%)</p>
          <p className="text-black text-xl font-bold">{grandTotal} USD</p>
          <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

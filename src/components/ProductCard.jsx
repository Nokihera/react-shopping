import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import useCart from "../Zustand/useState";
import { toaster } from "toaster-js/Toaster";
import { Toast } from "toaster-js";
import toast, { Toaster } from "react-hot-toast";
const ProductCard = ({
  product: {
    title,
    id,
    price,
    image,
    rating: { rate },
    quantity,
    slug,
  },
}) => {
  const { cart, addToCart } = useCart();

  const handlerOnClick = () => {
    const itemExists = cart.find((item) => item.id === id);

    if (itemExists) {
      toast.error("Item is already in cart.");
      // Adjust this based on how your Toaster class works
    } else {
      addToCart({ title, id, price, image, rate, quantity });
    }
  };
  return (
    <>
      <div
        className="w-full flex flex-col border-2 border-black items-start p-3"
        key={id}
      >
        <img src={image} alt="" className="h-40" />
        <Link to={`/product-detail/${slug}`}>
          <h1 className="text-gray-800 font-bold line-clamp-2">{title}</h1>
        </Link>
        <Rating rate={rate} />
        <div className="flex justify-between items-center w-full ">
          <p className="text-gray-700">Price: ({price})</p>
          <button
            className={`border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300 ${
              cart.find((item) => item.id === id)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={handlerOnClick}
          >
            {cart.find((item) => item.id === id) ? "In Cart" : "Add to Cart"}
          </button>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                boxShadow: "none",
                background: "black",
                color: "white",
                borderRadius: "15px",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import useCart from "../Zustand/useState";
const ProductCard = ({
  product: {
    title,
    id,
    price,
    image,
    rating: { rate },
    quantity,
  },
}) => {
  const { cart, addToCart } = useCart();
  const handlerOnClick = () => {
    cart.find((item) => item.id === id)
      ? null
      : addToCart({ title, id, price, image, rate, quantity });
  };
  return (
    <>
      <div
        className="w-full flex flex-col border-2 border-black items-start p-3"
        key={id}
      >
        <img src={image} alt="" className="h-40" />
        <Link to={`/product-detail/${id}`}>
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;

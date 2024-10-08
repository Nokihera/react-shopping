import React from "react";
import products from "../Products";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import useCart from "../Zustand/useState";
import toast, { Toaster } from "react-hot-toast";

const ProductDetail = () => {
  const { cart, addToCart } = useCart();
  const { slug } = useParams();
  const currentProduct = products.find((product) => product.slug === slug);
  const handlerOnClick = () => {
    const existingItem = cart.find((item) => item.id === currentProduct.id);
    if (!existingItem) {
      addToCart({
        title: currentProduct.title,
        id: currentProduct.id,
        price: currentProduct.price,
        image: currentProduct.image,
        rate: currentProduct.rating.rate,
        quantity: currentProduct.quantity,
      });
    } else {
      toast.error("Item is already in cart.");
    }
  };
  return (
    <div className="flex items-center flex-col mx-auto md:px-[50px] px-[20px] gap-5 justify-center max-w-3xl mb-10">
      <div className="flex justify-start w-full select-none items-center">
        <span className="text-gray-700 underline ">
          <Link
            to={"/"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>{" "}
          <i className="fa-solid fa-chevron-right"></i>{" "}
          <Link
            to={`/product-detail/${slug}`}
            className="hover:text-blue-500 transition-all duration-300"
          >
            Product-detail
          </Link>
        </span>
      </div>
      <div>
        <img src={currentProduct.image} alt="" className="h-56" />
      </div>
      <div className="flex flex-col gap-3">
        <p>Category: {currentProduct.category}</p>
        <h1 className="text-xl text-gray-800 font-semibold">
          {currentProduct.title}
        </h1>
        <p className="text-gray-700 text-sm">{currentProduct.description}</p>
        <Rating rate={currentProduct.rating.rate} />
        <p>Price: {currentProduct.price}</p>
        <button
          className={`border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300 ${
            cart.find((item) => item.id === currentProduct.id)
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={handlerOnClick}
        >
          {cart.find((item) => item.id === currentProduct.id)
            ? "In Cart"
            : "Add to Cart"}
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
  );
};

export default ProductDetail;

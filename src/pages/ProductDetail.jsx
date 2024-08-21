import React from "react";
import products from "../Products";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);
  return (
    <div className="flex items-center flex-col container mx-auto gap-5 justify-center max-w-3xl mb-10">
      <div className="flex justify-start w-full select-none items-center" >
        <span className="text-gray-700 underline ">
          <Link
            to={"/"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>{" "}
          <i class="fa-solid fa-chevron-right"></i>{" "}
          <Link to={`/product-detail/${id}`} className="hover:text-blue-500 transition-all duration-300">Product-detail</Link>
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
        <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({products}) => {
  
  return <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto pb-5">
    {products.map((product)=> (<ProductCard key={product.id} product={product}/>))}
  </div>;
};

export default ProductSection;

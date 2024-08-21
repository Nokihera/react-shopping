import React, { useState } from "react";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import products from "../Products";

const Home = () => {
  const [Category, setCategory] = useState([
    { cate: "All", showOff: true, id: 0 },
    { cate: "electronics", showOff: false, id: 1 },
    { cate: "men's clothing", showOff: false, id: 2 },
    { cate: "women's clothing", showOff: false, id: 3 },
    { cate: "Jewelry", showOff: false, id: 4 },
  ]);
  const handleChangeShowOff = (id) => {
    setCategory(
      Category.map((el) =>
        el.id === id
          ? { ...el, showOff: !el.showOff }
          : { ...el, showOff: false }
      )
    );
  };
  const filterCategory = Category.find((el) => el.showOff === true);
  const filterProducts = products.filter((el) => {
    if (filterCategory.cate === "All") {
      return el;
    } else {
      return el.category === filterCategory.cate;
    }
  });
  return (
    <>
      <Categories
        Category={Category}
        handleChangeShowOff={handleChangeShowOff}
      />
      <ProductSection products={filterProducts} />
    </>
  );
};

export default Home;

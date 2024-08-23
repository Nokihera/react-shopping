import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

const Categories = ({ Category, handleChangeShowOff }) => {
  return (
    <div className="flex gap-4 pb-3 container mx-auto flex-nowrap overflow-scroll categories-btn-gp">
      
      {Category.map((el) => (
        <CategoryButton key={el.id} name={el} handleChangeShowOff={handleChangeShowOff} />
      ))}
    </div>
  );
};

export default Categories;

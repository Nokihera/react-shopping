import React from "react";

const CategoryButton = ({ name: { cate, showOff,id }, handleChangeShowOff }) => {
  
  const handleOnCLick = ()=> {
    handleChangeShowOff(id)
  }
  return (
    <>
      <button className={`border-2 border-black px-4 py-2 font-semibold text-nowrap ${showOff ? "bg-black text-white" : "bg-white text-black"} transition-all duration-300`} onClick={handleOnCLick} >
        {cate}
      </button>
    </>
  );
};

export default CategoryButton;

import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black h-16 flex justify-between items-center shadow-2xl fixed top-0 left-0 w-full">
      <h1 className="text-white ml-16 text-xl font-semibold">Ecommerence</h1>
      <button className="bg-white rounded-lg h-8 p-4 flex items-center mr-12">
        Add to Cart
      </button>
    </div>
  );
};

export default NavBar;

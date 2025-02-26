import React from "react";

const CardTag = () => {
  return (
    <div className="bg-blue-600 h-10 p-2 text-white text-xs rounded-lg flex items-center justify-between">
      <span className="font-semibold px-1">Home</span>
      <div className="bg-yellow-500 text-black px-2 py-1 rounded-md">
        Delivery
      </div>
    </div>
  );
};

export default CardTag;

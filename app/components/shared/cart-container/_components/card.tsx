import React from "react";

const Card = () => {
  const Title = () => {
    return <h1 className="text-xl font-semibold">Punjabi</h1>;
  };

  const Description = () => {
    return (
      <p className="text-gray-500 text-xs mt-2">
        Hello Pakistan with description the woekd adshas s adbsva s dsvfdsgvf sd
        asfdasv wejrejwbew eewbjfbdbfsdbf
      </p>
    );
  };

  const Rating = () => {
    return <p className="bg-green-600 p-1 h-8 rounded-full text-white">4.6</p>;
  };

  const Price = () => {
    return <p className="text-black mt-3">$350</p>;
  };
  return (
    <div className="flex justify-between items-start w-full">
      <div className="mb-3">
        <Title />
        <Description />
      </div>
      <div className="flex flex-col items-end">
        <Rating />
        <Price />
      </div>
      <hr />
    </div>
  );
};

export default Card;

import React from "react";
import CardImage from "./_components/card-image";
import Card from "./_components/card";
import Button from "../Button";
import {
  ButtonSizes,
  ButtonTypeVariant,
  ButtonVariants,
} from "@/app/utils/constant";
import CardTag from "./_components/cart-tag";

const Cart = () => {
  const handleClick = () => {
    window.alert("Hell----");
  };

  return (
    <div className="border p-4 shadow-xl items-center">
      <CardImage />
      <Card />
      <hr />
      <div className="py-3 flex justify-between">
        <p className="bg-red-500 h-10 p-2 rounded-lg text-xs justify-center flex items-center font-semibold text-white">
          Peak Time
        </p>
        <Button
          title="Add to Cart"
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.EXTRALARGE}
          btnKey="helloBtm"
          disabled={false}
          type={ButtonTypeVariant.BUTTON}
          onClick={handleClick}
        />

        <CardTag />
      </div>
    </div>
  );
};

export default Cart;

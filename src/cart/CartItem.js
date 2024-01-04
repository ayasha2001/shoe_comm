import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { shoeName, shoePrice, sPurchased, mPurchased, lPurchased } = item;
  let totalPrice = 0;
  if (Number(sPurchased) > 0) {
    totalPrice += Number(sPurchased) * shoePrice;
  }
  if (Number(mPurchased) > 0) {
    totalPrice += Number(mPurchased) * shoePrice;
  }
  if (Number(lPurchased) > 0) {
    totalPrice += Number(lPurchased) * shoePrice;
  }

  return (
    <div>
      <div className="h-lbl">
        <h4>{shoeName}</h4>
        <div className="size-container">
          <label className="lbl">{`${sPurchased} - S`}</label>
          <label className="lbl">{`${mPurchased} - M`}</label>
          <label className="lbl">{`${lPurchased} - L`}</label>
        </div>
        <label className="lbl">{`rs ${totalPrice}`}</label>
      </div>
    </div>
  );
};

export default CartItem;

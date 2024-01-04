import React, { useContext } from "react";
import "./ProductItem.css";
import CartContext from "../context/CartContext";

const ProductItem = ({ item }) => {
  const { shoeName, shoeDesc, shoePrice } = item;

  const cntxt = useContext(CartContext);

  const handleBuyS = () => {
    cntxt.addItemToCart({
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 1,
      mPurchased: 0,
      lPurchased: 0,
    });
  };
  const handleBuyM = () => {
    cntxt.addItemToCart({
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 0,
      mPurchased: 1,
      lPurchased: 0,
    });
  };
  const handleBuyL = () => {
    cntxt.addItemToCart({
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 0,
      mPurchased: 0,
      lPurchased: 1,
    });
  };

  return (
    <div className="p-div-container">
      <p>{`${shoeName} ${shoeDesc} ${shoePrice}`}</p>
      <div className="btn-container">
        <button onClick={handleBuyS}>{`Buy S (${item.sSizeQty})`} </button>
        <button onClick={handleBuyM}>{`Buy M (${item.mSizeQty})`}</button>
        <button onClick={handleBuyL}>{`Buy L (${item.lSizeQty})`}</button>
      </div>
    </div>
  );
};

export default ProductItem;

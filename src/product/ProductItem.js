import React, { useContext } from "react";
import "./ProductItem.css";
import CartContext from "../context/CartContext";

const ProductItem = ({ item }) => {
  const { shoeName, shoeDesc, shoePrice } = item;

  // const cntxt = useContext(CartContext);

  const handlePurchase = (data) => {
    fetch("https://crudcrud.com/api/f2ee70ab5fe845cfbbdd228a0d254d5e/cart", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log("item added to cart", data);
      })
      .catch(error => {
        console.log("error in adding item to cart:", error);
      });
  }

  const handleBuyS = () => {
    const data = {
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 1,
      mPurchased: 0,
      lPurchased: 0,
    }
    handlePurchase(data)
  };
  const handleBuyM = () => {
    const data ={
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 0,
      mPurchased: 1,
      lPurchased: 0,
    }
    handlePurchase(data)
  };
  const handleBuyL = () => {
    const data = {
      id:item.id,
      shoeName: item.shoeName,
      shoePrice: item.shoePrice,
      sPurchased: 0,
      mPurchased: 0,
      lPurchased: 1,
    }
    handlePurchase(data)
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

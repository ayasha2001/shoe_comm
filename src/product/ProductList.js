import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ProductItem from "./ProductItem";
import "./ProductList.css"

const ProductList = ({productList}) => {
  return (
    <div className="li-container">
      {productList.map((item) => {
        console.log(item)
        return <ProductItem item={item} key={item.id} />;
      })}
    </div>
  );
};
export default ProductList;

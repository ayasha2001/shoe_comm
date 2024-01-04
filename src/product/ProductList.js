import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ProductItem from "./ProductItem";
import "./ProductList.css"

const ProductList = () => {
  const cntxt = useContext(CartContext);
  return (
    <div className="li-container">
      {cntxt.items.map((item) => {
        console.log(cntxt.items)
        return <ProductItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductList;

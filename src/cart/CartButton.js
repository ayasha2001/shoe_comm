import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartButton = ({ handleCartOpen }) => {
    const cntxt = useContext(CartContext)
  return (
    <div>
      <button onClick={handleCartOpen}>{`cart ${cntxt.count}`}</button>
    </div>
  );
};

export default CartButton;

import React, { useContext } from "react";

const CartButton = ({ handleCartOpen , count}) => {
  return (
    <div>
      <button onClick={handleCartOpen}>{`cart ${count}`}</button>
    </div>
  );
};

export default CartButton;

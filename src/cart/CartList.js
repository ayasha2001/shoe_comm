import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Modal from "../ui/Modal";
import CartItem from "./CartItem";

const CartList = (props) => {
  const contxt = useContext(CartContext);
  return (
    <Modal onClose={props.onClose}>
      {contxt.cartItems.map((item) => {
        return <CartItem item={item} key={item.id}/>;
      })}
      <label>Total billing amount is {" " + contxt.tPrice}</label>
      <div>
        <button onClick={contxt.placeOrder}>Place order</button>
        <button onClick={props.onClose}>close</button>
      </div>
    </Modal>
  );
};

export default CartList;

import React from "react";

const CartContext = React.createContext({
  items: [],
  cartItems: [],
  count: 0,
  onItemAdd: () => {},
  addItemToCart: () => {},
  placeOrder: () => {},
});

export default CartContext;

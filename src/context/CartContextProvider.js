import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [tPrice, setTPrice] = useState(0);
  let flag=true; // Use local state for flag

  useEffect(() => {
    var c = 0;
    var p = 0;
    cartItems.forEach((item) => {
      console.log(item.sPurchased, item.mPurchased, item.lPurchased);
      c +=
        Number(item.sPurchased) +
        Number(item.mPurchased) +
        Number(item.lPurchased);
      p += c * item.shoePrice;
    });
    setCount(c);
    setTPrice(p);
  }, [cartItems]);

  const onItemAdd = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const placeOrder = () => {
    setCartItems([]);
  };

  const addItemToCart = (newItem) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        let p;
        if (newItem.sPurchased === 1) {
          p = "sSizeQty";
        } else if (newItem.mPurchased === 1) {
          p = "mSizeQty";
        } else {
          p = "lSizeQty";
        }
        if (item.id === newItem.id) {
          if (Number(item[p]) > 0) {
            return { ...item, [p]: Number(item[p]) - 1 };
          } else {
            flag=false;
            return item;
          }
        } else {
          return item;
        }
      });
    });

    setCartItems((prevItems) => {
      let size;
      const itemExists = prevItems.find((item) => item.id === newItem.id);
      if (itemExists) {
        const mappedArr = prevItems.map((item) => {
          if (newItem.sPurchased === 1) {
            size = "sPurchased";
          } else if (newItem.mPurchased === 1) {
            size = "mPurchased";
          } else {
            size = "lPurchased";
          }
          if (flag) {
            return item.id === newItem.id
              ? { ...item, [size]: Number(item[size]) + 1 }
              : item;
          } else {
            return item;
          }
        });
        return mappedArr;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const cartContext = {
    items: items,
    cartItems: cartItems,
    onItemAdd: onItemAdd,
    addItemToCart: addItemToCart,
    placeOrder: placeOrder,
    count: count,
    tPrice: tPrice,
  };

  // Reset the flag when items or cartItems change
  useEffect(() => {
    flag=true
  }, [items, cartItems]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

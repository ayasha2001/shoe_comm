import "./App.css";
import ShoeForm from "./product/ShoeForm";
import CartContextProvider from "./context/CartContextProvider";
import ProductList from "./product/ProductList";
import CartList from "./cart/CartList";
import { useEffect, useState } from "react";
import CartButton from "./cart/CartButton";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);
  const [tPrice, setTPrice] = useState(0);

  useEffect(() => {
    var c = 0;
    var p = 0;
    cartList.forEach((item) => {
      console.log(item.sPurchased, item.mPurchased, item.lPurchased);
      c +=
        Number(item.sPurchased) +
        Number(item.mPurchased) +
        Number(item.lPurchased);
      p += c * item.shoePrice;
    });
    setCount(c);
    setTPrice(p);
  }, [cartList]);

  useEffect(() => {
    getFormData();
    getCartData();
  }, []);

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  const placeOrder = () => {
    setCartList([]);
  };

  const getFormData = () => {
    fetch("https://crudcrud.com/api/f2ee70ab5fe845cfbbdd228a0d254d5e/products")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => {
        console.log("error in getting all products:", error);
      });
  };
  const getCartData = () => {
    fetch("https://crudcrud.com/api/f2ee70ab5fe845cfbbdd228a0d254d5e/cart")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setCartList(data);
      })
      .catch((error) => {
        console.log("error in getting all products:", error);
      });
  };

  const sendFormEntry = (data) => {
    fetch(
      "https://crudcrud.com/api/f2ee70ab5fe845cfbbdd228a0d254d5e/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data added", data);
      })
      .catch((error) => {
        console.log("error in posting product entry:", error);
      });
  };

  return (
    <div className="App">
      <CartContextProvider>
        <CartButton handleCartOpen={handleCartOpen} count={count}/>
        {isCartOpen && (
          <CartList
            onClose={handleCartClose}
            cartList={cartList}
            placeOrder={placeOrder}
            tPrice={tPrice}
          />
        )}
        <ShoeForm sendFormEntry={sendFormEntry} />
        <ProductList productList={productList} />
      </CartContextProvider>
    </div>
  );
}

export default App;

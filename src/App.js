import "./App.css";
import ShoeForm from "./product/ShoeForm";
import CartContextProvider from "./context/CartContextProvider";
import ProductList from "./product/ProductList";
import CartList from "./cart/CartList";
import { useContext, useState } from "react";
import CartContext from "./context/CartContext";
import CartButton from "./cart/CartButton";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  const cntxt = useContext(CartContext);
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <div className="App">
      <CartContextProvider>
        <CartButton handleCartOpen={handleCartOpen} />
        {isCartOpen && <CartList onClose={handleCartClose} />}
        <ShoeForm />
        <ProductList />
      </CartContextProvider>
    </div>
  );
}

export default App;

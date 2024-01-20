import React, { useContext, useState } from "react";
import "./ShoeForm.css";
import CartContext from "../context/CartContext";

const ShoeForm = ({ sendFormEntry }) => {
  const [shoeName, setShoeName] = useState("");
  const [shoeDesc, setShoeDesc] = useState("");
  const [shoePrice, setShoePrice] = useState("");
  const [sSizeQty, setSSizeQty] = useState(0);
  const [lSizeQty, setLSizeQty] = useState(0);
  const [mSizeQty, setMSizeQty] = useState(0);
  // const cntxt = useContext(CartContext);

  const handleNameChange = (e) => {
    setShoeName(e.target.value);
  };

  const handleDescChange = (e) => {
    setShoeDesc(e.target.value);
  };

  const handlePriceChange = (e) => {
    setShoePrice(e.target.value);
  };

  const handleSQtyChange = (e) => {
    setSSizeQty(e.target.value);
  };

  const handleMQtyChange = (e) => {
    setMSizeQty(e.target.value);
  };

  const handleLQtyChange = (e) => {
    setLSizeQty(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      shoeName: shoeName,
      shoeDesc: shoeDesc,
      shoePrice: shoePrice,
      sSizeQty: sSizeQty,
      mSizeQty: mSizeQty,
      lSizeQty: lSizeQty,
      id: Math.random(),
    };
    sendFormEntry(data);
    setShoeName("");
    setShoeDesc("");
    setShoePrice("");
    setLSizeQty("");
    setSSizeQty("");
    setMSizeQty("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} id="form">
        <div className="container">
          <div className="labelInput">
            <label>Shoe Name</label>
            <input type="text" value={shoeName} onChange={handleNameChange} />
          </div>
          <div className="labelInput">
            <label>Description</label>
            <input type="text" value={shoeDesc} onChange={handleDescChange} />
          </div>
          <div className="labelInput">
            <label>Price</label>
            <input
              type="number"
              value={shoePrice}
              min="0"
              onChange={handlePriceChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="labelInput">
            <label>S</label>
            <input
              className="size-input"
              type="number"
              min="0"
              value={sSizeQty}
              onChange={handleSQtyChange}
            />
          </div>
          <div className="labelInput">
            <label>L</label>
            <input
              className="size-input"
              type="number"
              min="0"
              value={lSizeQty}
              onChange={handleLQtyChange}
            />
          </div>
          <div className="labelInput">
            <label>M</label>
            <input
              className="size-input"
              type="number"
              min="0"
              value={mSizeQty}
              onChange={handleMQtyChange}
            />
          </div>
        </div>
        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default ShoeForm;

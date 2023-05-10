import React, { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch("products.json")
      .then(res => res.json())
      .then(data=>setProducts(data))
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Product is coming :{products.length }</h3>
      </div>
      <div className="cart-container">
        <h2>cart also</h2>
      </div>
    </div>
  );
};

export default Shop;

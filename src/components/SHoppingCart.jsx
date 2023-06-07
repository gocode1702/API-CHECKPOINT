import React from "react";
import ProductInCart from "./ProductInCart";

export default function Cart({ data }) {
  return (
    <div className="container">
      {data.map((e) => (
        <ProductInCart details={e} key={key} />
      ))}
      <h4> Total: {data.reduce((tot, e) => e.price * e.qte + tot, 0)}</h4>
    </div>
  );
}

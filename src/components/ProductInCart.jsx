import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProduct, UpdateProduct } from "./redux/Action";

const ProductInCart = ({ details }) => {
  const btn = {
    backgroundColor: "white",
    color: "black",
    border: "none",
  };
  const dispatch = useDispatch;
  return (
    <div className="row mt-4">
      <img className="col-2" src={details.image} />
      <h4 className="col-3" style={{ fontSize: "1rem" }}>
        {" "}
        {details.title}
      </h4>
      <span className="col-3">
        <button
          onClick={() => dispatch(UpdateProduct({ id: details.id, signe: 1 }))}
          style={btn}
        >
          +
        </button>
        {details.qte}
        <button
          onClick={() => {
            details.qte > 0
              ? dispatch(UpdateProduct({ id: details.id, signe: -1 }))
              : alert("you can't");
          }}
          style={btn}
        >
          -
        </button>
      </span>
      <span className="col-3">
        <button onClick={() => dispatch(DeleteProduct(details.id))} style={btn}>
          delete
        </button>
      </span>
    </div>
  );
};

export default ProductInCart;

import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { AddProduct } from "./redux/Action";
import { useDispatch } from "react-redux";

export default function Product({ details }) {
  const dispatch = useDispatch();
  const [text, setText] = useState(false);
  const data = useSelector((state) => state);

  const HandleDispatch = (details) => {
    data.Card.find((el) => el.id === details.id)
      ? dispatch(UpdateProduct({ id: details.id, signe: 1 }))
      : dispatch(AddProduct(details));
    alert("Product added to cart");
  };

  return (
    <div
      className="col-3 mr-3 mt-4"
      style={{
        width: "30vw",
        height: "80vh",
        marginBottom: "2rem",
      }}
    >
      <Card>
        <Card.Img
          style={{
            width: "30vw",
          }}
          src={details.image}
        />
        <Card.Body>
          <Card.Title>{details.title.slice(details.image(0, 20))}</Card.Title>
          <Card.Text
            style={{
              fontSize: ".5rem",
            }}
          >
            {text ? details.description : details.description.slice(0, 100)}
            <p onClick={() => setText(true)} style={{ fontWeight: 500 }}></p>
          </Card.Text>
          <Card.Text>{details.price} DT</Card.Text>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: ".5px solid black",
              borderRaduis: "1rem",
              width: "50%",
            }}
          >
            {" "}
            add to card{" "}
          </button>
          <button
            style={{
              backgroundColor: "black",
              color: "black",
              border: ".5px solid black",
              borderRaduis: "1rem",
              width: "50%",
            }}
          >
            {" "}
            add to card{" "}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

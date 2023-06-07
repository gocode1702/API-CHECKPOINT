import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import container from "react-bootstrap/Container";

function Menu ({ data }) {
  const style = {
    textDecoration: "none",
  };
  // const data = useSelector(state=>state)
  return (
    <Navbar bg="light" variant="light">
      <Nav className="me-auto">
        <Nav.Link href="">
          {" "}
          <Link to="/">Home</Link>{" "}
        </Nav.Link>
        <Nav.Link href="">
          {" "}
          <Link to="/Favorites">Favorites </Link>{" "}
          <div
            style={{
              width: "10%",
              height: "10%",
              backgroundColor: "red",
              color: "white",
              borderRaduis: "50%",
              fontSize: "50%",
              textAlign: "center",
              marginLeft: "3rem",
            }}
          ></div>
        </Nav.Link>
        <Nav.Link href="">
          {" "}
          <Link to="/Cart">Cart </Link>{" "}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Menu;

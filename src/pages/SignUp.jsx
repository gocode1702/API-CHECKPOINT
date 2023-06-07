import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"
import "./SignUp.css";

function SignUp({ setLogin }) {
  const API = "http://localhost:3000/users";
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ email: "", username: "" });
  const handleChange = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    await axios
      .post(API, {
        id: Date.now(),
        ...formInput,
      })
      .then((es) => {
        console.log(res);
        setLogin(prev=>!prev)
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label > Email address</Form.Label>
          <Form.Control
            onChange={() => handleChange(event)}
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={() => handleChange(event)}
            name="username"
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          onClick={(e) => handleSignUp(e)}
          variant="primary"
          type="submit"
           
        >
          {/*  <Button onClick={(e)=>{e.preventDefault();console.log(formInput)}}variant="p
           * rimary" type="submit">
           */}
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;

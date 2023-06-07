import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import "./Login.css"


function Login({users, setIsLoggedIn}) {

    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({email: "", username: ""});

    const handleChange = (e) => {
        setFormInput((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };
    const nav = () => {
        setIsLoggedIn(true);
        navigate("/Home1")
    }
    const handleLogin = (e) => {
        e.preventDefault();
        users.find(e => (e.email == formInput.email) && (e.name == formInput.username))
       ? nav() : alert("user not found")
    }
    return (
      <div class="container-fluid">
       
        <Form id='login' className="sign-box enters" method="post">
            <div class="sign-avatar">
                    <img src="https://i.imgur.com/p1XqpVg.png" alt=""/>
                </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
          <button onClick={(e) => handleLogin(e)} variant="primary">
            Submit
          </button>
          <Form.Text>
            Don't have an account :<Link to="/SignUp">SignUp</Link>
          </Form.Text>
        </Form>
      </div>
    );
}

export default Login;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./App.css";
import {  BrowserRouter ,Routes, Route } from "react-router-dom";
// Layout API
import Home1 from "./pages/Home1";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Layout Redux
// import Home from "./components/Home";
// import Product from "./components/Product";
// import Favorites from "./components/Favorites";
// import Cart from "./components/SHoppingCart";
// import Menu from "./components/Navbar";



function App() {
  const[IsLoggedIn ,setIsLoggedIn ]=useState(false)
  const [users , setUsers]= useState (null)
  const API ="http://localhost:3000/users"
  const[login,setLogin]=useState(false)
  useEffect(() => {
    const fetchData = async () =>
      await axios
        .get(API)
        .then((resp) => setUsers(resp.data))
        .catch((err) => console.log(err));
    fetchData();
  }, [login]);

  //  const data = useSelector((state) => state);
  //  const [count, setCount] = useState(0);
  //  const [text, setText] = useState(false);

  return (
    <div className="App">
      {/* {console.log(users)} */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/Home1" element={<Home1 IsLoggedIn={IsLoggedIn} />} />
          <Route path="/SignUp" element={<SignUp setLogin={setLogin} />} />

          {/* <Menu data={data} />
        <Route path="/Home" element={<Home data={data} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart data={data.Cart} />} />
        <Route path="/:name" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// get to get data
// put update data
// post add data
// Delete delete data

import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";
import { Link, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav className="gap-12 flex items-center justify-center text-2xl bg-pink-200">
        <Link to={"/"}> Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/products"}>Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;

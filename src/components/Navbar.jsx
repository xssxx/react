import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-amber-100 h-16 sticky top-0 z-10">
      <div className="text-xl font-bold">
        <h1>Hello</h1>
      </div>
      <ul className="flex flex-row text-lg cursor-pointer">
        <Link to="/">
          <li className="link">Home</li>
        </Link>
        <Link to="/login">
          <li className="link">Login</li>
        </Link>
        <Link to="/register">
          <li className="link">Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

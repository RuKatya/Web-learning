import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/">Web-learning</Link>
      <div className="navBar__links">
        <Link to="html">HTML</Link>
        <Link to="css">CSS </Link>
        <Link to="js"> JAVASCRIPT </Link>
      </div>
    </nav>
  );
}

export default NavBar;

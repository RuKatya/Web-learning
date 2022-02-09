import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footerBar">
      <div className="footerBar__links">
        <Link to="html">HTML</Link>
        <Link to="css">CSS </Link>
        <Link to="js"> JAVASCRIPT </Link>
      </div>
    </nav>
  );
}

export default Footer;

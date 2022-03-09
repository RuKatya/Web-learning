import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footerBar">
      <div className="footerBar__links">
        <Link to="html">HTML</Link>
        <Link to="css">CSS </Link>
        <Link to="Javascript"> JavaScript </Link>
      </div>
      <div className="footerBar__createdBy">
        Created by
        <a href="https://www.linkedin.com/in/katya-rukosuev/"> Katya Ru</a>
      </div>
    </nav>
  );
}

export default Footer;

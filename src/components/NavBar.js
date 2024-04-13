import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <p>🕹️ Joystick Junction</p>
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Home
      </Link>
      <Link to="/new" style={{ textDecoration: "none", color: "inherit" }}>
        Create a Post
      </Link>
    </div>
  );
};

export default Navbar;

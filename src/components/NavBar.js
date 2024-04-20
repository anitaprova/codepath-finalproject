import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import Search from "./Search";

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <div className="navbar">
      <p>🕹️ Joystick Junction</p>
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        Home
      </Link>
      <input
        id="search"
        name="search"
        className="search"
        type="text"
        placeholder="Search.."
        onChange={handleSearch}
      />
      <Link to="/new" style={{ textDecoration: "none", color: "inherit" }}>
        Create a Post
      </Link>
    </div>
  );
};

export default Navbar;

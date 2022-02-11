import React from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = () => {
  return (
    <header className="container">
      <h3>Gatsby Rocks</h3>
      <Link
        to="/skills"
        style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}
      >
        Skills
      </Link>
    </header>
  );
};

export default Header;

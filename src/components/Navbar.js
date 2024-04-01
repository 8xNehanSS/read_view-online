import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src="./images/logo.png" alt="logo" />
      <Link to="/">
        <h1>Read View - Online</h1>
      </Link>
      <div className="nav--right">
        <Link to="/login">
          <div>
            <h3 className="link--normal">Login</h3>
          </div>
        </Link>
        <Link to="/signup">
          <div>
            <h3 className="link--normal">Sign Up</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

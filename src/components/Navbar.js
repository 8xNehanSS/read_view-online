import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img src="./images/logo.png" alt="logo" />
      <h1>Read View - Online</h1>
      <div className="nav--right">
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <h3>Sign Up</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

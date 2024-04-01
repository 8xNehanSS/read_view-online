import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <h1>Login</h1>
        <h1>STILL UNDER DEVELOPMENT!!</h1>
        <form className="login--form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;

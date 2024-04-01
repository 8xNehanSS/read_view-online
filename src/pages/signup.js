import React from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup">
        <h1>Signup</h1>
        <h1>STILL UNDER DEVELOPMENT!!</h1>
        <form className="signup--form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
};

export default Signup;

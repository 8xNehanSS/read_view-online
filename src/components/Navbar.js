import React from "react";

const Navbar = (()=> {
    return (
        <nav>
            <img src='./images/logo.png' alt="logo" />
            <h1>Read View - Online</h1>
            <div className="nav--right">
                <h3>Login</h3>
                <h3>Sign Up</h3>
            </div>
        </nav>
    )
})

export default Navbar;
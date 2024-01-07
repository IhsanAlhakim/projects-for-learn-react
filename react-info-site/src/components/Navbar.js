import React from "react";
import reactLogo from "../images/react-logo.png";

function Navbar() {
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <img src={reactLogo} alt="React Logo" className="nav--icon"/>
                    <h1 className="nav--logo_text">ReactFacts</h1>
                </div>
                <h2 className="nav--title">React Course - Project 1</h2>
            </nav>
        </header>
    )
}

export default Navbar;
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">

                <div className="logo">
                    <Logo />
                </div>

                <div className={`nav-elements`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Logo = () => (
    <h1>MADAD</h1>
);

export default Navbar;
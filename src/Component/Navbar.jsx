import React from "react"
import "../Style/Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
    return (

        <div class="main">

            <div className="left">Vest</div>
            <div className="right">
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
                <Link to="project">Project</Link>
                <Link to="wedo">What We Do</Link>
                <Link to="contact">Contact Us</Link>

                <button>GET A QUOTE</button>
            </div>
        </div>
    );
};
export default Navbar;
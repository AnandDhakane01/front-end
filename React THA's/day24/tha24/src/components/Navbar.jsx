import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/about">About</Link></li>
                <li><Link className="links" to="/profile">Profile</Link></li>
                <li><Link className="links" to="/dashboard">Dashboard</Link></li>
           </ul>
        </div>
    );
}
 
export default Navbar;
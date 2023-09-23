import React from 'react';
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom/client';


function Nav() {
    return (
        <div id="navbar">
            <Link to="/">Dashboard</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/network">Network</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Nav;
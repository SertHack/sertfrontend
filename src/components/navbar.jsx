import React from 'react';
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import logo from '../Images/SertLogoReduced.svg'
import css from '../css/navbar.css'

function Nav() {
    return (
        <div class="navbar " id="navbar">
            <div class ="navbar-brand" >
                <img class="navbar-item" src={logo} width="100" height="100"></img>
            </div>
            <Link to="/explore">Explore</Link>
            <Link to="/network">Network</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Nav;
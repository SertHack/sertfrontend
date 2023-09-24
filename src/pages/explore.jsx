import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"

function Explore() {
    return (
    <div id="explore">
        <Navbar></Navbar>
        <p>Explore Page</p>
        <Footer></Footer>
    </div>
    );
}

export default Explore;
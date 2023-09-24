import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"

import Navbar from "../components/navbar.jsx"

function Dashboard() {
    return (
    <div id="dashboard">
        <Navbar></Navbar>
        <p>Dashboard Page</p>
        <Footer></Footer>
    </div>
    );
}

export default Dashboard;
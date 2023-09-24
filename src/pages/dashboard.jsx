import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"
import Navbar from "../components/navbar.jsx"

function Dashboard() {
    return (
    <div id="dashboard">
        <Navbar></Navbar>
        <h1>Dashboard</h1>
        <div class = "column has-background-black">
            <p> </p>
        </div>
        <div class = "column has-background-black">
            <p> </p>
        </div>
        <div class = "column has-background-black">
            <p> </p>
        </div>
        <div class = "column has-background-black">
            <p> </p>
        </div>
        <div class = "column has-background-black">
            <h1>sert</h1>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default Dashboard;
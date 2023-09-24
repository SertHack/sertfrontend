import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"
import Navbar from "../components/navbar.jsx"
import profile from '../Images/Profile.jpeg'
import css from '../css/dashboard.css'
import network from '../Images/network.jpeg'

function Dashboard() {
    return (
    <div id="dashboard">
        <Navbar></Navbar>
        <h1 class = "title title-is-1 has-text-white ml-6 pl-2">Dashboard</h1>
        <div class ="tile is-parent">
            <div class="tile is-vertical ml-6 pl-6 pt-6 has-background-black is-2">
                <h1 class = "title title-is-1 has-text-white">Friends</h1>
                <img src = {profile} width="100" height="10"></img>
                <img src = {profile} width="100" height="10" class = "pt-3 pb-5"></img>
            </div>
            <div class="tile ml-6 mt-3 pl-5 has-background-black is-5">
                <h1 class = "title title-is-1 ml-2 has-text-white">Network</h1>
                <img src = {network} width="900" height="10" class = "pt-3 pb-5"></img>
            </div>

        </div>

        <Footer></Footer>
    </div>
    );
}

export default Dashboard;
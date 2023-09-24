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
        <h1 className="title title-is-1 has-text-white ml-6 pl-2">Dashboard</h1>
            <div className="tile is-ancestor is-12">
                <div className="tile is-4 is-parent is-vertical">
                    <div className="tile is-child">
                        <h1 className="title title-is-1 has-text-white"><a href='http://localhost:3000/profile'>Friends</a></h1>
                        <p>Friend 1</p>
                        <p>Friend 2</p>
                    </div>

                    <div className="tile is-child">
                        <h1 className="title title-is-1 has-text-white" id="sert"><a href='http://localhost:3000/network'>Network</a></h1>
                        <img class="navbar-item " src={network} width="400" height="100" ></img>
                    </div>

                </div>
                <div className="tile is-parent is-8">
                    <div className="tile is-child">
                        <h1 className="title title-is-1 has-text-white" id="jobs" href='jobs.jsx'><a href='http://localhost:3000/jobs'>New Jobs</a></h1>
                    </div>
                </div>
            </div>

        <Footer></Footer>
    </div>
    );
}

export default Dashboard;
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"
import Navbar from "../components/navbar.jsx"
import profile from '../Images/Profile.jpeg'
import css from '../css/dashboard.css'
import job from '../css/jobs.css'
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
                        <p>Sameer Chawla</p>
                        <p>Joseph Godoy</p>
                    </div>

                    <div className="tile is-child">
                        <h1 className="title title-is-1 has-text-white" id="sert"><a href='http://localhost:3000/network'>Network</a></h1>
                        <img class="navbar-item " src={network} width="400" height="100" ></img>
                    </div>

                </div>
                <div className="tile is-parent is-8">
                    <div className="tile is-child">
                        <h1 className="title title-is-1 has-text-white" id="jobs" href='jobs.jsx'><a href='http://localhost:3000/jobs'>New Jobs</a></h1>
                        <div class="job">
                            <img src="https://logo.clearbit.com/troweprice.com" alt="Company logo" />
                            <h3 class="job-title has-text-link">Financial Analysis and Planning Internship</h3>
                                <div class="details has-text-white">
                    Analyze, forecast, and develop reports of financial and non-financial trends.
                    Support the corporation’s internal end-to-end accounting processes and research
                    required to transform data into information for reporting purposes.
                </div>
                <a href="https://troweprice.wd5.myworkdayjobs.com/en-US/TRowePrice/jobs/details/XMLNAME-2024-Financial-Planning---Analysis-Internship-Program_67891?jobFamilyGroup=598b03f2169c105cec204d4eaf45e628" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">T. Rowe Price</span>
            </div>

                    </div>
                </div>
            </div>

        <Footer></Footer>
    </div>
    );
}

export default Dashboard;
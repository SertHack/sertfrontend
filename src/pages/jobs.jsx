import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from "../components/navbar";
import '../css/jobs.css'
import logo from '../Images/SertLogoReduced.svg'

function Jobs() {
    return (
    <body>
        <div id="jobs">
        <Navbar></Navbar>
        <p>Jobs Page</p>
    </div>
    <div class="jobs-list-container">
        <h2>5 Jobs</h2>

        <div class="jobs">

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer</h3>
                <div class="details has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                <a href="#" class="details-btn">More Details</a>
                <span class="open-positions">Position Open</span>
            </div>

        </div>
    </div>
    </body>
    );
}

export default Jobs;
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"
import Navbar from "../components/navbar";
import '../css/jobs.css'
import logo from '../Images/SertLogoReduced.svg'

//var elements = document.querySelectorAll(".job");
//const count = elements.length;

function Jobs() {
    return (
    <body>
        <div id="jobs">
        <Navbar></Navbar>
        <p>Jobs Page</p>
    </div>
    <div class="jobs-list-container">

        <h2>6 Jobs</h2>

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

        <div id="refresh">
            <a href="#" class="refresh-btn">Load more jobs</a>
        </div>

    </div>
    <div class="extension">
        <p>\n


        </p>
    </div>
    <Footer></Footer>
    </body>
    );
}

export default Jobs;
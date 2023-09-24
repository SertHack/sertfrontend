import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"

import usericon from '../Images/SertLogoReduced.svg'

function Explore() {
    return (
        <body>
        <div id="explore">
        <Navbar></Navbar>
        <p>Explore Page</p>
        <Footer></Footer>
    </div>
    <div class="explore-list-container">

        <h2>Recent Posts from your SertWork</h2>

        <div class="explore">

            <div class="post">
                <img src={usericon} alt="Company logo" />
                <h3 class="User has-text-link">Software Engineer</h3>
                <div class="caption has-text-white">
                    Responsible for designing, developing, and maintaining software
                    systems and applications for the company.
                </div>
                {/*<a href="#" class="details-btn">More Details</a>*/}
                <span class="post-date">2:34 PM 09/24/2023</span>
            </div>

        </div>

        <div id="refresh">
            <a href="#" class="refresh-btn">Load more posts</a>
        </div>

    </div>
    <div class="extension">
        <p>\n


        </p>
    </div>
    </body>
    );
}

export default Explore;
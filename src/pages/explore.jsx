import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"
import '../css/explore.css'

import usericon from '../Images/Profile.jpeg'
import postimage from '../Images/latao.jpeg'

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
                <a href="../pages/profile.jsx"><h3 class="User has-text-link">Jai Patel</h3></a>
                {/*<img src={postimage} alt="LaTao Hot Pot" />*/}
                <div class="caption has-text-white">
                    I just checked out this amazing restaurant called LaTao Hot Pot
                    in College Park, MD, right outside the University of Maryland
                    campus.
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
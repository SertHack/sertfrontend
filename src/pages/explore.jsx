import React from 'react';
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"
import '../css/explore.css'

function Explore() {
    return (
        <body>
        <div id="explore">
        <Navbar></Navbar>
    </div>
    <div class="explore-list-container">
        <h2>Recent Posts from your SertWork</h2>
        <div class="explore">

            <div class="post">
                <a href="../pages/profile.jsx"><h3 class="User has-text-link ml-3">Jai Patel</h3></a>
                <div class="caption has-text-white ml-3">
                    I just checked out this amazing restaurant called LaTao Hot Pot
                    in College Park, MD, right outside the University of Maryland
                    campus! Come support their business!
                </div>
                {/*<a href="#" class="details-btn">More Details</a>*/}
                <span class="post-date ml-4">2:34 PM 09/24/2023</span>
            </div>

            <div class="post">
                <a href="../pages/profile.jsx"><h3 class="User has-text-link ml-3">Sameer Chawla</h3></a>
                <div class="caption has-text-white ml-3 mr-4">
                    Over the summer, I completed an internship at Google as part of the
                    STEP internship program in California. I am so honored to have met
                    so many great people throughout this experience and I am proud to
                    announce that I have a job offer after I graduate!
                </div>
                {/*<a href="#" class="details-btn">More Details</a>*/}
                <span class="post-date ml-4">11:19 AM 09/22/2023</span>
            </div>

            <div class="post">
                <a href="../pages/profile.jsx"><h3 class="User has-text-link ml-3">Varun Rao</h3></a>
                <div class="caption has-text-white ml-3 mr-4">
                    Are you interested in building a Flask application to include on your
                    resume and project portfolio? If so, please Sertwork with me and I can help
                    you out for a small hourly fee.
                </div>
                {/*<a href="#" class="details-btn">More Details</a>*/}
                <span class="post-date ml-4">1:56 PM 09/21/2023</span>
            </div>

            <div class="post">
                <a href="../pages/profile.jsx"><h3 class="User has-text-link ml-3">Jai Patel</h3></a>
                <div class="caption has-text-white ml-3 mr-4">
                    To all CS and Computer Engineering majors: Northrop Grumman will
                    be at the Iribe Center from 1PM-3:30PM. If you are interested
                    in interviewing for an internship or entry-level position,
                    remember to bring your resume and ask the recruiters some questions!
                </div>
                {/*<a href="#" class="details-btn">More Details</a>*/}
                <span class="post-date ml-4">12:01 PM 09/19/2023</span>
            </div>

        </div>

        <div id="refresh">
            <a href="." class="refresh-btn" onclick="window.location.reload()">Load more posts</a>
        </div>

    </div>
    <div class="extension">
        <p>


        </p>
    </div>
    <Footer></Footer>
    </body>
    );
}

export default Explore;
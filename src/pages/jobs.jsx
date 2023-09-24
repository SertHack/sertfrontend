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
    </div>
    <div class="jobs-list-container">

        <h2>6 Jobs</h2>

        <div class="jobs">

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">STEP Internship</h3>
                <div class="details has-text-white">
                Provides interns with the opportunity to complete a challenging
                technical project where you will build solutions and gain exposure to
                immense scale and complexity.
                </div>
                <a href="https://buildyourfuture.withgoogle.com/programs/step" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">Google</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Software Engineer Internship</h3>
                <div class="details has-text-white">
                Designs, develops, documents, tests and debugs applications
                software and systems that contain logical and mathematical solutions.
                </div>
                <a href="https://www.northropgrumman.com/jobs/Administrative-Services/Intern/United-States-of-America/Utah/Roy/R10130974/2024-software-engineering-intern-roy-ut" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">Northrop Grumman</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Financial Analysis and Planning Internship</h3>
                <div class="details has-text-white">
                    Analyze, forecast, and develop reports of financial and non-financial trends.
                    Support the corporation’s internal end-to-end accounting processes and research
                    required to transform data into information for reporting purposes.
                </div>
                <a href="https://troweprice.wd5.myworkdayjobs.com/en-US/TRowePrice/jobs/details/XMLNAME-2024-Financial-Planning---Analysis-Internship-Program_67891?jobFamilyGroup=598b03f2169c105cec204d4eaf45e628" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">T. Rowe Price</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Systems Engineer Internship</h3>
                <div class="details has-text-white">
                Help develop and assess requirements, develop architectures, build and
                modify analysis tools, develop test plans and analyze test data, perform trade
                studies, requirements analysis, functional analysis, and performance assessment
                for strategic weapons systems development programs.
                </div>
                <a href="https://careers.jhuapl.edu/internships/jobs/53618?lang=en-us" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">Hopkins - APL</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Summer Games Internship</h3>
                <div class="details has-text-white">
                You’ll be paired with Booz Allen mentors and assigned to a cross-functional team
                where you’ll work together in a collaborative environment to bring your idea to
                life using techniques like design thinking, agile development, and rapid
                prototyping.
                </div>
                <a href="https://www.boozallen.com/careers/university-talent/booz-allen-summer-games.html" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">Booz Allen Hamilton</span>
            </div>

            <div class="job">
                <img src={logo} alt="Company logo" />
                <h3 class="job-title has-text-link">Full-Stack Developer</h3>
                <div class="details has-text-white">
                Provide support in the form of desktop application and web development to empower intelligence analysts
                who are trying to rapidly uncover trends of interest within sizeable informational databases.
                Developers will work in DOMEX environment with a wide variety of technologies
                including web services, client applications, plugins, and scripts.
                </div>
                <a href="https://ciphertechsolutions.applicantpro.com/jobs/3007332" target="_blank" class="details-btn">More Details</a>
                <span class="company-name">Cipher Tech Solutions</span>
            </div>

        </div>

        <div id="refresh">
            <a href="" class="refresh-btn">Load more jobs</a>
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
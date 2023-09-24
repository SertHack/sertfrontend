import React from 'react';
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"
import '../css/explore.css'
import usericon from '../Images/Profile.jpeg'
import postimage from '../Images/latao.jpeg'

const indeed = require('indeed-scraper');
const queryOptions = {
    host: 'www.indeed.com',
    query: 'Software',
    city: 'College Park, MD',
    radius: '25',
    level: 'entry_level',
    jobType: 'internship',
    maxAge: '7',
    sort: 'date',
    limit: 3
};

const jobData = []; // Create an empty array to store job data

indeed.query(queryOptions)
    .then(res => {
        // Iterate through the job listings and store relevant information in objects
        res.forEach((job, index) => {
            const jobInfo = {
                title: job.title,
                company: job.company,
                location: job.location,
                description: job.summary
            };
            jobData.push(jobInfo); // Add the jobInfo object to the jobData array
        });

        // Write jobData to a JSON file
        const jsonData = JSON.stringify(jobData, null, 2); // Convert jobData to a formatted JSON string
        fs.writeFileSync('job_postings.json', jsonData); // Write the JSON data to a file named 'job_postings.json'
        console.log('Job data has been saved to job_postings.json');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

function Job(queryOptions) {
    return (
        <body>
            
        </body>
    );
}

export default Job;
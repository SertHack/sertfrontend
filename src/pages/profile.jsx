import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "../components/footer"
import Navbar from "../components/navbar";

function Profile() {
    return (
    <div id="profile">
        <Navbar></Navbar>
        <p>Profile Page</p>
        <Footer></Footer>
    </div>
    );
}

export default Profile;
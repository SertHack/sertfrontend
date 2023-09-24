import React from 'react';
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer"
import '../css/explore.css';
import usericon from '../Images/Profile.jpeg'

function Post(data) {
    data = data.data;
    const time = new Date(data.time);
    return (
        <div class="post" style={{ marginBottom: '.8em'}}>
            <div class="post">
                <img src={usericon} style={{ width: '8%' }} alt="User Profile Picture" />
                <h3 class="User has-text-link">{data.name}</h3>
                <div class="caption" style={{ color: 'white' }}>
                    {data.caption}
                </div>
                {/* <span class="post-date">2:34 PM 09/24/2023</span> */}
                <span class="post-date">{`${time.getTime()}:${time.getMinutes()} PM ${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`}</span>
            </div>
        </div>
    );
}

export default Post;
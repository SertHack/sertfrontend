import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/signup.css'


function Signup() {

    const handleSubmit = (e) => {
        console.log(e)
    }
    return (
    <div id="signup">
        <div class="box signup-box">
            <p class="subtitle">SIGNUP</p>
            <form id="signup-form" onSubmit={handleSubmit}>
                <label class="slabel" for="username">Username:</label>
                <input class="input" type="text" name="username" placeholder="Username..."></input>
                <label class="slabel"  for="username">Password:</label>
                <input class="input" type="text" name="password" placeholder="Password..."></input>
                <label class="slabel" for="username">Validate Password:</label>
                <input class="input" type="text" name="password_val" placeholder="Validate Password..."></input>
            </form>
        </div>
    </div>
    );
}

export default Signup;
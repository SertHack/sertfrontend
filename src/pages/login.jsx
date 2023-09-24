import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import GithubIcon from "mdi-react/GithubIcon";
import "../css/login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username)
        console.log(password)

        let cs = await fetch(`/api/login?username=${username}&password=${password}`)


        if(cs.status === 500) {
            console.log("Error: 500")
        } else if(cs.status === 200) {
            let json = await cs.json()
            console.log(json);

            if(json.Redirect) {
                navigate(json.Redirect);
            }

        }

        console.log(cs)
        console.log(e)
    }

    return (
        <div id="login">
            <div class="box login-box">
                <p class="subtitle">LOGIN</p>
                <form id="signup-form" onSubmit={handleSubmit}>
                    <label class="slabel" for="username">Username:</label>
                    <input class="input" type="text" name="username" placeholder="Username..." value={username} onChange={(e) => { setUsername(e.target.value)}}></input>
                    <label class="slabel"  for="username">Password:</label>
                    <input class="input" type="password" name="password" placeholder="Password..." value={password} onChange={(e) => { setPassword(e.target.value)}}></input>
                    <button type="submit" class="button is-primary signup-btn">Submit</button>
                </form>
                <p id="signup-or">OR</p>
                <a
                 className="login-link"
                  href={`https://github.com/login/oauth/authorize`}
                >
                  <GithubIcon />
                  <span>Login with GitHub</span>
                </a>
            </div>
        </div>
    );
}

export default Login;
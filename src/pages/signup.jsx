import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import GithubIcon from "mdi-react/GithubIcon";
import '../css/signup.css'

//Data
import dataMajor from "../data/majors"


function Signup() {

    let [selected, setSelected] = useState("")
    let [gradYear, setGradYear] = useState("")

    const handleSubmit = (e) => {
        console.log(e)
    }

    const generateYears = () => {
        let year = new Date().getFullYear();
        let years = [];

        for(let i = 0; i < 4; i++) {
            year += 1;
            years.push(year)
        }

        return years;
    }



    let [years, setYears] = useState(generateYears());

    let majors = dataMajor.sort();

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
                <label class="slabel" for="year">Graduation Year:</label>
                <div id="class-select" class="select">
                    <select value={gradYear} onChange={(e) => { console.log(e.target.value); setGradYear(e.target.value);}}>
                        <option id="selectplaceh" value="" disabled selected >Graduation Year...</option>
                        {years.map(year => (
                            <option>{year}</option>
                        ))}
                    </select>
                </div>
                <label class="slabel" for="year">Major:</label>
                <div id="class-select" class="select">
                    <select value={selected} onChange={(e) => { console.log(e.target.value); setSelected(e.target.value);}}>
                        <option id="selectplaceh" value="" disabled selected>Major...</option>
                        {majors.map(major => (
                            <option value={major}>{major}</option>
                        ))}
                        <option value="other">Other</option>
                    </select>
                </div>
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

export default Signup;
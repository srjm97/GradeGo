import React, { useEffect, useState } from 'react'
import './login.css'
import Header from '../components/header'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Login() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isSignUpMode2, setIsSignUpMode2] = useState(false);
    const [ktuId, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState(false);

    useEffect(() => {
        setErrMsg(false);
    }, [ktuId, password])

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleSignUpClick2 = () => {
        setIsSignUpMode2(true);
    };

    const handleSignInClick2 = () => {
        setIsSignUpMode2(false);
    };

    async function validateUser(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:1337/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ktuId,
                password,
            }),
        });

        const data = await response.json();
        console.log(data);
        if (data.status === 'ok') {
            if (data.user === 'student'){
                window.location.href = '/dashboard'
            }
            else if(data.user === 'faculty'){
                window.location.href = '/facdashboard'
            }
        }
        else {
            if (data.error) {
                setErrMsg(true)
            }
            else {
                setErrMsg(true)
            }
        }
        console.log(data);
    }

    return (
        <div className="parent-div">
            <div className="header-div">
                <Header />
            </div>
            <p className={errMsg ? "errmsg" : "offscreen"}>Invalid username or password</p>
            <div className="overall">

                <div className={`container ${isSignUpMode ? "sign-up-mode" : ""} ${isSignUpMode2 ? "sign-up-mode2" : ""}`}>
                    <div class="signin-signup">
                        <form onSubmit={validateUser} class="sign-in-form ">
                            <h2 class="title">LOGIN</h2>
                            <div class="input-field">
                                <FontAwesomeIcon icon={faUser} className="fontawesome" />
                                <input value={ktuId} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" pattern="[A-Za-z0-9-]+" />
                            </div>
                            <div class="input-field">
                                <FontAwesomeIcon icon={faLock} className="fontawesome" />

                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                            </div>
                            {/* <Link to='/dashboard'> */}
                            <input type="submit" value="Login" class="btn" />
                            {/* </Link> */}

                            <p class="social-text">Forgot Password ?</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}


export default Login;
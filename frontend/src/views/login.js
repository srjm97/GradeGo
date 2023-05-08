import React, { useState } from 'react'
import './login.css'
import Header from '../components/header'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Login() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isSignUpMode2, setIsSignUpMode2] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    async function validateUser(event){
        // event.preventDefault();
        const response = await fetch("http://localhost:1337/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
    
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="parent-div">
            <div className="header-div">
                <Header />
            </div>
            <div className="overall">

                <div className={`container ${isSignUpMode ? "sign-up-mode" : ""} ${isSignUpMode2 ? "sign-up-mode2" : ""}`}>
                    <div class="signin-signup">
                        <form onSubmit={validateUser} class="sign-in-form ">
                            <h2 class="title">STUDENT LOGIN</h2>
                            <div class="input-field">
                                <FontAwesomeIcon icon={faUser} className="fontawesome" />
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" pattern="[A-Za-z0-9]+" />
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
                        <form  class="sign-up-form">
                            <h2 class="title">FACULTY LOGIN</h2>
                            <div class="input-field">
                                <FontAwesomeIcon icon={faUser} className='fontawesome' />
                                <input type="text" placeholder="Username" pattern="[A-Za-z0-9]+" />
                            </div>
                            <div class="input-field">
                                <FontAwesomeIcon icon={faLock} className='fontawesome' />
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" class="btn" />
                            <p class="social-text">Forgot Password ?</p>
                        </form>
                    </div>
                    <div class="panels-container">
                        <div class="panel left-panel">
                            <div class="content">
                                <h3>Are you a student ?</h3>
                                <p>Click here to continue to student login</p>
                                <button class="btn" id="sign-in-btn" onClick={handleSignInClick}>Student</button>
                            </div>
                            <img src='/playground_assets/student.svg' alt="" class="image left" />
                        </div>
                        <div class="panel right-panel">
                            <div class="content">
                                <h3>Are you a faculty member ?</h3>
                                <p>Click here to continue to faculty login</p>
                                <button class="btn" id="sign-up-btn" onClick={handleSignUpClick}>Faculty</button>
                            </div>
                            <img src='/playground_assets/faculty.png' alt="" class="image right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}


export default Login;
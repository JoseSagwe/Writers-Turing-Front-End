import React, {useState} from "react";
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const[action, setAction] = useState("Sign Up");

    return (
        <div className="login-container">
            <div className="login-header">
                <div className="login-text">{action}</div>
                <div className="login-underline"></div>
            </div>
            <div className="login-inputs">
                {action==="Login"?<div></div>:<div className="login-input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="First Name" />
                </div>}
                {action==="Login"?<div></div>:<div className="login-input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Last Name" />
                </div>}
                <div className="login-input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                {action==="Login"?<div></div>:<div className="login-input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Phone Number" />
                </div>}
                <div className="login-input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="login-forgot-password">Forgot Password? <span>Click Here!</span></div>}
            <div className="login-submit-container">
                <div className={action==="Login"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
                <div className={action==="Sign Up"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Login")}}> Login</div>
            </div>
        </div>
    )
}

export default LoginSignup;
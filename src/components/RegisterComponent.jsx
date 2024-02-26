import React, { useState } from "react";
import { RegisterAPI, GoogleSignInApi } from "../api/AuthApi";
import LinkedinLogo from "../assets/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
// import {navigate} from "../helpers/useNavigate";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import GoogleButton from 'react-google-button';

export default function RegisterComponent() {
    let navigate = useNavigate();
    const [credentails, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await RegisterAPI(credentails.email, credentails.password);
            toast.success("Account created");
            // localStorage.setItem("userEmail", res.user.email);
            navigate("/home");
        } catch (err) {
            console.log(err);
            toast.error("Cannot create your account");
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInApi();
        console.log(response);
        navigate("/home");
    }

    return (
        <div className="login-wrapper">
            <img src={LinkedinLogo} className="linkedinLogo" />

            <div className="login-wrapper-inner">
                <h1 className="heading">Make the most of your proffesional life</h1>

                <div className="auth-inputs">
                    <input
                        onChange={(event) =>
                            setCredentials({ ...credentails, email: event.target.value })
                        }
                        type="email"
                        className="common-input"
                        placeholder="Email or Phone number"
                    />
                    <input
                        onChange={(event) =>
                            setCredentials({ ...credentails, password: event.target.value })
                        }
                        type="password"
                        className="common-input"
                        placeholder="Password (6 or more characters)"
                    />
                </div>
                <button onClick={login} className="login-btn">
                    Agree & Join
                </button>
            </div>
            <hr className="hr-text" data-content="or" />
            <div className="google-btn-container">
                <GoogleButton
                    onClick={googleSignIn}
                />
                <p className="go-to-signup">
                    Already in LinkedIn?{" "}
                    <span className="join-now" onClick={() => navigate("/")}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
}

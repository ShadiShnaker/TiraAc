import React, { useState, useEffect } from "react";
import "../Styles/Login-Form-Dark.css";
import "../Styles/bootstrap.min.css";

export default function LogIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <section
                className="rounded login-dark"
                style={{
                    paddingTop: "800px",
                    background: "rgba(0,0,0,0)",
                    height: "100%",
                }}
            >
                <form
                    style={{
                        borderRadius: "7px",
                        borderWidth: "0px",
                        background:
                            "linear-gradient(rgba(52,58,64,0.8), rgba(52,58,64,0.1))",
                    }}
                >
                    <h2 className="visually-hidden">Login Form</h2>
                    <span className="section-heading-upper">
                        <div className="text-center intro-text rounded">
                            <h2>
                                <span
                                    style={{
                                        fontFamily: "Raleway, sans-serif",
                                    }}
                                >
                                    Log In
                                </span>
                            </h2>
                        </div>
                    </span>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            onChange={(event) => handleChangeEmail(event)}
                            type="email"
                            name="email"
                            placeholder="Email"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            onChange={(event) => handleChangePassword(event)}
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            className="btn btn-primary d-block w-100"
                            onClick={() => props.submitLogIn(password, email)}
                            type="button"
                            style={{
                                fontFamily: "Raleway, sans-serif",
                                background: "rgb(47,123,211)",
                            }}
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

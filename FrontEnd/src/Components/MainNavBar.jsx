import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/bootstrap.min.css";
const axios = require("axios").default;

export default function MainNavBar(props) {
    const logout = async () => {
        let token = localStorage.getItem("token");
        try {
            await axios.post(
                "http://localhost:9000/auth/logOut",
                {},
                { headers: { Authorization: token } }
            );
        } catch (err) {}
        localStorage.clear();
        window.location.reload();
    };

    const isCurrentActivePage = (page) => {
        console.log(" current page is " + page);
        if (props.active === page) {
            return "rgb(255,255,255)";
        } else {
            return "rgb(114,168,231)";
        }
    };

    const getMemberPageLink = () => {
        if (props.isLoggedIn) {
            return (
                <li className="nav-item">
                    <Link to="/member" style={{ textDecorationLine: "none" }}>
                        <a
                            className="nav-link"
                            style={{ color: isCurrentActivePage("/member") }}
                        >
                            Member Page
                        </a>
                    </Link>
                </li>
            );
        }
    };

    return (
        <nav
            className="navbar navbar-dark navbar-expand-lg fixed-top py-lg-4"
            id="mainNav"
            style={{
                background:
                    "linear-gradient(90deg, rgba(52,58,64,0.2) 0%, var(--bs-gray-dark) 50%, rgba(52,58,64,0.2)), rgba(52,58,64,0)",
                color: "var(--bs-gray-dark)",
            }}
        >
            <div className="container">
                <a
                    className="navbar-brand text-uppercase d-lg-none text-expanded"
                    href="#"
                    style={{ color: "rgb(47,123,211)" }}
                >
                    Tira Academics
                </a>
                <button
                    data-bs-toggle="collapse"
                    className="navbar-toggler"
                    data-bs-target="#navbarResponsive"
                >
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link
                                to="/index"
                                style={{ textDecorationLine: "none" }}
                            >
                                <a
                                    className="nav-link"
                                    style={{
                                        color: isCurrentActivePage("/index"),
                                    }}
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/events"
                                style={{ textDecorationLine: "none" }}
                            >
                                <a
                                    className="nav-link"
                                    style={{
                                        color: isCurrentActivePage("/events"),
                                    }}
                                >
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="about.html"
                                style={{ textDecorationLine: "none" }}
                            >
                                <a
                                    className="nav-link"
                                    style={{ color: "rgb(114,168,231)" }}
                                >
                                    Archive
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" style={{ textDecorationLine: "none" }}>
                                <a
                                    className="nav-link"
                                    style={{ color: "rgb(114,168,231)" }}
                                >
                                    About us
                                </a>
                            </Link>
                        </li>
                        {getMemberPageLink()}
                        {props.isLoggedIn ? (
                            <li className="nav-item">
                                <Link
                                    to="/login"
                                    onClick={() => logout()}
                                    style={{ textDecorationLine: "none" }}
                                >
                                    <a
                                        className="nav-link"
                                        style={{
                                            color: isCurrentActivePage(
                                                "/login"
                                            ),
                                        }}
                                    >
                                        log out
                                    </a>
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    to="/login"
                                    style={{ textDecorationLine: "none" }}
                                >
                                    <a
                                        className="nav-link"
                                        style={{
                                            color: isCurrentActivePage(
                                                "/login"
                                            ),
                                        }}
                                    >
                                        member login
                                    </a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

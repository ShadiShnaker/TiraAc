import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/events_button.css";
import IMG from "../Images/IMG1.jpg";
import BG from "../Images/bg.jpg"

export default function Home(props) {
    return (
        <div style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+') top / cover', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", height: "100%", borderStyle: "none"}}>
            <h1
                className="text-center text-white d-none d-lg-block site-heading"
                style={{
                    marginTop: "0px",
                    paddingTop: "120px",
                    marginBottom: "40px",
                }}
            >
                <span
                    className="site-heading-upper mb-3"
                    style={{ color: "rgb(47,123,211)", marginTop: "0px" }}
                >
                    Welcome to&nbsp;
                </span>
                <span className="site-heading-lower">Tira academics</span>
            </h1>
            <section
                className="page-section clearfix"
                style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingTop: "20px",
                    paddingBottom: "60px",
                }}
            >
                <div className="container">
                    <div className="intro">
                        <img
                            className="img-fluid intro-img mb-3 mb-lg-0 rounded"
                            src={IMG}
                        />
                        <div className="text-center intro-text p-5 rounded bg-faded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">
                                    Welcome to
                                </span>
                                <span className="section-heading-lower">
                                    Tira
                                    <br />
                                    Academics
                                </span>
                            </h2>
                            <p className="mb-3" style={{ fontSize: "18px" }}>
                                description about our organization...
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </p>
                            <div className="mx-auto intro-button">
                                <a
                                    className="btn btn-primary d-inline-block mx-auto btn-xl"
                                    role="button"
                                    href="#"
                                    style={{
                                        background: "rgb(47,123,211)",
                                        borderStyle: "none",
                                        borderColor: "rgba(13,110,253,0)",
                                        fontSize: "15px",
                                    }}
                                >
                                    View upcoming events!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

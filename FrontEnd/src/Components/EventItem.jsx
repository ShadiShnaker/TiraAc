import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import "../Styles/bootstrap.min.css";
import IMG from "../Images/IMG1.jpg";

export default function EventItem(props) {
    return (
        <section
            className="d-xxl-flex justify-content-xxl-center page-section clearfix"
            style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingTop: "0px",
                paddingBottom: "60px",
            }}
        >
            <div
                className="container"
                style={{
                    margin: "0px",
                    marginRight: "120px",
                    marginLeft: "120px",
                    width: "1100px",
                    paddingTop: "20px",
                }}
            >
                <div className="intro">
                    <img
                        className="intro-img mb-3 mb-lg-0 rounded"
                        src={IMG}
                        style={{
                            width: "600px",
                            height: "310px",
                            marginTop: "0px",
                            padding: "0px",
                        }}
                    />
                    <div
                        className="text-center intro-text p-5 rounded bg-faded"
                        style={{
                            width: "530px",
                            height: "240px",
                            paddingRight: "48px",
                            marginTop: "0px",
                            paddingTop: "48px",
                            paddingBottom: "48px",
                        }}
                    >
                        <h2 className="section-heading mb-4">
                            <span
                                className="section-heading-upper"
                                style={{ marginTop: "-25px" }}
                            >
                                Event Name
                            </span>
                            <span
                                className="section-heading-upper"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "-16px",
                                }}
                            >
                                Event Date: 11.06.2143
                            </span>
                        </h2>
                        <p
                            className="mb-3"
                            style={{ fontSize: "18px", marginBottom: "16px" }}
                        >
                            short description about the event
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </p>
                        <div className="mx-auto intro-button">
                          
                            <Link
                                className="btn btn-primary d-inline-block mx-auto btn-xl"
                                role="button"
                                to="eventContent" target="_blank" rel="noopener noreferrer"
                                style={{
                                    background: "rgb(47,123,211)",
                                    borderStyle: "none",
                                    borderColor: "rgba(13,110,253,0)",
                                    fontSize: "15px",
                                    width: "236.2px",
                                    height: "50px",
                                    paddingTop: "15px",
                                    marginTop: "0px",
                                }}
                            >
                                View Event Details
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

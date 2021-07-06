import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import MeetingItem from "../Components/MeetingItem";
import BG from "../Images/bg.jpg";

export default function Events(props) {
    const [isAddMeetingOpen, SetIsAddMeetingOpen] = useState(false);
    const [MeetingType, setMeetingType] = useState("managers");



    const getAddMeeting = () => {
        if (isAddMeetingOpen) {
            return (
                <section
                    className="contact-clean"
                    style={{
                        background: "rgba(241,247,252,0)",
                        height: "400px",
                        paddingTop: "20px",
                    }}
                >
                    <form
                        style={{
                            paddingBottom: "30px",
                            paddingTop: "30px",
                            background:
                                "linear-gradient(var(--bs-gray-dark), rgba(255,255,255,0.2)), rgba(134,142,150,0)",
                            width: "500px",
                        }}
                    >
                        <h2
                            className="text-center"
                            style={{ color: "rgb(255,255,255)" }}
                        >
                            Create a New Meeting
                        </h2>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="Event Coordinator"
                                placeholder="Event Coordinator"
                                style={{
                                    marginTop: "10px",
                                    color: "rgb(80, 94, 108)",
                                }}
                            />
                            <input
                                className="form-control"
                                type="date"
                                style={{
                                    paddingTop: "6px",
                                    marginTop: "10px",
                                    color: "rgb(80, 94, 108)",
                                }}
                            />
                        </div>
                        <div
                            className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center mb-3"
                            style={{ marginBottom: "0px", height: "60px" }}
                        >
                            <div
                                className="dropdown d-xl-flex justify-content-xl-center"
                                style={{
                                    marginBottom: "15px",
                                    marginTop: "0px",
                                }}
                            >
                                <button
                                    className="btn dropdown-toggle"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    type="button"
                                    style={{
                                        background: "rgb(47,123,211)",
                                        color: "rgb(255,255,255)",
                                        height: "60px",
                                        width: "210px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px",
                                    }}
                                >
                                   {getMeetingType()}{" "}
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick={() => changeMeetingType("managers")} href="#">
                                        Managers Only
                                    </a>
                                    <a className="dropdown-item" onClick={() => changeMeetingType("managersAndVolunteers")} href="#">
                                        Managers + Volunteers
                                    </a>
                                </div>
                            </div>
                            <button
                                className="btn"
                                type="button"
                                style={{
                                    marginRight: "0px",
                                    marginLeft: "10px",
                                    background: "rgb(47,123,211)",
                                    color: "rgb(255,255,255)",
                                    height: "60px",
                                }}
                            >
                                Create Meeting
                            </button>
                        </div>
                    </form>
                </section>
            );
        }
    };

    const changeAddMeetingVisibility = () => {
        SetIsAddMeetingOpen(!isAddMeetingOpen);
    };

    const getMeetingType = () => {
        if (MeetingType === "managers"){
            return "Managers Only";
        } else {
            return "Managers + Volunteers";
        }
    }

    const getButtonTitle = () => {
        if (isAddMeetingOpen) {
            return "HIDE";
        } else {
            return "ADD A NEW MEETING";
        }
    };

    const changeMeetingType = (type) =>{
        setMeetingType(type);
    }

    return (
        <div
            style={{
                background:
                    "linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url(" +
                    BG +
                    ") center / cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: "100%",
                borderStyle: "none",
            }}
        >
            <section
                className="d-md-flex d-xl-flex flex-column align-items-md-center justify-content-xl-start align-items-xl-center"
                style={{
                    overflowX: "hidden",
                    overflowY: "auto",
                    height: "100%",
                    paddingTop: "180px",
                    width: "100%",
                }}
            >
                <button
                    className="btn"
                    onClick={() => changeAddMeetingVisibility()}
                    type="button"
                    style={{
                        marginRight: "0px",
                        marginLeft: "0px",
                        background: "rgb(47,123,211)",
                        color: "rgb(255,255,255)",
                        width: "300px",
                        marginBottom: "0px",
                    }}
                >
                    {getButtonTitle()}
                </button>

                {getAddMeeting()}
                <MeetingItem />
                <MeetingItem />
                {/* <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/>
            <MeetingItem/> */}
            </section>
        </div>
    );
}

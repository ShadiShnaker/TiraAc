import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import MeetingItem from "../Components/MeetingItem";
const axios = require("axios").default;

export default function EditMeeting(props) {

    const [meetingType, setMeetingType] = useState("managers");

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [coordinator, setCoordinator] = useState("");

    useEffect(() => {
        async function fetchEventContentData() {
          console.log("hello im component did mount 1!");
          let activeMeeting = localStorage.getItem( 'ActiveMeeting' );
            const res = await axios.get("http://localhost:9000/meetingContent", {
                params: { meetingId: activeMeeting },
            });
            setName(res.data.name);
            setDate(res.data.date);
            setCoordinator(res.data.coordinator);
            setMeetingType(res.data.meetingType);
            console.log("this is active meeting: " + activeMeeting);
        }
  
        fetchEventContentData();
    }, []);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeCoordinator = (event) => {
        setCoordinator(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const createNewMeeting = async () => {
        try {
            if (
                name !== "" &&
                date !== ""
            ) {
                const res = await axios.post(
                    "http://localhost:9000/createMeeting",
                    {
                        name: name,
                        coordinator: coordinator,
                        date: date,
                        meetingType: meetingType
                    }
                );
            }
            else {
              alert( "One of the inputed fields is empty!" );
            }
        } catch (error) {}
    };

    const getMeetingType = () => {
        if (meetingType === "managers"){
            return "Managers Only";
        } else {
            return "Managers + Volunteers";
        }
    }

    const changeMeetingType = (type) =>{
        setMeetingType(type);
    }

    return (
        <div
        style={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
        }}
        >
                <section
                    className="contact-clean"
                    style={{
                        background: "rgba(241,247,252,0)",
                        height: "400px",
                        marginTop: "50px",
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
                            Edit Meeting
                        </h2>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={(event) => handleChangeName(event)}
                                placeholder="Name"
                                value={name}
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="Event Coordinator"
                                placeholder="Meeting Coordinator"
                                onChange={(event) => handleChangeCoordinator(event)}
                                value={coordinator}
                                style={{
                                    marginTop: "10px",
                                    color: "rgb(80, 94, 108)",
                                }}
                            />
                            <input
                                className="form-control"
                                type="date"
                                onChange={(event) => handleChangeDate(event)}
                                value={date}
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
                                onClick={() => createNewMeeting()}
                                style={{
                                    marginRight: "0px",
                                    marginLeft: "10px",
                                    background: "rgb(47,123,211)",
                                    color: "rgb(255,255,255)",
                                    height: "60px",
                                }}
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </section>
        </div>
    );
}

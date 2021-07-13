import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import BG from "../Images/bg.jpg";
const axios = require("axios").default;

export default function EditEvent(props) {
    const [name, setName] = useState("");
    const [coordinator, setCoordinator] = useState("");
    const [date, setDate] = useState("");
    const [summery, setSummery] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeCoordinator = (event) => {
        setCoordinator(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const handleChangeSummery = (event) => {
        setSummery(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const createNewEvent = async () => {
        try {
            if (
                name !== "" &&
                date !== "" &&
                summery !== "" &&
                description !== ""
            ) {
                const res = await axios.patch(
                    "http://localhost:9000/EditEvent",
                    {
                        name: name,
                        coordinator: coordinator,
                        date: date,
                        summery: summery,
                        description: description,
                    }
                );
            }
            else {
              alert( "One of the inputed fields is empty!" );
            }
        } catch (error) {}
    };

    return (
        <div>
            <section
                className="contact-clean"
                style={{ background: "rgba(241,247,252,0)", height: "100%" }}
            >
                <form
                    style={{
                        marginTop: "40px",
                        paddingBottom: "30px",
                        paddingTop: "30px",
                        background:
                            "linear-gradient(var(--bs-gray-dark), rgba(255,255,255,0.2)), rgba(134,142,150,0)",
                    }}
                >
                    <h2
                        className="text-center"
                        style={{ color: "rgb(255,255,255)" }}
                    >
                        Edit Event
                    </h2>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => handleChangeName(event)}
                            name="name"
                            placeholder="Name"
                        />
                        <input
                            className="form-control"
                            type="text"
                            name="Event Coordinator"
                            onChange={(event) => handleChangeCoordinator(event)}
                            placeholder="Event Coordinator"
                            style={{
                                marginTop: "10px",
                                color: "rgb(80, 94, 108)",
                            }}
                        />
                        <input
                            className="form-control"
                            type="date"
                            onChange={(event) => handleChangeDate(event)}
                            style={{
                                paddingTop: "6px",
                                marginTop: "10px",
                                color: "rgb(80, 94, 108)",
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Summery"
                            onChange={(event) => handleChangeSummery(event)}
                            rows={10}
                            style={{ marginTop: "0px" }}
                            defaultValue={""}
                        />
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Full Description"
                            onChange={(event) => handleChangeDescription(event)}
                            rows={20}
                            style={{ height: "150px", marginTop: "10px" }}
                            defaultValue={""}
                        />
                    </div>
                    <div className="d-xl-flex justify-content-xl-center mb-3">
                        <button
                            className="btn"
                            type="button"
                            style={{
                                background: "rgb(47,123,211)",
                                borderColor: "rgb(52, 58, 64)",
                                borderTopColor: "rgb(52,",
                                borderRightColor: "58,",
                                borderBottomColor: "64)",
                                borderLeftColor: "58,",
                                color: "rgb(255,255,255)",
                            }}
                        >
                            UPLOAD PICTURE
                        </button>
                        <button
                            className="btn"
                            type="button"
                            onClick={() => createNewEvent()}
                            style={{
                                marginRight: "0px",
                                marginLeft: "30px",
                                background: "rgb(47,123,211)",
                                color: "rgb(255,255,255)",
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

import React, { useState, useEffect, useRef } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import BG from "../Images/bg.jpg";
const axios = require("axios").default;

export default function AddEvents(props) {
    const [name, setName] = useState("");
    const [coordinator, setCoordinator] = useState("");
    const [date, setDate] = useState("");
    const [summery, setSummery] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState(null)

    const inputFile = useRef(null);

    const onUploadFileClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };

    const uploadPicture = async (event) => {
        console.log("this is the picture: " + event.target.files[0].name);
        setImage(event.target.files[0])
        var w = window.open(URL.createObjectURL(event.target.files[0]));
    }

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
                var formData = new FormData();
                formData.append("image", image);

                const res = await axios.post(
                    "http://localhost:9000/createEvent",
                    {
                        name: name,
                        coordinator: coordinator,
                        date: date,
                        summery: summery,
                        description: description,
                        image: image
                    },
                    {
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    }
                );
            }
            else {
              alert( "One of the inputed fields is empty!" );
            }
        } catch (error) {}
    };

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
                        Create a New Event
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
                        <input type='file' id='file' accept="image/*" onChange={(event) => uploadPicture(event)} ref={inputFile} style={{display: 'none'}}/>
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
                            onClick={() => onUploadFileClick()}
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
                            ADD NEW EVENT
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

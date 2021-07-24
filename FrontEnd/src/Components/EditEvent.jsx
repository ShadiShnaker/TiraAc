import React, { useState, useEffect, useRef } from "react";
//import {Link} from 'react-router-dom';
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import BG from "../Images/bg.jpg";
const axios = require("axios").default;

export default function EditEvent(props) {
    const [name, setName] = useState("");
    const [coordinator, setCoordinator] = useState("");
    const [date, setDate] = useState("");
    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [eventId, setEventId] = useState("");
    const [img, setImg] = useState(null);
    const [imgToUpload, setImgToUpload] = useState("");

    const inputFile = useRef(null);

    const onUploadFileClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };

    const uploadPicture = async (event) => {
        console.log("this is the picture: " + event.target.files[0].name);
        setImgToUpload(event.target.files[0])
        setImg(event.target.files[0]);
    }

    const openImage = () => {
        window.open(img.src);
    }

    useEffect(() => {
        async function fetchEventContentData() {
            try {
            const urlSearchParams = new URLSearchParams(window.location.search);
            setEventId(urlSearchParams.get("eventId"));
            console.log("hello im component did mount 1!");
            const res = await axios.get("http://localhost:9000/event/eventContent", {
                params: { eventId: urlSearchParams.get("eventId") },
            });
            setName(res.data.name);
            setDate(res.data.date);
            setCoordinator(res.data.coordinator);
            setSummary(res.data.summary);
            setDescription(res.data.description);
           
            var image = new Image();
            var binaryData = [];
            binaryData.push(Buffer.from(res.data.img.data))
            var blob = new Blob(binaryData, {type: res.data.img.contentType});
            image.src = URL.createObjectURL(blob)
            image.name = image.src
            //setImgURL(URL.createObjectURL(image))
            setImg(image);
            setImgToUpload("not set");
            console.log("hello im component did mount 2!");
            } catch (err) {
                alert("Couldn't load event data!")
            }
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

    const handleChangeSummary = (event) => {
        setSummary(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const editEvent = async () => {
        try {
            if (
                name !== "" &&
                date !== "" &&
                summary !== "" &&
                description !== "" &&
                img !== null
            ) {
                var formData = new FormData();
                formData.append("image", imgToUpload);
                formData.append("name", name);
                formData.append("coordinator", coordinator);
                formData.append("summary", summary);
                formData.append("description",description);
                formData.append("date", date);
                formData.append("_id", eventId);

                const res = await axios.patch(
                    "http://localhost:9000/event/editEvent",
                    formData,
                    {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                         Authorization: localStorage.getItem("token")

                        }
                    }
                );
                console.log("this is immediately after editing event");
                window.location.replace("/events");
                console.log("this is slightly after editing event")
            }
            else {
              alert( "One of the inputed fields is empty!" );
            }
        } catch (error) {
            alert("Could not update the event!")
        }
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
                            value={name}
                        />
                        <input
                            className="form-control"
                            type="text"
                            name="Event Coordinator"
                            onChange={(event) => handleChangeCoordinator(event)}
                            placeholder="Event Coordinator"
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
                        <input type='file' id='file' accept="image/*" onChange={(event) => uploadPicture(event)} ref={inputFile} style={{display: 'none'}}/>
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Summary"
                            onChange={(event) => handleChangeSummary(event)}
                            rows={10}
                            style={{ marginTop: "0px" }}
                            defaultValue={""}
                            value={summary}
                        />
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Full Description"
                            onChange={(event) => handleChangeDescription(event)}
                            rows={20}
                            style={{ height: "150px", marginTop: "10px" }}
                            defaultValue={""}
                            value={description}
                        />
                        <h5><a href="#" style={{ marginTop: "10px", color: "white" }} onClick={() => openImage()}> Image file name: {img !== null ? img.name : "empty"} </a></h5>
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
                            onClick={() => editEvent()}
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

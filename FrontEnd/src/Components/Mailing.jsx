import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import BG from "../Images/bg.jpg";
const axios = require("axios").default;

export default function Mailing(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    const sendMailData = async () => {
        try {
            if (
                title !== "" &&
                content !== ""
            ) {
                const res = await axios.post(
                    "http://localhost:9000/mail",
                    {
                        title: title,
                        content: content
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    }
                );
                alert("Mail sent to all members!");
                window.location.reload();
            }
            else {
              alert( "One of the input fields is empty!" );
            }
        } catch (error) {
            alert("Could not send the email!");
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
                        marginTop: "120px",
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
                        Send EMail
                    </h2>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={(event) => handleChangeTitle(event)}
                            placeholder="Title"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Mail Content"
                            rows={20}
                            onChange={(event) => handleChangeContent(event)}
                            style={{ height: "150px", marginTop: "10px" }}
                            defaultValue={""}
                        />
                    </div>
                    <div className="d-xl-flex justify-content-xl-center mb-3">
                        <button
                            className="btn"
                            type="button"
                            onClick={() => sendMailData()}
                            style={{
                                background: "rgb(47,123,211)",
                                color: "rgb(255,255,255)",
                            }}
                        >
                            Send Mail
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

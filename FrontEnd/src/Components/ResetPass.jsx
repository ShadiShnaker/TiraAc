import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
const axios = require("axios").default;

export default function ResetPass(props) {
    const [password, setPassword] = useState("");

    const SubmitNewPass = async () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        try {
            if (password.length >= 6) {
                const res = await axios.post(
                    "http://localhost:9000/auth/resetPassword",
                    {
                        token: urlSearchParams.get("token"),
                        tokenId: urlSearchParams.get("tokenId"),
                        password,
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem("token"),
                        },
                    }
                );
                alert("Password changed!");
                window.location.replace("/index");
            } else {
                alert("Password must be at least 6 characters long!");
            }
        } catch (err) {
            alert("Password reset failed!");
        }
    };

    const handleChangePass = (event) => {
        setPassword(event.target.value);
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
                style={{
                    background: "rgba(241,247,252,0)",
                    height: "580px",
                    paddingTop: "20px",
                    marginTop: "40px",
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
                        Reset Password
                    </h2>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="password"
                            name="name"
                            onChange={(event) => handleChangePass(event)}
                            placeholder="New Password"
                        />
                    </div>

                    <div
                        className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center mb-3"
                        style={{ marginBottom: "0px", height: "60px" }}
                    >
                        <button
                            className="btn"
                            type="button"
                            onClick={() => SubmitNewPass()}
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

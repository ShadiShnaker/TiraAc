import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import SubNavBar from "./SubNavBar";
import MainNavBar from "./MainNavBar";
const axios = require("axios").default;

export default function EditMember(props) {
    const [memberType, setMemberType] = useState("volunteer");

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        async function fetchMemberData() {
          console.log("hello im component did mount 1!");
          let activeMemberPage = localStorage.getItem( 'ActiveMemberPage' );
          try{
            const res = await axios.get("http://localhost:9000/users/memberContent", {
                params: { memberId: activeMemberPage },
                headers: {
                    Authorization: localStorage.getItem("token")
                } 
            });
            setName(res.data.name);
            setId(res.data.id);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setDate(res.data.date);
            setMemberType(res.data.memberType);
            } catch (err) {
                alert("Could not get requested member info");
            }
        }
  
        fetchMemberData();
    }, []);

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeId = (event) => {
        setId(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    const EditMember = async () => {
        try {
            if (
                name !== "" &&
                id !== "" &&
                phone !== "" &&
                email !== "" &&
                date !== ""
            ) {
                let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (re.test(email)) {
                    let activeMemberPage = localStorage.getItem( 'ActiveMemberPage' );
                    const res = await axios.patch(
                        "http://localhost:9000/users/editMember",
                        {
                            _id: activeMemberPage,
                            name: name,
                            id: id,
                            phone: phone,
                            email: email,
                            date: date,
                            memberType: memberType
                        },
                        {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        }
                    );
                    alert("Updated Successfully!");
                    window.location.replace("/members")
                } else {
                    alert( "You must use a valid email!" );
                }
            }
            else {
              alert( "One or more of the input fields are empty!" );
            }
        } catch (error) {
            alert("Failed updating the requested member!");
        }
    };

    const getMemberType = () => {
        if (memberType === "volunteer"){
            return "Volunteer";
        } else {
            return "Manager";
        }
    }

    const changeMemberType = (type) =>{
        setMemberType(type);
    }

    return (
        <div style={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
        }}
        >
            <MainNavBar
            active={"/member"}
            isLoggedIn={props.isLoggedIn}
            isManager={props.isManager}
            />
            <SubNavBar
            active={"/members"}
            isLoggedIn={props.isLoggedIn}
            isManager={props.isManager}
            />
            <section
                    className="contact-clean"
                    style={{
                        background: "rgba(241,247,252,0)",
                        height: "580px",
                        paddingTop: "20px",
                        marginTop: "40px"
                    }}
                >
                    <form
                        style={{
                            paddingBottom: "30px",
                            paddingTop: "30px",
                            background:
                                "linear-gradient(var(--bs-gray-dark), rgba(255,255,255,0.2)), rgba(134,142,150,0)",
                            width: "500px"
                        }}
                    >
                        <h2
                            className="text-center"
                            style={{ color: "rgb(255,255,255)" }}
                        >
                            Edit Member
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
                                placeholder="ID"
                                onChange={(event) => handleChangeId(event)}
                                value={id}
                                style={{
                                    marginTop: "10px",
                                    color: "rgb(80, 94, 108)",
                                }}
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="Event Coordinator"
                                placeholder="Phone"
                                onChange={(event) => handleChangePhone(event)}
                                value={phone}
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
                                   {getMemberType()}{" "}
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick={() => changeMemberType("volunteer")} href="#">
                                        Volunteer
                                    </a>
                                    <a className="dropdown-item" onClick={() => changeMemberType("manager")} href="#">
                                        Manager
                                    </a>
                                </div>
                            </div>
                            <button
                                className="btn"
                                type="button"
                                onClick={() => EditMember()}
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


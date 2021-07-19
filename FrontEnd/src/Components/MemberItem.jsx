import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../Styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
const axios = require("axios").default;

export default function MemberItem(props) {

    const [modalShow, setModalShow] = useState(false)

    const deleteMember = async () => {
        try {
                const res = await axios.delete(
                    "http://localhost:9000/deleteMember",
                    {
                        id: ""
                    }
                );
        } catch (error) {}
        setModalShow(false)
    };

    const setActiveMember = () => {
      localStorage.setItem( 'ActiveMemberPage', props._id);
    }

  return (
    <div
      className="d-sm-flex d-md-flex d-xl-flex justify-content-evenly justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-xl-center align-items-xl-center"
      style={{ height: "60px", width: "100%" }}
    >
      <div
        className="d-flex justify-content-evenly"
        style={{ width: "70%", paddingTop: "6px", textAlign: "center" }}
      >
        <h4 style={{ width: "50%", color: "rgb(255,255,255)" }}>{props.name}</h4>
        <h4 style={{ width: "50%", color: "rgb(255,255,255)" }}>{props.memberType}</h4>
      </div>
      <div className="justify-content-evenly" style={{ width: "30%" }}>
        <Link
          to="editMember"
          role="button"
          className="btn"
          onClick={() => setActiveMember()}
          style={{
            marginRight: "0px",
            marginLeft: "30px",
            background: "rgb(47,123,211)",
            color: "rgb(255,255,255)",
            width: "60px",
            fontSize: "14px",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          Edit
        </Link>
        <button
          className="btn"
          type="button"
          onClick={() => setModalShow(true)}
          style={{
            marginRight: "0px",
            marginLeft: "30px",
            background: "rgb(47,123,211)",
            color: "rgb(255,255,255)",
            width: "60px",
            fontSize: "14px",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          Delete
        </button>
        <Modal
        show= {modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
                Delete Member
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
            Are you sure you want to delete the member ?
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <button 
            style={{
                background: "rgb(47,123,211)",
                 color: "rgb(255,255,255)",
            }} 
            className="btn" onClick={() => setModalShow(false)}>Close</button>
            <button
             style={{
                background: "rgb(47,123,211)",
                 color: "rgb(255,255,255)",
            }} 
             className="btn" onClick={() => deleteMember()}>Delete Member</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

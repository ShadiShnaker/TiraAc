import React, { useState, useEffect } from "react";
import "../Styles/bootstrap.min.css";
import IMG from "../Images/IMG1.jpg";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const axios = require("axios").default;


export default function EventContent(props) {
    const [modalShow, setModalShow] = useState(false)
    const [isManager, setIsManager] = useState(true);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [imgURL, setImgURL] = useState("");

    useEffect(() => {

      const flag = true
      const urlSearchParams = new URLSearchParams(window.location.search);
      async function fetchEventContentData() {
        console.log("hello im component did mount 1!");
        try{
          const res = await axios.get("http://localhost:9000/event/eventContent", {
            //tokenId: urlSearchParams.get("eventId"),
              params: { eventId:  urlSearchParams.get("eventId")},
          });
          setName(res.data.name);
          setDate(res.data.date);
          setDescription(res.data.description);
          var binaryData = [];
          binaryData.push(Buffer.from(res.data.img.data))
          setImgURL(URL.createObjectURL(new Blob(binaryData, {type: res.data.img.contentType})))
        }catch(err) {console.log(err)}
          console.log(img)
          console.log(name)
          console.log("hello im component did mount 2!");
      }
      
      fetchEventContentData(); 

  }, []);


    const deleteEvent = async () => {
      const urlSearchParams = new URLSearchParams(window.location.search);
        try {
                const res = await axios.delete(
                    "http://localhost:9000/event/deleteEvent",
                    {
                      params: { eventId:  urlSearchParams.get("eventId")},
                      headers: {
                        Authorization: localStorage.getItem("token")
                      }
                    }
                  
                );
                window.location.replace("/events")
        } catch (error) {console.log(error)}
        setModalShow(false)
    };

    const showManagerBtns = () => {
        if(isManager){
            return(
                <div >
        <Link
          to="editEvent"
          role="button"
          className="btn"
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
                Delete Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
            Are you sure you want to delete the event ?
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
             className="btn" onClick={() => deleteEvent()}>Delete Event</button>
          </Modal.Footer>
        </Modal>
        </div>
            )
        }
    }
  return (
    <div
      style={{
        overflowX: "hidden",
        overflowY: "auto",
        height: "100%",
      }}
    >
      <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
        {showManagerBtns()}
        <section
          className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-end justify-content-sm-center align-items-sm-end justify-content-md-center align-items-md-end justify-content-lg-center align-items-lg-end justify-content-xl-center align-items-xl-end justify-content-xxl-center align-items-xxl-end"
          style={{
            margin: "40px",
            background: "url(" + imgURL + ") center / cover no-repeat, #ffffff",
            height: "600px",
            borderRadius: "70px",
            width: "90%",
            boxShadow: "0px 0px 10px rgb(0,0,0)",
            marginBottom: "0px",
          }}
        >
          <h1
            className="d-xl-flex justify-content-xl-center align-items-xl-end"
            style={{
              color: "rgb(255,255,255)",
              fontSize: "70px",
              marginBottom: "30px",
              textShadow: "0px 0px 7px rgb(0,0,0)",
              background: "rgba(40,40,40,0.7)",
              marginTop: "0px",
              padding: "8px",
              paddingRight: "20px",
              paddingLeft: "20px",
              borderRadius: "50px",
              boxShadow: "0px 0px 20px rgb(0,0,0)",
              borderColor: "rgb(0,0,0)",
              textAlign: "center",
            }}
          >
            {name}
          </h1>
        </section>
        <section
          className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center align-items-end justify-content-sm-center align-items-sm-end justify-content-md-center align-items-md-end justify-content-lg-center align-items-lg-end justify-content-xl-center align-items-xl-end justify-content-xxl-center align-items-xxl-end"
          style={{
            margin: "40px",
            background: "rgb(222,222,222)",
            height: "420px",
            borderRadius: "70px",
            width: "90%",
            boxShadow: "0px 0px 10px rgb(0,0,0)",
          }}
        >
          <h4
            style={{
              height: "100%",
              marginBottom: "0px",
              paddingTop: "20px",
              width: "90%",
              textAlign: "right",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {date}<br/>{description}
          </h4>
        </section>
      </div>
    </div>
  );
}

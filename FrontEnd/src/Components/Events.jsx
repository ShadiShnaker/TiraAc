import React, { useState, useEffect } from 'react';
import "../Styles/bootstrap.min.css";
import EventItem from "../Components/EventItem";
import BG from "../Images/bg.jpg";



export default function Events(props){


    return(
        <div style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+') top / cover', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", height: "none", borderStyle: "none", paddingTop: "120px"}}>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </div>
    )
}
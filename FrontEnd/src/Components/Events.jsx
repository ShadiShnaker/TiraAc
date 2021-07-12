import React, { useState, useEffect } from 'react';
import "../Styles/bootstrap.min.css";
import EventItem from "../Components/EventItem";

export default function Events(props){


    return(
        <div
        style={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
        }}
        >
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </div>
    )
}
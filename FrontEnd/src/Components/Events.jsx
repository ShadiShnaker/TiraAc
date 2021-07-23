import React, { useState, useEffect } from 'react';
import "../Styles/bootstrap.min.css";
import EventItem from "../Components/EventItem";
const axios = require("axios").default;

export default function Events(props){
    const [events, setEvents] = useState([])


    useEffect(() => {
        async function fetchevents() {
          console.log("hello im component did mount 1!");
            let eventsarr = []
            const res = await axios.get("http://localhost:9000/event/allEvents");
            setEvents(res.data.allEvents);
        }
        
        fetchevents();
    }, []);


    return(
        <div
        style={{
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
        }}
        >
            {/* <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/> */}
            {events.map((x) => (
                    <EventItem
                    key={x._id}
                    id={x._id}
                    name={x.name}
                    date={x.date}
                    summary={x.summary}
                    description={x.description}
                    img = {x.img}
                    ></EventItem>
                ))}
        </div>
    )
}
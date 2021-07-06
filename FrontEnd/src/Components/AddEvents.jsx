import React, { useState, useEffect } from 'react';
import "../Styles/bootstrap.min.css";
import "../Styles/Form-Clean.css";
import EventItem from "./EventItem";
import BG from "../Images/bg.jpg";



export default function AddEvents(props){


    return(
        <div style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+') top / cover', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", height: "100%", borderStyle: "none"}}>
        <section className="contact-clean" style={{background: 'rgba(241,247,252,0)', height: '100%'}}>
        <form style={{marginTop:"120px", paddingBottom: '30px', paddingTop: '30px', background: 'linear-gradient(var(--bs-gray-dark), rgba(255,255,255,0.2)), rgba(134,142,150,0)'}}>
          <h2 className="text-center" style={{color: 'rgb(255,255,255)'}}>Create a New Event</h2>
          <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name" /><input className="form-control" type="text" name="Event Coordinator" placeholder="Event Coordinator" style={{marginTop: '10px', color: 'rgb(80, 94, 108)'}} /><input className="form-control" type="date" style={{paddingTop: '6px', marginTop: '10px', color: 'rgb(80, 94, 108)'}} /></div>
          <div className="mb-3"><textarea className="form-control" name="message" placeholder="Summery" rows={10} style={{marginTop: '0px'}} defaultValue={""} /><textarea className="form-control" name="message" placeholder="Full Description" rows={20} style={{height: '150px', marginTop: '10px'}} defaultValue={""} /></div>
          <div className="d-xl-flex justify-content-xl-center mb-3"><button className="btn" type="button" style={{background: 'rgb(47,123,211)', borderColor: 'rgb(52, 58, 64)', borderTopColor: 'rgb(52,', borderRightColor: '58,', borderBottomColor: '64)', borderLeftColor: '58,', color: 'rgb(255,255,255)'}}>UpLOAD PICTURE</button><button className="btn" type="button" style={{marginRight: '0px', marginLeft: '30px', background: 'rgb(47,123,211)', color: 'rgb(255,255,255)'}}>ADD NEW EVENT</button></div>
        </form>
      </section>
      </div>
    )
}
import React, { useState, useEffect } from 'react';
import "../Styles/bootstrap.min.css";
import EventItem from "../Components/EventItem";
import BG from "../Images/bg.jpg";



export default function Events(props){


    return(
        <div className="d-sm-flex d-md-flex d-xl-flex justify-content-evenly justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-xl-center align-items-xl-center" style={{height: '60px', width: '100%'}}>
          <div className="d-flex justify-content-evenly" style={{width: '70%', paddingTop: '6px'}}>
            <h4 style={{color: 'rgb(255,255,255)'}}>Meeting Name</h4>
            <h4 style={{color: 'rgb(255,255,255)'}}>Date</h4>
          </div>
          <div className="justify-content-evenly" style={{width: '30%'}}><button className="btn" type="button" style={{marginRight: '0px', marginLeft: '30px', background: 'rgb(47,123,211)', color: 'rgb(255,255,255)', width: '60px', fontSize: '14px', paddingRight: '5px', paddingLeft: '5px'}}>Edit</button><button className="btn" type="button" style={{marginRight: '0px', marginLeft: '30px', background: 'rgb(47,123,211)', color: 'rgb(255,255,255)', width: '60px', fontSize: '14px', paddingRight: '5px', paddingLeft: '5px'}}>Delete</button></div>
        </div>
    )
}
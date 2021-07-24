import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import "../Styles/bootstrap.min.css";
const axios = require('axios').default;

export default function SubNavBar(props){

    const sendPassResetReq = async () => {
        try {
          console.log("this is token when changing pass: " + localStorage.getItem("token"));
            const res = await axios.post("http://localhost:9000/auth/sendPasswordReset", {},
             {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            alert("Email with password reset link sent!");
        } catch (err) {
            alert("Cannot sent password reset email!");
        }
    }

    const isCurrentActivePage = (page) => {
        console.log(" current page is " + page);
        if (props.active === page){
          return "rgb(255,255,255)";
        } else {
          return "rgb(114,168,231)";
        }
  
    }


    const getSubNavBar = () => {
        if (props.isManager && props.isLoggedIn){
          return (
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link to="/addEvent" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/addEvent")}}>Add Event</a></Link></li>
              <li className="nav-item"><Link to="/meetings" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/meetings")}}>Meetings</a></Link></li>
              <li className="nav-item"><Link to="/members" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/members")}}>Members</a></Link></li>
              <li className="nav-item"><Link to="/mailing" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/mailing")}}>Mailing</a></Link></li>
              <li className="nav-item" onClick={() => sendPassResetReq()} style={{textDecorationLine: "none"}}><a href="#" className="nav-link"  style={{color: isCurrentActivePage("/account")}}>Change Password</a></li>
              </ul>
          )
        } else if ( props.isLoggedIn) {
          return (
            <ul className="navbar-nav mx-auto">
             
              <li className="nav-item"><Link to="/meetings" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/meetings")}}>Meetings</a></Link></li>
              <li className="nav-item" onClick={() => sendPassResetReq()} style={{textDecorationLine: "none"}}><a className="nav-link" href="#" style={{color: isCurrentActivePage("/account")}}>Change Password</a></li>
              
              </ul>
          )
        }
      }
    

    return(
        <nav className="navbar navbar-dark navbar-expand fixed-top py-lg-4" id="mainNav" style={{background: 'linear-gradient(90deg, rgba(52,58,64,0.7) 0%, rgb(97,97,97) 50%, rgba(52,58,64,0.7)), rgba(52,58,64,0)', color: 'var(--bs-gray-dark)', marginTop: '85px', height: '34px'}}>
        <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {getSubNavBar()}
          </div>
        </div>
      </nav>
    );
}
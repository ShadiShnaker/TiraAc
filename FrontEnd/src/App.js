import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import "./Styles/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js";

import BG from "./Images/bg.jpg"
import Events from "./Components/Events"
import Home from "./Components/Home"
import LogIn from "./Components/LogIn"
import AddEvents from "./Components/AddEvents"
import Meetings from "./Components/Meetings"
import Members from "./Components/Members"
import Mailing from "./Components/Mailing"
import EventContent from "./Components/EventContent";
import EditMember from "./Components/EditMember";
import EditEvent from "./Components/EditEvent";
import EditMeeting from "./Components/EditMeeting";
const axios = require('axios').default;



function App() {
    const [apiResponse, setApiResponse] = useState("");

    const [activePage, setActivePage] = useState(window.location.pathname);

    const [activeSubPage, setActiveSubPage] = useState(window.location.pathname);

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [isManager, setIsManager] = useState(true);

    const [chosenMeeting, setChosenMeeting] = useState("")


    useEffect(() => {
        console.log(" current state is " + activePage);
        const pathname = window.location.pathname;
        if (pathname === "/addEvent" || pathname === "/meetings" || pathname === "/member" || pathname === "/members" || pathname === "/mailing"){
          setActivePage("/member");
        }
    }, []);

    const isCurrentActivePage = (page) => {
      console.log(" current page is " + page);
      if (activePage === page){
        return "rgb(255,255,255)";
      } else {
        return "rgb(114,168,231)";
      }

    }

    const changeActivePage = (page) => {
      console.log("page is " + page);
      setActivePage(page)
    }

    const isCurrentActiveSubPage = (page) => {
      console.log(" current page is " + page);
      if (activeSubPage === page){
        return "rgb(255,255,255)";
      } else {
        return "rgb(114,168,231)";
      }

    }

    const changeActiveSubPage = (page) => {
      console.log("page is " + page);
      setActiveSubPage(page)
    }

    const submitLogin = async (pass, email) =>{
      try{
      const res = await axios.post('http://localhost:9000/login', { password: pass, email: email });
      }
      catch (error) {

      }
      console.log("pass is " + pass + "email is " + email);

    }

    const changeAllActivePages = (main, sub) => {
      changeActivePage(main);
      changeActiveSubPage(sub);
    }

    const getLoggedInNavBar = () => {
      const pathname = window.location.pathname;
      if (isLoggedIn && isManager && (pathname === "/addEvent" || pathname === "/meetings" || pathname === "/member" || pathname === "/members" || pathname === "/mailing")){
        return(
          <nav className="navbar navbar-dark navbar-expand fixed-top py-lg-4" id="mainNav" style={{background: 'linear-gradient(90deg, rgba(52,58,64,0.7) 0%, rgb(97,97,97) 50%, rgba(52,58,64,0.7)), rgba(52,58,64,0)', color: 'var(--bs-gray-dark)', marginTop: '85px', height: '34px'}}>
        <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link to="/addEvent" onClick={() => changeActiveSubPage("/addEvent")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActiveSubPage("/addEvent")}}>Add Event</a></Link></li>
            <li className="nav-item"><Link to="/meetings" onClick={() => changeActiveSubPage("/meetings")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActiveSubPage("/meetings")}}>Meetings</a></Link></li>
            <li className="nav-item"><Link to="/members" onClick={() => changeActiveSubPage("/members")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActiveSubPage("/members")}}>Members</a></Link></li>
            <li className="nav-item"><Link to="/mailing" onClick={() => changeActiveSubPage("/mailing")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActiveSubPage("/mailing")}}>Mailing</a></Link></li>
            </ul>
          </div>
        </div>
      </nav>
        );
      }
    }

    const getSignInMemberLink = () => {
      if (isLoggedIn && isManager){
        return(
          <li className="nav-item"><Link to="/member" onClick={() => changeAllActivePages("/member", "/meetings")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/member")}}>Member Page</a></Link></li>
        );
      }
      else if (isLoggedIn){
        return (
          <li className="nav-item"><Link to="/meetings" onClick={() => changeActivePage("/meetings")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/meetings")}}>Meetings</a></Link></li>
        );
      }
    }

    const logout = () => {
      setIsLoggedIn(false);
      changeActivePage("/login");
    }

    return (
     
      <body style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+') top / cover', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", height: "100%", borderStyle: "none", paddingTop: "120px"}}>
        <BrowserRouter>
        {getLoggedInNavBar()}
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top py-lg-4" id="mainNav" style={{background: 'linear-gradient(90deg, rgba(52,58,64,0.2) 0%, var(--bs-gray-dark) 50%, rgba(52,58,64,0.2)), rgba(52,58,64,0)', color: 'var(--bs-gray-dark)'}}>
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#" style={{color: 'rgb(47,123,211)'}}>Tira Academics</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link to="/index" onClick={() => changeActivePage("/index")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/index")}}>Home</a></Link></li>
                <li className="nav-item"><Link to="/events" onClick={() => changeActivePage("/events")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/events")}}>Events</a></Link></li>
                <li className="nav-item"><Link to="about.html" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: 'rgb(114,168,231)'}}>Archive</a></Link></li>
                <li className="nav-item"><Link to="#" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: 'rgb(114,168,231)'}}>About us</a></Link></li>
                {getSignInMemberLink()}
                {isLoggedIn ? <li className="nav-item"><Link to="/login" onClick={() => logout()}  style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/login")}}>log out</a></Link></li> : <li className="nav-item"><Link to="/login" onClick={() => changeActivePage("/login")}  style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/login")}}>member login</a></Link></li>}
                {/* <li className="nav-item"><Link to="/login" onClick={() => changeActivePage("/login")}  style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/login")}}>member login</a></Link></li> */}
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
        <Route path="/index">
            <Home/>
          </Route>
          <Route path="/events">
            <Events/>
          </Route>
          <Route path="/member">
            <Redirect to="/meetings"/>
          </Route>
          <Route path="/addEvent">
            <AddEvents/>
          </Route>
          <Route path="/editEvent">
            <EditEvent/>
          </Route>
          <Route path="/meetings">
            <Meetings/>
          </Route>
          <Route path="/editMeeting">
            <EditMeeting/>
          </Route>
          <Route path="/members">
            <Members/>
          </Route>
          <Route path="/editMember">
            <EditMember/>
          </Route>
          <Route path="/mailing">
            <Mailing/>
          </Route>
          <Route path="/login">
            <LogIn submitLogIn={submitLogin}/>
          </Route>
          <Route path="/eventContent">
            <EventContent/>
          </Route>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
        </Switch>
        </BrowserRouter>
      </body> 
    );
}

export default App;

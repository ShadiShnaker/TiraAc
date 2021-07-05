import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import "./Styles/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js";

import BG from "./Images/bg.jpg"
import Events from "./Components/Events"
import Home from "./Components/Home"
import LogIn from "./Components/LogIn"
const axios = require('axios').default;



function App() {
    const [apiResponse, setApiResponse] = useState("");

    const [activePage, setActivePage] = useState(window.location.pathname);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => setApiResponse(res))
            .catch((err) => err);
    };

    useEffect(() => {
        callAPI();
        console.log(" current state is " + activePage);
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

    const submitLogin = async (pass, email) =>{
      try{
      const res = await axios.post('http://localhost:9000/login', { password: pass, email: email });
      }
      catch (error) {

      }
      console.log("pass is " + pass + "email is " + email);

    }

    const getHeight = (page) => {
      if (page === "/events")
        return "none";
      else
        return "100%";
    }

    return (
     
      <body style={{height: "100%"}}>
        <BrowserRouter>
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top py-lg-4" id="mainNav" style={{background: 'linear-gradient(90deg, rgba(52,58,64,0.2) 0%, var(--bs-gray-dark) 50%, rgba(52,58,64,0.2)), rgba(52,58,64,0)', color: 'var(--bs-gray-dark)'}}>
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#" style={{color: 'rgb(47,123,211)'}}>Tira Academics</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><Link to="/index" onClick={() => changeActivePage("/index")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/index")}}>Home</a></Link></li>
                <li className="nav-item"><Link to="/events" onClick={() => changeActivePage("/events")} style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/events")}}>Events</a></Link></li>
                <li className="nav-item"><Link to="about.html" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: 'rgb(114,168,231)'}}>Archive</a></Link></li>
                <li className="nav-item"><Link to="#" style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: 'rgb(114,168,231)'}}>About us</a></Link></li>
                <li className="nav-item"><Link to="/login" onClick={() => changeActivePage("/login")}  style={{textDecorationLine: "none"}}><a className="nav-link"  style={{color: isCurrentActivePage("/login")}}>member login</a></Link></li>
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
          <Route path="/login">
            <LogIn submitLogIn={submitLogin}/>
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

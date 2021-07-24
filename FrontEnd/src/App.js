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
import ResetPass from "./Components/ResetPass";
const axios = require('axios').default;


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isManager, setIsManager] = useState(false);


    useEffect(() => {
      async function fetchPermission(){
        try {
          const res = await axios.get("http://localhost:9000/auth/permission", {
                params: { },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            const permission = res.data;
            console.log("my permission: " + permission)
            if (permission === "manager"){
              setIsManager(true);
            } else {
              setIsManager(false);
            }
        } catch (err) { alert("Could not get permission!")}
      }

      console.log("this is token: " + localStorage.getItem("token"))

      if(localStorage.getItem("token") !== null){
        setIsLoggedIn(true)
        fetchPermission();
      } else {
        setIsLoggedIn(false);
      }
    }, []);


    const submitLogin = async (pass, email) =>{
      try{
        const res = await axios.post('http://localhost:9000/auth/logIn', { password: pass, email: email });
        localStorage.setItem( 'token', res.data.token);
        setIsLoggedIn(true);
        window.location.replace("/index")
      }
      catch (err) {
        alert("Email or password are wrong!");
        // if (err.response.data){
        //   alert(err.response.data);
        // } else {
        //   alert("Failed log in!");
        // }
      }

    }

    const managerContent = (component) => {
      if (isLoggedIn && isManager){
        return component;
      } else {
        return (<div></div>);
      }
    }

    const allMemberContent = (component) => {
      if (isLoggedIn){
        return component;
      } else {
        return (<div></div>);
      }
    }

    return (
     
      <body style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+') top / cover', backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", height: "100%", borderStyle: "none", paddingTop: "120px"}}>
        <BrowserRouter>
        <Switch>
        <Route path="/index">
            <Home
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
          </Route>
          <Route path="/events">
            <Events
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
          </Route>
          <Route path="/member">
            <Redirect to="/meetings"/>
          </Route>
          <Route path="/addEvent">
            {managerContent(
            <AddEvents
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
            
          </Route>
          <Route path="/editEvent">
          {managerContent(
            <EditEvent
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/meetings">
            {allMemberContent(
            <Meetings
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/editMeeting">
            {managerContent(
            <EditMeeting
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/members">
            {managerContent(
            <Members
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/editMember">
            {managerContent(
            <EditMember
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/mailing">
            {managerContent(
            <Mailing
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
            )}
          </Route>
          <Route path="/login">
            <LogIn
              submitLogIn={submitLogin}
              isLoggedIn={isLoggedIn}
              isManager={isManager}
             />
          </Route>
          <Route path="/eventContent">
            <EventContent
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
          <Route path="/resetPassword">
            <ResetPass
            isLoggedIn={isLoggedIn}
            isManager={isManager}
            />
          </Route>
        </Switch>
        </BrowserRouter>
      </body> 
    );
}

export default App;

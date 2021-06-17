import React, { useState, useEffect } from "react";
import "./Components/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.js";
import IMG from "./Images/IMG1.jpg";
import BG from "./Images/bg.jpg"



function App() {
    const [apiResponse, setApiResponse] = useState("");

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => setApiResponse(res))
            .catch((err) => err);
    };

    useEffect(() => {
        callAPI();
    }, []);

    return (
      <body style={{background: 'linear-gradient(rgba(48,48,48,0.65), rgba(48,48,48,0.65)), url('+BG+')', height: "100%", borderStyle: "none"}}>
        <h1 className="text-center text-white d-none d-lg-block site-heading" style={{marginTop: '0px', paddingTop: '80px'}}><span className="site-heading-upper mb-3" style={{color: 'rgb(47,123,211)', marginTop: '0px'}}>Welcome to&nbsp;</span><span className="site-heading-lower">Tira academics</span></h1>
        <nav className="navbar navbar-dark navbar-expand-lg py-lg-4" id="mainNav" style={{background: 'var(--bs-gray-dark)'}}>
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#" style={{color: 'rgb(47,123,211)'}}>Tira Academics</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="index.html" style={{color: 'rgb(114,168,231)'}}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(114,168,231)'}}>Events</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html" style={{color: 'rgb(114,168,231)'}}>Archive</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(114,168,231)'}}>About us</a></li>
                <li className="nav-item"><a className="nav-link" href="#" style={{color: 'rgb(114,168,231)'}}>member login</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="page-section clearfix">
          <div className="container">
            <div className="intro"><img className="img-fluid intro-img mb-3 mb-lg-0 rounded" src={IMG} />
              <div className="text-center intro-text p-5 rounded bg-faded">
                <h2 className="section-heading mb-4"><span className="section-heading-upper">Welcome to</span><span className="section-heading-lower">Tira<br />Academics</span></h2>
                <p className="mb-3">description about our organization...<br /><br /><br /><br /><br /></p>
                <div className="mx-auto intro-button"><a className="btn btn-primary d-inline-block mx-auto btn-xl" role="button" href="#" style={{background: 'rgb(47,123,211)', borderStyle: 'none', borderColor: 'rgba(13,110,253,0)'}}>View upcoming events!</a></div>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center footer text-faded py-5" style={{background: 'rgba(47,123,211,0.62)'}}>
          <div className="container">
            <p className="m-0 small">Copyright&nbsp;©&nbsp;Tira Academics 2021</p>
          </div>
        </footer>
      </body>
    );
}

export default App;

import React, { Component } from "react";

// importing stylesheet
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse dual-nav order-1 order-md-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projectSection">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="navbar-collapse collapse dual-nav order-2 order-md-1 justify-content-end">
          <ul className="navbar-nav border border-danger">
            <li className="nav-item">
              <a className="nav-link" href="#!">Center Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Center Link</a>
            </li>
          </ul>
        </div> */}

          <a href="/" className="navbar-brand mx-auto order-0 order-md-2 p-2">
            <img src="/images/logo.jpg" style={{ width: "150px" }} alt="Innovarch" />
          </a>

          {/* <div className="navbar-collapse collapse dual-nav order-3 order-md-3">
          <ul className="navbar-nav border border-danger">
            <li className="nav-item">
              <a className="nav-link" href="#!">Center Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Center Link</a>
            </li>
          </ul>
        </div> */}

          <div className="navbar-collapse collapse dual-nav order-4 order-md-4 justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#servicesSection">
                  Expertise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactSection">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";

// importing stylesheet
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light navbar-expand-md bg-light">
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse dual-nav order-1 order-md-0">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projectSection">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* <div class="navbar-collapse collapse dual-nav order-2 order-md-1 justify-content-end">
          <ul class="navbar-nav border border-danger">
            <li class="nav-item">
              <a class="nav-link" href="#!">Center Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Center Link</a>
            </li>
          </ul>
        </div> */}

          <a href="/" class="navbar-brand mx-auto order-0 order-md-2 p-2">
            <img src="/images/logo.jpg" style={{ width: "150px" }} alt="Innovarch" />
          </a>

          {/* <div class="navbar-collapse collapse dual-nav order-3 order-md-3">
          <ul class="navbar-nav border border-danger">
            <li class="nav-item">
              <a class="nav-link" href="#!">Center Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">Center Link</a>
            </li>
          </ul>
        </div> */}

          <div class="navbar-collapse collapse dual-nav order-4 order-md-4 justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  Expertise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
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

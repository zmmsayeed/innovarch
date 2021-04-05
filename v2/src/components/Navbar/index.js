import React, { Component } from 'react';

// importing stylesheet
import './style.css';

export default class Navbar extends Component {

    changeSection = (e) => {
        // console.log(e.target.getAttribute('data-value'))
        this.props.changeNavigation(e.target.getAttribute('data-value'))
    }

    render() {

        let { section } = this.props;

        return (
            <>
                <nav className="navbar fixed-left navbar-expand-lg navbar-dark bg-dark flex-md-column">

                    <a className="navbar-brand d-md-none d-inline" href="#!">
                        <img src="/images/logo.jpg" className="img-fluid pt-md-5 p-0" alt="Innovarch" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                        <ul className="navbar-nav flex-column p-5">

                            <li className="nav-item pb-5 mb-5 d-none d-md-inline">
                                <a className="navbar-brand" href="#!">
                                    <img src="/images/logo.jpg" className="img-fluid pt-md-5 p-0" alt="Innovarch" />
                                </a>
                            </li>
                            <li className={section==="Home" ? "nav-item active" : "nav-item"} onClick={this.changeSection}>
                                <a className="nav-link" href="#!" data-value="Home">Home</a>
                            </li>
                            <li className={section==="Projects" ? "nav-item active" : "nav-item"} onClick={this.changeSection}>
                                <a className="nav-link" href="#!" data-value="Projects">Projects</a>
                            </li>
                            <li className={section==="About Us" ? "nav-item active" : "nav-item"} onClick={this.changeSection}>
                                <a className="nav-link" href="#!" data-value="About Us">About Us</a>
                            </li>
                            <li className={section==="Our Team" ? "nav-item active" : "nav-item"} onClick={this.changeSection}>
                                <a className="nav-link" href="#!" data-value="Our Team">Our Team</a>
                            </li>
                            <li className={section==="Contact" ? "nav-item active" : "nav-item"} onClick={this.changeSection}>
                                <a className="nav-link" href="#!" data-value="Contact">Contact</a>
                            </li>
                            <li className="nav-item mt-4">
                                <a className="nav-link d-inline" href="https://www.facebook.com/innovarcharchitects/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="nav-link d-inline" href="https://kraftivo.in/id/innovarcharchitects">
                                    <i className="fab fa-kickstarter-k"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

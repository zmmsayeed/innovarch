import React, { Component } from 'react';

// importing stylesheet
import './style.css';

class Contact extends Component {
    render() {
        return (
            <div id="contactSection" className="p-5">
                <h5 className="contactMainHeading">Get in touch</h5>
                <div className="sectionHeading" />

                <div className="row text-center mb-5">
                    <div className="col-12 col-md-8 offset-md-2">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-8 col-12 col-sm-12 offset-md-2">
                        <div className="row">
                            <div className="col-md-4 col-12 col-sm-12 contactInfo">
                                <i class="fas fa-phone"></i>
                                <p className="mb-0">+91 955 721 9081</p>
                                <p>+91 741 171 7272</p>
                            </div>
                            <div className="col-md-4 col-12 col-sm-12 contactInfo">
                                <i class="fas fa-map-marker-alt"></i>
                                <p>47, St Marks Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001, India</p>
                            </div>
                            <div className="col-md-4 col-12 col-sm-12 contactInfo">
                                <i class="fas fa-envelope"></i>
                                <p className="mb-0">info@innovarch.com</p>
                                <p>contact@innovarch.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

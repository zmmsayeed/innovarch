import React, { Component } from 'react';

// importing stylesheet 
import './style.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="heading-box">
                    <h1 className="about-secton-heading">About</h1>
                </div>
                <div className="about-overlay">
                    <div id="aboutSection">
                        <h2 className="font-weight-bold">About the Firm</h2>
                        <div className="sectionHeading" />
                        <p>
                            Innovarch architects is an architectural, interior design, planning, and urban design firm established in 2001,we are committed to design excellence, social responsibility, and sustainability. Our diverse portfolio of projects includes work of all types and scales are based on our core commitment to enriching the built environment by creating projects with social, environmental, and aesthetic integrity. 
                        </p>

                        <p>
                            Innovarch employs an interactive, collaborative design process by implementing effective leadership and open communication. This approach establishes a working environment of trust that enables clients to make fully informed decisions during the design process, reach consensus, and move forward to the successful completion of the project. We are committed to our core value of design excellence. The goal always is the creation of credible and intelligent design, which is driven by strong ideas.

                        </p>

                        <h3 className="mt-5 font-weight-bold">Design Principles</h3>
                        <div className="sectionHeading" />

                        <p>
                            The space that we design within and outside the built environment will bind to have a significant influence on the end user, human values, environment, historical and cultural aspect of the region. The space designed should respond to the place, purpose, time, human aspirations and culture of the region.
                        </p>

                        <p>
                            Our constant efforts while designing these spaces and building is to evoke human senses in a delightful way and create a dynamic relationship between the natural and built environment and make building grow in time naturally into being a form and history of their place in a meaningful way while addressing the present concerns of the world and in anticipation of the future, architecture or built environment should be dealt with innovative solutions in an intelligent way and address the issue of sustainability right from design process to construction to life span of the building to energy conservation to reusability of the building material.
                        </p>

                        <p>We look forward to build the building that stands the test of time.</p>

                        <h3 className="mt-5 font-weight-bold">People</h3>
                        <div className="sectionHeading" />


                        <h5>Principal Architects:</h5>

                        <p>
                            Madhu D.E  &   Chandra shekar H.V the co-founders and principal architects of the firm started with the philosophy that architecture must respect the context, utility, program and sustainability while enriching the human experience. They obtained the bachelor in architecture from Malnad colled of Engineering, Mysore University, Karnataka, India. Mr. Chandra shekar H.V obtained his professional certification on Environmental Impact Assessment form CEPT, Ahmadabad, India.  
                        </p>

                        <p>
                            They have worked with the wide range of clients, International, government agencies, private and autonomous hospitals, public and private schools, private developers, NGO’s and independent clients. Their portfolio of projects also includes hotels, commercial, institutional buildings and private houses.
                        </p> 


                        <h5 className="mt-4">Principal - Studio Director:</h5>

                        <p>
                            James T Chacko as principal studio director holds the studio management responsibility in addition to this he also holds the key responsibility in coordinating and handling some of the key projects. His decade long years of experience and exposure to architecture in both designs and construction process has made him to play a vital role in decision making during the project process. 
                        </p>

                    </div>
                </div>
            </div>
        
        )
    }
}

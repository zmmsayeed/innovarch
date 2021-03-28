import React, { Component } from 'react';

// importing stylesheet
import './style.css';

class Services extends Component {
    render() {
        return (
            <div id="servicesSection" className="p-5">
                <h5 className="servicesMainHeading">Expertise</h5>
                <div className="sectionHeading" />

                <div className="container pb-5">
                    <div className="row text-center">
                        <div className="col-md-3 col-12 col-sm-6 service">
                            <i class="fas fa-desktop mb-3"></i>
                            <p className="serviceHead">3D Modelling</p>
                            <p>Developing a mathematical representation of any surface.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-6 service">
                            <i class="fas fa-drafting-compass mb-3"></i>
                            <p className="serviceHead">Drafting</p>
                            <p>Drafting, engineering drawing, graphical representations.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-6 service">
                            <i class="fas fa-truck-pickup mb-3"></i>
                            <p className="serviceHead">Construction</p>
                            <p>The science to form objects, systems, and organizations.</p>
                        </div>
                        <div className="col-md-3 col-12 col-sm-6 service">
                            <i class="fas fa-pencil-ruler mb-3"></i>
                            <p className="serviceHead">Design</p>
                            <p>Desinging of specifications for the construction of the system.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
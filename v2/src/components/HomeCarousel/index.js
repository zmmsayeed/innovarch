import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel'

// importing stylesheet 
import './style.css';

export default class HomeCarousel extends Component {
    render() {
        return (
            <div className="homeDiv">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carouselImage"
                            src="/images/Institutions/IIIT-D/featured.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="font-roboto">Indian Institute of Information Technology</h3>
                            <p>
                                PROJECT PROMOTERS:  IIIT, Dharwad <br />
                                SUPER BUILTUP AREA = 123151 SQMT
                            </p>
                            <button className="btn btn-lg btn-secondary mr-2">Contact Us</button>
                            <button className="btn btn-lg btn-primary ml-2">View Project</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carouselImage"
                            src="/images/Hospitality/TempleTreeStudios/featured.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="font-roboto">Temple Tree Studios</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="btn btn-lg btn-secondary mr-2">Contact Us</button>
                            <button className="btn btn-lg btn-primary ml-2">View Project</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid carouselImage"
                            src="/images/Sports Facilities/ContoursGm/featured.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="font-roboto">Contours Gym</h3>
                            <p>CLIENT: Contours; STATUS: Completed; LOCATION: Bangalore</p>
                            <button className="btn btn-lg btn-secondary mr-2">Contact Us</button>
                            <button className="btn btn-lg btn-primary ml-2">View Project</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            // <div id="carouselExampleControls" class="carousel slide carousel-fade " data-interval="3000" data-pause="false" data-bs-ride="carousel">
            //     <div class="carousel-inner">
            //         <div class="carousel-item active">
            //             <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
            //         </div>
            //         <div class="carousel-item">
            //             <img src="https://archinect.imgix.net/uploads/nt/ntolhn3l16uo4yyk.jpeg?fit=crop&auto=compress%2Cformat&w=514" class="d-block w-100" alt="..." />
            //         </div>
            //         <div class="carousel-item">
            //             <img src="/images/Apartments/SuvarnaApartments/1.jpg" class="d-block w-100" alt="..." />
            //         </div>
            //     </div>
            //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span class="visually-hidden">Previous</span>
            //     </button>
            //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            //         <span class="visually-hidden">Next</span>
            //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
            //     </button>
            // </div>
        )
    }
}

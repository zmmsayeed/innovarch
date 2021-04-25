import React, { Component } from 'react';

// importing stylesheet
import './style.css';

export default class Team extends Component {
    render() {
        return (
            <div className="team-container">
                <div className="team-heading-box">
                    <h1 className="team-secton-heading">People</h1>
                </div>
                <div className="team-overlay mt-5">
                    <div className="row mt-5">
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/Chandeashekar.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>Chandra Shekar H.V</h1>
                                    <h4>Principal Architect/Director</h4>
                                    <p>chandru@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/Madhu.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>Madhu D.E</h1>
                                    <h4>Principal Architect/Director</h4>
                                    <p>madhude@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/James.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>James T Chacko</h1>
                                    <h4>Principal Director</h4>
                                    <p>james@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/Nagesh.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>Nagesh H.D</h1>
                                    <h4>Design Director</h4>
                                    <p>nagesh@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/Praveen.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>Praveen Kumar</h1>
                                    <h4>Design Lead</h4>
                                    <p>praveen@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="img-wrap">
                                <img src="/images/People/Muchoori.jpg" className="img-fluid" />
                                <div className="img_description">
                                    <h1>Muchoori Pauline</h1>
                                    <h4>Architect - Projects</h4>
                                    <p>muchoori@innovarch.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

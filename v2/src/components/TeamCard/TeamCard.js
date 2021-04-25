import React, { Component } from 'react';

// importing stylesheet
import './style.css';

export default class TeamCard extends Component {
    render() {

        let { link, image, name, role, status } = this.props;
        console.log("image: ", image)

        return (
            <div class="m-2">
                <a href={link}target="_blank" style={{ textDecoration: "none" }}  >
                <div class="fs-card">
                    <div class="fs-img">
                        <img src={image} className="img-fluid" />
                    </div>
                    
                    <p class="fs-name">{name}</p>
                    <p class="fs-role">{role}</p>

                    <div class="fs-status">{status}</div>
                </div>
                </a>
            </div>
        )
    }
}

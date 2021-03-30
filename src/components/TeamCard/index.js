import React, { Component } from 'react'

export default class TeamCard extends Component {

    render() {

        let { link, image, name, role, status } = this.props;

        return (
            <div class="m-2">
                <a href={link}target="_blank" style={{ textDecoration: "none" }}  >
                <div class="fs-card">
                    <div class="fs-img" style={{backgroundImage: "url(" + image + ")"}}></div>
                    
                    <p class="fs-name">{name}</p>
                    <p class="fs-role">{role}</p>

                    <div class="fs-status">{status}</div>
                </div>
                </a>
            </div>
        )
    }
}

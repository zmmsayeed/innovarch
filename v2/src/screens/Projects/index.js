import React, { Component } from 'react';
import projects from './projects';

import Modal from 'react-bootstrap/Modal'

// importing StyleSheet
import './style.css';

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            project: {}
        }
    }

    showModal = () => this.setState({ modalShow: true })
    handleClose = () => this.setState({ modalShow: false })

    showProject = (id) => {
        

        let categoryShowProject = Object.keys(projects).filter(category => {
            return projects[category].filter(proj => {
                return proj.id === id
            })[0]
        })[0]

        let toShowProject = projects[categoryShowProject].filter(proj => {
            proj['category'] = categoryShowProject
            return proj.id === id
        })[0]
            
            // filter(proj => proj.id === id)[0];
        this.setState({ project: toShowProject }, () => {
            this.showModal()
        })
    }

    render() {

        let imgArray = Object.keys(projects).map(category => {
            let obj = {};
            projects[category].map(project => {
                obj['id'] = project.id;
                obj['image'] = project.details.images[0].url;
                return null
            })

            return obj
        })

        let images = [[], [], []];
        imgArray.map((img, index) => {
            if (index % 3 === 1) images[0].push(img)
            else if (index % 3 === 2) images[1].push(img)
            else if (index % 3 === 0) images[2].push(img)
            return null
        })

        let { project } = this.state;

        return (
            <div className="container-fluid">
                <div className="pic-row">



                    <div className="column">
                        {
                            images[0].map(img => (
                                <div key={img.id} className="imgContainer">
                                    <img alt="project" src={img.image} />
                                    <div className="viewButton" onClick={() => this.showProject(img.id)}>View Project</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="column">
                        {
                            images[1].map(img => (
                                <div key={img.id} className="imgContainer">
                                    <img alt="project" src={img.image} />
                                    <div className="viewButton" onClick={() => this.showProject(img.id)}>View Project</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="column">
                        {
                            images[2].map(img => (
                                <div key={img.id} className="imgContainer">
                                    <img alt="project" src={img.image} />
                                    <div className="viewButton" onClick={() => this.showProject(img.id)}>View Project</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Modal show={this.state.modalShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{project.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
import React, { Component } from 'react';
import projects from './projects';

import Modal from 'react-bootstrap/Modal';

// importing StyleSheet
import './style.css';

export default class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            project: {},
            projectCategory: 'All '
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

                <div className="row">
                    <div className="col-md-5 col-sm-12 col-12">
                        <div className="input-group mb-3 ml-1">
                            <input type="text" className="form-control" placeholder="Search Project" />
                            <button className="btn btn-outline-secondary">
                                {/* <span style={{ color: 'yellow' }}> */}
                                <i className="fas fa-search"></i>
                                {/* </span> */}
                            </button>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-12 col-12 text-md-right text-center">
                        <span className="badge bg-warning active mx-1 my-1">All Projects</span>
                        <span className="badge bg-warning  mx-1 my-1">Apartments</span>
                        <span className="badge bg-warning  mx-1 my-1">Commercial Complex</span>
                        <span className="badge bg-warning  mx-1 my-1">Hospitality</span>
                        <span className="badge bg-warning  mx-1 my-1">Hospitals</span>
                        <span className="badge bg-warning  mx-1 my-1">Industrial Buildings & Warehouses</span>
                        <span className="badge bg-warning  mx-1 my-1">Interiors</span>
                        <span className="badge bg-warning  mx-1 my-1">Sports Facilities</span>
                    </div>
                </div>

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

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
            projectCategory: 'All'
        }
    }

    showModal = () => this.setState({ modalShow: true })
    handleClose = () => this.setState({ modalShow: false })

    showProject = (id) => {

        console.log('Project Id: ',id)


        let categoryShowProject = Object.keys(projects).filter(category => {
            return projects[category].filter(proj => {
                return proj.id === id
            })[0]
        })[0]

        let toShowProject = projects[categoryShowProject].filter(proj => {
            proj['category'] = categoryShowProject
            return proj.id === id
        })[0]

        this.setState({ project: toShowProject }, () => {
            this.showModal()
        })
    }

    changeCategory = (event) => {
        this.setState({ projectCategory: event.target.getAttribute('data-category') })
    }

    render() {

        let { projectCategory } = this.state;
        let { project } = this.state;

        let imgArray = [];
        let allProjects = projectCategory === 'All' ? projects 
                            : { projectCategory: projects[this.state.projectCategory] }

        Object.keys(allProjects).map(category => {
            allProjects[category].map(project => {
                let obj = {};
                obj['id'] = project.id;
                obj['image'] = project.details.images[0].url;
                
                imgArray.push(obj)
                return null
            })
            return null
        })

        let images = [[], [], []];
        imgArray.map((img, index) => {
            if (index % 3 === 1) images[0].push(img)
            else if (index % 3 === 2) images[1].push(img)
            else if (index % 3 === 0) images[2].push(img)
            return null
        })

        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-5 col-sm-12 col-12">
                        <div className="input-group mb-3 ml-1">
                            <input type="text" className="form-control" placeholder="Search Project" />
                            <button className="btn btn-outline-secondary">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-7 col-sm-12 col-12 text-md-right text-center">
                        <span className={ projectCategory === "All" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="All" onClick={this.changeCategory}>All Projects</span>
                        <span className={ projectCategory === "Apartments" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Apartments" onClick={this.changeCategory}>Apartments</span>
                        <span className={ projectCategory === "Commercial Complex" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Commercial Complex" onClick={this.changeCategory}>Commercial Complex</span>
                        <span className={ projectCategory === "Hospitality" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Hospitality" onClick={this.changeCategory}>Hospitality</span>
                        <span className={ projectCategory === "Hospitals" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Hospitals" onClick={this.changeCategory}>Hospitals</span>
                        <span className={ projectCategory === "Industrial Buildings & Warehouses" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Industrial Buildings & Warehouses" onClick={this.changeCategory}>Industrial Buildings & Warehouses</span>
                        <span className={ projectCategory === "Interiors" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Interiors" onClick={this.changeCategory}>Interiors</span>
                        <span className={ projectCategory === "Sports Facilities" ? "badge bg-warning  mx-1 my-1 active" : "badge bg-warning  mx-1 my-1"} 
                            data-category="Sports Facilities" onClick={this.changeCategory}>Sports Facilities</span>
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

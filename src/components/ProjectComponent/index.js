import React, { Component } from "react";
import {Modal} from 'react-bootstrap';

import projects from "./projects";

//importing stylesheet
import "./style.css";

class ProjectComponent extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleClose = () => {
    let { show } = this.state;
    this.setState({ show: !show })
  }
  
  render() {
    let { show }  = this.state;
    let { field } = this.props;
    let allProjects =
      field === "All"
        ? projects
        : projects.filter((proj) => proj.category === field);
    console.log("In the props: ", field);

    return (
      <>
        <div className="row no-gutters">
          {
              allProjects.length 
                  ? allProjects.map((img, index) => {
                      if (index < 6) {
                          return (
                          <div className="col-12 col-sm-6 col-md-4 imgContainer">
                              <img src={img.images.filter((im) => im.featured)[0].url} 
                                  className="img-fluid image" alt={img.name}
                              />
                              <div className="middle">
                              <h5 className="imageName">{img.name}</h5>
                              <p className="imageCategory">{img.category}</p>
                              <a href="#!">View Details</a>
                              </div>
                          </div>
                          );
                      } else return null
                  })
                  : <p className="text-center">No projects for this category</p>
          }
        </div>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ProjectComponent;

import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import projects from "./projects";

//importing stylesheet
import "./style.css";

class ProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    let { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    let { show } = this.state;
    let { field } = this.props;

    let allProjects =
      field === "All"
        ? Object.keys(projects).map(categories => {
          projects[categories]['category'] = categories;
          return projects[categories]
        })
        : Object.keys(projects).filter(cat => cat === field).map(categories => {
          projects[categories]['category'] = categories;
          return projects[categories]
        })

    console.log(allProjects)


    return (
      <>
        <div className="row no-gutters">
          {
              field === 'All'
              ? allProjects.map((proj, index) => {
                if(index < 6) {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 imgContainer mx-auto">
                        <img src={proj[0].details.images[0].url}
                            className="img-fluid image" alt={proj[0].name}
                            style={{ height: '280px' }}
                        />
                        <div className="middle">
                        <h5 className="imageName">{proj[0].name}</h5>
                        <p className="imageCategory">{proj.category}</p>
                        <a href="#!">View Details</a>
                        </div>
                    </div>
                  ) 
                } else return null
              })
              : allProjects.map((proj, index) => {
                return proj.map(eachProj => {
                  if(index < 6) {
                    return (
                      <div className="col-12 col-sm-6 col-md-4 imgContainer mx-auto">
                          <img src={eachProj.details.images[0].url}
                              className="img-fluid image" alt={proj[0].name}
                              style= {{ height: '280px' }}
                          />
                          <div className="middle">
                          <h5 className="imageName">{eachProj.name}</h5>
                          <p className="imageCategory">{proj.category}</p>
                          <a href="#!">View Details</a>
                          </div>
                      </div>
                    ) 
                  } else return null
                })
              })
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

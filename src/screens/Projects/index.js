import React, { Component } from 'react'

// importing components
import ProjectComponent from '../../components/ProjectComponent'

// importing stylesheet
import './style.css';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            field: 'All'
        }
    }

    changeField = (e) => {
        this.setState({ field: e.target.value })
    }

    render() {
        let { field } = this.state;
        return (
            <div id="projectSection">
                <h5 className="projectMainHeading">Projects</h5>
                <div className="sectionHeading" />

                <div className="container text-center categories">
                    <button value="All" className={ field === 'All' ? 'btn active' : 'btn'} onClick={this.changeField}>All</button>
                    <button value="Institutions" className={ field === 'Institutions' ? 'btn active' : 'btn'} onClick={this.changeField}>Institutions</button>
                    <button value="Hospitals" className={ field === 'Hospitals' ? 'btn active' : 'btn'} onClick={this.changeField}>Hospitals</button>
                    <button value="Apartments" className={ field === 'Apartments' ? 'btn active' : 'btn'} onClick={this.changeField}>Apartments</button>
                    <button value="Sports Facilities" className={ field === 'Sports Facilities' ? 'btn active' : 'btn'} onClick={this.changeField}>Sports Facilities</button>
                    <button value="Hospitality" className={ field === 'Hospitality' ? 'btn active' : 'btn'} onClick={this.changeField}>Hospitality</button>
                    <button value="Commercial Complex" className={ field === 'Commercial Complex' ? 'btn active' : 'btn'} onClick={this.changeField}>Commercial Complex</button>
                    <button value="Industrial Buildings & Warehouses" className={ field === 'Industrial Buildings & Warehouses' ? 'btn active' : 'btn'} onClick={this.changeField}>Industrial Buildings & Warehouses</button>
                    <button value="Interiors" className={ field === 'Interiors' ? 'btn active' : 'btn'} onClick={this.changeField}>Interiors</button>
                </div>
                
                <ProjectComponent field={field} />


                <p className="text-center mt-5 mb-5 viewMoreProject">
                    <a href="#!">View More Projects &#8594;</a>
                </p>
            </div>
        )
    }
}

export default Projects;

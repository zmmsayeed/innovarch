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

                <div className="text-center categories">
                    <button value="All" className={ field === 'All' ? 'btn active' : 'btn'} onClick={this.changeField}>All Fields</button>
                    <button value="Design" className={ field === 'Design' ? 'btn active' : 'btn'} onClick={this.changeField}>Design</button>
                    <button value="Construction" className={ field === 'Construction' ? 'btn active' : 'btn'} onClick={this.changeField}>Construction</button>
                    <button value="Interior" className={ field === 'Interior' ? 'btn active' : 'btn'} onClick={this.changeField}>Interior</button>
                    <button value="Model" className={ field === 'Model' ? 'btn active' : 'btn'} onClick={this.changeField}>Model</button>
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

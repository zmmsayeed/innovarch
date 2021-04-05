import React, { Component } from 'react';
import Typer from '../../components/Typer';

// importing stylesheet
import './style.css';

export default class Feature  extends Component {
    render() {
        return (
            <div id="firstSection" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 mt-5 offset-md-1">

                        <Typer
                            heading={'Innovarch'}
                            dataText={["Context ","Utility ","Sustainability ", "Program "]} 
                        />

                            {/* <h2>Innovarch</h2> */}
                            {/* <p className="mt-3">The urge to be relevant, an absence of a monotonous style, and attention to detail in design define our ‘thought parallels’ design ethos</p> */}
                            <p className="mt-3">
                                International, private and autonomous hospitals, Government agencies, public and private schools, private developers, NGO’s and independent clients. 
                            </p>
                            
                            <p className="mt-5 mb-5 viewMoreProject" style={{ fontWeight: '600' }}>
                                <a href="#projectSection">View Projects &#8594;</a>
                            </p>                        
                        </div>
                        <div className="col-md-5 col-12 mt-0 mt-md-5 mb-5 mb-md-0">
                            <img src="/images/mainImage.png" className="img-fluid mt-0 mt-md-5" alt="something" />
                        </div>
                    </div>

                    
                </div>
                
            </div>
        )
    }
}
